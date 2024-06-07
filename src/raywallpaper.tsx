import { Cache } from "@raycast/api";
import ChoosingFolder from "./components/ChoosingFolder";
import GridGallery from "./components/GridGallery";
import { useEffect, useState, useMemo, useCallback } from "react";

export default function Command() {
  const cache = useMemo(() => new Cache(), []);
  const [cached, setCached] = useState("");

  const setCachedFolder = useCallback(
    (folder: string) => {
      cache.set("folder", folder);
      setCached(folder);
    },
    [cache],
  );

  useEffect(() => {
    const folder = cache.get("folder") ?? "";
    setCached(folder);
  }, [cache]);

  return cached.length > 0 ? <GridGallery folder={cached} /> : <ChoosingFolder setCachedFolder={setCachedFolder} />;
}
