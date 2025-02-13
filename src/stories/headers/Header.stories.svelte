<script module>
    import { Divider, Header, Placeholder, Segment, SubHeader } from "$lib";
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import { fn } from "@storybook/test";

    // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
    const { Story } = defineMeta({
        title: "Elements/Header",
        component: Header,
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
    <Header>First Header</Header>
</Story>

<Story name="Page Headers">
    <Header>First Header</Header>
    <Placeholder />
    <Header level="h2">Second Header</Header>
    <Placeholder />
    <Header level="h3">Third Header</Header>
    <Placeholder />
    <Header level="h4">Fourth Header</Header>
    <Placeholder />
    <Header level="h5">Fifth Header</Header>
    <Placeholder />
</Story>

<Story name="Content Headers">
    <Header type="content">Huge Header</Header>
    <Placeholder />

    <Header type="content" size="large">Large Header</Header>
    <Placeholder />

    <Header type="content" size="medium">Medium Header</Header>
    <Placeholder />

    <Header type="content" size="small">Small Header</Header>
    <Placeholder />

    <Header type="content" size="tiny">Tiny Header</Header>
    <Placeholder />
</Story>

<Story name="Sub Headers">
    <Header level="h2" sub={true}>Price</Header>
    <span>Rp. 1.250.000</span>
    <Divider margin="section" />
    <div class="ui horizontal list">
        <div class="item">
            <img
                class="ui mini circular image"
                src="https://semantic-ui.com/images/avatar2/small/molly.png"
                alt="avatar"
            />
            <div class="content">
                <Header sub={true}>Molly</Header>
                Coordinator
            </div>
        </div>
        <div class="item">
            <img
                class="ui mini circular image"
                src="https://semantic-ui.com/images/avatar2/small/elyse.png"
                alt="avatar"
            />
            <div class="content">
                <Header sub={true}>Elyse</Header>
                Developer
            </div>
        </div>
        <div class="item">
            <!-- svelte-ignore a11y_missing_attribute -->
            <img
                src="https://semantic-ui.com/images/avatar2/small/eve.png"
                class="ui mini circular image"
                alt="avatar"
            />
            <div class="content">
                <Header sub={true}>Eve</Header>
                Project Manager
            </div>
        </div>
    </div>
</Story>

<Story name="Image">
    <Header level="h2">
        <img
            class="ui image"
            src="https://semantic-ui.com/images/icons/school.png"
            alt="icon"
        />
        <div class="content">Learn More</div>
    </Header>
    <Placeholder />

    <Divider />

    <Header level="h2">
        <img
            class="ui image"
            src="https://semantic-ui.com/images/avatar2/large/patrick.png"
            alt="avatar"
        />
        Patrick
    </Header>
    <Placeholder />

    <Divider />

    <Header level="h2">
        <img
            class="ui image"
            src="https://semantic-ui.com/images/icons/plugin.png"
            alt="icon"
        />
        <div class="content">
            Plug-ins
            <SubHeader>Check out our plug-in marketplace</SubHeader>
        </div>
    </Header>
    <Placeholder />
</Story>

<Story name="Icon">
    <Header>
        <i class="plug icon"></i>
        <div class="content">Uptime Guarantee</div>
    </Header>
    <Placeholder />

    <Divider />

    <Header>
        <i class="settings icon"></i>
        <div class="content">
            Account Settings
            <SubHeader>Manage your preferences</SubHeader>
        </div>
    </Header>
    <Placeholder />
</Story>

<Story name="Subheader">
    <Header>
        Account Settings
        <SubHeader
            >Manage your account settings and set e-mail preferences.</SubHeader
        >
    </Header>
    <Placeholder />
    <Divider margin="section" />
    <Header level="h1">
        H1
        <SubHeader>Sub Header</SubHeader>
    </Header>
    <Header level="h2">
        H2
        <SubHeader>Sub Header</SubHeader>
    </Header>
    <Header level="h3">
        H3
        <SubHeader>Sub Header</SubHeader>
    </Header>
    <Header level="h4">
        H4
        <SubHeader>Sub Header</SubHeader>
    </Header>
    <Header level="h5">
        H5
        <SubHeader>Sub Header</SubHeader>
    </Header>
</Story>

<Story name="Disabled">
    <Header state="disabled">Disabled Header</Header>
    <Placeholder />
</Story>

<Story name="Dividing">
    <Header dividing={true}>Dividing Header</Header>
    <Placeholder />
</Story>

<Story name="Block">
    <Header block={true}>Block Header</Header>
    <Placeholder />
</Story>

<Story name="Attached">
    <Header attached="top attached">Top Attached</Header>
    <Segment attached="attached">
        <Placeholder />
    </Segment>
    <Header attached="attached">Attached</Header>
    <Segment attached="attached">
        <Placeholder />
    </Segment>
    <Header attached="bottom attached">Bottom Attached</Header>
</Story>

<Story name="Floating">
    <Segment clearing={true}>
        <Header floated="right">Go Forward</Header>
        <Header floated="left">Go Back</Header>
    </Segment>
</Story>

<Story name="Text Alignment">
    <Segment>
        <Header aligned="right">Right</Header>
        <Header aligned="left">Left</Header>
        <Header aligned="justified">
            This should take up the full width even if only one line
        </Header>
        <Header aligned="center">Center</Header>
    </Segment>
</Story>

<Story name="Colored">
    <Header color="red">Red</Header>
    <Header color="orange">Orange</Header>
    <Header color="yellow">Yellow</Header>
    <Header color="olive">Olive</Header>
    <Header color="green">Green</Header>
    <Header color="teal">Teal</Header>
    <Header color="blue">Blue</Header>
    <Header color="purple">Purple</Header>
    <Header color="violet">Violet</Header>
    <Header color="pink">Pink</Header>
    <Header color="brown">Brown</Header>
    <Header color="grey">Grey</Header>
</Story>

<Story name="Inverted">
    <Segment inverted={true}>
        <Header color="red" inverted={true}>Red</Header>
        <Header color="orange" inverted={true}>Orange</Header>
        <Header color="yellow" inverted={true}>Yellow</Header>
        <Header color="olive" inverted={true}>Olive</Header>
        <Header color="green" inverted={true}>Green</Header>
        <Header color="teal" inverted={true}>Teal</Header>
        <Header color="blue" inverted={true}>Blue</Header>
        <Header color="purple" inverted={true}>Purple</Header>
        <Header color="violet" inverted={true}>Violet</Header>
        <Header color="pink" inverted={true}>Pink</Header>
        <Header color="brown" inverted={true}>Brown</Header>
        <Header color="grey" inverted={true}>Grey</Header>
    </Segment>
</Story>
