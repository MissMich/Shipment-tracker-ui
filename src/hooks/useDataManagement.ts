import * as React from "react";
import { type DataItem, generateMockData } from "../tests/mockDataGenerator";
import { useMemo, useState } from "react";

// This is the expected return type for the useDataManagement hook
export type DataManagementResult = {
  items: DataItem[];
  totalItems: number;
  totalPages: number;
  isLoading: boolean;
  error: string | null;
  categories: string[];
  search?: string;
  currentPage: number;
  category?: string;
  sortBy?: string;
  nextPage: () => void;
  previousPage: () => void;
  setSearch: (q: string) => void;
  setCategory: (cat: string) => void;
  setSortBy: (srt: string) => void;
  categoryFilter: string;
  setCategoryFilter: (value: string) => void
};

export function useDataManagement(): DataManagementResult {
  // Implement your solution here

  const itemsPerPage = 20;

  const [search, setSearch] = useState("")
const [categoryFilter, setCategoryFilter] = useState("")
  const [sortBy, setSortBy] = React.useState("")
  const [currentPage, setCurrentPage] = React.useState("");
  const [items, setItems] = React.useState<DataItem[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string|null>(null)

  // const paginatedData = useMemo(()=> {
  //   const startIndex = (currentPage - 1) * itemsPerPage;
  //   const endIndex = startIndex + itemsPerPage;
  // })

  const filteredItems = useMemo(()=> {
    return items
    .filter(item=> item.name.toLowerCase().includes(search.toLowerCase())
    // .filter((item)=> 
    //   categoryFilter ? item.category === categoryFilter : true)
  )}, [items, search, categoryFilter])

console.log('filteredItems', filteredItems)

console.log('items', items)
  const getData = async () => {
    
    setLoading(true)
    try{
      const response = await generateMockData();
      setItems(response)
      setLoading(false)

    }catch(err){
      setError("Failed to fetch data");
      setLoading(false)
    }
  };

  React.useEffect(() => {
    getData();
  }, []);

  return {
    // Return an object with the necessary properties as described in the DataManagementResult type
  };
}
