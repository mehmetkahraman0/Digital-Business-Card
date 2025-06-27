import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Card from "./Card"

const person = {
  imgUrl: "string",
  name: "mehmet kahraman",
  status: "junior dev",
  instagram: "https://www.instagram.com/mehmet",
  twitter: "https://www.twitter.com/mehmet",
  linked: "https://www.linked.com/mehmet",
};

describe("Card Components Test", () => {
  test("Object Name Test", () => {
    render(<Card person={person} />)
    const name = screen.getByText(/mehmet kahraman/i);
    expect(name).toBeInTheDocument();
  });
  test("Object Status Test", () => {
    render(<Card person={person} />)
    const status = screen.getByText(/junior dev/i)
    expect(status).toBeInTheDocument();
  })
  test("Card Components has social media icon.", () => {
    render(<Card person={person}/>)
    const icons = screen.getAllByRole("link")
    icons.forEach(icon => {
      const svg = icon.querySelector("svg")
      expect(svg).toBeInTheDocument()
    })
  })
  test("Object Instagram Link Test", () => {
    render(<Card person={person} />)
    const instagramlink = screen.getByTestId("instagram-link")
    expect(instagramlink).toHaveAttribute("href", "https://www.instagram.com/mehmet")
  })
  test("Object Twitter Link Test", () => {
    render(<Card person={person} />)
    const twitterLink = screen.getByTestId("twitter-link")
    expect(twitterLink).toHaveAttribute("href", "https://www.twitter.com/mehmet")
  })
  test("Object Linked Link Test", () => {
    render(<Card person={person} />)
    const linkedLink = screen.getByTestId("linked-link")
    expect(linkedLink).toHaveAttribute("href", "https://www.linked.com/mehmet")
  })
  test("Object Image Url Test", () => {
    render(<Card person={person}/>)
    const img = screen.getByTestId("person-image")
    expect(img).toHaveAttribute("src", "string")
  })
})
