import QuizApi from "../../../static/images/projects/quiz-api.png";
import IdentityApp from "../../../static/images/projects/identity-app.png";

const backendProjects = [
  {
    image: QuizApi,
    name: " QUIZ API",
    detail:
      "This project provides features that make it possible to efficiently manage takers, quizzes, topics, questions, taker's answers, and quiz results in a quiz system.",
    link: "https://github.com/TpenXsinoy/quiz-api",
    buttonText: "Checkout Repo",
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
    image: IdentityApp,
    name: "Identity App With CI/CD",
    detail:
      "The IdentityApp is a web application that enables other applications to retrieve the identity of a user based on their name",
    link: "https://fourda-pasar-identityapp.azurewebsites.net/swagger/index.html",
    buttonText: "Checkout Website",
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
];

export default backendProjects;
