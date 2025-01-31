<script lang="ts">
    import type { HeaderType } from "../../../types/types.js";

    // Destructure props from $props()
    let {
        type = "page",
        size = "huge",
        level = "h1",
        inverted = false,
        dividing = false,
        block = false,
        attached = null,
        floated = null,
        aligned = null,
        customClass = "",
        styles = "",
        children,
    }: HeaderType = $props();

    // Generate class names dynamically
    let classNames = [
        "ui",
        size,
        inverted && "inverted",
        dividing && "dividing",
        block && "block",
        attached && `${attached} attached`,
        floated && `${floated} floated`,
        aligned && `${aligned} aligned`,
        "header",
        customClass,
    ]
        .filter(Boolean)
        .join(" ");
</script>

{#if level === "h1"}
    <h1 class={classNames} style={styles}>
        {@render children()}
    </h1>
{:else if level === "h2"}
    <h2 class={classNames} style={styles}>
        {@render children()}
    </h2>
{:else if level === "h3"}
    <h3 class={classNames} style={styles}>
        {@render children()}
    </h3>
{:else if level === "h4"}
    <h4 class={classNames} style={styles}>
        {@render children()}
    </h4>
{:else if level === "h5"}
    <h5 class={classNames} style={styles}>
        {@render children()}
    </h5>
{:else if type === "content"}
    <div class={classNames} style={styles}>
        {@render children()}
    </div>
{:else if type === "sub"}
    <div class={`ui sub header ${customClass}`} style={styles}>
        {@render children()}
    </div>
{:else}
    <h1 class={classNames} style={styles}>
        {@render children()}
    </h1>
{/if}
