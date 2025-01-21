<script lang="ts">
    import 'semantic-ui-css/semantic.min.css';
    import Button from "$lib/Button.svelte";

    function handleClick(event: { detail: any }) {
        console.log("Click event:", event.detail); // { state, timestamp }
    }

</script>

<Button
    type="button"
    icon="loading spinner"
    color="blue"
    iconPosition="right"
    onclick={handleClick}>Press Me! </Button
>

<Button href="https://google.com" target="_blank">Link</Button>
