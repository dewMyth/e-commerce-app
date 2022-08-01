import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";

const Container = styled.div`
  height: 60px;
  margin-bottom: 15px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: -15px;
  margin-left: 10px;
  ${mobile({ padding: "10px 0px", height: "50px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Langugae = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px " })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  margin-right: 15px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Langugae>EN</Langugae>
          <SearchContainer>
            <Input />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Shopify</Logo>
        </Center>
        <Right>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign In</MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
