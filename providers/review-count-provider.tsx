"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

const ReviewCountContext = createContext(116);

export function ReviewCountProvider({ children }: { children: ReactNode }) {
  const [reviewCount, setReviewCount] = useState(116);

  useEffect(() => {
    fetch("https://api.set2pass.co.uk/review-count")
      .then((res) => res.json())
      .then((data) => {
        setReviewCount(data.numberOfReviews);
      });
  }, []);

  return (
    <ReviewCountContext.Provider value={reviewCount}>
      {children}
    </ReviewCountContext.Provider>
  );
}

export function useReviewCount() {
  return useContext(ReviewCountContext);
}
