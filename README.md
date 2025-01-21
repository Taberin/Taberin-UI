# Taberin UI

**Taberin UI** is a Svelte component library built on top of **Semantic UI**. This library is designed to help you quickly build user interfaces with consistent styles and components.

## Installation

1. Install **Taberin UI** via npm:

   ```bash
   npm install taberin-ui
   
   ```

2. Install **Semantic UI CSS** as a dependency:

   ```bash
   npm install semantic-ui-css
   
   ```

3. Import **Semantic UI CSS** into your application's entry point (e.g., `main.js` or `App.svelte`):

   ```javascript
   import 'semantic-ui-css/semantic.min.css';
   
   ```

---

## Component Checklist

The following is a list of planned components based on Semantic UI. Completed components are marked with ✅:

- ✅ **Button**: Buttons with various styles and sizes.
- ✅ **IconButton**: Buttons with icons.
- ⬜ **LabeledButton**: Button can appear alongside a label.
- ⬜ **ButtonGroup**: Buttons in one group.
- ✅ **Container**: Container limits content to a maximum width.
- ✅ **Divider**: Divider visually segments content into groups.
- ✅ **Header**: Header provides a short summary of content.
- ⬜ **Flag**: Flag is used to represent a political state.
- ⬜ **Input**: Text input fields with optional styles and icons.
- ⬜ **Dropdown**: Dropdown menus with multiple options.
- ⬜ **Checkbox**: Checkboxes with customizable styles.
- ⬜ **Modal**: Modal dialog components.
- ⬜ **Card**: Cards for displaying content like images, text, and buttons.
- ⬜ **Menu**: Navigation menus with different styles.
- ⬜ **Table**: Tables with headers, footers, and layout variations.
- ⬜ **Loader**: Loading indicators for pages or specific elements.

---

## Basic Usage

### Example: Button

```svelte
<script>
    import { Button } from 'taberin-ui';
</script>

<Button color="blue" size="large">Click Me</Button>
```

### Example: IconButton

```svelte
<script>
    import { IconButton } from 'taberin-ui';
</script>

<IconButton icon="plus" ariaLabel="Add Item" />
```

---

## License

This project is licensed under the [MIT License](https://chatgpt.com/c/LICENSE).

---

Feel free to ask if you need further assistance! 🚀