import { useQuery } from "react-query";
import { api } from "../api/api";

const useImages = (filters) =>
  useQuery("images", api.get, {
    select: (images) =>
      images.filter((image) =>
        image.title.toLowerCase().includes(filters.searchTerm.toLowerCase())
      ),
  });

export default useImages;
