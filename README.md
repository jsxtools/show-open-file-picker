# show-open-file-picker

A cross-browser ponyfill or polyfill for `showOpenFilePicker()` and `showSaveFilePicker()`.

The `showOpenFilePicker()` method shows a file picker that allows a user to
select a file or multiple files and returns a handle for the file(s).

```shell
npm install show-open-file-picker
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Window/showOpenFilePicker)

## Usage

```html
<script src="https://cdn.jsdelivr.net/npm/show-open-file-picker/polyfill.js"></script>

<button id="button">Show Open File Picker</button>

<script>
button.onclick = () => {
  showOpenFilePicker({
    types: [
      {
        description: "Images",
        accept: {
          "image/*": [".png", ".gif", ".jpeg", ".jpg"],
        },
      },
    ],
    excludeAcceptAllOption: true,
    multiple: false,
  })
}
</script>
```

```js
import { showOpenFilePicker } from 'show-open-file-picker'

button.onclick = () => {
  showOpenFilePicker({
    types: [
      {
        description: "Images",
        accept: {
          "image/*": [".png", ".gif", ".jpeg", ".jpg"],
        },
      },
    ],
    excludeAcceptAllOption: true,
    multiple: false,
  })
}
```
