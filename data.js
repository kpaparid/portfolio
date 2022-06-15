import { nanoid } from "nanoid";

export const projects = [
  {
    id: nanoid(5),
    link: "https://github.com/kpaparid/canteen-frontend",
    title: "Canteen",
    subtitle: "Next, Redux, Express, Socket.IO",
    imgs: ["/canteen.gif"],
    description: [
      "Canteen is a fullstack online food ordering platform. It consists of two pages.",
      <ul className="pt-2">
        <li className="pb-2 fw-bold">
          A menu page used by merchants to create and edit their menu and by
          customers where they can place their orders.
        </li>
        <li className="pb-2 fw-bold">
          An order tracking page, where merchants track and update the status of
          the active orders.
        </li>
      </ul>,
    ],
  },
  {
    id: nanoid(5),
    link: "https://github.com/kpaparid/beton-transporter-frontend",
    title: "Beton Transporter",
    subtitle: "React, Redux, Spring Boot, STOMP",
    imgs: ["/beton-transporter.gif"],
    description: [
      "Beton Transporter is a full stack web platform used by concrete companies to collect and manage data from their drivers. It also offers a vacation planner and a messenger.",
    ],
  },
  {
    id: nanoid(5),
    link: "https://github.com/kpaparid/papflix",
    title: "Papflix",
    subtitle: "Python, Qt",
    imgs: ["/papflix.gif"],
    description: [
      "Papflix is a movie organizer software made in Python. Provides automatic integration of the films, as well as additional information about them (eg poster, cast, rating, etc.). The correct matching of the films in relation to the file name of each film is achieved through two similarity algorithms.",
    ],
  },
  {
    id: nanoid(5),
    link: "https://github.com/kpaparid/card-school",
    title: "CardSchool",
    subtitle: "Java, Android",
    imgs: ["/cardschool.gif"],
    description: [
      "CardSchool is a german learning android application made in Java and Android Studio.",
      <div className="pt-2">The main activities are: </div>,
      <ul>
        <li className="pb-2 fw-bold">
          Flashcards (memory challenge, autoplay text-to-speech mode included).
        </li>
        <li className="pb-2 fw-bold">Article (find the right article).</li>
        <li className="pb-2 fw-bold">Quiz (find the correct translation).</li>
      </ul>,
      "Apart from the three activities, it provides the user with an import feature to integrate single and multiple words, or even edit them on the go. The imported words will be translated automatically. If the user has doubts about the translation, they can always navigate to the word's Wiktionary link via an embedded browser.",
    ],
  },
];
export const links = {
  linkedin: "https://www.linkedin.com/in/konstantinos-paparidis-6111541a6/",
  github: "https://github.com/kpaparid",
  mail: "kpaparid@gmail.com",
  mailTo: "mailto:kpaparid@gmail.com",
};
