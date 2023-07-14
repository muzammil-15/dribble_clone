import { useEffect } from "react";
import { useRouter } from "next/router";
import { categoryFilters } from "@/constant";

const Categories = ({ category }) => {
  const router = useRouter();

  const handleTags = (item) => {
    router.push({
      pathname: router.pathname,
      query: { category: item },
    });
  };

  useEffect(() => {
    // Fetch the category value on the server-side if necessary
    // Example: const category = fetchCategoryFromServer();

    // Ensure that the client-side router has the correct query parameter
    if (category) {
      router.replace({
        pathname: router.pathname,
        query: { category },
      });
    }
  }, [category, router]);

  return (
    <div className="flexBetween w-full gap-5 flex-wrap">
      <ul className="flex gap-2 overflow-auto">
        {categoryFilters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => handleTags(filter)}
            className={`${
              category === filter
                ? "bg-light-white-300 font-medium"
                : "font-normal"
            } px-4 py-3 rounded-lg capitalize whitespace-nowrap`}
          >
            {filter}
          </button>
        ))}
      </ul>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const { query } = context;
  const { category } = query;

  // Perform any necessary server-side data fetching or computations
  // Example: const category = fetchCategoryFromServer();

  return {
    props: {
      category,
    },
  };
};

export default Categories;
