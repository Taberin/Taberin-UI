<script module>
    import LabeledButton from "$lib/components/button/LabeledButton.svelte";
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import { fn } from "@storybook/test";
  
    // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
    const { Story } = defineMeta({
      title: "Elements/LabeledButton",
      component: LabeledButton,
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
    <LabeledButton text="Like" icon="heart">
        <!-- svelte-ignore a11y_invalid_attribute -->
        <a href="#" class="ui basic label">
            2,048
        </a>
    </LabeledButton>
  </Story>

  <Story name="Pointed">
    <LabeledButton label="Like" icon="heart" position="right">
        <!-- svelte-ignore a11y_invalid_attribute -->
        <a href="#" class="ui basic right pointing label">
            2,048
        </a>
    </LabeledButton>
  </Story>

  <Story name="Icon Only">
    <LabeledButton icon="fork" position="right">
        <!-- svelte-ignore a11y_invalid_attribute -->
        <a href="#" class="ui basic label">
            2,048
        </a>
    </LabeledButton>
  </Story>

  <Story name="Color and Basic">
    <LabeledButton icon="heart" color="red" label="like">
        <!-- svelte-ignore a11y_invalid_attribute -->
        <a href="#" class="ui basic red left pointing label">
            1,048
        </a>
    </LabeledButton>
    <LabeledButton icon="fork" position="right" label="Forms" color="blue" basic={true}>
        <!-- svelte-ignore a11y_invalid_attribute -->
        <a href="#" class="ui basic right pointing blue label">
            1,048
        </a>
    </LabeledButton>
  </Story>
  