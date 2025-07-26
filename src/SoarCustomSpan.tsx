import { FC, createElement } from "react";

import { SoarCustomSpanContainerProps } from "../typings/SoarCustomSpanProps";
import { SpanElement } from "./components/SpanElement";
import "./ui/SoarCustomSpan.css";

const SoarCustomSpan: FC<SoarCustomSpanContainerProps> = ({
    spanType,
    iconValue,
    iconColor,
    bgColor,
    customParent,
    class: className,
    style
}) => {
    return (
        <SpanElement
            spanType={spanType}
            icon={iconValue.value}
            color={iconColor?.value ?? ""}
            background={bgColor?.value ?? ""}
            custom={customParent}
            className={className}
            style={style}
        />
    );
};

export default SoarCustomSpan;
