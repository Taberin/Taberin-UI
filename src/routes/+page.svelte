<script lang="ts">
    import "semantic-ui-css/semantic.min.css";
    import Button from "$lib/Button.svelte";
    import IconButton from "$lib/IconButton.svelte";
    import Header from "$lib/Header.svelte";
    import Image from "$lib/Image.svelte";

    function handleClick(event: { detail: any }) {
        console.log("Click event:", event.detail); // { state, timestamp }
    }
</script>

<Button
    type="button"
    icon="loading spinner"
    color="blue"
    iconPosition="right"
    onclick={handleClick}
    >Press Me!
</Button>

<Button href="https://google.com" target="_blank">Link To Google</Button>

<IconButton
    type="button"
    icon="right arrow"
    color="teal"
    href="https://google.com"
    target="_blank"
    onclick={handleClick}
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
