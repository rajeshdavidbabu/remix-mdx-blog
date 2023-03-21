import styles from "highlight.js/styles/github-dark-dimmed.css";
import type { LinksFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import type { BlogList } from "~/data/blogList.server";
import { blogList } from "~/data/blogList.server";

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const pathname = url.pathname;

  const currentPost = blogList.find(({ pathName }) => pathName === pathname);

  return json(currentPost);
};

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export default function BlogLayout() {
  const currentPost = useLoaderData<BlogList>();

  return (
    <>
      {currentPost ? (
        <header className="text-center">
          <p className="my-10 font-sans font-semibold uppercase text-text-secondary dark:text-d-text-secondary">
            {currentPost.publishDate} ~ {currentPost.readingTime} read
          </p>
          <h1 className="mb-20 text-4xl font-bold leading-[1.3] md:text-6xl">
            {currentPost.title}
          </h1>
          <hr className="w-[30%] min-w-[100px]" />
        </header>
      ) : (
        <></>
      )}

      <div className="flex justify-center">
        <div className="prose w-screen py-[1em] px-[2em] dark:prose-invert md:prose-lg lg:prose-xl prose-headings:text-text-primary prose-a:no-underline prose-pre:p-0 dark:prose-headings:text-d-text-primary">
          <Outlet />
        </div>
      </div>
    </>
  );
}
