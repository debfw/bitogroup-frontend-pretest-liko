import { useQuery } from "@tanstack/react-query";
import { DataType } from "../types/types";

export const useDataQuery = () =>
  useQuery({
    queryKey: ["data"],
    queryFn: async () => {
      const resp = await fetch(
        "https://65efcc68ead08fa78a50f929.mockapi.io/api/v1/pairs"
      );
      if (!resp.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await resp.json();
      return data as DataType[];
    },
  });
