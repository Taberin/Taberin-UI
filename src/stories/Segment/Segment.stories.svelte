<script module>
    import { Segment } from "$lib";
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import { fn } from "@storybook/test";

    // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
    const { Story } = defineMeta({
        title: "Segment/Segment",
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

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
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
        <p></p>
    </Segment>
</Story>

<Story name="Raised">
    <Segment raised={true}>
        <div class="ui placeholder">
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

<Story name="Stacked">
    <Segment stacked={true}>
        <div class="ui placeholder">
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

<Story name="Piled">
    <Segment piled={true}>
        <div class="ui placeholder">
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

<Story name="Disabled">
    <Segment state="disabled">
        <div class="ui placeholder">
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

<Story name="Loading">
    <Segment state="loading">
        <div class="ui placeholder">
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


