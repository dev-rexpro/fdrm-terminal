import { User, WebsiteName, Wrapper } from "./styles/TerminalInfo.styled";

const TermInfo = () => {
  return (
    <Wrapper>
      <User>visitor</User>@<WebsiteName>console.rexpro.cloud</WebsiteName>:~$
    </Wrapper>
  );
};

export default TermInfo;
