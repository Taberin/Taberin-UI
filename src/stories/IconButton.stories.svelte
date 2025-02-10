<script module>
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import IconButton from "$lib/components/button/IconButton.svelte";
  import { fn } from "@storybook/test";

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    title: "Button/IconButton",
    component: IconButton,
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
  <IconButton icon="plus" />
</Story>

<Story name="With Text">
  <IconButton icon="chevron left">Back</IconButton>
</Story>

<Story name="Right Icon">
  <IconButton icon="thumbs up" basic={true} position="right">Like</IconButton>
</Story>

<Story name="Colored">
  <IconButton icon="bus" />
  <IconButton icon="car" color="primary" />
  <IconButton icon="user secret" color="secondary" />
  <IconButton icon="blind" color="black" />
  <IconButton icon="smile outline" color="blue" />
  <IconButton icon="thermometer empty" color="brown" />
  <IconButton icon="unlock" color="green" />
  <IconButton icon="eye" color="grey" />
  <IconButton icon="calendar" color="olive" />
  <IconButton icon="battery half" color="orange" />
  <IconButton icon="bell slash" color="pink" />
  <IconButton icon="child" color="purple" />
  <IconButton icon="battery empty" color="red" />
  <IconButton icon="battery full" color="teal" />
  <IconButton icon="paper plane" color="violet" />
  <IconButton icon="quote left" color="yellow" />
  <IconButton icon="heart" color="positive" />
  <IconButton icon="ban" color="negative" />
</Story>

<Story name="Basic">
  <IconButton icon="bus" basic={true} />
  <IconButton icon="car" color="primary" basic={true} />
  <IconButton icon="user secret" color="secondary" basic={true} />
  <IconButton icon="blind" color="black" basic={true} />
  <IconButton icon="smile outline" color="blue" basic={true} />
  <IconButton icon="thermometer empty" color="brown" basic={true} />
  <IconButton icon="unlock" color="green" basic={true} />
  <IconButton icon="eye" color="grey" basic={true} />
  <IconButton icon="calendar" color="olive" basic={true} />
  <IconButton icon="battery half" color="orange" basic={true} />
  <IconButton icon="bell slash" color="pink" basic={true} />
  <IconButton icon="child" color="purple" basic={true} />
  <IconButton icon="battery empty" color="red" basic={true} />
  <IconButton icon="battery full" color="teal" basic={true} />
  <IconButton icon="paper plane" color="violet" basic={true} />
  <IconButton icon="quote left" color="yellow" basic={true} />
  <IconButton icon="heart" color="positive" basic={true} />
  <IconButton icon="ban" color="negative" basic={true} />
</Story>

<Story
  name="Inverted"
  parameters={{
    backgrounds: { default: "dark" },
  }}
>
  <IconButton icon="bus" inverted={true} />
  <IconButton icon="car" color="primary" inverted={true} />
  <IconButton icon="user secret" color="secondary" inverted={true} />
  <IconButton icon="blind" color="black" inverted={true} />
  <IconButton icon="smile outline" color="blue" inverted={true} />
  <IconButton icon="thermometer empty" color="brown" inverted={true} />
  <IconButton icon="unlock" color="green" inverted={true} />
  <IconButton icon="eye" color="grey" inverted={true} />
  <IconButton icon="calendar" color="olive" inverted={true} />
  <IconButton icon="battery half" color="orange" inverted={true} />
  <IconButton icon="bell slash" color="pink" inverted={true} />
  <IconButton icon="child" color="purple" inverted={true} />
  <IconButton icon="battery empty" color="red" inverted={true} />
  <IconButton icon="battery full" color="teal" inverted={true} />
  <IconButton icon="paper plane" color="violet" inverted={true} />
  <IconButton icon="quote left" color="yellow" inverted={true} />
  <IconButton icon="heart" color="positive" inverted={true} />
  <IconButton icon="ban" color="negative" inverted={true} />
</Story>

<Story name="Size">
  <IconButton icon="user" size="mini" />
  <IconButton icon="user" size="tiny" />
  <IconButton icon="user" size="small" />
  <IconButton icon="user" size="medium" />
  <IconButton icon="user" size="large" />
  <IconButton icon="user" size="big" />
  <IconButton icon="user" size="huge" />
  <IconButton icon="user" size="massive" />
</Story>

<Story name="State">
  <IconButton icon="user" state="active">Active</IconButton>
  <IconButton icon="user" state="disabled" >Disabled</IconButton>
  <IconButton icon="user" state="loading" >Loading</IconButton>
</Story>

<Story name="Compact">
  <IconButton icon="user" compact={true} />
  <IconButton icon="bus" compact={true} color="teal" basic={true} />
</Story>

<Story name="Fluid">
  <IconButton icon="exchange" fluid={true} />
</Story>

<Story name="Circular">
  <IconButton icon="exchange" circular={true} />
</Story>
