import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import "./myorder.css";

const MyOrder = () => {
  const navigate = useNavigate();
  const [order, setOrder] = useState([]);
  useEffect(() => {
    const getOrderByUserId = async () => {
      const user = JSON.parse(localStorage.getItem("user"));
      let token;
      if (user) {
        token = user.token;
        console.log(token);
      } else {
        navigate(-1);
      }
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      };
      const { data } = await axios.get(
        process.env.REACT_APP_API_URL + "/orders",
        config
      );
      setOrder(data.data)
    };
    getOrderByUserId();
  }, []);

  return (
    <section className="section margin myorder">
      <div className="wrap">
        <div className="order-left">
          <ul>
            <li>
              <NavLink>
                <i class="fa-solid fa-user"></i> Profile
              </NavLink>
            </li>
            <li>
              <NavLink>
                <i class="fa-solid fa-box"></i> My Order
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="order-right">
          <h2>Order History</h2>
          <div className="list-order">
            <div className="list-top">
              <div className="col-small"></div>
              <div className="col">Delivery Date</div>
              <div className="col">Delivery Pricing</div>
              <div className="col">Delivery Status</div>
              <div className="col">Type ship</div>
            </div>
            <div className="list-bottom">
              {order.map((item, index) => {
                return (
                  <div className="item">
                    <div className="col-small">{index}</div>
                    <div className="col">{item.updatedAt}</div>
                    <div className="col">{item.shippingPrice}</div>
                    <div className="col">{item.shippingMethods}</div>
                    <div className="col"><div className={"status " + item.shippingStatus}>{item.shippingStatus}</div></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyOrder;
