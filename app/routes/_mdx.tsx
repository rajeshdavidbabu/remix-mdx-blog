import styles from "highlight.js/styles/github-dark-dimmed.css";
import type { LinksFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export default function BlogLayout() {
  return (
    <div className="flex justify-center">
      <div className="prose w-screen py-10 px-10 dark:prose-invert md:prose-lg lg:prose-xl prose-headings:text-text-primary dark:prose-headings:text-d-text-primary">
        <Outlet />
      </div>
    </div>
  );
}
