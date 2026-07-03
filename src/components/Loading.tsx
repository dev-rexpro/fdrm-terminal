import { useState, useEffect } from "react";
import { LoadingWrapper, ProgressBar } from "./styles/Loading.styled";

type Props = {
  cmd: string;
};

const Loading: React.FC<Props> = ({ cmd }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 10) + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <LoadingWrapper>
      <ProgressBar>
        <span>Loading {cmd}...</span>
        <span>[</span>
        <span>
          {"█".repeat(Math.min(10, Math.floor(progress / 10)))}
          {"░".repeat(10 - Math.min(10, Math.floor(progress / 10)))}
        </span>
        <span>] {Math.min(progress, 100)}%</span>
      </ProgressBar>
    </LoadingWrapper>
  );
};

export default Loading;