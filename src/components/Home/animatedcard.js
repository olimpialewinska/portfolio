import React from "react";
import { useSpring, animated } from "react-spring";

const calc = (x, y, t) => {
  const rect = t.getBoundingClientRect()
  return [-(y - rect.top - rect.height / 2) / 50, (x - rect.left - rect.width / 2) / 30, 1.08]
}
const trans = (x, y, s) => {
  return `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
};

function Card(prop) {
  const [props, set] = useSpring(
    () => ({
      xys: [0, 0, 1],
      config: { mass: 3, tension: 300, friction: 40 },
    }),
    []
  );
  return (
    <animated.div
      className="home-image"
      onMouseMove={({ clientX: x, clientY: y, currentTarget }) => set({ xys: calc(x, y, currentTarget) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.to(trans),  position: "relative", height: prop.height, borderRadius: prop.borderRadius,
      flex:1,
      backgroundImage: `url(${prop.image})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      }}
    />
  );
}

export { Card };
