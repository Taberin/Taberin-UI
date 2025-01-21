<script lang="ts">
    import "semantic-ui-css/semantic.min.css";
    import Button from "$lib/Button.svelte";
    import IconButton from "$lib/IconButton.svelte";
    import Header from "$lib/Header.svelte";
    import Image from "$lib/Image.svelte";
    import Input from "$lib/Input.svelte";
    import Message from "$lib/Message.svelte";

    function handleClick(event: { detail: any }) {
        console.log("Click event:", event.detail); // { state, timestamp }
    }

    let text = "Initial value";

    let visible = true;
    const handleDismiss = () => {
        visible = false;
    };
</script>

<Button
    type="button"
    icon="loading spinner"
    color="blue"
    iconPosition="right"
    onClick={handleClick}
    >Press Me!
</Button>

<Button href="https://google.com" target="_blank">Link To Google</Button>

<IconButton
    type="button"
    icon="right arrow"
    color="teal"
    href="https://google.com"
    target="_blank"
    onClick={handleClick}
/>

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

{#if visible}
    <Message header="Notice" content={text} dismissable onDismiss={handleDismiss} />
{/if}
