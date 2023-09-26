import { IconType } from "react-icons/lib/esm/iconBase";
import {
  FaWindows,
  FaApple,
  FaPlaystation,
  FaLinux,
  FaXbox,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../Hooks/useGames";
import { HStack, Icon, Text } from "@chakra-ui/react";
interface PlatformProps {
  platform: Platform[];
}
function PlatformIconList({ platform }: PlatformProps) {
  const iconMap: { [Key: string]: IconType } = {
    nintendo: SiNintendo,
    linux: FaLinux,
    ios: MdPhoneIphone,
    mac: FaApple,
    pc: FaWindows,
    xbox: FaXbox,
    web: BsGlobe,
    playstation: FaPlaystation,
    android: FaAndroid,
  };
  return (
    <HStack marginY={1}>
      {platform.map((platfm) => (
        <Icon
          key={platfm.slug}
          as={iconMap[platfm.slug]}
          color="gray.500"
        ></Icon>
      ))}
    </HStack>
  );
}

export default PlatformIconList;
