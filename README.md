# 🛠 Utils (Typescript)
Collection of utilities that can be used anywhere written in Typescript
- Written in Typescript, but also available in Javascript

## 🤔 How to use
```
// In your project
git submodule add https://github.com/SemteulGaram/utils-typescript [MODULE PATH (ex. ./src/utils-typescript)]

// Not required in the latest git
git submodule update --init --recursive

// Later, how to clone your project
git clone --recursive [YOUR PROJECT URL]
```
- Import to your code
```
import * as Utils from '[MODULE PATH]'
// or
const Utils = require('[MODULE PATH]')
```

## 🔧 How to update
```
// __Write In Progress__
```

## 📝 Writing rules
- Write basic information at the top of all utility files
  - example
    ```
    /*
     * Example Util Module
     *
     * @version 1.0.0
     * @author Author
     */
    ```
- Keep backwards compatibility when updating utility files, or create a new version of the file or methods
- Keep the code as short and stable as possible
- Excluding dependencies as much as possible
- Build before commit
