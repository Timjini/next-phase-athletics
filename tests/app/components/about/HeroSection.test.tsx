import React from "react";
import { render, screen } from "@testing-library/react";
import { HeroSection } from "@/app/components/about/HeroSection";

describe("HeroSection", () => {
  it("renders the hero heading and paragraph", () => {

    render(<HeroSection />);
    const img = screen.getByAltText('Athletes training')

    expect(
      screen.getByRole("heading", { name: /about nextphase/i })
    ).toBeInTheDocument();

    expect(img).toBeInTheDocument();
    expect(img.getAttribute('src')).toContain('about-hero');

    expect(
      screen.getByText(/elevating athletes through science-backed training/i)
    ).toBeInTheDocument();
  });
});
