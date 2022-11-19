
import SignUpPer from "../../../Components/auth/SignUp/SignUpPer";
import { render, screen } from "@testing-library/react";
import {BrowserRouter as Router} from 'react-router-dom';

describe("Test the PERSONAL SIGNUP Component", () => {

  test("render the PERSONAL SIGNUP heading", () => {
    render(<Router><SignUpPer /></Router>);
    const Element = screen.getByText(/PERSONAL SIGNUP/i);
    expect(Element).toBeInTheDocument();
  })

  test("render the Fast Fueler heading", () => {
    render(<Router><SignUpPer /></Router>);
    const Element = screen.getByText(/Fast Fueler/i);
    expect(Element).toBeInTheDocument();
  })

  test("render the Already have an account link", () => {
    render(<Router><SignUpPer /></Router>);
    const Element = screen.getByText(/Already have an account/i);
    expect(Element).toBeInTheDocument();
  })

  test("render the Copyright footer", () => {
    render(<Router><SignUpPer /></Router>);
    const Element = screen.getByText(/Copyright © 2022 Fast Fueler/i);
    expect(Element).toBeInTheDocument();
  })

  test("render the login form with three button", () => {
    render(<Router><SignUpPer /></Router>);
    const buttonList = screen.getAllByRole("button");
    expect(buttonList).toHaveLength(3);
  })

  test("First Name input should be rendered", () => {
    render(<Router><SignUpPer /></Router>);
    const Element = screen.getByLabelText(/First Name/i);
    expect(Element).toBeInTheDocument();
  });

  test("Last Name input should be rendered", () => {
    render(<Router><SignUpPer /></Router>);
    const Element = screen.getByLabelText(/Last Name/i);
    expect(Element).toBeInTheDocument();
  });

  test("Email input should be rendered", () => {
    render(<Router><SignUpPer /></Router>);
    const Element = screen.getByLabelText(/Email/i);
    expect(Element).toBeInTheDocument();
  });

  test("NIC input should be rendered", () => {
    render(<Router><SignUpPer /></Router>);
    const Element = screen.getByLabelText(/NIC/i);
    expect(Element).toBeInTheDocument();
  });

  test("Address input should be rendered", () => {
    render(<Router><SignUpPer /></Router>);
    const Element = screen.getByLabelText(/Address/i);
    expect(Element).toBeInTheDocument();
  });

  test("Contact Number input should be rendered", () => {
    render(<Router><SignUpPer /></Router>);
    const Element = screen.getByLabelText(/Contact Number/i);
    expect(Element).toBeInTheDocument();
  });

  test("Confirm Password input should be rendered", () => {
    render(<Router><SignUpPer /></Router>);
    const Element = screen.getByLabelText(/Confirm Password/i);
    expect(Element).toBeInTheDocument();
  });

});
