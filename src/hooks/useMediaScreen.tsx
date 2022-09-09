import React from "react";

export const useMediaScreen = (media: string) => {
  const [match, setMatch] = React.useState<boolean | null>(null);

  React.useEffect(() => {
    function changeMatch() {
      const { matches } = window.matchMedia(media);

      setMatch(matches);
    }

    window.addEventListener("resize", changeMatch);

    return () => window.removeEventListener("resize", changeMatch);
  }, [media]);

  return match;
};
