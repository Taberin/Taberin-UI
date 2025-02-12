<script module>
    import {Buttons, Button, IconButton} from "$lib";
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import { fn } from "@storybook/test";
  
    // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
    const { Story } = defineMeta({
      title: "Button/Buttons",
      component: Buttons,
      tags: ["autodocs"],
      parameters: {
        docs: {
          controls: { expanded: false }, // Menyembunyikan properti di Docs secara default
        },
      },
      argTypes: {
        size: {
          control: { type: "select" },
          options: [
            "mini",
            "tiny",
            "small",
            "medium",
            "large",
            "big",
            "huge",
            "massive",
          ],
        },
      },
      args: {
        onClick: fn(),
      },
    });
  </script>
  
  <!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
  <Story name="Standard">
    <Buttons>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>three</Button>
    </Buttons>
  </Story>

  <Story name="Icon">
    <Buttons>
        <IconButton icon="align left" />
        <IconButton icon="align center" />
        <IconButton icon="align right" />
    </Buttons>
    <Buttons>
        <IconButton icon="bold" />
        <IconButton icon="underline" />
        <IconButton icon="text width" />
    </Buttons>
  </Story>