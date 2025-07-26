import { FC, ReactElement, createElement } from "react";
import classNames from "classnames";

export type BootstrapStyle = "default" | "primary" | "success" | "info" | "inverse" | "warning" | "danger";

export interface AlertProps {
    message?: string;
    className?: string;
    bootstrapStyle: BootstrapStyle;
}

export const Alert: FC<AlertProps> = ({ message, className, bootstrapStyle }): ReactElement | null => {
    if (!message) {
        return null;
    }

    return (
        <div className={classNames(`alert alert-${bootstrapStyle}`, className)} role="alert" aria-live="polite">
            {message}
        </div>
    );
};

Alert.displayName = "Alert";
