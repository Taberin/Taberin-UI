<script lang="ts">
    import type { InputType } from "../types/types.ts";

    // Destructure props from $props()
    let {
        type = "text",
        placeholder = "",
        value = $bindable(),
        disabled = false,
        loading = false,
        icon = null,
        iconPosition = "right",
        fluid = false,
        inverted = false,
        size = null,
        error = false,
        transparent = false,
        customClass = "",
        styles = "",
        onInput = null,
        onChange = null,
    }: InputType = $props();

    // Generate class names dynamically
    let classNames = [
        "ui",
        size,
        fluid && "fluid",
        inverted && "inverted",
        error && "error",
        transparent && "transparent",
        loading && "loading",
        icon && "icon",
        "input",
        customClass,
    ]
        .filter(Boolean)
        .join(" ");
</script>

<div class={classNames} style={styles}>
    {#if icon && iconPosition === "left"}
        <i class={`${icon} icon`}></i>
    {/if}
    <input
        type={type}
        placeholder={placeholder}
        bind:value={value}
        disabled={disabled}
    />
    {#if icon && iconPosition === "right"}
        <i class={`${icon} icon`}></i>
    {/if}
</div>