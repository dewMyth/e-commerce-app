import { Add, Remove } from "@material-ui/icons";
import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { publicRequest } from "../requestMethod";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0 1px;
  cursor: pointer;
`;
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;
const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color:white
  cursor:pointer;
  border-radius:10px;

  &:hover{
      background-color:#f8f4f4;
  }
`;

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const [product, setProduct] = useState({});
  const [qty, setQty] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, [id]);

  //CAN BE AVOID THIS PART USING TYPE CHECKER - Ex : - " array?.map "
  // let avialableSizes;
  // if (product.size == null) {
  //   avialableSizes = <></>;
  // } else {
  //   avialableSizes = product.size.map((size) => {
  //     return <FilterSizeOption key={size}>{size}</FilterSizeOption>;
  //   });
  // }

  // let availableColors;
  // if (product.color == null) {
  //   availableColors = <></>;
  // } else {
  //   availableColors = product.color.map((color) => {
  //     return <FilterColor color={color} key={color} />;
  //   });
  // }

  const handleQuantity = (type) => {
    if (type === "add") {
      setQty(qty + 1);
    } else {
      if (qty > 1) {
        setQty(qty - 1);
      }
    }
  };

  const handleCart = () => {
    alert("Worked!");
  };

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImageContainer>
          <Image src={product.image} />
        </ImageContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>LKR {product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color?.map((color) => (
                <FilterColor
                  color={color}
                  key={color}
                  onClick={() => setColor(color)}
                />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((size) => (
                  <FilterSizeOption key={size}>{size}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity("remove")} />
              <Amount>{qty}</Amount>
              <Add onClick={() => handleQuantity("add")} />
            </AmountContainer>
            <Button onClick={handleCart}>Add to Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
