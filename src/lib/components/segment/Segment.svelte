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
        clearing = null,
        attached = null,
        padded = null,
        compact = null,
        color = null,
        emphasis = null,
        floated = null,
        children,
    }: SegmentProps = $props();

    let classNames = [
        "ui",
        emphasis && emphasis,
        textAlignment && `${textAlignment} aligned`,
        attached && attached,
        raised && "raised",
        stacked && "stacked",
        piled && "piled",
        clearing && "clearing",
        state && state,
        color && color,
        inverted && "inverted",
        placeholder && "placeholder",
        basic && "basic",
        compact && "compact",
        padded && padded,
        floated && `${floated} floated`,
        "segment",
    ]
        .filter(Boolean)
        .join(" ");
</script>

<div class={classNames}>
    {@render children()}
</div>
