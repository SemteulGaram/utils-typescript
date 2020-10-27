# 🛠 Utils (Typescript)
Collection of utilities that can be used anywhere written in Typescript
- Written in Typescript, but also available in Javascript

## 🤔 How to use
```
// In your project
git submodule add https://github.com/SemteulGaram/utils-typescript [MODULE PATH (ex. ./src/utils-typescript)]

// Not required in the latest git
git submodule update --init --recursive

// Later, When you newly clone your project
git clone --recursive [YOUR PROJECT URL]
```
- Import to your code
  ```
  import * as Utils from '[MODULE PATH]'

  // Per category
  import * as GlobalOnlyUtils from '[MODULE PATH]/dist/global'
  import * as NodeOnlyUtils from '[MODULE PATH]/dist/node'
  import * as BrowserOnlyUtils from '[MODULE PATH]/dist/browser'

  // or CommonJS Style
  const Utils = require('[MODULE PATH]')
  ```

## 🔧 How to update
```
cd [MODULE PATH]
git pull
```

## 📚 Need Docs?
This project is not hosted, so there is no link prepared. But, you can create API documents.
```
git clone https://github.com/SemteulGaram/utils-typescript.git
cd utils-typescript
npm install
npm run generate:docs
```
Now you can view API Docs on `./docs/index.html`

## 📝 Writing rules
- Write basic information at the top of all utility files
  - Example
    ```
    /**
     * Example module describe
     * @module category/example-module
     *
     * @version 1.0
     * @author ExampleAuthor
     */
    ```
  - See other module files for more examples
- Keep backwards compatibility when updating utility files, or create a new version of the file or methods
- Keep the code as short and stable as possible
- Excluding dependencies as much as possible
- Build before commit
