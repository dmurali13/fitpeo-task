import React from 'react';
import { Navbar, Container, Form, Nav, InputGroup } from 'react-bootstrap';
import { FaSearch, FaHome } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';
import { IoSettingsSharp } from 'react-icons/io5';
import { VscBellDot } from 'react-icons/vsc';
import '../components/navbar.css';
import person from "../assets/circle.png"

const MyNavbar = () => {
  return (
    <Navbar expand="md" className="bg-dark p-3">
      <Container fluid className="text-white">
        <Form className="d-flex col-auto">
          <InputGroup className="position-relative">
            <InputGroup.Text className="bg-transparent border-0 position-absolute top-50 start-0 translate-middle-y">
              <FaSearch className="text-white" />
            </InputGroup.Text>
            <Form.Control
              type="search"
              placeholder="Search"
              aria-label="Search"
              className="search-bar bg-white text-dark ps-4"
              style={{ color: 'black' }}
            />
          </InputGroup>
        </Form>

        <Navbar.Toggle aria-controls="navbarScroll" className="ms-auto p-1  bg-white" />
        <Navbar.Collapse id="navbarScroll" className="">
          <Nav className="ms-auto my-2 my-lg-0 gap-4 flex-row p-2   " navbarScroll>
            <Nav.Link href="#home" className="icon-wrapper">
              <MdMail className="icon" />
            </Nav.Link>
            <Nav.Link href="#home" className="icon-wrapper">
              <FaHome className="icon" />
            </Nav.Link>
            <Nav.Link href="#link" className="icon-wrapper">
              <IoSettingsSharp className="icon" />
            </Nav.Link>
            <Nav.Link href="#link" className="icon-wrapper">
              <VscBellDot className="icon" />
            </Nav.Link>
            <Nav.Link href="#link" className="text-white icon-wrapper p-3">
             
              <img src={person} alt="Profile" className="rounded-circle icon-wrapper" style={{ width: '30px', height: '30px' }} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
