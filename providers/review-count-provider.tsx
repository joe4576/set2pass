"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

const ReviewCountContext = createContext(116);

type ReviewCountProviderProps = {
  children: ReactNode;
};

export const ReviewCountProvider = ({ children }: ReviewCountProviderProps) => {
  const [reviewCount, setReviewCount] = useState(116);
  useEffect(() => {
    const controller = new AbortController();
    fetch("https://api.set2pass.co.uk/review-count", {
      signal: controller.signal,
    })
      .then((res) => {
        if (!res.ok) throw new Error("Review count unavailable");
        return res.json();
      })
      .then((data) => {
        if (
          Number.isSafeInteger(data.numberOfReviews) &&
          data.numberOfReviews >= 0
        ) {
          setReviewCount(data.numberOfReviews);
        }
      })
      .catch(() => {
        // Keep the existing fallback when the external service is unavailable.
      });
    return () => controller.abort();
  }, []);
  return (
    <ReviewCountContext.Provider value={reviewCount}>
      {children}
    </ReviewCountContext.Provider>
  );
};

export const useReviewCount = () => {
  return useContext(ReviewCountContext);
};
