import { useEffect, useRef, useState } from "react";
import WaveForm from "../_widgets/WaveForm/WaveForm"
const VoiceMode = () => {
  const [analyzerData, setAnalyzerData] = useState(null); // State for audio analyzer data
  const [isPlaying, setIsPlaying] = useState(false);
  const [AudioUrl, setAudioUrl] = useState()

  const audioElmRef = useRef(null); // Reference to the audio element
  let audioCtx = null
  const audioAnalyzer = () => {
    if (! audioCtx){
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
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
  }
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      audioElmRef.current.pause();
    } else {
      audioElmRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  console.log("AUDIO HERE :",AudioUrl)
  useEffect(() => {
    const fetchAudio = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json(); // Parse the JSON response
          const base64Audio = data.audio_data; // Access the audio_data field
          
          // Convert the base64 string to a Blob
          const binaryData = atob(base64Audio);
          const arrayBuffer = new ArrayBuffer(binaryData.length);
          const uint8Array = new Uint8Array(arrayBuffer);
          
          for (let i = 0; i < binaryData.length; i++) {
            uint8Array[i] = binaryData.charCodeAt(i);
          }
          
          const audioBlob = new Blob([uint8Array], { type: 'audio/mpeg' });
          const audioUrl = URL.createObjectURL(audioBlob);
          
          console.log("Fetched audio URL:", audioUrl); // Log the audio URL
          setAudioUrl(audioUrl); // Set the audio URL state
          // audioElmRef.current.src = audioUrl; // Set the audio element source
          audioAnalyzer(); // Start analyzing the audio
        }else {
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
      <audio src={AudioUrl??""}  ref={audioElmRef} />
      <button onClick={handlePlayPause}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default VoiceMode;