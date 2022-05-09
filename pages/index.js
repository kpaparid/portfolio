import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { debounce, isEqual } from "lodash";
import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import styledComponents from "styled-components";
import AboutMe from "../components/AboutMe";
import Intro from "../components/Intro";
import NavBar from "../components/NavBar";
import PreLoader from "../components/Preloader";
import Project from "../components/Project";
import SideColumns from "../components/SideColumns";
import { projects } from "../data";

export default function Home() {
  const itemsRef = useRef([]);
  const navRef = useRef();
  const ref = useRef();
  const [showLoader, setShowLoader] = useState(true);
  const [y, setY] = useState(0);

  const handleScroll = useCallback(
    (e) => {
      if (y > e.target.scrollTop) {
        navRef.current.classList.add("shown");
        navRef.current.classList.remove("hidden");
        // itemsRef.current[itemsRef.current.length -1 ].scrollIntoView({
        //   behavior: "smooth",
        //   block: "start",
        // });
      } else if (y < e.target.scrollTop) {
        navRef.current.classList.remove("shown");
        navRef.current.classList.add("hidden");
        // itemsRef.current[0].scrollIntoView({
        //   behavior: "smooth",
        //   block: "start",
        // });
      }
      setY(e.target.scrollTop);

      itemsRef.current.forEach((current) => {
        var rect = current.getBoundingClientRect();
        var viewHeight = Math.max(
          document.documentElement.clientHeight,
          window.innerHeight
        );
        const viewable =
          rect.bottom - viewHeight / 2 >= 0 &&
          rect.top + viewHeight / 2 - viewHeight < 0;
        if (viewable) {
          itemsRef.current
            .filter((i) => i !== current)
            .map((i) => {
              i.classList.remove("active");
            });
          current.classList.add("loaded");
          current.classList.add("active");
        }
      });
    },
    [y]
  );
  const debouncedCallback = useMemo(
    () => debounce(handleScroll, 20),
    [handleScroll]
  );

  useEffect(() => {
    const timer1 = setTimeout(() => setShowLoader(false), 3 * 1000);
    return () => {
      clearTimeout(timer1);
    };
  }, []);
  useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, projects.length);
  }, [projects]);

  return (
    <div
      className="h-100"
      style={{ overflow: "auto", zIndex: 900, position: "relative" }}
      ref={ref}
      onScroll={debouncedCallback}
    >
      {showLoader ? (
        <PreLoader />
      ) : (
        <>
          <SideColumns />
          <NavBar ref={navRef} />
          <Intro />
          <AboutMe />
          <ProjectsWrapper>
            {projects?.map((p, index) => (
              <Project
                key={p.id}
                {...p}
                index={index + 1}
                ref={(el) => (itemsRef.current[index] = el)}
              />
            ))}
          </ProjectsWrapper>
        </>
      )}
    </div>
  );
}
const ProjectsWrapper = styledComponents.div`
height: 100%;
width: 100%;
display: flex;
// justify-content: center;
flex-direction: column;
align-items:center;
.left-side{
  padding: 0 4rem 0 0;
}
section{
  width: 80% !important;
  max-width: 1000px;
}
section:nth-child(2n){
  .left-side{
    order:2;
    padding: 0 0 0 4rem;
    div{
      justify-content:flex-end;
      align-items: end;
      display: flex;
      flex-direction: column;
      text-align: end;
    }
  }
}
@media (max-width: 768px){
  section{
  max-width: 100%;
    padding: 3rem 0 !important;
  }
  section div:first-child{
    flex-direction: column;
    .left-side{
      width: 100%;
      padding: 3rem 0;
      order: 0 !important;
      div{
        justify-content:flex-start;
        align-items: start;
        display: flex;
        flex-direction: column;
        text-align: start;
        padding: 0 !important;
    }
    }
  }
}  
}`;
