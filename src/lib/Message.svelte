<script lang="ts">
    import type { MessageType } from "../types/types.ts";

    // Destructure props from $props()
    let {
        header = null,
        content = null,
        icon = null,
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
    }: MessageType = $props();

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
        <i class="close icon" on:click={handleDismiss} />
    {/if}
    {#if icon}
        <i class={`${icon} icon`}></i>
    {/if}
    {#if header}
        <div class="header">{header}</div>
    {/if}
    {#if content}
        <p>{content}</p>
    {/if}
    <slot />
</div>
