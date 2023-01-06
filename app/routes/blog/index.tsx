import type { LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import * as firstPost from "./first-post.mdx";

function postFromModule(mod: any) {
  return {
    slug: mod.filename.replace(/\.mdx?$/, ""),
    ...mod.attributes.meta,
  };
}

export const loader: LoaderFunction = () => {
  return [postFromModule(firstPost)];
};

export default function BlogIndex() {
  const posts = useLoaderData();

  return (
    <div>
      <h2>Blog Posts</h2>
      <ul>
        {posts.map((post: any) => (
          <li key={post.slug}>
            <Link to={post.slug}>{post.title}</Link>
            {post.description ? (
              <div className="prose-slate text-xs md:text-sm lg:text-base">
                {post.description}
              </div>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
