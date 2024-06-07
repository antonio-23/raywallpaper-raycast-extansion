import { Action, ActionPanel, Grid } from "@raycast/api";
import fs from "fs";
import path from "path";
import { useMemo } from "react";

function getFilesInDirectory(directory: string) {
  try {
    return fs.readdirSync(directory).map((file) => path.join(directory, file));
  } catch (err) {
    console.error(`Error reading directory: ${err}`);
    return [];
  }
}

export default function GridGallery({ folder }: { folder: string }) {
  const files = useMemo(() => getFilesInDirectory(folder), [folder]);

  return (
    <Grid
      isLoading={files.length === 0}
      columns={4}
      fit={Grid.Fit.Fill}
      aspectRatio="16/9"
      navigationTitle="Search wallpaper"
      searchBarPlaceholder="Search your favorite wallpaper"
    >
      {files.map((file) => (
        <Grid.Item
          key={file}
          content={file}
          actions={
            <ActionPanel>
              <Action.Open key={file} target={file} title="Open File" />
              <Action.CopyToClipboard title="Copy File" content={file} />
            </ActionPanel>
          }
        />
      ))}
    </Grid>
  );
}
