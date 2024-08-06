export const fetchJobPostings = async (
  page: number = 1,
  limit: number = 10,
  query: string = ""
) => { 
  const url = `http://localhost:3001/api/job-postings?page=${page}&limit=${limit}&query=${query}`;
  console.log(`Fetching job postings from: ${url}`);

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch job postings from service");
  }
  const data = await response.json();
  console.log(data);
  return data;
};
