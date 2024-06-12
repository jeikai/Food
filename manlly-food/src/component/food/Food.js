import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCart } from '../../redux/action/AddCart';
import { NavLink } from 'react-router-dom';
import './food.css';
import { Loading } from '../Loading/Loading';

// Mock food data
const mockFoods = [
  {
    foodImage: 'https://asset.cloudinary.com/dvezv6uvw/4cd43527bccacae987032af3bd1ab2b6',
    foodName: 'Food 1',
    foodPrice: '$10',
  },
  {
    foodImage: '../../assets/chicken.png',
    foodName: 'Food 2',
    foodPrice: '$15',
  },
  {
    foodImage: 'https://asset.cloudinary.com/dvezv6uvw/4cd43527bccacae987032af3bd1ab2b6',
    foodName: 'Food 3',
    foodPrice: '$12',
  },
  {
    foodImage: 'https://asset.cloudinary.com/dvezv6uvw/4cd43527bccacae987032af3bd1ab2b6',
    foodName: 'Food 4',
    foodPrice: '$8',
  },
  // Add more mock items as needed
];

const Food = ({ heading, menuFiler }) => {
  const [filter, setFilter] = useState('');
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const handleAddToCart = (food) => {
    const action = addCart(food);
    dispatch(action);
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      // Simulate a filter operation
      if (filter) {
        setProducts(mockFoods.filter(food => food.foodName.includes(filter)));
      } else {
        setProducts(mockFoods);
      }
      setLoading(false);
    }, 1000); // Simulate a loading delay
  }, [filter]);

  const LoadingSkeleton = () => {
    return (
      <div className='food_list'>
        {Array(4).fill().map((_, index) => (
          <div className='food_item' key={index}>
            <div className='food_item-image'>
              <Loading style={{ height: '235px' }} />
            </div>
            <h3 className='food_item-name'>
              <Loading style={{ height: '25px' }} />
            </h3>
            <div className='food_item-price'>
              <Loading style={{ height: '46px' }} />
            </div>
            <Loading style={{ height: '37px' }} />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className='food'>
      <h2 className='food_heading'>{heading}</h2>
      <ul className='food_filter'>
        {menuFiler.map((item, index) => {
          return (
            <li key={index} onClick={() => setFilter(item)}>{item}</li>
          );
        })}
      </ul>
      {loading ? <LoadingSkeleton /> : 
        <div className='food_list'>
          {products.map((food, index) => {
            return (
              <div className='food_item' key={index}>
                <div className='food_item-image'>
                  <img src={food.foodImage} alt='' />
                </div>
                <h3 className='food_item-name'>{food.foodName}</h3>
                <div className='food_item-price'>{food.foodPrice}</div>
                <button className='food_item-add' onClick={() => handleAddToCart(food)}>Đặt ngay <i className="fa-solid fa-bag-shopping"></i></button>
              </div>
            );
          })}
        </div>
      }
      <button className='button_view'><NavLink to='menu'>Xem thêm</NavLink></button>
    </div>
  );
};

export default Food;
