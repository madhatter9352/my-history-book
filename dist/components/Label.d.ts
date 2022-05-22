/// <reference types="react" />
import "./label.css";
export interface LabelProps {
    label: string;
    size?: "normal" | "h1" | "h2" | "h3";
    allCaps?: boolean;
    color?: "primary" | "secondary" | "tertiary";
    fontColor?: string;
}
export declare const Label: ({ label, size, allCaps, color, fontColor, }: LabelProps) => JSX.Element;
