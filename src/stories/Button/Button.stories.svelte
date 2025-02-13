<script module>
  import Button from "$lib/components/button/Button.svelte";
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import { fn } from "@storybook/test";

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    title: "Elements/Button",
    component: Button,
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
  <Button>Follow</Button>
</Story>

<!-- A button can have different colors : https://semantic-ui.com/elements/button.html#colored -->
<Story name="Colored">
  <Button >standard</Button>
  <Button color="primary">primary</Button>
  <Button color="secondary">secondary</Button>
  <Button color="black">black</Button>
  <Button color="blue">blue</Button>
  <Button color="brown">brown</Button>
  <Button color="green">green</Button>
  <Button color="grey">grey</Button>
  <Button color="olive">olive</Button>
  <Button color="orange">orange</Button>
  <Button color="pink">pink</Button>
  <Button color="purple">purple</Button>
  <Button color="red" >red</Button>
  <Button color="teal" >teal</Button>
  <Button color="violet">violet</Button>
  <Button color="yellow">yellow</Button>
  <Button color="positive">positive</Button>
  <Button color="negative">negative</Button>
</Story>

<Story name="Basic">
  <Button basic={true}>standard</Button>
  <Button color="primary" basic={true}>primary</Button>
  <Button color="secondary" basic={true}>secondary</Button>
  <Button color="black" basic={true}>black</Button>
  <Button color="blue" basic={true}>blue</Button>
  <Button color="brown" basic={true}>brown</Button>
  <Button color="green" basic={true}>green</Button>
  <Button color="grey" basic={true}>grey</Button>
  <Button color="olive" basic={true}>olive</Button>
  <Button color="orange" basic={true}>orange</Button>
  <Button color="pink" basic={true}>pink</Button>
  <Button color="purple" basic={true}>purple</Button>
  <Button color="red" basic={true}>red</Button>
  <Button color="teal" basic={true}>teal</Button>
  <Button color="violet" basic={true}>violet</Button>
  <Button color="yellow" basic={true}>yellow</Button>
  <Button color="positive" basic={true}>positive</Button>
  <Button color="negative" basic={true}>negative</Button>
</Story>

<Story
  name="Inverted"
  parameters={{
    backgrounds: { default: "dark" },
  }}
>
<Button inverted={true}>standard</Button>
<Button color="primary" inverted={true}>primary</Button>
<Button color="secondary" inverted={true}>secondary</Button>
<Button color="black" inverted={true}>black</Button>
<Button color="blue" inverted={true}>blue</Button>
<Button color="brown" inverted={true}>brown</Button>
<Button color="green" inverted={true}>green</Button>
<Button color="grey" inverted={true}>grey</Button>
<Button color="olive" inverted={true}>olive</Button>
<Button color="orange" inverted={true}>orange</Button>
<Button color="pink" inverted={true}>pink</Button>
<Button color="purple" inverted={true}>purple</Button>
<Button color="red" inverted={true}>red</Button>
<Button color="teal" inverted={true}>teal</Button>
<Button color="violet" inverted={true}>violet</Button>
<Button color="yellow" inverted={true}>yellow</Button>
<Button color="positive" inverted={true}>positive</Button>
<Button color="negative" inverted={true}>negative</Button>
</Story>

<Story name="Size">
  <Button size="mini" >mini</Button>
  <Button size="tiny" >tiny</Button>
  <Button size="small" >small</Button>
  <Button size="medium" >medium</Button>
  <Button size="large" >large</Button>
  <Button size="big" >big</Button>
  <Button size="huge" >huge</Button>
  <Button size="massive" >massive</Button>
</Story>

<Story name="State">
  <Button state="active">Active</Button>
  <Button state="disabled">Disabled</Button>
  <Button state="loading">Loading</Button>
</Story>

<Story name="Compact">
  <Button compact={true} >compact</Button>
  <Button compact={true} color="teal" basic={true} >compact</Button>
</Story>

<Story name="Fluid">
  <Button fluid={true} >fluid</Button>
</Story>

<Story name="Vertically Attached">
  <Button attached="top" fluid={true}>Top</Button>
  <div class="ui attached segment">
    <div class="ui placeholder">
      <div class="image header">
        <div class="line"></div>
        <div class="line"></div>
      </div>
      <div class="paragraph">
        <div class="medium line"></div>
        <div class="short line"></div>
      </div>
    </div>
  </div>
  <Button attached="bottom" fluid={true}>Top</Button>
</Story>

<Story name="Floated">
  <Button >Float Left</Button>
  <Button floated="right">Float Right</Button>
</Story>