import React from "react";

export const Typography = ({
  textColor,
  variant,
  size,
  content,
  children,
  weight,
  ...props
}) => {
  return (
    <p
      style={{
        color: `var(--${textColor})`,
        fontSize: `${size}px`,
        fontWeight: weight,
      }}
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
        ...style,
      },
    },
    content || children
  );
};
