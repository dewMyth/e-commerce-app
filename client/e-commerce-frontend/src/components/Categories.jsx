import React from "react";
import styled from "styled-components";

import { categories } from "../data";
import CategoryItem from "./CategoryItem";

const Conatiner = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

const Categories = () => {
  return (
    <Conatiner>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Conatiner>
  );
};

export default Categories;
