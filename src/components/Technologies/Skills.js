import { DiReact } from "react-icons/di";
import { SiFirebase, SiGit, SiAmazonaws, SiHtml5, SiSpring, SiAngular } from "react-icons/si";
import { RiDatabase2Fill, RiPhoneFindFill } from "react-icons/ri";
import { VscAzure } from "react-icons/vsc";

export const Skills = [
  {
    slug: "backend",
    Component: RiDatabase2Fill,
    title: "Backend Skills",
    Description: () => <>I work on Express, Fastify & NestJS using Typescript.</>,
  },
  {
    slug: "react-native",
    Component: DiReact,
    title: "React, React-Native",
    Description: () => <>React-native for make cross-platform mobile development and React for website development. </>,
  },
  {
    slug: "html",
    Component: SiHtml5,
    title: "HTML, CSS, JS",
    Description: () => <>I have used these for website development.</>,
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
    Description: () => <>Base tool for commit and push code.</>,
  },
  {
    slug: "springboot",
    Component: SiSpring,
    title: "Spring Boot",
    Description: () => <>Coding like OOP concept and modern java.</>,
  },
  {
    slug: "angular",
    Component: SiAngular,
    title: "Angular",
    Description: () => <>Another web tool that is just as good as React.</>,
  },
  {
    slug: "azureCloudServices",
    Component: VscAzure,
    title: "Azure cloud",
    Description: () => <>Mainly used are App Service, CosmosDB, FrontDoor, Function App.</>,
  },
  {
    slug: "other",
    Component: RiPhoneFindFill,
    title: "Other",
    Description: () => <>Jest, Detox and Cypress is tool for test.</>,
  },
];
