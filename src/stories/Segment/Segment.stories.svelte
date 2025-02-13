<script module>
  import { Placeholder, Segment, Divider, Button } from "$lib";
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import { fn } from "@storybook/test";

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    title: "Elements/Segment",
    component: Segment,
    tags: ["autodocs"],
    parameters: {
      docs: {
        controls: { expanded: false }, // Menyembunyikan properti di Docs secara default
      },
    },
    args: {
      onClick: fn(),
    },
  });
</script>

<Story name="Standard">
  <Segment>
    <div class="ui placeholder">
      <div class="image header">
        <div class="line"></div>
        <div class="line"></div>
      </div>
      <div class="paragraph">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
    </div>
  </Segment>
</Story>

<Story name="Empty">
  <Segment>
    <Placeholder />
  </Segment>
</Story>

<Story name="Raised">
  <Segment raised={true}>
    <Placeholder />
  </Segment>
</Story>

<Story name="Stacked">
  <Segment stacked={true}>
    <Placeholder />
  </Segment>
</Story>

<Story name="Piled">
  <Segment piled={true}>
    <Placeholder />
  </Segment>
</Story>

<Story name="Disabled">
  <Segment state="disabled">
    <Placeholder />
  </Segment>
</Story>

<Story name="Loading">
  <Segment state="loading">
    <Placeholder />
  </Segment>
</Story>

<Story name="inverted">
  <Segment inverted={true}>
    <Placeholder inverted={true} />
  </Segment>
</Story>

<Story name="Attached">
  <Segment attached="top attached">
    <p>This segment is on top</p>
  </Segment>
  <Segment attached="attached">
    <p>This segment is attached on both sides</p>
  </Segment>
  <Segment attached="bottom attached">
    <p>This segment is on bottom</p>
  </Segment>

  <Divider margin="section" />

  <h5 class="ui top attached header">Dogs</h5>
  <Segment attached="attached">
    <p>Dogs are one type of animal</p>
  </Segment>
  <h5 class="ui attached header">Cats</h5>
  <Segment attached="attached">
    <p>
      Cats are thought of as being related to dogs, but only humans think this.
    </p>
  </Segment>
  <h5 class="ui attached header">Lions</h5>
  <Segment attached="attached">
    <p>Humans don't think of lions as being like cats, but they are.</p>
  </Segment>
  <div class="ui bottom attached warning message">
    <i class="warning icon"></i>
    You've reached the end of this content segment!
  </div>
</Story>

<Story name="Padded">
  <Segment padded="padded">
    <Placeholder />
  </Segment>
  <Divider margin="section" />

  <Segment padded="very padded">
    <Placeholder />
  </Segment>
</Story>

<Story name="Compact">
  <Segment compact={true}>
    <p>
      Pellentesque habitant morbi tristique.
    </p>
  </Segment>
</Story>

<Story name="Colored">
  <Segment color="red">Red</Segment>
  <Segment color="orange">Orange</Segment>
  <Segment color="yellow">Yellow</Segment>
  <Segment color="olive">Olive</Segment>
  <Segment color="green">Green</Segment>
  <Segment color="teal">Teal</Segment>
  <Segment color="blue">Blue</Segment>
  <Segment color="violet">Violet</Segment>
  <Segment color="purple">Puple</Segment>
  <Segment color="pink">Pink</Segment>
  <Segment color="brown">Brown</Segment>
  <Segment color="grey">Grey</Segment>
  <Segment color="black">Black</Segment>
</Story>

<Story name="Inverted Color">
  <Segment color="red" inverted={true}>Red</Segment>
  <Segment color="orange" inverted={true}>Orange</Segment>
  <Segment color="yellow" inverted={true}>Yellow</Segment>
  <Segment color="olive" inverted={true}>Olive</Segment>
  <Segment color="green" inverted={true}>Green</Segment>
  <Segment color="teal" inverted={true}>Teal</Segment>
  <Segment color="blue" inverted={true}>Blue</Segment>
  <Segment color="violet" inverted={true}>Violet</Segment>
  <Segment color="purple" inverted={true}>Purple</Segment>
  <Segment color="pink" inverted={true}>Pink</Segment>
  <Segment color="brown" inverted={true}>Brown</Segment>
  <Segment color="grey" inverted={true}>Grey</Segment>
  <Segment color="black" inverted={true}>Black</Segment>
</Story>

<Story name="Emphasis">
  <Segment>
    <p>I'm here to tell you something, and you will probably read me first.</p>
  </Segment>
  <Segment emphasis="secondary">
    <p>
      I am pretty noticeable but you might check out other content before you
      look at me.
    </p>
  </Segment>
  <Segment emphasis="tertiary">
    <p>If you notice me you must be looking very hard.</p>
  </Segment>

  <Divider />

  <Segment inverted={true}>
    <p>I'm here to tell you something, and you will probably read me first.</p>
  </Segment>
  <Segment emphasis="secondary" inverted={true}>
    <p>
      I am pretty noticeable but you might check out other content before you
      look at me.
    </p>
  </Segment>
  <Segment emphasis="tertiary" inverted={true}>
    <p>If you notice me you must be looking very hard.</p>
  </Segment>

  <Divider />

  <Segment inverted={true} color="red">
    <p>I'm here to tell you something, and you will probably read me first.</p>
  </Segment>
  <Segment emphasis="secondary" inverted={true} color="red">
    <p>
      I am pretty noticeable but you might check out other content before you
      look at me.
    </p>
  </Segment>
  <Segment emphasis="tertiary" inverted={true} color="red">
    <p>If you notice me you must be looking very hard.</p>
  </Segment>
</Story>

<Story name="Clearing">
  <Segment clearing={true}>
    <Button floated="right">Floated</Button>
  </Segment>
</Story>

<Story name="Floated">
  <Segment floated="left">
    <p>This segment will appear to the left</p>
  </Segment>
  <Segment floated="right">
    <p>This segment will appear to the right</p>
  </Segment>
</Story>

<Story name="Text Alignment">
  <Segment textAlignment="right">
    <p>Right</p>
  </Segment>
  <Segment textAlignment="center">
    <p>Center</p>
  </Segment>
  <Segment textAlignment="left">
    <p>Left</p>
  </Segment>
</Story>

<Story name="Basic">
  <Segment basic={true}>
    <p>
      Pellentesque habitant morbi tristique senectus et netus et malesuada fames
      ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget,
      tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.
      Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
    </p>
  </Segment>
</Story>
