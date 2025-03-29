import { useLoaderData } from "react-router-dom";
import CockTailList from "../components/CockTailList";
import SearchForm from "../components/SearchFrom";
import { QueryClient } from "@tanstack/react-query";

const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const searchCocktailsQuery = (searchTerm) => ({
  queryKey: ["search", searchTerm || "all"],
  queryFn: async () => {
    const response = await fetch(`${cocktailSearchUrl}${searchTerm}`);
    const data = await response.json();
    return data.drinks || []; 
  },
});

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url);
    const searchTerm = url.searchParams.get("search") || "all";
    // console.log('loader working')
    const preloadedData = await queryClient.ensureQueryData(
      searchCocktailsQuery(searchTerm)
    );
    return { searchTerm, drinks: preloadedData };
  };

function Landing() {
  // console.log("Landing page re-rendered");
  const { searchTerm, drinks } = useLoaderData();

  return (
    <div className="w-full relative h-full overflow-y-scroll scrollbar-hidden flex flex-col items-center gap-y-6">
      <div className="w-[80%]">
        <div className="w-[100%] h-40 p-10 flex justify-center items-center">
          <SearchForm />
        </div>
        <div className="p-5 flex flex-wrap justify-between items-start gap-y-6">
          <CockTailList drinks={drinks} />
        </div>
      </div>
    </div>
  );
}

export default Landing;
