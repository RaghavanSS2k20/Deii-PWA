
import { useCallback, useEffect, useState } from "react";
function drawRoundedRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
    ctx.fill();
  }


 

  const useSize = () => {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
  
    const setSizes = useCallback(() => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }, [setWidth, setHeight]);
  
    useEffect(() => {
      window.addEventListener("resize", setSizes);
      setSizes();
    }, [setSizes]);
  
    return [width, height];
  };
  
  export {useSize, drawRoundedRect}
    