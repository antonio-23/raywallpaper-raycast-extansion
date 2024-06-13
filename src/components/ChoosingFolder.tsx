import { Action, ActionPanel, Form } from "@raycast/api";

export default function ChoosingFolder({ setCachedFolder }: { setCachedFolder: (folder: string) => void }) {
  return (
    <Form
      actions={
        <ActionPanel>
          <Action.SubmitForm
            title="Submit Name"
            onSubmit={(values: { folders: string[] }) => {
              setCachedFolder(values.folders[0]);
            }}
          />
        </ActionPanel>
      }
    >
      <Form.FilePicker id="folders" allowMultipleSelection={false} canChooseDirectories canChooseFiles={false} />
    </Form>
  );
}
