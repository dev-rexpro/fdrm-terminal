import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Fadhlur Rahman</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>a Full Stack Developer &amp; DevOps Engineer</HighlightAlt> based in Bogor, Indonesia.
      </p>
      <p>
        I specialize in designing, building, and scaling end-to-end systems spanning frontend interfaces, backend services, and cloud infrastructure. I focus on automation, reliability, and performance across the entire delivery lifecycle.
      </p>
    </AboutWrapper>
  );
};

export default About;
