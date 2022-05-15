import { nanoid } from "nanoid";

export const projects = [
  {
    id: nanoid(5),
    title: "Canteen",
    subtitle: "React, Redux, Express",
    imgs: ["/canteen.gif"],
    description: [
      "Canteen is a fullstack online food ordering platform used in businesses where they use a takeout ordering system. It provides the company with a home page for their menu, where customers can then place their orders. The admins can then track the current orders from the admin dashboard and notify them when they are ready.",
    ],
  },
  {
    id: nanoid(5),
    title: "Beton Transporter",
    subtitle: "React, Redux, Spring Boot",
    imgs: ["/beton-transporter.gif"],
    description: [
      "Beton Transporter is a full stack web platform used by concrete companies to collect and manage data from their drivers. It also offers a vacation planner and a messenger.",
    ],
  },
  {
    id: nanoid(5),
    title: "Papflix",
    subtitle: "Python, Qt",
    imgs: ["/papflix.gif"],
    description: [
      "Papflix is ​​a Python software for organizing your movie and TV series collection on PC. The best thing about this movie management software is that it can extract information about all your movies from the internet at once.",
    ],
  },
  {
    id: nanoid(5),
    title: "CardSchool",
    subtitle: "Java, Android",
    imgs: ["/cardschool.gif"],
    description: [
      "CardSchool is a german learning android app. The three practice modes allow the users to challenge and improve their German vocabulary.",
      "The three main modes are:",
      "- Flashcards",
      "- Articles",
      "- Quiz",
    ],
  },
];
export const links = {
  linkedin: "https://www.linkedin.com/in/konstantinos-paparidis-6111541a6/",
  github: "https://github.com/kpaparid",
  mail: "kpaparid@gmail.com",
  mailTo: "mailto:kpaparid@gmail.com",
};
