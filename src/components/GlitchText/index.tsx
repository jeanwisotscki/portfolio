import React from "react";

import { TextGlitch } from "./styles";

interface IGlitchTextProps {
  text: string;
}

export const GlitchText = ({ text }: IGlitchTextProps) => {
  return <TextGlitch data-glitch={text}>{text}</TextGlitch>;
};
