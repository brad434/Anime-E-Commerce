import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";

import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

// make sure to reference ID and check backend and make it similar to login !!!!

const Register = ({ setToken, setIsLoggedIn, setId, setAdmin }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();
    const registerObject = { name, email, password };

    try {
      const response = await fetch("http://localhost:3000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(registerObject),
      });
      const data = await response.json();
      console.log("Register data", data);
      localStorage.setItem("token", data.token);
      setId(data.user.id);
      setAdmin(data.user.admin);
      setIsLoggedIn(true);
      console.log("USER?", data.user);
      console.log("USER ID?", data.user.id);
      console.log("ADMIN", data.user.admin);
      console.log("token!", data.token);
      alert("Successfully created an account");
      setName("");
      setEmail("");
      setPassword("");
      navigate("/");
    } catch (error) {
      console.error("There was an issue creating an account");
    }
  };
  return (
    <>
      <Col className="header_title">
        <h1>Register</h1>
      </Col>
      <Form onSubmit={handleRegister} className="formParent">
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control
            type="email"
            placeholder="name@example.com"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
          <Form.Control
            type="text"
            placeholder="John Doe"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingPassword"
          label="Password"
          className="mb-3"
        >
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </FloatingLabel>
        <Button type="submit" variant="dark" className="submitButton">
          Register
        </Button>
      </Form>
    </>
  );
};

export default Register;
