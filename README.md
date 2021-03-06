# React Pixel Perfect

Upload and compare the markup design with your screen while you're coding.

## Why

Have you ever tried to create a screen following a markup but it doesn't look perfect? It's very difficult to create a pixel perfect screen switching your eyes between monitors, tabs and the designers always find a spacing, color, line height to be fixed when they're doing the QA.

React Pixel Perfect puts the design markup over your layout, so, you can see the differences between them, controlling its position, size and opacity.

Designers also can use the [official website](https://react-pixel-perfect.netlify.app/#/) to do a QA, entering an URL of a screen to inspect.

## Installation

```cmd
npm install -D react-pixel-perfect
// or
yarn add -D react-pixel-perfect
```

## Usage

Import the main component and wrap to top level of your application or page that you want to compare.

```javascript
import PixelPerfect from "react-pixel-perfect";

function App(props) {
  return <YourApplication {...props} />;
}

export default PixelPerfect(App);
```

A button should appears on the right bottom of your page. Now you can upload a image and then controll its size, position, opacity over your screen, reset its settings and delete the image.

## It's important to you know

- The localstorage's API is used to save your image as base64, its size limit is 10MB. If the cota is exceeded, it will not save/update but you can still use it.

- A layer with your uploaded image is put over your page, nevertheless, mouse's events, such as hover, click, focus on elements might not work properly.

## Contribution

Please, feel free to use it, open an issue or a pull request.

License

MIT
