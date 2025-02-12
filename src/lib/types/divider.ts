export interface DividerProps{
    label?: string | null;
    icon?: string | null;
    margin?: "fitted" | "section" | null;
    hidden?: boolean | null;
    clearing?: boolean | null;
    inverted?: boolean | null;
    header?: boolean | null;
    axis?: "vertical" | "horizontal" | null;
}