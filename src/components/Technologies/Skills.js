import { DiReact } from "react-icons/di";
import { SiFirebase, SiGit, SiAmazonaws, SiHtml5, SiSpring, SiAngular } from "react-icons/si";
import { RiDatabase2Fill, RiPhoneFindFill } from "react-icons/ri";

export const Skills = [
  {
    slug: "backend",
    Component: RiDatabase2Fill,
    title: "Backend Skills",
    Description: () => <>I work on Express, Fastify & NestJS using Typescript. Also include sql script and sql view.</>,
  },
  {
    slug: "react-native",
    Component: DiReact,
    title: "React, React-Native",
    Description: () => <>At first working with react-native for cross-platform mobile development and React for website development. </>,
  },
  {
    slug: "html",
    Component: SiHtml5,
    title: "HTML, CSS, JS",
    Description: () => <>I have used these skills for website development.</>,
  },
  {
    slug: "aws",
    Component: SiAmazonaws,
    title: "AWS Services",
    Description: () => <>Almost every project uses the aws cloud like lambda, api gateway, cloudwatch etc.</>,
  },
  {
    slug: "firebase",
    Component: SiFirebase,
    title: "Firebase",
    Description: () => <>I mostly use Firebase for save realtime-chat history and push notification in my apps.</>,
  },
  {
    slug: "git",
    Component: SiGit,
    title: "Git",
    Description: () => <>Git is a tool that I use every day. I use GitHub for pushing my code.</>,
  },
  {
    slug: "springboot",
    Component: SiSpring,
    title: "Spring Boot",
    Description: () => <>Familiar with java since university time.</>,
  },
  {
    slug: "angular",
    Component: SiAngular,
    title: "Angular",
    Description: () => <>I have used Angular for one project.</>,
  },
  {
    slug: "other",
    Component: RiPhoneFindFill,
    title: "Other",
    Description: () => <>Jest, Detox and Cypress is tool for test.</>,
  },
];
