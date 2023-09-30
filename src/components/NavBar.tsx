import React, { useState } from "react";
import {
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import useGames from "../Hooks/useGames";
import { BsSearch } from "react-icons/bs";
interface Search {
  onSearch: (event: string) => void;
}
function NavBar({ onSearch }: Search) {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" />
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          onChange={(event) => onSearch(event.target.value)}
          variant="filled"
          placeholder="search games ..."
        />
      </InputGroup>
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
