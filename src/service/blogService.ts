export const fetchBlogPostings = async (
  page: number = 1,
  limit: number = 10,
  query: string = "",
) => {
  const url = `${import.meta.env.VITE_API_URL}/api/blog-posts?page=${page}&limit=${limit}&query=${query}`;
  console.log(`Fetching job postings from: ${url}`);

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch job postings from service");
  }
  const data = await response.json();
  console.log(data);
  return data;
};
