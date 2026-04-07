# SOP: Folk Art Microgallery Onboarding Pipeline

This document outlines the standard operating procedure for handling new artist submissions for the Indian Folk Art Microgallery. The pipeline ensures that media assets are properly stored and data is formatted correctly for the front-end application.

## Phase 1: Initial Setup (Before Launching)

Before sharing the onboarding form with any artists, the following steps must be completed to ensure data privacy and correct file storage:

1. **Duplicate the Form:** Create a copy of the original "Indian Folk Art Microgallery Onboarding" Google Form.
2. **Transfer Ownership:** Move this duplicated form into ATAM's company Google Drive.
3. **Verify File Upload Destinations:** By keeping the form on ATAM's Drive, you ensure that all photos uploaded by artists are automatically saved to ATAM's secure drive, preventing access issues if a personal account is deleted or restricted.
4. **Link the Google Sheet:** In the new form, go to the "Responses" tab and link it to a new Google Sheet to collect the incoming data.

---

## Phase 2: Operations & Data Processing

Once the form is live and an artist submits a new entry, follow these steps to integrate their data into the microgallery:

### Step 1: Locate the New Entry

- Open the linked Google/Excel response sheet.
- Identify the new row(s) containing the artist's submission.

### Step 2: Process & Route Media Assets

Artists can upload multiple photos across 5 different sections. For every photo uploaded in the row:

1. Download the image file from the provided Google Drive link.
2. Create a new directory for the art form in the project's public folder: `/public/<folder-name>/`. Please format the folder name using hyphens to represent the series year, the art number, and the art form name. For example, use `2026-5-therukoothu` (to represent Nam Marabu Series 2026, Art 5).
3. Save and rename the downloaded images into this folder using the following naming convention to match the sections:
   - `intro_1.jpg`, `intro_2.jpg`, etc.
   - `history_1.jpg`, `history_2.jpg`, etc.
   - `process_1.jpg`, `process_2.jpg`, etc.
   - `presentday_1.jpg`, `presentday_2.jpg`, etc.
   - `artist_1.jpg`, `artist_2.jpg`, etc.

### Step 3: Construct the JSON Object

- Open the `info_template.json` file.
- Create a new object based on the template.
- Replace the dummy values with the actual text submitted in the spreadsheet.
- **Important:** Ensure the `"imageSrc"` fields in the JSON match the local file paths you just created in Step 2 (e.g., `"imageSrc": "/2026-5-therukoothu/intro_1.jpg"`).

### Step 4: Update the Master Database

- Open the master `info.json` file. This file contains a `"folkarts"` array.
- Copy the newly created, fully populated object from Step 3.
- Insert this object as a new element at the end of the `"folkarts"` array.
- Save the file and commit the changes to the repository to update the live gallery.

---

### Pro Tip: Automate JSON Creation with AI

Instead of manually creating and populating the entry in `info.json` (Steps 3 and 4), you can significantly speed up the workflow using AI:

1. Download the new entries from the Google Sheet as a `.csv` file.
2. Input this `.csv` file, along with the `info_template.json` file, into Gemini (or any LLM of your choice).
3. Prompt the AI to format the CSV data according to the template structure.
4. The expected output will be a fully formatted JSON object. Simply copy this object and paste it directly into the `"folkarts"` array in your master `info.json` file.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
