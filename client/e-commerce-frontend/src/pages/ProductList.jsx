import React, { useState} from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";

const Container = styled.div``;
const Title = styled.div``;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const categoryByParam = location.pathname.split("/")[2]

  const [filters, setFilters] = useState({})
  const [sort, setSort] = useState("newest")

  const handleFilters = (e) => { 
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    })
  }

  const title = categoryByParam.charAt(0).toUpperCase() + categoryByParam.slice(1)

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title style={{ fontSize: '50px', fontWeight: 'bold' }}>{title}</Title>
      <FilterContainer>
        <Filter> 
          <FilterText>Filter Products</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled>
              Color
            </Option>
            <Option>black</Option>
            <Option>white</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>green</Option>
            <Option>yellow</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
            <Option>XXL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products</FilterText>
          <Select onChange={e=>setSort(e.target.value)}>
            <Option value="newest"> 
              Newest
            </Option>
            <Option value="asc">Price (by ascending order)</Option>
            <Option value="desc">Price (by descending order)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products category={categoryByParam} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
