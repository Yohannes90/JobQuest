export const fetchJobPostings = async (
  page: number = 1,
  limit: number = 20,
  query: string = ""
) => {
  const response = await fetch(
    `/api/job-postings?page=${page}&limit=${limit}&query=${query}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch job postings");
  }
  return await response.json();
};
