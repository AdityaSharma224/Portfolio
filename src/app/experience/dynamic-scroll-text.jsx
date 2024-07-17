import React, { useState, useEffect } from "react";

const ScrollingText = () => {
  const [scrollDirection, setScrollDirection] = useState("right");
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setScrollDirection("right");
      } else {
        setScrollDirection("left");
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div style={styles.container}>
      <div
        style={{
          ...styles.text,
          animationDirection:
            scrollDirection === "right" ? "normal" : "reverse",
        }}
      >
        <span style={{ color: "#000" }}>
          {"Your scrolling text goes here!"}
        </span>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: "40vh",
    overflow: "hidden",
    position: "relative",
    width:'100%',
    justifyContent:'center',
  },
  text: {
    position: "absolute",
    whiteSpace: "nowrap",
    animation: "scroll 10s linear infinite",
  },
  "@keyframes scroll": {
    "0%": {
      transform: "translateX(100%)",
    },
    "100%": {
      transform: "translateX(-100%)",
    },
  },
};

export default ScrollingText;
