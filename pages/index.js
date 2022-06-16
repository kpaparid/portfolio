import { debounce } from "lodash";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import styledComponents from "styled-components";
import AboutMe from "../components/AboutMe";
import Intro from "../components/Intro";
import NavBar from "../components/NavBar";
import { Loader } from "../components/Loader";
import Project from "../components/Project";
import SideColumns from "../components/SideColumns";
import { projects } from "../data";

export default function Home() {
  const itemsRef = useRef([]);
  const navRef = useRef();
  const ref = useRef();
  const [showLoader, setShowLoader] = useState(true);
  const [y, setY] = useState(0);

  const handleNavClick = useCallback((index) => {
    itemsRef.current[index].scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }, []);
  const handleScroll = useCallback(
    (e) => {
      if (y > e.target.scrollTop) {
        navRef.current.classList.add("shown");
        navRef.current.classList.remove("hidden");
      } else if (y < e.target.scrollTop) {
        navRef.current.classList.remove("shown");
        navRef.current.classList.add("hidden");
      }
      setY(e.target.scrollTop);

      itemsRef.current.map((current, index) => {
        var rect = current.getBoundingClientRect();
        var viewHeight = Math.max(
          document.documentElement.clientHeight,
          window.innerHeight
        );
        const viewable =
          rect.bottom - viewHeight / 2 >= 0 &&
          rect.top + viewHeight / 2 - viewHeight < 0;
        if (viewable) {
          itemsRef.current.map((i, iIndex) => {
            i.classList.remove("active");
            if (iIndex <= index) {
              itemsRef.current[iIndex].classList.add("loaded");
            }
          });
          current.classList.add("active");
          if (index === 1) {
            itemsRef.current[2].classList.add("loaded");
            itemsRef.current[2].classList.add("active");
          }
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
    itemsRef.current = itemsRef.current.slice(0, projects.length + 7);
  }, [projects]);

  return (
    <div className="h-100">
      <OverflowWrapper onScroll={handleScroll} ref={ref}>
        {showLoader ? (
          <Loader />
        ) : (
          <MainPage>
            <NavBar ref={navRef} onClick={handleNavClick} />
            <Intro />
            <AboutMe ref={(el) => (itemsRef.current[0] = el)} />
            <Title
              className="section-title"
              ref={(el) => (itemsRef.current[1] = el)}
            >
              Projects
            </Title>
            <ProjectsWrapper>
              {projects?.map((p, index) => (
                <Project
                  key={p.id}
                  {...p}
                  index={index + 1}
                  ref={(el) => (itemsRef.current[index + 2] = el)}
                />
              ))}
            </ProjectsWrapper>
            <SideColumns ref={(el) => (itemsRef.current[7] = el)} />
            <div style={{ height: "45vh" }}></div>
          </MainPage>
        )}
      </OverflowWrapper>
    </div>
  );
}

const OverflowWrapper = styledComponents.div`
  overflow: auto;
  height: 100%;
  &::-webkit-scrollbar-thumb {
    background-color: #ff9921;
    border: 2px solid var(--bs-secondary);
    border-radius: 3px;
  }
  &::-webkit-scrollbar {
    width: 8px;
  }
  scrollbar-color: #ff9921 #ff992100;
  scrollbar-width: thin;
`;

const MainPage = styledComponents.div`

-webkit-scrollbar {
  width: 50px;
}
max-width: 1000px;
width: 80%;
margin: auto;
.section-title{
  font-size: clamp(26px,5vw,36px);
  margin-bottom: 20px;
}
`;
const ProjectsWrapper = styledComponents.div`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
align-items:center;
.left-side{
  padding: 0 4rem 0 0;
  max-width: 60%;
}
section:nth-child(2n){
  .left-side{
    order:2;
    padding: 0 0 0 4rem;
    div{
      justify-content:flex-end;
      // align-items: end;
      display: flex;
      flex-direction: column;
      // text-align: end;
    }
  }
}
@media (max-width: 768px){
  .left-side{
    max-width: 100%;
  }
  .right-side{
    margin: 0 0.25rem !important;
  }
  section div:first-child{
    flex-direction: column;
    .left-side{
      width: 100%;
      padding: 0 0 3rem 0;
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
const Title = styledComponents.h1`

    color: var(--bs-primary);
    font-size: clamp(14px, 5vw, 25px);
    display: flex;
    flex: 1 1 auto;
    justify-content: center;
    align-items: center;    
    transition: clip-path 1.25s ease-out;
    clip-path: polygon(0% 0%,0% 0%,0% 100%,0% 100%);
    &:before{
      content: "";
      border: 1px solid var(--bs-primary);
      flex: 1 1 auto;
      height: 1px;
      margin-right: 0.5rem;
      margin-top: 8px;
    }
  &.loaded{
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
    }
  
  `;
