import type { Snippet } from "svelte";

export interface SegmentProps {
    raised?: boolean | null;
    stacked?: boolean | null;
    piled?: boolean | null;
    placeholder?: boolean | null;
    state?: "disabled" | "loading" | null;
    inverted?: boolean | null;
    textAlignment?: "right" | "left" | "center" | null;
    basic?: boolean | null;
    children: Snippet;
}