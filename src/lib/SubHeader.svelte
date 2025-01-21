<script lang="ts">
    let {
        customClass = "",
        styles = "",
        children,
    }: HeaderType = $props();
</script>

<div class={`sub header ${customClass}`} style={styles}>{@render children()}</div>