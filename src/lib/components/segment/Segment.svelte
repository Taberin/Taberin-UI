<script lang="ts">
    import type { SegmentProps } from "$lib/types/segment";

    let {
        raised = null,
        stacked = null,
        piled = null,
        placeholder = null,
        state = null,
        inverted = null,
        textAlignment = null,
        basic = false,
        children,
    }: SegmentProps = $props();

    let classNames = [
        "ui",
        textAlignment && `${textAlignment} aligned`,
        raised && "raised",
        stacked && "stacked",
        piled && "piled",
        state && state,
        inverted && "inverted",
        placeholder && "placeholder",
        basic && "basic",
        "segment",
    ]
        .filter(Boolean)
        .join(" ");
</script>

<div class={classNames}>
    {@render children()}
</div>
