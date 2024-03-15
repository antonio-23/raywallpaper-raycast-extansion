import { useEffect, useState } from "react";
import GridGallery from "./components/GridGallery";
import ChoosingFolder from "./components/ChoosingFolder";
import { LocalStorage } from "@raycast/api";

export default function Command() {
  const [folder, setFolder] = useState<string>("");

  useEffect(() => {
    (async () => {
      const choosedFolder = await LocalStorage.getItem<string>("choosedFolder");
      setFolder(choosedFolder || "");
    })();
  }, []);

  const handleFolderChosen = (folder: string) => {
    setFolder(folder);
  };

  return folder ? <GridGallery folder={folder} /> : <ChoosingFolder onFolderChosen={handleFolderChosen} />;
}
