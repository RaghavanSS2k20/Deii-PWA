import { useRef, useEffect } from "react";
import { drawRoundedRect,useSize } from "./helpers";
import "./styles.css";


function animateBars(analyser, canvas, canvasCtx, dataArray, bufferLength) {
    analyser.getByteFrequencyData(dataArray);
  
    canvasCtx.fillStyle = "#000";
  
    const GAP = 20;
    const barWidth = 90;
    const radius = 10; // Adjust the radius for the rounded corners
    let barHeight;
  
    // Adjust the number of bars based on the canvas width
    const numBars = Math.floor(canvas.width / (barWidth + GAP));
  
    // Calculate total width of all bars and gaps
    const totalWidth = numBars * barWidth + (numBars - 1) * GAP;
  
    // Calculate starting x position to center the bars
    let x = (canvas.width - totalWidth) / 2;
  
    for (let i = 0; i < numBars; i++) {
      barHeight = (dataArray[i] / 255) * (canvas.height - (GAP)) * 0.35;
      const whiteShade = Math.floor((dataArray[i] / 255) * 5);
      const whiteHex = ["#ffffff", "#f2f2f2", "#e6e6e6", "#d9d9d9", "#cccccc"][whiteShade];
  
      canvasCtx.fillStyle = whiteHex;
  
      // Draw the top rounded rectangle
      drawRoundedRect(
        canvasCtx,
        x,
        canvas.height / 2 - GAP / 2 - barHeight,
        barWidth,
        barHeight + GAP * 2,
        radius
      );
  
      // Draw the bottom rounded rectangle
      drawRoundedRect(
        canvasCtx,
        x,
        canvas.height / 2 + GAP / 2,
        barWidth,
        barHeight + GAP * 1,
        radius
      );
  
      // Move x position for the next bar
      x += barWidth + GAP;
    }
}

const WaveForm = ({ analyzerData }) => {
    const canvasRef = useRef(null);
    const { dataArray, analyzer, bufferLength } = analyzerData;
    const [width, height] = useSize();
  
    const draw = (dataArray, analyzer, bufferLength) => {
      const canvas = canvasRef.current;
      if (!canvas || !analyzer) return;
      const canvasCtx = canvas.getContext("2d");
  
      const animate = () => {
        requestAnimationFrame(animate);
        canvas.width = canvas.width; // Clear the canvas
        animateBars(analyzer, canvas, canvasCtx, dataArray, bufferLength);
      };
  
      animate();
    };
  
    useEffect(() => {
      draw(dataArray, analyzer, bufferLength);
    }, [dataArray, analyzer, bufferLength, width, height]);
  
    return (
      <div>
        <canvas
          style={{
            height: "20rem",
            zIndex: "-10",
            border: "2px solid green",
            background:"black"
          }}
          ref={canvasRef}
          width={width}
          height={height}
        />
      </div>
    );
  };
  export default WaveForm;
