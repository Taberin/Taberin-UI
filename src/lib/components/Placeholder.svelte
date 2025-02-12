<script lang="ts">
    import type { PlaceholderProps } from "$lib/types/placeholder";

    let {
        headers = null,
        fluid = null,
        lines = [null, null],
        inverted = null,
    }: PlaceholderProps = $props();

    let classNames = [
        "ui",
        fluid && "fluid",
        inverted && "inverted",
        "placeholder",
    ]
        .filter(Boolean)
        .join(" ");
</script>

<div class={classNames}>
    {#if headers}
        {#each headers as header}
            <div class={`${header.image && "image"} header`}>
                {#if header.lines}
                    {#each header.lines as line}
                        <div class={`${line} line`}></div>
                    {/each}
                {:else}
                    <div class="line"></div>
                    <div class="line"></div>
                {/if}
            </div>
        {/each}
    {/if}

    <div class="paragraph">
        {#each lines as line}
            <div class={`${line} line`}></div>
        {/each}
    </div>
</div>
