import { nanoid } from "nanoid";

export const projects = [
  {
    id: nanoid(5),
    title: "Canteen",
    subtitle: "React, Redux, Express",
    imgs: ["/canteen.gif"],
    description: [
      "Canteen is a fullstack online food ordering platform used in businesses where they use a takeaway ordering system. It provides the business with a frontpage for their menu where the customers can then place their order. The admins can then track the current orders through the admin dashboard.",
    ],
  },
  {
    id: nanoid(5),
    title: "Beton Transporter",
    subtitle: "React, Redux, Spring Boot",
    imgs: ["/beton-transporter.gif"],
    description: [
      "Beton Transporter is a full stack web platform used by concrete companies in order to collect and manage data from their drivers. It also provides a vacations planner and a messenger.",
    ],
  },
  {
    id: nanoid(5),
    title: "Papflix",
    subtitle: "Python, Qt",
    imgs: ["/papflix.gif"],
    description: [
      "Papflix is a python software to organize your movie and TV series collection on PC. The best part of this movie organizer software is that as it can extract information about all your movies from the Internet at once.",
    ],
  },
  {
    id: nanoid(5),
    title: "CardSchool",
    subtitle: "Java, Android",
    // imgs: ["/papflix1.png"],
    description: [
      "CardSchool is a german learning android app. The three practice modes allow the users to challenge and improve their German vocabulary",
      "The three main modes are:",
      "- Flashcard learning",
      "- Article Learning",
      "- Four word quiz",
    ],
  },
];
export const links = {
  linkedin: "https://www.linkedin.com/in/konstantinos-paparidis-6111541a6/",
  github: "https://github.com/kpaparid",
  mail: "kpaparid@gmail.com",
  mailTo: "mailto:kpaparid@gmail.com",
};
