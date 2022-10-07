import React from "react";

export const Typography = ({
  textColor,
  className,
  size,
  content,
  children,
  weight,
  style,
}) => {
  return (
    <p
      style={{
        color: `var(--${textColor})`,
        fontSize: `${size}px`,
        fontWeight: weight,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        fontFamily: "Karla",

        ...style,
      }}
      className={className}
    >
      {content} {children}
    </p>
  );
};

export const TextHeading = ({
  textColor,
  size,
  content,
  children,
  level,
  style,
  weight,
  className,
  ...rest
}) => {
  return React.createElement(
    `h${level}`,
    {
      className: className,
      style: {
        color: `var(--${textColor})`,
        fontSize: `${size}px`,
        fontWeight: weight,
        display: "flex",
        fontFamily: "Roboto slab",
        alignItems: "center",
        justifyContent: "flex-start",
        ...style,
      },
    },
    content || children
  );
};
