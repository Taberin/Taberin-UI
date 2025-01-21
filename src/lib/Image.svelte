<script lang="ts">
    import type { ImageType } from "../types/types.ts";

    // Destructure props from $props()
    let {
        src = "",
        alt = "",
        size = null,
        avatar = false,
        bordered = false,
        rounded = false,
        circular = false,
        centered = false,
        floated = null,
        fluid = false,
        inline = false,
        customClass = "",
        styles = "",
    }: ImageType = $props();

    // Generate class names dynamically
    let classNames = [
        "ui",
        size,
        avatar && "avatar",
        bordered && "bordered",
        rounded && "rounded",
        circular && "circular",
        centered && "centered",
        floated && `${floated} floated`,
        fluid && "fluid",
        inline && "inline",
        "image",
        customClass,
    ]
        .filter(Boolean)
        .join(" ");
</script>

<img class={classNames} src={src} alt={alt} style={styles} />
