export type PlaceholderLineLengthType = "very short" | "short" | "medium" | "long" | "very long" | "full" | null;

export interface PlaceholderHeaderProps {
    image?: boolean | null;
    lines?: PlaceholderLineLengthType[];
}

export interface PlaceholderProps {
    headers?: PlaceholderHeaderProps[] | null
    lines?: PlaceholderLineLengthType[];
    fluid?: boolean | null;
    inverted?: boolean | null;
}