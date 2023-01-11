import React, { useRef, useEffect } from "react";
import "./App.css";

const Draw = (props) => {
  const canvasRef = useRef(null);

  const draw = (ctx) => {
    ctx.fillStyle = "#ffe100";
    ctx.beginPath();
    ctx.arc(50, 100, 5, 0, 2 * Math.PI);
    ctx.fill();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    draw(context);
  }, [draw]);
  console.log("canvasRef", canvasRef);
  return <canvas ref={canvasRef} {...props} className="fullscreen" />;
};

export default Draw;
