import { ReactElement, useCallback, useEffect, useState } from "react";
import Search from "../components/blogs/blog_listing/Search";
import BlogList from "../components/blogs/blog_listing/main/BlogList";
import Card from "../components/blogs/blog_listing/main/Card";
import Sidebar from "../components/blogs/blog_listing/sidebar/Sidebar";
import Newsletter from "../components/blogs/blog_listing/Newsletter";
import { fetchBlogPostings } from "../service/blogService";

interface Blog {
  id: number;
  blogTitle: string;
  blogCategory:
    | "technology"
    | "business"
    | "lifestyle"
    | "education"
    | "health"
    | "entertainment";
  content: string;
  image: string;
  publishedAt: string;
}

const BlogHome: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [totalBlogs, setTotalBlogs] = useState<number>(0);
  const itemsPerPage = 5;
  // handles input change
  const [query, setQuery] = useState<string>("");
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };
const fetchTotalBlogs = useCallback(async ()=>{
  try {
    const response:Response = await fetch("http://localhost:3001/api/blogs/count");
    const data = await response.json();
    if (response.ok) {
      const count: number = data.count;
      console.log(count);
      setTotalBlogs(count);
    } else {
      console.log("Error: failed to fetch the Blog count from the server");
    }
  } catch (error) {
    console.log("Error: failed to fetch from the server", error);
  }
},[])
const loadBlogsPostings = useCallback(async () => {
  console.log("Calling loadBlogsPostings");
  console.log(`Fetching Blogs for page ${currentPage} with query "${query}"`);
  
  try{
    const newBlogs: Blog[] = await fetchBlogPostings(currentPage, 5, query);
    setBlogs((prevBlogs) => [...prevBlogs, ...newBlogs]);
    if (currentPage === 1) {
      setBlogs(newBlogs); // Replace Blogs if it's the first page
    } else {
      setBlogs((prevBlogs) => [...prevBlogs, ...newBlogs]); // Append Blogs for subsequent pages
    }
    if (newBlogs.length < 5) {
      setHasMore(false);
    }
  } catch (err){
    console.error('Failed to fetch Blog postings: ', err);
  }
  finally{
    setIsLoading(false);
  }
},[currentPage, query]);

  useEffect(() => {
    setIsLoading(true);
    loadBlogsPostings();
    fetchTotalBlogs();
  }, [currentPage, fetchTotalBlogs, loadBlogsPostings, query]);

  // filter Blog by title
  const filteredItems: Blog[] = blogs.filter(
    (blog) => blog.blogTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1,
  );
  // Radio filtering
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCategory(event.target.value);
  };
  // button based filtering
  const handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCategory(event.target.value);
  };

// calculate the index range
const calculatePageRange = () => {
  const startIndex = (currentPage -1) * 5;
  const endIndex = startIndex + itemsPerPage;
  return {startIndex, endIndex};
}
// function for the next page
const nextpage = () => {
  if (hasMore) {
    setCurrentPage(currentPage+1);
    console.log("working");
  }
}
const prevPage = () => {
  if(currentPage > 1) {
    setCurrentPage(currentPage - 1);
    setHasMore(true);
  }
}

  // main function
  const filteredData = (
    Blogs: Blog[],
    selected: string | null,
    query: string,
  ) => {
    let filteredBlogs: Blog[] = Blogs;
    if (query) {
      filteredBlogs = filteredItems;
    }

    if (selected) {
      filteredBlogs = filteredBlogs.filter(
        ({ blogCategory }) =>
          blogCategory.toLowerCase() === selected.toLowerCase(),
      );
    }
    // slice the data based on current page
    const { startIndex, endIndex } = calculatePageRange();
    filteredBlogs = filteredBlogs.slice(startIndex, endIndex);
    return filteredBlogs.map((data, index) => <Card key={index} blog={data} />);
  };

  const result: ReactElement[] = filteredData(blogs, selectedCategory, query);

  return (
    <div className="text-black min-h-screen bg-gray-100">
      <Search query={query} handleInputChange={handleInputChange} />
      {/* main content  */}
      <div className="bg-gray-100 sm:grid grid-cols-4 gap-8 lg:px-16 px-4 py-12">
        <div className="bg-gray-50 p-4 rounded">
          {/* left side  */}
          <Sidebar handleChange={handleChange} handleClick={handleClick} />
        </div>
        {/* Blog cards  */}
        <div className="bg-gray-50 col-span-2 p-4 rounded">
          {isLoading ? (
            <p className="font-bold text-lg">Loading....</p>
          ) : result.length > 0 ? (
            <BlogList result={result} />
          ) : (
            <>
              <h3 className="text-lg text-black font-semibold">
                {result.length} Blogs
              </h3>
              <p className="text-black">No data found!</p>
            </>
          )}
          {/* pagination  */}
          {result.length > 0 ? (
            <div className="flex justify-center mt-4 space-x-8">
              <button className="text-black/70 btn btn-ghost disabled:bg-inherit focus:outline-none" onClick={prevPage} disabled={currentPage === 1}>Previous</button>
              <span className="text-black/70 my-3 font-mono">Page {currentPage} of {Math.ceil(totalBlogs / itemsPerPage)}</span>
              <button className="text-black/70 btn btn-ghost disabled:bg-inherit focus:outline-none" onClick={nextpage} disabled={!hasMore} >Next</button>
            </div>
          ) : (
            ""
          )}
        </div>
        {/* right side  */}
        <div className="bg-gray-50 p-4 rounded">
          <Newsletter />
        </div>
      </div>
    </div>
  );
};

export default BlogHome;
