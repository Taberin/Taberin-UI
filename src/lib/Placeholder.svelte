<script lang="ts">
    import type { PlaceholderType, PlaceholderContent } from "../types/types.ts";

    // Destructure props from $props()
    let {
        fluid = false,
        inverted = false,
        customClass = "",
        styles = "",
        content = [],
    }: PlaceholderType = $props();

    // Generate class names dynamically
    let classNames = [
        "ui",
        fluid && "fluid",
        inverted && "inverted",
        "placeholder",
        customClass,
    ]
        .filter(Boolean)
        .join(" ");
</script>

<div class={classNames} style={styles}>
    {#each content as item}
        {#if item.type === "header"}
            <div class="header">
                {#each Array(item.count || 1) as _}
                    <div class="line"></div>
                {/each}
            </div>
        {:else if item.type === "paragraph"}
            <div class="paragraph">
                {#each Array(item.count || 1) as _}
                    <div class="line"></div>
                {/each}
            </div>
        {:else if item.type === "line"}
            {#each Array(item.count || 1) as _}
                <div class="line"></div>
            {/each}
        {:else if item.type === "image"}
            <div class="image"></div>
        {/if}
    {/each}
</div>
