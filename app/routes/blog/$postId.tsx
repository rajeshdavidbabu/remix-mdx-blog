import styles from "highlight.js/styles/github-dark-dimmed.css";
import type { LinksFunction } from "@remix-run/node";
import HelloWorld from "~/components/HelloWorld";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export default function PostRoute() {
  return (
    <>
      <h1>Rajesh</h1>

      <HelloWorld />
    </>
  );
}
