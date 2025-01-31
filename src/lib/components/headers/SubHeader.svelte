<script lang="ts">
    import type { SubHeaderType } from "../../../types/types.js";

    let {
        customClass = "",
        styles = "",
        children,
    }: SubHeaderType = $props();
</script>

<div class={`sub header ${customClass}`} style={styles}>{@render children()}</div>