<script lang="ts">
    import type { ListMessageType } from "../types/types.ts";

    // Destructure props from $props()
    let {
        header = null,
        items = [],
        size = null,
        color = null,
        compact = false,
        floating = false,
        attached = null,
        inverted = false,
        warning = false,
        positive = false,
        negative = false,
        error = false,
        info = false,
        hidden = false,
        visible = true,
        dismissable = false,
        customClass = "",
        styles = "",
        onDismiss = null,
    }: ListMessageType = $props();

    // Generate class names dynamically
    let classNames = [
        "ui",
        size,
        color,
        compact && "compact",
        floating && "floating",
        attached && `${attached} attached`,
        inverted && "inverted",
        warning && "warning",
        positive && "positive",
        negative && "negative",
        error && "error",
        info && "info",
        hidden && "hidden",
        visible && "visible",
        "message",
        customClass,
    ]
        .filter(Boolean)
        .join(" ");

    // Function to handle dismiss
    const handleDismiss = () => {
        if (onDismiss) onDismiss();
    };
</script>

<div class={classNames} style={styles}>
    {#if dismissable}
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <i class="close icon" onclick={handleDismiss}></i>
    {/if}
    <div class="header">{header}</div>
    <ul class="list">
        {#each items as item}
            <li>{item}</li>
        {/each}
      </ul>
</div>
