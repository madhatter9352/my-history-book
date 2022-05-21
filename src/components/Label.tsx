import "./label.css";

export interface LabelProps {
    label: string;
    size?: "normal" | "h1" | "h2" | "h3";
    allCaps?: boolean;
    color?: "primary" | "secondary" | "tertiary";
    fontColor?: string;
}

export const Label = ({
    label,
    size = "normal", 
    allCaps = false,
    color = "primary",
    fontColor,
}: LabelProps) => {
    
    return (
        <span 
            className={ `label ${ size } text-${color}` } 
            style={{color: `${fontColor}`}}
        >
            {allCaps ? label.toLocaleUpperCase() : label}
        </span>
    )
}
