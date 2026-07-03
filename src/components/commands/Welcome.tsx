import {
  Cmd,
  HeroContainer,
  Link,
  PreName,
  Seperator,
} from "../styles/Welcome.styled";
import { useEffect, useRef, useState } from "react";

type Props = {
  isLatest?: boolean;
};

const TIMER_DELAYS = [80, 150, 220, 300, 520, 850, 1200, 1600, 2100, 2600];
const PROGRESS_STEPS = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const booted = { done: false };

const BootedContent = () => (
  <>
    <div>{"Connection established (SSH/TLS 1.3)"}</div>
    <div>{"Environment ready. Welcome back."}</div>
    <PreName>
      {`███████╗ █████╗ ██████╗ ██╗  ██╗██╗     ██╗   ██╗██████╗     ██████╗  █████╗ ██╗  ██╗███╗   ███╗ █████╗ ███╗   ██╗
██╔════╝██╔══██╗██╔══██╗██║  ██║██║     ██║   ██║██╔══██╗    ██╔══██╗██╔══██╗██║  ██║████╗ ████║██╔══██╗████╗  ██║
█████╗  ███████║██║  ██║███████║██║     ██║   ██║██████╔╝    ██████╔╝███████║███████║██╔████╔██║███████║██╔██╗ ██║
██╔══╝  ██╔══██║██║  ██║██╔══██║██║     ██║   ██║██╔══██╗    ██╔══██╗██╔══██║██╔══██║██║╚██╔╝██║██╔══██║██║╚██╗██║
██║     ██║  ██║██████╔╝██║  ██║███████╗╚██████╔╝██║  ██║    ██║  ██║██║  ██║██║  ██║██║ ╚═╝ ██║██║  ██║██║ ╚████║
╚═╝     ╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝╚══════╝ ╚═════╝ ╚═╝  ▕═╝    ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝                                                                                                                   `}
    </PreName>
    <div>Welcome to my terminal portfolio. (Version 1.3.1)</div>
    <Seperator>----</Seperator>
    <div>
      This project's source code can be found in this project's{" "}
      <Link href="https://github.com/dev-rexpro">
        GitHub repo
      </Link>
      .
    </div>
    <Seperator>----</Seperator>
    <div>
      For a list of available commands, type `<Cmd>help</Cmd>`.
    </div>
  </>
);

const Welcome: React.FC<Props> = ({ isLatest = false }) => {
  const [progress, setProgress] = useState(0);
  const [ready, setReady] = useState(false);
  const shouldBoot = isLatest && !booted.done;
  const mountedRef = useRef(false);

  useEffect(() => {
    if (!shouldBoot) {
      setProgress(100);
      setReady(true);
      return;
    }

    booted.done = true;

    const timers: ReturnType<typeof setTimeout>[] = [];

    for (let i = 0; i < PROGRESS_STEPS.length; i++) {
      timers.push(
        setTimeout(() => {
          if (!mountedRef.current) return;
          setProgress(PROGRESS_STEPS[i]);
        }, TIMER_DELAYS[i])
      );
    }

    timers.push(
      setTimeout(() => {
        if (!mountedRef.current) return;
        setReady(true);
      }, 2600)
    );

    mountedRef.current = true;

    return () => {
      mountedRef.current = false;
      timers.forEach(clearTimeout);
    };
  }, []);

  if (ready) {
    return (
      <HeroContainer data-testid="welcome">
        <div className="info-section">
          <BootedContent />
        </div>
      </HeroContainer>
    );
  }

  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <div>
          <span style={{ color: "#a2d2ff" }}>admin</span>@<span style={{ color: "#cdb4db" }}>rexpro.cloud</span>:{`//home/fadhlur`}$
        </div>
        <div>{"Initializing terminal environment..."}</div>
        <div>{`Loading modules: [${"#".repeat(Math.floor(progress / 10))}${".".repeat(Math.max(0, 10 - Math.floor(progress / 10)))}] ${progress}%`}</div>
        <div>{"Please wait..."}</div>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
