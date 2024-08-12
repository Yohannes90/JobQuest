import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SearchProps {
  query: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<SearchProps> = ({ query, handleInputChange }) => {
  return (
    <div className="mt-20 py-10 max-w-screen-2xl container">
      <div className="flex flex-grow justify-center">
        <form action="" method="get" className="w-11/12 sm:w-3/4">
          <div className="flex justify-start flex-grow gap-1">
            <div className="relative py-1 px-6 focus:outline-0 bg-white h-auto rounded shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-harSecondary w-full">
              <input
                type="text"
                name="query"
                id="query"
                className="w-full bg-white py-2 px-4 focus:outline-0"
                placeholder="What position are you looking for ?"
                onChange={handleInputChange}
                value={query}
              />
              <FontAwesomeIcon
                icon={faSearch}
                className="absolute bottom-1/2 translate-y-1/2 left-5"
              />
            </div>
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
