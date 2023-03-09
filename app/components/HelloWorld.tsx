import React, { lazy, Suspense } from "react";

let HelloWorldMDX = lazy(async () => {
  const module = await import("~/blogPosts/hello-world.mdx");

  return { default: module.default };
});

const MemoizedMDX = React.memo(HelloWorldMDX);

const HelloWorld = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        I am working Raj <MemoizedMDX />
      </Suspense>
    </div>
  );
};

export default HelloWorld;
