import React from "react";
import { useSpring, animated } from "react-spring";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) => {
  return `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
};

function Card(prop) {
  const [props, set] = useSpring(
    () => ({
      xys: [0, 0, 1],
      config: { mass: 10, tension: 300, friction: 40 },
    }),
    []
  );
  return (
    <animated.div
      className="card"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.to(trans),  position: "relative",
        width: "100%",
        height: 300,
      backgroundImage: `url(${prop.image})`,}}
    />
  );
}

export { Card };
