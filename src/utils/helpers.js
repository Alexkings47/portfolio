export const cssObjectToString = (obj) => {
  return Object.entries(obj)
    .map(([key, value]) => {
      return `${key
        .split(/(?=[A-Z])/)
        .join("-")
        .toLowerCase()}:${value}`;
    })
    .join(";");
};
