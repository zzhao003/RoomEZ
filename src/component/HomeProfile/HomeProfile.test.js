import { render, screen } from "@testing-library/react";
import HomeProfile from "./HomeProfile";

test("renders the first button", () => {
  render(
    <HomeProfile feed={[]} skipHandler={jest.fn()} likeHandler={jest.fn()} />
  );
  expect(screen.getAllByRole("button")[0]).toBeInTheDocument();
});

test("renders the second button", () => {
  render(
    <HomeProfile feed={[]} skipHandler={jest.fn()} likeHandler={jest.fn()} />
  );
  expect(screen.getAllByRole("button")[1]).toBeInTheDocument();
});
