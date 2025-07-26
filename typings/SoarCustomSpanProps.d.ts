/**
 * This file was generated from SoarCustomSpan.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { EditableValue } from "mendix";

export type SpanTypeEnum = "span" | "parent" | "custom";

export interface SoarCustomSpanContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    spanType: SpanTypeEnum;
    customParent: string;
    iconValue: EditableValue<string>;
    iconColor?: EditableValue<string>;
    bgColor?: EditableValue<string>;
}

export interface SoarCustomSpanPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    renderMode: "design" | "xray" | "structure";
    translate: (text: string) => string;
    spanType: SpanTypeEnum;
    customParent: string;
    iconValue: string;
    iconColor: string;
    bgColor: string;
}
