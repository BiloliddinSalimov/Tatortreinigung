"use client";
import { useState } from "react";
import { s } from "../lib/style";

// Reproduces the prototype's `style-hover` behaviour: merges `hover` styles
// on top of `base` while the pointer is over the element.
export default function Hover({ as = "div", base, hover, children, style, ...rest }) {
  const [h, setH] = useState(false);
  const Tag = as;
  return (
    <Tag
      {...rest}
      style={{ ...s(base), ...(h ? s(hover) : {}), ...(style || {}) }}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
    >
      {children}
    </Tag>
  );
}
