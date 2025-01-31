<script lang="ts">
    import "semantic-ui-css/semantic.min.css";
    import CustomMessage from "$lib/components/messages/CustomMessage.svelte";
    import IconMessage from "$lib/components/messages/IconMessage.svelte";
    import ListMessage from "$lib/components/messages/ListMessage.svelte";


    import Message from "$lib/components/messages/Message.svelte";

    let items = ["list item 1", "list item 2"];
    let visible = true;
    const handleDismiss = () => {
        visible = false;
    };
</script>

<Message header="Hello!" content="This is a basic message." />

<ListMessage header="List message" {items} />

<IconMessage icon="info circle" content="This is an info message." />

{#if visible}
    <Message
        header="Notice"
        content="This message can be dismissed."
        dismissable
        onDismiss={handleDismiss}
    />
{/if}

<CustomMessage>
    <p>This is a custom message with additional content.</p>
</CustomMessage>
