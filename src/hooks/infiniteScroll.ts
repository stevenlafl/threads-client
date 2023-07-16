import { useEffect } from "react";

const useInfiniteScroll = (callback: () => void) => {
  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop < document.documentElement.offsetHeight) {
      return;
    }

    callback();
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  });
}

export default useInfiniteScroll;