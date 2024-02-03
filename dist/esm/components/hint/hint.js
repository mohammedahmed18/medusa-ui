import { ExclamationCircleSolid } from "@medusajs/icons";
import { cva } from "cva";
import * as React from "react";
import { clx } from "../../utils/clx";
const hintVariants = cva({
    base: "txt-small inline-flex items-center gap-x-2",
    variants: {
        variant: {
            info: "text-ui-fg-subtle",
            error: "text-ui-fg-error",
        },
    },
    defaultVariants: {
        variant: "info",
    },
});
const Hint = React.forwardRef(({ className, 
/**
 * The hint's style.
 */
variant = "info", children, ...props }, ref) => {
    return (React.createElement("span", { ref: ref, className: clx(hintVariants({ variant }), className), ...props },
        variant === "error" && React.createElement(ExclamationCircleSolid, null),
        children));
});
Hint.displayName = "Hint";
export { Hint };
//# sourceMappingURL=hint.js.map