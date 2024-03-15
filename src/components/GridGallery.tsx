import { Action, ActionPanel, Grid } from "@raycast/api";
import fs from "fs";
import path from "path";

export default function GridGallery({ folder }: { folder: string }) {
  function getFilesInDirectory(directory: string) {
    try {
      return fs.readdirSync(directory).map((file) => path.join(directory, file));
    } catch (err) {
      console.error(`Error reading directory: ${err}`);
      return [];
    }
  }

  const files = getFilesInDirectory(folder);
  console.log(files);

  return (
    <Grid
      columns={5}
      inset={Grid.Inset.Large}
      filtering={false}
      navigationTitle="Search wallpaper"
      searchBarPlaceholder="Search your favorite wallpaper"
    >
      {files.map((file) => (
        <Grid.Item
          key={file}
          content={file}
          actions={
            <ActionPanel>
              <Action.Open key={file} target={file} title="Open file" />
              <Action.CopyToClipboard title="Copy file" content={file} />
            </ActionPanel>
          }
        />
      ))}
    </Grid>
  );
}
