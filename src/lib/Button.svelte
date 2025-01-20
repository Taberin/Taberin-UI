<script lang="ts">
    import type { MouseEventHandler } from "svelte/elements";
    import type { colorType } from "../types/types.js";

    export let type: "button" | "submit" | "reset" = "button";
    export let disabled: boolean = false;
    export let color: colorType = null;
    export let basic: boolean = false;
    export let inverted: boolean = false;
    export let state: "active" | "disabled" | "loading" | null | undefined =
        null;
    export let size:
        | "mini"
        | "tiny"
        | "small"
        | "medium"
        | "large"
        | "big"
        | "huge"
        | "massive" = "medium";
    export let float: "right" | "left" | null | undefined = null;
    export let compact: boolean = false;
    export let fluid: boolean = false;

    export let onclick: MouseEventHandler<HTMLButtonElement> | null = null;
    export let ondblclick: MouseEventHandler<HTMLButtonElement> | null = null;

    let classNames = [
        "ui",
        color,
        basic ? "basic" : "",
        inverted ? "inverted" : "",
        state,
        float ? `${float} floated` : "",
        compact ? "compact" : "",
        fluid ? "fluid" : "",
        size,
        "button",
    ]
        .filter(Boolean)
        .join(" ");
</script>

<button
    class={classNames}
    type={type || undefined}
    {disabled}
    {onclick}
    {ondblclick}
>
    <slot></slot>
</button>
