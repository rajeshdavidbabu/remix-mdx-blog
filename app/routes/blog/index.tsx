import styles from "highlight.js/styles/github-dark-dimmed.css";
import type { LinksFunction, LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import * as helloWorld from "./__data/hello-world.mdx";
import * as markDownTest from "./__data/markdown-test.mdx";
import * as codeSplittingLocales from "./__data/code-splitting-i18n.mdx";

function postFromModule(mod: any) {
  console.log("incoming module ", mod);

  return {
    slug: mod.filename.replace(/\.mdx?$/, ""),
    ...mod.attributes.meta,
  };
}

export const loader: LoaderFunction = () => {
  return [
    postFromModule(helloWorld),
    postFromModule(markDownTest),
    postFromModule(codeSplittingLocales),
  ];
};

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export default function Blog() {
  const posts = useLoaderData();

  return (
    <div className="mx-auto my-0 w-full max-w-[42em] text-text-primary dark:text-d-text-primary">
      <h1 className="mb-20 text-2xl font-bold leading-[1.3] md:text-4xl">
        Blog
      </h1>
      {posts.map((post: any, index: number) => {
        return (
          <div key={index}>
            {index !== 0 && <hr className="mx-auto my-[60px]" />}

            <h2 className=" mb-4 mt-6 font-sans text-xl font-bold leading-[1.3] underline md:text-3xl">
              <Link to={post.slug}>{post.title}</Link>
            </h2>
            <p className="my-6 md:text-lg">{post.description}</p>
            <div className="font-sans font-bold">
              <span className="mr-4 text-left uppercase text-text-secondary dark:text-d-text-secondary">
                — {post.publishDate}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
