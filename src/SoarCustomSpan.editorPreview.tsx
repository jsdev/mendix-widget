import { FC, useCallback, useRef, useEffect, createElement } from "react";
import { SpanElement, SpanElementProps } from "./components/SpanElement";
import { SoarCustomSpanPreviewProps } from "../typings/SoarCustomSpanProps";

declare function require(name: string): string;

export const Preview: FC<SoarCustomSpanPreviewProps> = props => {
    const divRef = useRef<HTMLDivElement>(null);

    const parentInline = useCallback((node: HTMLDivElement | null): void => {
        // Temporary fix, the web modeler add a containing div, to render inline we need to change it.
        if (node?.parentElement?.parentElement) {
            node.parentElement.parentElement.style.display = "inline-block";
        }
    }, []);

    const transformProps = useCallback((props: SoarCustomSpanPreviewProps): SpanElementProps => {
        return {
            className: props.class,
            spanType: props.spanType,
            custom: props.customParent,
            icon: props.iconValue,
            color: props.iconColor,
            background: props.bgColor
        };
    }, []);

    useEffect(() => {
        if (divRef.current) {
            parentInline(divRef.current);
        }
    }, [parentInline]);

    return (
        <div ref={divRef}>
            <SpanElement {...transformProps(props)} />
        </div>
    );
};

export function getPreviewCss(): string {
    return require("./ui/SoarCustomSpan.css");
}
