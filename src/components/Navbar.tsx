import React from "react";
import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

interface Props {
  onSearch: (search: string) => void;
}

const Navbar = () => {
  return (
    <HStack padding="15px">
      <Link to={'/'}>
        <Image src={logo} boxSize={"60px"}  objectFit={'cover'}/>
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
