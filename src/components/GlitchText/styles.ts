import styled, { keyframes } from "styled-components";

const Glitch = keyframes`  
  0% {
    transform: translate(0);
  }
  20% {
    transform: translate(-3px, 3px);
  }
  40% {
    transform: translate(-3px, -3px);
  }
  60% {
    transform: translate(3px, 3px);
  }
  80% {
    transform: translate(3px, -3px);
  }
  to {
    transform: translate(0);
  }
`;

export const TextGlitch = styled.strong`
  position: relative;
  display: inline-block;

  z-index: 1;

  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;

  &:before,
  &:after {
    content: attr(data-glitch);
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.8;
  }
  &:after {
    color: ${(props) => props.theme.colors.secondary};
    z-index: -2;
  }
  &:before {
    color: ${(props) => props.theme.colors.primary};
    z-index: -1;
  }

  &:hover:before {
    -webkit-animation: ${Glitch} 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both
      infinite;
    animation: ${Glitch} 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
  }

  &:hover:after {
    animation: ${Glitch} 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both
      infinite;
  }
`;
