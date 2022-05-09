import styled from "styled-components";
import { faBars, faK, faLinesLeaning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "./Logo";
import PreLoader from "./Preloader";
import { Button, Dropdown, Modal } from "react-bootstrap";
import { forwardRef, useState } from "react";

const NavBar = forwardRef((_, ref) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <TopBar ref={ref} className="show">
      <Logo />
      <NavWrapper>
        <Nav>About</Nav>
        <Nav>Experience</Nav>
        <Nav>Work</Nav>
        <Nav>Contact</Nav>
      </NavWrapper>
      <NavModalToggle variant="transparent" onClick={handleShow}>
        <FontAwesomeIcon className="text-primary" icon={faBars} />
      </NavModalToggle>
      <NavModal className="hi" show={show} onHide={handleClose}>
        <Nav>About</Nav>
        <Nav>Experience</Nav>
        <Nav>Work</Nav>
        <Nav>Contact</Nav>
      </NavModal>
    </TopBar>
  );
});
export default NavBar;
const TopBar = styled.div`
  transition: all 0.5s ease-out;
  z-index: 1500;
  box-shadow: none;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  color: white;
  flex: 1 1 auto;
  padding: 1rem 3rem;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(9, 11, 39, 0.5);
  backdrop-filter: blur(10px);
  &.shown {
    transform: translateY(0px);
  }
  &.hidden {
    transform: translateY(-94px);
  }
`;
const Nav = styled(Button)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  border: 0;
  opacity: 0;
  background-color: transparent;
  box-shadow: none;
  color: var(--bs-senary);
  border-radius: 0;
  border-bottom: 1px solid transparent;
  &:hover {
    background-color: transparent !important;
    color: var(--bs-primary);
  }
  transition: all ease-in 0.25s;
`;
const NavWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  button {
    &:nth-child(1) {
      animation: slideDown 0.5s linear forwards;
    }
    &:nth-child(2) {
      animation: slideDown 0.5s 0.5s linear forwards;
    }
    &:nth-child(3) {
      animation: slideDown 0.5s 1s linear forwards;
    }
    &:nth-child(4) {
      animation: slideDown 0.5s 1.5s linear forwards;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
const NavModal = styled(Modal)`
  border: 1px solid transparent;
  border-radius: 0.2rem;
  .modal-dialog {
    margin: 0;
    position: fixed !important;
    top: 0 !important;
    left: unset !important;
    right: 0 !important;
    bottom: 0 !important;
    border-radius: 0;
    background-color: var(--bs-secondary);
    transform: unset !important;
    padding: 0.5rem 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .modal-content {
      background-color: transparent;
      box-shadow: none;
      border: 0;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    button {
      font-size: clamp(16px, 6vw, 25px);
      color: var(--bs-senary);
      padding: 0.5rem 0 0.5rem 0;
      margin: 0.5rem 0;
      text-align: center;
      border-bottom: 1px solid transparent;
      &:hover,
      &:active,
      &:focus {
        background-color: transparent;
        border-color: var(--bs-primary);
        color: var(--bs-primary);
      }
    }
  }
  @media (min-width: 768px) {
    display: none;
  }
`;
const NavModalToggle = styled(Button)`
  height: 100%;
  padding: 1 0.5rem !important;
  border: 2px solid transparent;
  &:hover {
    border-color: var(--bs-primary);
  }
  @media (min-width: 768px) {
    display: none;
  }
`;