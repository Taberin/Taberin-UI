<script lang="ts">
    let { type, disabled }: { type: "button" | "submit" | "reset" | null | undefined; disabled: boolean } = $props();
</script>

<button class="ui button" {type} {disabled}>
    <slot></slot>
</button>
