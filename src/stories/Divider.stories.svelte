<script module>
    import { Divider, Segment, Placeholder, IconButton } from "$lib";
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import { fn } from "@storybook/test";

    // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
    const { Story } = defineMeta({
        title: "Elements/Divider",
        component: Divider,
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
    <Divider />
</Story>

<Story name="Vertical">
    <Segment>
        <div class="ui two column very relaxed grid">
            <div class="column">
                <Placeholder lines={[null, null, null, null, null]} />
            </div>
            <div class="column">
                <Placeholder lines={[null, null, null, null, null]} />
            </div>
        </div>
        <Divider axis="vertical" label="and" />
    </Segment>
</Story>

<Story name="Horizontal">
    <Segment textAlignment="center" basic={true}>
        <div class="ui left icon action input">
            <i class="search icon"></i>
            <input type="text" placeholder="Order #" />
            <div class="ui blue submit button">Search</div>
        </div>
        <Divider axis="horizontal" label="or" />
        <IconButton icon="add" labeled={true} color="teal">
            Create New Order
        </IconButton>
    </Segment>
</Story>

<Story name="Header">
    <Divider axis="horizontal" header={true} icon="tag" label="Description" />
    <p>
        Doggie treats are good for all times of the year. Proven to be eaten by
        99.9% of all dogs worldwide.
    </p>
</Story>

<Story name="Inverted">
    <Segment inverted={true}>
        <Placeholder inverted={true} />
        <Divider inverted={true} />
        <Placeholder inverted={true} />
        <Divider inverted={true} axis="horizontal" label="Horizontal" />
    </Segment>
</Story>

<Story name="Margin">
    <Segment>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
        Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
        Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
        <Divider margin="fitted" />
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque
        volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh,
        viverra non, semper suscipit, posuere a, pede.
    </Segment>

    <Segment>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
        Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
        Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
        <Divider margin="section" />
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque
        volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh,
        viverra non, semper suscipit, posuere a, pede.
    </Segment>
</Story>

<Story name="Hidden">
    <Segment>
        <Placeholder />
        <Divider hidden={true} />
        <Placeholder />
    </Segment>
</Story>

<Story name="Clearing">
    <Segment>
        <h2 class="ui right floated header">Floated Content</h2>
        <Divider clearing={true} />
        <Placeholder />
    </Segment>
</Story>
