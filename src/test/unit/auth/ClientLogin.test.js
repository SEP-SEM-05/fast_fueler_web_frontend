
import ClientLogin from "../../../Components/auth/LogIn/ClientLogin";
import { render, screen } from "@testing-library/react";
import {BrowserRouter as Router} from 'react-router-dom';

describe("Test the Client Login Component", () => {

  test("render the CLIENT LOGIN heading", () => {
    render(<Router><ClientLogin /></Router>);
    const Element = screen.getByText(/CLIENT LOGIN/i);
    expect(Element).toBeInTheDocument();
  })

  test("render the Fast Fueler heading", () => {
    render(<Router><ClientLogin /></Router>);
    const Element = screen.getByText(/Fast Fueler/i);
    expect(Element).toBeInTheDocument();
  })

  test("render the Forgot password? link", () => {
    render(<Router><ClientLogin /></Router>);
    const Element = screen.getByText(/Forgot password?/i);
    expect(Element).toBeInTheDocument();
  })

  test("render the Don't have an account link", () => {
    render(<Router><ClientLogin /></Router>);
    const Element = screen.getByText(/Don't have an account/i);
    expect(Element).toBeInTheDocument();
  })

  test("render the Copyright footer", () => {
    render(<Router><ClientLogin /></Router>);
    const Element = screen.getByText(/Copyright © 2022 Fast Fueler/i);
    expect(Element).toBeInTheDocument();
  })

  test("render the login form with two button", () => {
    render(<Router><ClientLogin /></Router>);
    const buttonList = screen.getAllByRole("button");
    expect(buttonList).toHaveLength(2);
  })

  test("user id input should be rendered", () => {
    render(<Router><ClientLogin /></Router>);
    const Element = screen.getByLabelText(/User ID/i);
    expect(Element).toBeInTheDocument();
  });

});
