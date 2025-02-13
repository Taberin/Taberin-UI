<script module>
    import { Placeholder, Segment } from "$lib";
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import { fn } from "@storybook/test";

    // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
    const { Story } = defineMeta({
        title: "Elements/Placeholder",
        component: Placeholder,
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
    <Placeholder />
</Story>

<Story name="Multiple Lines">
    <Placeholder lines={[null, null, null, null, null]} />
</Story>

<Story name="Headers">
    <Segment>
        <Placeholder headers={[]} />
        <div class="ui divider"></div>
        <Placeholder headers={[{ image: true }]} />
        <div class="ui divider"></div>
        <Placeholder
            headers={[
                { image: true, lines: [null, null, null] },
                { image: true },
            ]}
        />
    </Segment>
</Story>

<Story name="Multiple Lines Length">
    <Segment>
        <Placeholder
            lines={[
                "very short",
                "short",
                "medium",
                "long",
                "very long",
                "full",
            ]}
        />
    </Segment>
</Story>

<Story name="Fluid">
    <Segment>
        <Placeholder fluid={true} />
    </Segment>
</Story>

<Story name="Image">
    <div class="ui card">
        <div class="content">
            <Placeholder image="square" />
        </div>
    </div>

    <div class="ui card">
        <div class="content">
            <Placeholder image="rectangle" />
        </div>
    </div>
</Story>

<Story name="Inverted">
    <Segment inverted={true}>
        <Placeholder
            inverted={true}
            lines={[null, null, null]}
            headers={[{ image: true }]}
        />
    </Segment>
</Story>
