import React from "react";
declare const Command: {
    ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element;
    displayName: string;
} & {
    Copy: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLButtonElement> & {
        content: string;
        variant?: "default" | "mini" | null | undefined;
        asChild?: boolean | undefined;
    } & React.RefAttributes<HTMLButtonElement>>;
};
export { Command };
