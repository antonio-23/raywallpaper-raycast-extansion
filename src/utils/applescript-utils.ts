export const scriptSetWallpaper = (path: string) => {
  return `
          set imagePath to "${path}"
          try
              tell application "System Events"
                  set desktopCount to count of desktops
                  repeat with i from 1 to desktopCount
                      tell desktop i
                          set picture to imagePath
                      end tell
                  end repeat
                  return "ok"
              end tell
          on error
              set dialogTitle to "Error Setting Wallpaper"
              set dialogText to "Please make sure you have given Raycast the required permission. To make sure, click the button below and grant Raycast the 'System Events' permission."
              
              display alert dialogTitle message dialogText buttons {"Cancel", "Open Preferences"} default button 2 as informational
              if button returned of result is "Open Preferences" then
                  do shell script "open 'x-apple.systempreferences:com.apple.preference.security?Privacy_Automation'"
              end if
              
              return "error"
          end try
         `;
};
