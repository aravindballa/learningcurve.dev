import React from "react";
import { useSpring, animated } from "react-spring";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1
];
const trans = (x, y, s) =>
  `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export default () => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 }
  }));
  return (
    <animated.img
      alt="Learning curve podcast logo"
      className="block mx-auto w-1/2 rounded  shadow-2xl"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      src="https://res.cloudinary.com/djeivq7td/image/upload/q_auto,w_auto,dpr_auto/learning-curve/lc-logo.png"
      style={{ transform: props.xys.interpolate(trans) }}
    />
  );
};

// adapted from https://codesandbox.io/embed/rj998k4vmm
