# React useDarkMode Custom Hook

React custom hook to handle dark mode based on user system appearence theme and localStorage.

[DEMO](https://hook-dark-mode.netlify.com/)

## Benefits

* Gets the initial value from the user system about color scheme preference by using media query `prefers-color-scheme`
* Saves the preffered color scheme to localStorage so on consecutive visits the value will be fetched from there. Useful for cased when the system color scheme is light, but the user prefer to use the dark scheme in your app or vice versa.
* Simple to use, just install and import the hook in your app `import { useDarkMode } from "hook-dark-mode"`
* No extra dependencies

## Installation

The easiest way to use useDarkMode hook is to install it from **npm** or **yarn**.

```sh
npm install hook-dark-mode --save
```

Or

```sh
yarn add hook-dark-mode
```

## Usage
Pull the hook into your component (usually the root one) and call the hook inside the functional component. Then based on the user preference you can add corresponding classes to the wrapper element.

```js
import { useDarkMode } from "hook-dark-mode";

function App() {
  const [prefersDarkMode, setDarkMode] = useDarkMode();

  return (
    <div className={"App " + (prefersDarkMode ? "dark" : "light")}>
        <p>Current color mode: {prefersDarkMode ? "Dark" : "Light"}</p>

        <button type="button" onClick={() => setDarkMode(!prefersDarkMode)}>
          Set {prefersDarkMode ? "light" : "dark"} mode
        </button>
    </div>
  );
}
```

In your css styles you would need the classes for dark and light mode according to your app design. For example,

```css
.dark {
  background-color: #282c34;
  color: white;
}

.light {
  background-color: white;
  color: #282c34;
}
```