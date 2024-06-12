import { Action, ActionPanel, Grid } from "@raycast/api";
import { runAppleScript } from "@raycast/utils";
import { useMemo } from "react";
import { scriptSetWallpaper } from "../utils/applescript-utils";
import { getFilesInDirectory } from "../utils/common-utils";

async function setWallpaper(file: string) {
  await runAppleScript(scriptSetWallpaper(file));
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
              <Action key={file} title="Set Wallpaper" onAction={() => setWallpaper(file)} />
              <Action.CopyToClipboard title="Copy File" content={file} />
            </ActionPanel>
          }
        />
      ))}
    </Grid>
  );
}
