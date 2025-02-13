import type { Snippet } from "svelte";

export type SegmentColorType = "red" | "orange" | "yellow" | "olive" | "green" | "teal" | "blue" | "violet" | "purple" | "pink" | "brown" | "grey" | "black";
export type SegmentEmphasisType = "secondary" | "tertiary";

export interface SegmentProps {
    raised?: boolean | null;
    stacked?: boolean | null;
    piled?: boolean | null;
    placeholder?: boolean | null;
    state?: "disabled" | "loading" | null;
    inverted?: boolean | null;
    textAlignment?: "right" | "left" | "center" | null;
    basic?: boolean | null;
    attached?: "attached" | "top attached" | "bottom attached" | null;
    padded?: "padded" | "very padded" | null;
    compact?: boolean | null;
    clearing?: boolean | null;
    color?: SegmentColorType | null;
    emphasis?: SegmentEmphasisType | null;
    floated?: "left" | "right" | null;
    children: Snippet;
}