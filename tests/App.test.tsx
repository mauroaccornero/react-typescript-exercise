import React from "react";
import { render, screen } from "@testing-library/react";
import { App } from '../src/App'

describe("Test app component", () => {

    test("Header contains correct text", () => {
        render(<App />);
        const text = screen.getByText("Simple typescript app");
        expect(text).toBeInTheDocument();
    });

})