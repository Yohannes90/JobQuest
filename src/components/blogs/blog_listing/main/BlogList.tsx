import React, { ReactElement } from "react";

interface BlogListProps {
  result: ReactElement[];
}

const BlogList: React.FC<BlogListProps> = ({ result }) => {
  return (
    <>
      <div>
        <h3 className="text-black text-lg font-bold">{result.length} Blogs</h3>
      </div>
      <section>{result}</section>
    </>
  );
};

export default BlogList;
