import React from "react";

export const Typography = ({
  textColor,
  variant,
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
  ...rest
}) => {
  return React.createElement(
    `h${level}`,
    {
      style: {
        color: `var(--${textColor})`,
        fontSize: `${size}px`,
        fontWeight: weight,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        ...style,
      },
    },
    content || children
  );
};
