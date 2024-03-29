import {useQuery} from "@tanstack/react-query"
import { fetchAllCategories } from "../../services/apiCategory"

function useCategory() {
  const {isLoading, data: categories, error} = useQuery({
    queryKey: ["categoryList"],
    queryFn: fetchAllCategories,
    retry: false,
  })

  return {isLoading, categories, error}
}

export default useCategory