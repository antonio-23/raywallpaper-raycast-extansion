import { Action, ActionPanel, Form } from "@raycast/api";
import fs from "fs";

interface Props {
  onFolderChosen: (folder: string) => void;
}

export default function ChoosingFolder({ onFolderChosen }: Props) {
  return (
    <Form
      actions={
        <ActionPanel>
          <Action.SubmitForm
            title="Submit Name"
            onSubmit={(values: { folders: string[] }) => {
              const folder = values.folders[0];
              if (!fs.existsSync(folder) || fs.lstatSync(folder).isDirectory()) {
                onFolderChosen(folder);
              }
            }}
          />
        </ActionPanel>
      }
    >
      <Form.FilePicker id="folders" allowMultipleSelection={false} canChooseDirectories canChooseFiles={false} />
    </Form>
  );
}
