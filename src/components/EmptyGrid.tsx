import { ActionPanel, Grid, Icon } from "@raycast/api";
import Preferences from "./Preferences";

export default function EmptyGrid() {
  return (
    <Grid>
      <Grid.EmptyView
        icon={Icon.Image}
        title={"No wallpapers"}
        actions={
          <ActionPanel>
            <Preferences />
          </ActionPanel>
        }
      />
    </Grid>
  );
}
