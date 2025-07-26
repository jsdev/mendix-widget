import { useEffect, useRef, CSSProperties, FC, createElement, useCallback, Fragment } from "react";
import classNames from "classnames";

export interface SpanElementProps {
    spanType?: "span" | "parent" | "custom";
    icon?: string;
    color?: string;
    background?: string;
    custom?: string;
    style?: CSSProperties;
    className?: string;
    getRef?: (node: HTMLSpanElement | null) => void;
}

export const SpanElement: FC<SpanElementProps> = ({
    spanType = "span",
    icon,
    color,
    background,
    custom,
    style,
    className,
    getRef
}) => {
    const spanRef = useRef<HTMLSpanElement>(null);
    const scriptRef = useRef<HTMLScriptElement>(null);

    const updateCss = useCallback((): void => {
        const scriptElement = scriptRef.current;
        if (!scriptElement || !background) {
            return;
        }

        switch (spanType) {
            case "parent": {
                const parent = scriptElement.parentElement;
                if (parent) {
                    parent.style.backgroundColor = background;
                }
                break;
            }
            case "custom": {
                if (custom) {
                    const customElement = scriptElement.closest(`.${custom}`) as HTMLElement | null;
                    if (customElement) {
                        customElement.style.backgroundColor = background;
                    }
                }
                break;
            }
            default:
                break;
        }
    }, [spanType, background, custom]);

    useEffect(() => {
        updateCss();
    }, [updateCss]);

    const iconColor = color ? { color } : undefined;
    const bgColor = background ? { backgroundColor: background } : undefined;

    const handleRef = (node: HTMLSpanElement | null): void => {
        (spanRef as React.MutableRefObject<HTMLSpanElement | null>).current = node;
        getRef?.(node);
    };

    if (spanType === "span") {
        const spanStyles: CSSProperties = { ...iconColor, ...bgColor, ...style };

        return (
            <span className={classNames("widget-soarcustomspan", className, icon)} ref={handleRef} style={spanStyles} />
        );
    }

    const parentStyles: CSSProperties = { ...iconColor, ...style };

    return (
        <>
            <span
                className={classNames("widget-soarcustomspan", className, icon)}
                ref={handleRef}
                style={parentStyles}
            />
            <script ref={scriptRef} />
        </>
    );
};
