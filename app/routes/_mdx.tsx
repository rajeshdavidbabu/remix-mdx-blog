import styles from "highlight.js/styles/github-dark-dimmed.css";
import type { LinksFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { NavLink, Outlet, useLoaderData } from "@remix-run/react";
import type { BlogList } from "~/data/blogList.server";
import { blogList } from "~/data/blogList.server";
import { motion } from "framer-motion";
import { textVariants, containerVariants } from "~/data/animationConfig";
import { ArrowLeft } from "lucide-react";

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
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      <div className="mx-auto flex w-full max-w-[47rem]">
        <ArrowLeft />{" "}
        <NavLink className="back-button ml-2 font-sans" to={"/blog"}>
          Back
        </NavLink>
      </div>
      {currentPost ? (
        <header className="text-center">
          <motion.p
            variants={textVariants}
            className="my-10 font-sans font-semibold uppercase text-text-secondary dark:text-d-text-secondary"
          >
            {currentPost.publishDate} ~ {currentPost.readingTime} read
          </motion.p>
          <motion.h1
            variants={textVariants}
            className="mb-20 text-4xl font-bold leading-[1.3] md:text-6xl"
          >
            {currentPost.title}
          </motion.h1>
          <motion.hr
            variants={textVariants}
            className="w-[30%] min-w-[100px]"
          />
        </header>
      ) : (
        <></>
      )}

      <motion.div variants={textVariants} className="flex justify-center">
        <div className="prose w-screen py-[1em] px-[2em] dark:prose-invert md:prose-lg lg:prose-xl prose-headings:text-text-primary prose-a:no-underline prose-pre:p-0 dark:prose-headings:text-d-text-primary">
          <Outlet />
        </div>
      </motion.div>
    </motion.div>
  );
}
