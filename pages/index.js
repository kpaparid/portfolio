import { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import Intro from "../components/Intro";
import NavBar from "../components/NavBar";
import PreLoader from "../components/Preloader";
import Project from "../components/Project";

export default function Home() {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const refs = [ref1, ref2, ref3];
  const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
    const timer1 = setTimeout(() => setShowLoader(false), 3 * 1000);
    return () => {
      clearTimeout(timer1);
    };
  }, []);
  const projects = [
    {
      ref: ref1,
      title: "Papflix",
      subtitle: "Python, Qt",
      imgs: ["papflix1.png", "papflix2.png", "papflix3.png"],
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    },
    {
      ref: ref2,
      title: "Papflix",
      subtitle: "Python, Qt",
      imgs: ["papflix1.png", "papflix2.png", "papflix3.png"],
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    },
  ];
  return (
    <div className="h-100">
      {showLoader ? (
        <PreLoader />
      ) : (
        <>
          <NavBar></NavBar>
          <Intro></Intro>
          {projects?.map((p, index) => (
            <Project {...p} index={index + 1}></Project>
          ))}
        </>
      )}
    </div>
  );
}
