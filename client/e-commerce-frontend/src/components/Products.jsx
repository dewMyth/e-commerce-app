import React, { useState, useEffect} from "react";
import styled from "styled-components";

import { popularProducts } from "../data";
import Product from "./Product";

import axios from "axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ category, filters, sort }) => {

  const [products, setProducts] = useState([]);
  const [filteredProdcuts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(category ? `http://localhost:5000/api/products/?=${category}` : "http://localhost:5000/api/products");
        setProducts(response.data);
      } catch (err) {
       alert("Server Error in getting products")
      }
    };
    getProducts();
  }, [category]);
  
  useEffect(() => {
    category && setFilteredProducts(
      products.filter(product => Object.entries(filters).every(([key, value]) => product[key].includes(value)))
    )
  }, [products, category, filters]);
  
  useEffect(() => {
    if ((sort === "newest")) {
      setFilteredProducts((prev) => 
      [...prev].sort((a, b) => b.createdAt - a.createdAt))
    }else if(sort === "asc"){
      setFilteredProducts((prev) => 
      [...prev].sort((a, b) => a.price - b.price))
    } else {
      setFilteredProducts((prev) => 
      [...prev].sort((a, b) => b.price - a.price))
    }
  }, [sort])

  return (
    <Container>
      {category ? filteredProdcuts.map((item) => (
        <Product item={item} key={item.id} />
      )) : products.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
