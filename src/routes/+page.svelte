<script lang="ts">
    
    import Button from "$lib/components/button/Button.svelte";
    import IconButton from "$lib/components/button/IconButton.svelte";
    import Buttons from "$lib/components/button/Buttons.svelte";
    import LabeledButton from "$lib/components/button/LabeledButton.svelte";
    import Header from "$lib/components/headers/Header.svelte";
    import Image from "$lib/Image.svelte";
    import Input from "$lib/Input.svelte";
    import Placeholder from "$lib/Placeholder.svelte";

    function handleClick(event: { detail: any }) {
        console.log("Click event:", event.detail); // { state, timestamp }
    }

    let text = "Initial value";

    let visible = true;
    const handleDismiss = () => {
        visible = false;
    };
</script>

<!-- <Button
    type="button"
    icon="loading spinner"
    color="blue"
    iconPosition="right"
    onClick={handleClick}
    >Press Me!
</Button> -->

<Button href="https://google.com" target="_blank">Link To Google</Button>


<Header>
    <i class="settings icon"></i>
    <div class="content">
        Account Settings
        <div class="sub header">
            Manage your account settings and set e-mail preferences.
        </div>
    </div>
</Header>

<Image src="https://placehold.co/600x400" alt="Example image" circular />

<Input placeholder="Enter text..." bind:value={text} icon="search" />
<p>You entered: {text}</p>


<Placeholder content={[{ type: "line", count: 3 }]} />
