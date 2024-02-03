"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeBlock = void 0;
const tslib_1 = require("tslib");
const prism_react_renderer_1 = require("prism-react-renderer");
const React = tslib_1.__importStar(require("react"));
const copy_1 = require("../copy");
const clx_1 = require("../../utils/clx");
const CodeBlockContext = React.createContext(null);
const useCodeBlockContext = () => {
    const context = React.useContext(CodeBlockContext);
    if (context === null)
        throw new Error("useCodeBlockContext can only be used within a CodeBlockContext");
    return context;
};
/**
 * This component is based on the `div` element and supports all of its props
 */
const Root = ({ 
/**
 * The code snippets.
 */
snippets, className, children, ...props }) => {
    const [active, setActive] = React.useState(snippets[0]);
    return (React.createElement(CodeBlockContext.Provider, { value: { snippets, active, setActive } },
        React.createElement("div", { className: (0, clx_1.clx)("border-ui-code-border flex flex-col overflow-hidden rounded-lg border", className), ...props }, children)));
};
Root.displayName = "CodeBlock";
/**
 * This component is based on the `div` element and supports all of its props
 */
const HeaderComponent = ({ children, className, 
/**
 * Whether to hide the code snippets' labels.
 */
hideLabels = false, ...props }) => {
    const { snippets, active, setActive } = useCodeBlockContext();
    return (React.createElement("div", { className: (0, clx_1.clx)("border-b-ui-code-border bg-ui-code-bg-header flex items-center gap-2 border-b px-4 py-3", className), ...props },
        !hideLabels &&
            snippets.map((snippet) => (React.createElement("div", { className: (0, clx_1.clx)("text-ui-code-text-subtle txt-compact-small-plus cursor-pointer rounded-full border border-transparent px-3 py-2 transition-all", {
                    "text-ui-code-text-base border-ui-code-border bg-ui-code-bg-base cursor-default": active.label === snippet.label,
                }), key: snippet.label, onClick: () => setActive(snippet) }, snippet.label))),
        children));
};
HeaderComponent.displayName = "CodeBlock.Header";
/**
 * This component is based on the `div` element and supports all of its props
 */
const Meta = ({ className, ...props }) => {
    return (React.createElement("div", { className: (0, clx_1.clx)("text-ui-code-text-subtle ml-auto", className), ...props }));
};
Meta.displayName = "CodeBlock.Header.Meta";
const Header = Object.assign(HeaderComponent, { Meta });
/**
 * This component is based on the `div` element and supports all of its props
 */
const Body = ({ className, ...props }) => {
    const { active } = useCodeBlockContext();
    return (React.createElement("div", { className: (0, clx_1.clx)("bg-ui-code-bg-base relative h-full overflow-y-auto p-4", className), ...props },
        !active.hideCopy && (React.createElement(copy_1.Copy, { content: active.code, className: "text-ui-code-icon absolute right-4 top-4" })),
        React.createElement("div", { className: "max-w-[90%]" },
            React.createElement(prism_react_renderer_1.Highlight, { theme: {
                    ...prism_react_renderer_1.themes.palenight,
                    plain: {
                        color: "rgba(249, 250, 251, 1)",
                        backgroundColor: "rgb(17,24,39)",
                    },
                    styles: [
                        ...prism_react_renderer_1.themes.palenight.styles,
                        {
                            types: ["keyword"],
                            style: {
                                fontStyle: "normal",
                                color: "rgb(187,160,255)",
                            },
                        },
                        {
                            types: ["punctuation", "operator"],
                            style: {
                                fontStyle: "normal",
                                color: "rgb(255,255,255)",
                            },
                        },
                        {
                            types: ["constant", "boolean"],
                            style: {
                                fontStyle: "normal",
                                color: "rgb(187,77,96)",
                            },
                        },
                        {
                            types: ["function"],
                            style: {
                                fontStyle: "normal",
                                color: "rgb(27,198,242)",
                            },
                        },
                        {
                            types: ["number"],
                            style: {
                                color: "rgb(247,208,25)",
                            },
                        },
                        {
                            types: ["maybe-class-name"],
                            style: {
                                color: "rgb(255,203,107)",
                            },
                        },
                        {
                            types: ["string"],
                            style: {
                                color: "rgb(73,209,110)",
                            },
                        },
                        {
                            types: ["comment"],
                            style: {
                                color: "rgb(52,211,153)",
                            },
                        },
                    ],
                }, code: active.code, language: active.language }, ({ style, tokens, getLineProps, getTokenProps }) => (React.createElement("pre", { className: (0, clx_1.clx)("txt-compact-small whitespace-pre-wrap bg-transparent font-mono", {
                    "grid grid-cols-[auto,1fr] gap-x-4": !active.hideLineNumbers,
                }), style: {
                    ...style,
                    background: "transparent",
                } },
                !active.hideLineNumbers && (React.createElement("div", { role: "presentation", className: "flex flex-col text-right" }, tokens.map((_, i) => (React.createElement("span", { key: i, className: "text-ui-code-text-subtle tabular-nums" }, i + 1))))),
                React.createElement("div", null, tokens.map((line, i) => (React.createElement("div", { key: i, ...getLineProps({ line }) }, line.map((token, key) => (React.createElement("span", { key: key, ...getTokenProps({ token }) })))))))))))));
};
Body.displayName = "CodeBlock.Body";
const CodeBlock = Object.assign(Root, { Body, Header, Meta });
exports.CodeBlock = CodeBlock;
//# sourceMappingURL=code-block.js.map