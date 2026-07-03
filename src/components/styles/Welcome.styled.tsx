import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;

  @media (max-width: 932px) {
    margin-bottom: 1.5rem;
  }

  div {
    @media (min-width: 1024px) {
      flex-basis: 50%;
    }
  }

  pre {
    font-family: monospace;
    white-space: pre;
  }
`;

export const PreName = styled.pre`
  font-size: 7px;
  margin-top: 0px;
  margin-bottom: 0px;
  padding-top: 12px;
  line-height: 1;

  @media (max-width: 550px) {
    display: none;
  }
`;

export const PreWrapper = styled.div``;

export const PreNameMobile = styled.pre`
  font-size: 7px;
  margin-top: 0px;
  margin-bottom: 0px;
  line-height: 1;

  @media (min-width: 550px) {
    display: none;
  }
`;

export const PreImg = styled.pre`
  @media (max-width: 550px) {
    display: none;
  }
`;

export const Seperator = styled.div`
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
`;

export const Cmd = styled.span`
  color: ${({ theme }) => theme.colors?.primary};
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors?.secondary};
  text-decoration: none;
  line-height: 1.5rem;
  white-space: nowrap;
  border-bottom: 2px dashed ${({ theme }) => theme.colors?.secondary};

  &:hover {
    border-bottom-style: solid;
  }
`;
