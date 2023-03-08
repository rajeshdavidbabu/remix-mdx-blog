import styles from "highlight.js/styles/github-dark-dimmed.css";
import type { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export interface BlogLayoutProps {
  children: React.ReactNode;
}

export default function BlogLayout({ children }: BlogLayoutProps) {
  return (
    <div className="flex justify-center">
      <div className="prose py-10 px-10 md:prose-lg lg:prose-xl">
        {children}
      </div>
    </div>
  );
}
