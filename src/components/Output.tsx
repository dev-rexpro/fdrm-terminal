import About from "./commands/About";
import Clear from "./commands/Clear";
import Echo from "./commands/Echo";
import Education from "./commands/Education";
import Email from "./commands/Email";
import GeneralOutput from "./commands/GeneralOutput";
import Gui from "./commands/Gui";
import Help from "./commands/Help";
import Welcome from "./commands/Welcome";
import History from "./commands/History";
import Projects from "./commands/Projects";
import Socials from "./commands/Socials";
import Themes from "./commands/Themes";
import { OutputContainer, UsageDiv } from "./styles/Output.styled";
import { termContext } from "./Terminal";
import { useContext, useState, useEffect, useRef } from "react";
import Loading from "./Loading";

type Props = {
  index: number;
  cmd: string;
};

const Output: React.FC<Props> = ({ index, cmd }) => {
  const { arg, loadedCmds } = useContext(termContext);

  const specialCmds = ["projects", "socials", "themes", "echo"];
  const noLoadCmds = ["clear", "welcome", "help", "gui"];

  if (!specialCmds.includes(cmd) && arg.length > 0)
    return <UsageDiv data-testid="usage-output">Usage: {cmd}</UsageDiv>;

  if (noLoadCmds.includes(cmd) || index !== 0) {
    return (
      <OutputContainer data-testid={index === 0 ? "latest-output" : null}>
        {
          {
            about: <About />,
            clear: <Clear />,
            echo: <Echo />,
            education: <Education />,
            email: <Email />,
            gui: <Gui />,
            help: <Help />,
            history: <History />,
            projects: <Projects />,
            pwd: <GeneralOutput>/home/satnaing</GeneralOutput>,
            socials: <Socials />,
            themes: <Themes />,
            welcome: <Welcome />,
            whoami: <GeneralOutput>visitor</GeneralOutput>,
          }[cmd]
        }
      </OutputContainer>
    );
  }

  const [isLoading, setIsLoading] = useState(true);
  const loadedCmdRef = useRef<string | null>(null);

  if (!specialCmds.includes(cmd) && arg.length > 0)
    return <UsageDiv data-testid="usage-output">Usage: {cmd}</UsageDiv>;

  useEffect(() => {
    if (loadedCmds.has(cmd) || loadedCmdRef.current === cmd) {
      setIsLoading(false);
      return;
    }
    loadedCmdRef.current = null;
    const delay = import.meta.env.MODE === "test" ? 0 : 1500;
    const timer = setTimeout(() => {
      setIsLoading(false);
      loadedCmdRef.current = cmd;
      loadedCmds.add(cmd);
    }, delay);
    return () => clearTimeout(timer);
  }, [cmd, loadedCmds]);

  return (
    <OutputContainer data-testid={index === 0 ? "latest-output" : null}>
      {isLoading ? (
        <Loading cmd={cmd} />
      ) : (
        {
          about: <About />,
          clear: <Clear />,
          echo: <Echo />,
          education: <Education />,
          email: <Email />,
          gui: <Gui />,
          help: <Help />,
          history: <History />,
          projects: <Projects />,
          pwd: <GeneralOutput>/home/satnaing</GeneralOutput>,
          socials: <Socials />,
          themes: <Themes />,
          welcome: <Welcome />,
          whoami: <GeneralOutput>visitor</GeneralOutput>,
        }[cmd]
      )}
    </OutputContainer>
  );
};

export default Output;
