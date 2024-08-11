import { useEffect, useRef, useState } from "react";
import WaveForm from "../_widgets/WaveForm/WaveForm"
const VoiceMode = () => {
  const [analyzerData, setAnalyzerData] = useState(null); // State for audio analyzer data
  const audioElmRef = useRef(null); // Reference to the audio element

  const audioAnalyzer = () => {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const analyzer = audioCtx.createAnalyser();
    analyzer.fftSize = 2048;

    const bufferLength = analyzer.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    const source = audioCtx.createMediaElementSource(audioElmRef.current);
    source.connect(analyzer);
    source.connect(audioCtx.destination);
    source.onended = () => {
      source.disconnect();
    };

    setAnalyzerData({ analyzer, bufferLength, dataArray });
  };

  useEffect(() => {
    const fetchAudio = async () => {
      try {
        const response = await fetch('https://5000-idx-toolazytotype-1722793283160.cluster-bec2e4635ng44w7ed22sa22hes.cloudworkstations.dev/', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const audioBlob = await response.blob();
          const audioUrl = URL.createObjectURL(audioBlob);
          audioElmRef.current.src = audioUrl; // Set the audio element source
          audioElmRef.current.play(); // Play the audio
          audioAnalyzer(); // Start analyzing the audio
        } else {
          console.error('Failed to fetch audio');
        }
      } catch (error) {
        console.error('Error fetching audio:', error);
      }
    };

    fetchAudio();
  }, []); // Empty dependency array to run only once on mount

  useEffect(() => {
    if (analyzerData) {
      const updateDataArray = () => {
        const { analyzer, dataArray } = analyzerData;
        analyzer.getByteFrequencyData(dataArray);
        requestAnimationFrame(updateDataArray);
      };
      updateDataArray();
    }
  }, [analyzerData]);

  return (
    <div>
      <h2>Voice Mode</h2>
      {analyzerData && <WaveForm analyzerData={analyzerData} />}
      <audio ref={audioElmRef} />
    </div>
  );
};

export default VoiceMode;