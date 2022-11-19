
import StationGetStand from "../../../Components/auth/GetStand/StationGetStand";
import { render, screen } from "@testing-library/react";
import {BrowserRouter as Router} from 'react-router-dom';

describe("Test the Station GetStand Component", () => {

  test("render the WELCOME heading", () => {
    render(<Router><StationGetStand /></Router>);
    const Element = screen.getByText(/WELCOME/i);
    expect(Element).toBeInTheDocument();
  })

  test("render the Fast Fueler heading", () => {
    render(<Router><StationGetStand /></Router>);
    const Element = screen.getByText(/Fast Fueler/i);
    expect(Element).toBeInTheDocument();
  })

  test("render the Copyright footer", () => {
    render(<Router><StationGetStand /></Router>);
    const Element = screen.getByText(/Copyright © 2022 Fast Fueler/i);
    expect(Element).toBeInTheDocument();
  })

  test("render the login form with three button", () => {
    render(<Router><StationGetStand /></Router>);
    const buttonList = screen.getAllByRole("button");
    expect(buttonList).toHaveLength(3);
  })

  test("Temp. Password input should be rendered", () => {
    render(<Router><StationGetStand /></Router>);
    const Element = screen.getByLabelText(/Temp. Password/i);
    expect(Element).toBeInTheDocument();
  });

  test("New Password input should be rendered", () => {
    render(<Router><StationGetStand /></Router>);
    const Element = screen.getByLabelText(/New Password/i);
    expect(Element).toBeInTheDocument();
  });

  test("Confirm Password input should be rendered", () => {
    render(<Router><StationGetStand /></Router>);
    const Element = screen.getByLabelText(/Confirm Password/i);
    expect(Element).toBeInTheDocument();
  });

});
