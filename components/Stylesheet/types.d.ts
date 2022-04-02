export declare type OpenPropsList = "animations" | "aspects" | "blue-hsl" | "blue" | "borders" | "colors-hsl" | "colors" | "cyan-hsl" | "cyan" | "easing" | "fonts" | "gradients" | "grape-hsl" | "grape" | "gray-hsl" | "gray" | "green-hsl" | "green" | "highlights" | "indigo-hsl" | "indigo" | "layouts" | "lime-hsl" | "lime" | "media" | "orange-hsl" | "orange" | "pink-hsl" | "pink" | "red-hsl" | "red" | "shadows" | "sizes" | "supports" | "svg" | "teal-hsl" | "teal" | "violet-hsl" | "violet" | "yellow-hsl" | "yellow" | "zindex";
export interface OpenProps {
    props: OpenPropsList | OpenPropsList[] | string;
}
export declare type SanitizeList = "all" | "bare" | "forms" | "assets" | "typography" | "reducedMotion" | "sysUI" | "modern" | "monoUI";
export interface SanitizerProps {
    sanitize?: SanitizeList | string | SanitizeList[];
}
