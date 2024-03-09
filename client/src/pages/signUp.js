import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { handleSignUpAction } from "../redux/Action/userAction";
import { useDispatch, useSelector } from "react-redux";

function SignUp() {
  const dispatch = useDispatch();
  const [Response, setResponse] = useState("");
  // const navigate = useNavigate();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const data = {
    email: Email,
    password: Password,
  };

  console.log(data);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await dispatch(handleSignUpAction(data));
    setResponse(response);
  };

  return (
    <Container className="pt-5 d-flex justify-content-center align-items-center">
      <Form className="">
        <h1 className="text-center py-5 text-warning">Sign-Up</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default SignUp;
