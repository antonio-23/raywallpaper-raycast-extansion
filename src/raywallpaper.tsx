import { Cache } from "@raycast/api";
import ChoosingFolder from "./components/ChoosingFolder";
import GridGallery from "./components/GridGallery";
import { useEffect, useState, useMemo, useCallback } from "react";

export default function Command() {
  const cache = useMemo(() => new Cache(), []);
  const [cached, setCached] = useState("");

  const setCachedFolder = useCallback(
    (folder: string) => {
      const cached = cache.get("folder") ?? "";
      console.log(`Setting cached folder to ${cached}`);
      cache.set("folder", folder);
      setCached(folder);
    },
    [cache, cached],
  );

  useEffect(() => {
    const folder = cache.get("folder") ?? "";
    setCached(folder);
  }, [cache]);

  return cached.length > 0 ? (
    <GridGallery folder={cached} setCachedFolder={setCachedFolder} />
  ) : (
    <ChoosingFolder setCachedFolder={setCachedFolder} />
  );
}
