import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4", "5"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        “Talk is cheap. Show me the code”? I got you. <br />
        Here are some of my projects you shouldn't misss
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "Rexpro-AI",
    desc: "AI-powered platform automating complex workflows and decision-making pipelines for enterprise operations.",
    url: "https://rexpro-ai.example.com/",
  },
  {
    id: 2,
    title: "OmniBookLM",
    desc: "Cross-platform knowledge base that unifies documents, notes, and AI-assisted retrieval in one workspace.",
    url: "https://omnibooklm.example.com/",
  },
  {
    id: 3,
    title: "OmniChat",
    desc: "Unified conversational interface integrating multiple communication channels and AI-assisted response orchestration.",
    url: "https://omnichat.example.com/",
  },
  {
    id: 4,
    title: "OmniSearch",
    desc: "Scalable semantic search engine with natural language understanding and multi-source indexing.",
    url: "https://omnisearch.example.com/",
  },
  {
    id: 5,
    title: "ERP-One",
    desc: "End-to-end enterprise resource planning system unifying finance, inventory, HR, and operations in a single platform.",
    url: "https://erp-one.example.com/",
  },
];

export default Projects;
