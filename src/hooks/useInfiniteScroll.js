import { useState, useEffect } from "react";

export const useInfiniteScroll = (data, itemsPerPage = 6) => {
  const [displayedItems, setDisplayedItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  // Réinitialiser l'état quand les données changent
  useEffect(() => {
    if (data && data.length > 0) {
      const initialItems = data.slice(0, itemsPerPage);
      setDisplayedItems(initialItems);
      setCurrentPage(1);
      setHasMore(data.length > itemsPerPage);
      setIsLoading(false);
    }
  }, [data, itemsPerPage]);

  const loadMore = () => {
    if (isLoading || !hasMore || !data) return;

    setIsLoading(true);
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const newItems = data.slice(startIndex, endIndex);

    // Ajouter un délai artificiel pour une meilleure UX
    setTimeout(() => {
      if (newItems.length > 0) {
        setDisplayedItems(prev => [...prev, ...newItems]);
        setCurrentPage(prev => prev + 1);
        setHasMore(endIndex < data.length);
      } else {
        setHasMore(false);
      }
      setIsLoading(false);
    }, 800);
  };

  return {
    displayedItems,
    isLoading,
    hasMore,
    loadMore,
    resetItems: () => {
      setDisplayedItems(data?.slice(0, itemsPerPage) || []);
      setCurrentPage(1);
      setHasMore(data?.length > itemsPerPage);
    }
  };
};
