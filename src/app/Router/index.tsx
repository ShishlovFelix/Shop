import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../../components/Header";
import Main from "../../pages/Main";
import Product from "../../pages/Product";
import Support from "../../pages/Support";
import Category from "../../pages/Category";
import MyOrders from "../../pages/MyOrders";
import MyWishList from "../../pages/MyWishList";
import Login from "../../pages/Login";
import Registration from "../../pages/Registration";
import CreateProduct from "../../pages/CreateProduct";

const Router: React.FC = (props) => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="product">
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="category">
          <Route path=":category" element={<Category />} />
        </Route>
        <Route path="support" element={<Support />} />
        <Route path="myOrders" element={<MyOrders />} />
        <Route path="myWishList" element={<MyWishList />} />
        <Route path="login" element={<Login />} />
        <Route path="registration" element={<Registration />} />
        <Route path="createProduct" element={<CreateProduct />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
