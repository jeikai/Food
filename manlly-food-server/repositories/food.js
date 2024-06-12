import { Food } from "../model/index.js";
import {faker} from '@faker-js/faker'
const getAllFoods = async ({limit, searchString}) => {
  console.log('get all food with search string: ');
  const filter = () => {
    return {$or: [
      {
        foodType: {$regex: `.*${searchString}.*`, $options: 'i' }
      }
    ]}
  }
  let filteredFoods = await Food.aggregate([
    {
      $match: searchString ? filter() : {}
    },
    {
      $limit: limit
    },
  ])

  return filteredFoods
}

const addNewFood = async ({foodName, foodImage, foodDescription, foodPrice}) => {
  try {
    const newFood = await Food.create({foodName, foodImage, foodDescription, foodPrice})
    return newFood 

  }catch(e) {
    throw new Error ('Failed to create')
  }
}

const generateFakeFood = async () =>{
  let fakeFoods = []
  let T = ['Súp', 'Salad', 'Khai vị', 'Món chính', 'Món ăn thêm', 'Cơm & Xôi', 'Rau - Đậu', 'Lẩu', 'Tráng miệng', 'Đồ uống']
  for (let i = 0; i < 100; i++) {
    let fakeFood = {
      foodName: faker.commerce.productName(), 
      foodImage: faker.image.food(1234, 2345, true), 
      foodDescription: faker.commerce.productDescription(), 
      foodPrice: faker.commerce.price(100, 200), 
      foodType: faker.helpers.arrayElement(T),
    }
    fakeFoods.push(fakeFood)
  }
  await Food.insertMany(fakeFoods)
}

export default {
  getAllFoods,
  addNewFood,
  generateFakeFood
}