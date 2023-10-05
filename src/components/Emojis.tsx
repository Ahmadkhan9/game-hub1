import { Image, ImageProps } from "@chakra-ui/react";
import meh from "../assets/meh.webp";
import thumbsup from "../assets/thumbs-up.webp";
import bullsEye from "../assets/bulls-eye.webp";
interface Props {
  rating: number;
}
function Emojis({ rating }: Props) {
  if (rating < 3) return null;
  let emojimap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbsup, alt: "thumbsup", boxSize: "25px" },
    5: { src: bullsEye, alt: "bullsEye", boxSize: "35px" },
  };
  return <Image {...emojimap[rating]} marginTop={1} />;
}

export default Emojis;
