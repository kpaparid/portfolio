import { nanoid } from "nanoid";

export const projects = [
  {
    id: nanoid(5),
    title: "Canteen",
    subtitle: "React, Redux, Express",
    imgs: ["/papflix-mash.png"],
    description: [
      "Canteen is a fullstack online food ordering platform used in businesses where they use a takeaway ordering system. It provides the business with a frontpage for their menu and customers can then place their order. The admins can then track the current orders through the admin dashboard.",
    ],
  },
  {
    id: nanoid(5),
    title: "Beton Transporter",
    subtitle: "React, Redux, Spring Boot",
    imgs: ["/papflix-mash.png"],
    description: [
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    ],
  },
  {
    id: nanoid(5),
    title: "Papflix",
    subtitle: "Python, Qt",
    imgs: ["/papflix1.png"],
    description: [
      "Papflix is a python software to organize your movie and TV series collection on PC. The best part of this movie organizer software is that as it can extract information about all your movies from the Internet at once.",
    ],
  },
  {
    id: nanoid(5),
    title: "CardSchool",
    subtitle: "Java, Android",
    imgs: ["/papflix1.png"],
    description: [
      "CardSchool is a german learning android app. The three practice modes allow the users to challenge and improve their German vocabulary",
      "The three main modes are:",
      "-Flashcard learning",
      "-Article Learning",
      "-Four word quiz",
    ],
  },
];
export const links = {
  linkedin: "https://www.linkedin.com/in/konstantinos-paparidis-6111541a6/",
  github: "https://github.com/kpaparid",
  mail: "kpaparid@gmail.com",
  mailTo: "mailto:kpaparid@gmail.com",
};
