import Xmuse from "../../../static/images/projects/xmuse.png";
import Codechum from "../../../static/images/projects/codechum.png";
import Alivee from "../../../static/images/projects/alivee.png";

const backendProjects = [
  {
    image: Xmuse,
    name: " QUIZ API",
    detail:
      "This project provides features that make it possible to efficiently manage takers, quizzes, topics, questions, taker's answers, and quiz results in a quiz system.",
    link: "https://tpenxsinoy.github.io/xmuse/",
    tools: [
      {
        name: "C#",
        color: "green",
      },
      {
        name: "ASP.NET CORE",
        color: "violet",
      },
      {
        name: "SQL",
        color: "lightOrange",
      },
    ],
  },
  {
    image: Codechum,
    name: "Identity App With CI/CD",
    detail:
      "The IdentityApp is a web application that enables other applications to retrieve the identity of a user based on their name",
    link: null,
    tools: [
      {
        name: "C#",
        color: "green",
      },
      {
        name: "ASP.NET CORE",
        color: "violet",
      },
      {
        name: "Github",
        color: "black",
      },
    ],
  },
  {
    image: Alivee,
    name: "Sample",
    detail:
      "This is project improved my skills on layouting and visualizing the arrangement of the elements in a website",
    link: "https://tpenxsinoy.github.io/alivee/",
    tools: [
      {
        name: "HTML",
        color: "orange",
      },
      {
        name: "CSS",
        color: "blue",
      },
      {
        name: "JAVASCRIPT",
        color: "yellow",
      },
    ],
  },
];

export default backendProjects;
