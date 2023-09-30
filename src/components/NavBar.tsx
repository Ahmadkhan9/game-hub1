import React, { useState } from "react";
import { HStack, Image, Input, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import useGames from "../Hooks/useGames";
interface Search {
  onSearch: (event: string) => void;
}
function NavBar({ onSearch }: Search) {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" />
      <Input
        onChange={(event) => onSearch(event.target.value)}
        variant="filled"
        placeholder="Filled"
      />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
