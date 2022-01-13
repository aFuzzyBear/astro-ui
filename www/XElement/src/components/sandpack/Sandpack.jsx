import { Sandpack } from "@codesandbox/sandpack-react";
import "@codesandbox/sandpack-react/dist/index.css";

/* JSX Usage */
export default function Sandy() {
  return (
    <Sandpack 
      // You can change these examples!
      // Try uncommenting any of these lines
      theme={{
        palette: {
          accent: "rebeccapurple",
        },
        syntax: {
          tag: "#006400",
          string: "rgb(255, 165, 0)",
          plain: "tomato",
        },
      }}
      template="react"
    />
  );
}