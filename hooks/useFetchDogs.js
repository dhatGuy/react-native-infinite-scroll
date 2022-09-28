import { useInfiniteQuery } from "@tanstack/react-query";

export default function useFetchDogs() {
  const getDogs = async ({ pageParam = 0 }) => {
    const res = await (
      await fetch(
        `https://api.thedogapi.com/v1/breeds?limit=10&page=${pageParam}`
      )
    ).json();

    return {
      data: res,
      nextPage: pageParam + 1,
    };
  };

  return useInfiniteQuery(["dogs"], getDogs, {
    getNextPageParam: (lastPage) => {
      if (lastPage.data.length < 10) return undefined;

      return lastPage.nextPage;
    },
  });
}
