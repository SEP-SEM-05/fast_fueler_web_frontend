
import SignUpOrg from "../../../Components/auth/SignUp/SignUpOrg";
import { render, screen } from "@testing-library/react";
import {BrowserRouter as Router} from 'react-router-dom';

describe("Test the Organization Signup Component", () => {

  test("render the ORGANIZATION SIGNUP heading", () => {
    render(<Router><SignUpOrg /></Router>);
    const Element = screen.getByText(/ORGANIZATION SIGNUP/i);
    expect(Element).toBeInTheDocument();
  })

  test("render the Fast Fueler heading", () => {
    render(<Router><SignUpOrg /></Router>);
    const Element = screen.getByText(/Fast Fueler/i);
    expect(Element).toBeInTheDocument();
  })

  test("render the Already have an account link", () => {
    render(<Router><SignUpOrg /></Router>);
    const Element = screen.getByText(/Already have an account/i);
    expect(Element).toBeInTheDocument();
  })

  test("render the Copyright footer", () => {
    render(<Router><SignUpOrg /></Router>);
    const Element = screen.getByText(/Copyright © 2022 Fast Fueler/i);
    expect(Element).toBeInTheDocument();
  })

  test("render the login form with three button", () => {
    render(<Router><SignUpOrg /></Router>);
    const buttonList = screen.getAllByRole("button");
    expect(buttonList).toHaveLength(3);
  })

  test("Reg No input should be rendered", () => {
    render(<Router><SignUpOrg /></Router>);
    const Element = screen.getByLabelText(/Registration No/i);
    expect(Element).toBeInTheDocument();
  });

  test("Name input should be rendered", () => {
    render(<Router><SignUpOrg /></Router>);
    const Element = screen.getByLabelText(/Name/i);
    expect(Element).toBeInTheDocument();
  });

  test("Email input should be rendered", () => {
    render(<Router><SignUpOrg /></Router>);
    const Element = screen.getByLabelText(/Email/i);
    expect(Element).toBeInTheDocument();
  });

  test("Address input should be rendered", () => {
    render(<Router><SignUpOrg /></Router>);
    const Element = screen.getByLabelText(/Address/i);
    expect(Element).toBeInTheDocument();
  });

  test("Contact Number input should be rendered", () => {
    render(<Router><SignUpOrg /></Router>);
    const Element = screen.getByLabelText(/Contact Number/i);
    expect(Element).toBeInTheDocument();
  });

  test("Confirm Password input should be rendered", () => {
    render(<Router><SignUpOrg /></Router>);
    const Element = screen.getByLabelText(/Confirm Password/i);
    expect(Element).toBeInTheDocument();
  });

});
