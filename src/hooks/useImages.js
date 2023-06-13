import { useQuery } from "react-query";
import { api } from "../api/api";

const useImages = (filters) =>
  useQuery("images", api.get, {
    select: (images) =>
      images.filter(
        (image) =>
          image.title
            .toLowerCase()
            .includes(filters.searchTerm.toLowerCase()) &&
          image.color.toLowerCase().includes(filters.color.toLowerCase())
      ),
  });

export default useImages;
