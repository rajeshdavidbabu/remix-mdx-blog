// We do not import the mdx files here inorder to make use of dynamic imports inside $postId file
export interface BlogList {
  slug: string;
  title: string;
  publishDate: string;
  description: string;
}

export const blogList: Array<BlogList> = [
  {
    slug: "hello-world", // Filename
    title: "Hello World 👋",
    publishDate: "30 Nov 2021",
    description:
      "Every blog starts with a single post. This is yours. Make it great.",
  },
  {
    slug: "markdown-test",
    title: "Markdown Test Page",
    publishDate: "01 Dec 2021",
    description:
      "A sample page with the most common elements of an article, including headings, paragraphs, lists, and images. Use it as a starting point for applying your own styles.",
  },
  {
    slug: "another-markdown",
    title: "Another Markdown",
    publishDate: "15 Dec 2021",
    description:
      " A sample page with the most common elements of an article, including headings, paragraphs, lists, and images. Generated by chatGPT.",
  },
];