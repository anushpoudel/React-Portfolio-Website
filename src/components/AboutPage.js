import { motion } from "framer-motion";
import { lazy, Suspense } from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";

import { DarkTheme, mediaQueries } from "./Themes";
import astronaut from "../assets/Images/spaceman.png";
import Loading from "../subComponents/Loading";
//Components
const SocialIcons = lazy(() => import("../subComponents/SocialIcons"));
const PowerButton = lazy(() => import("../subComponents/PowerButton"));
const LogoComponent = lazy(() => import("../subComponents/LogoComponent"));
const ParticlesComponent = lazy(() =>
  import("../subComponents/ParticlesComponent")
);
const BigTitle = lazy(() => import("../subComponents/BigTitle"));

const Box = styled(motion.div)`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const float = keyframes`
0% { transform: translateY(-10px)         }
    50% { transform: translateY(15px) translateX(15px)        }
    100% { transform: translateY(-10px)         }
`;

const SpaceMan = styled(motion.div)`
  position: absolute;
  top: 10%;
  right: 5%;
  animation: ${float} 4s ease infinite;
  width: 20vw;
  img {
    width: 100%;
    height: auto;
  }
`;
const Main = styled(motion.div)`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 55vw;
  height: 65vh;
  z-index: 3;
  line-height: 1.5;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);

  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;

  font-family: "Ubuntu Mono", monospace;
  font-style: italic;

  ${mediaQueries(40)`
          width: 60vw;
          height: 50vh;
          top:50%;
          left:50%;
          transform:translate(-50%,-50%);


  `};
  ${mediaQueries(30)`
          width: 50vw;
          height: auto;
          backdrop-filter: none;
          margin-top:2rem;

  `};

  ${mediaQueries(20)`
          padding: 1rem;
          font-size: calc(0.5rem + 1vw);
  `};
`;
const AboutPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Suspense fallback={<Loading />}>
        <Box
          key="skills"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <LogoComponent theme="dark" />
          <PowerButton />
          <SocialIcons theme="dark" />
          <ParticlesComponent theme="dark" />

          <SpaceMan
            initial={{ right: "-20%", top: "100%" }}
            animate={{
              right: "5%",
              top: "10%",
              transition: { duration: 2, delay: 0.5 },
            }}
          >
            <img src={astronaut} alt="spaceman" />
          </SpaceMan>
          <Main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1, delay: 1 } }}
          >
            I'm an Application developer located in Melbourne,
            Victoria. I'm 6x Salesforce certified currently working
            with IBM, building custom scalable CRM solutions for large vendors.
            I'm also very passionate about Web design and development and have
            strong critical thinking and programming skills.
            <br />
            <br />
            Certifications:
            <br />
            <ul>
              <li>Salesforce Certified Platform Developer 1</li>
              <li>Salesforce Certified JavaScript Developer 1</li>
              <li>Salesforce Certified OmniStudio Consultant</li>
              <li>Salesforce Certified OmniStudio Developer</li>
              <li>Salesforce Certified Administrator</li>
              <li>Salesforce Certified Associate</li>
            </ul>
            <br />
            If you're interested to know more about me and my work, you can
            contact me using my social links.&nbsp;
            <a
              style={{ color: "white" }}
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/u/1/uc?id=10x5G55fbp7i9KIFoqGkf-WmU-Z4gUFvA&export=download"
            >
              Download my resume
            </a>
          </Main>

          <BigTitle text="ABOUT" top="10%" left="5%" />
        </Box>
      </Suspense>
    </ThemeProvider>
  );
};

export default AboutPage;
