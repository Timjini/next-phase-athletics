import React from "react";
import { render, screen } from "@testing-library/react";
import { FAQ } from "@/app/components/common/FAQ";
import { BookingFAQ } from "@/app/lib/constants";

describe("HeroSection", () => {
  it("renders FAQ Section", () => {

    render(<FAQ  items={BookingFAQ} />);
  });
});
