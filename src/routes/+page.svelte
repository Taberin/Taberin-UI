<script lang="ts">
    import "../styles/semantic.css";
    import Button from "$lib/Button.svelte";

    function handleClick(event: { detail: any }) {
        console.log("Click event:", event.detail); // { state, timestamp }
    }

</script>

<Button
    type="button"
    color="black"
    onclick={handleClick}>Press Me!</Button
>
