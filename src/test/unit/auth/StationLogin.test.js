
import StationLogin from "../../../Components/auth/LogIn/StationLogin";
import { render, screen } from "@testing-library/react";
import {BrowserRouter as Router} from 'react-router-dom';

describe("Test the Station Login Component", () => {

  test("render the STATION LOGIN heading", () => {
    render(<Router><StationLogin /></Router>);
    const Element = screen.getByText(/STATION LOGIN/i);
    expect(Element).toBeInTheDocument();
  })

  test("render the Fast Fueler heading", () => {
    render(<Router><StationLogin /></Router>);
    const Element = screen.getByText(/Fast Fueler/i);
    expect(Element).toBeInTheDocument();
  })

  test("render the Forgot password? link", () => {
    render(<Router><StationLogin /></Router>);
    const Element = screen.getByText(/Forgot password?/i);
    expect(Element).toBeInTheDocument();
  })

  test("render the Copyright footer", () => {
    render(<Router><StationLogin /></Router>);
    const Element = screen.getByText(/Copyright © 2022 Fast Fueler/i);
    expect(Element).toBeInTheDocument();
  })

  test("render the login form with two button", () => {
    render(<Router><StationLogin /></Router>);
    const buttonList = screen.getAllByRole("button");
    expect(buttonList).toHaveLength(2);
  })

  test("Reg No input should be rendered", () => {
    render(<Router><StationLogin /></Router>);
    const Element = screen.getByLabelText(/Registration No/i);
    expect(Element).toBeInTheDocument();
  });

});
