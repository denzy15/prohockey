export const createQueryParams = (parameters) => {
  const params = parameters
    .map(
      (param) =>
        `${encodeURIComponent(param.name)}=${encodeURIComponent(
          param.value.value
        )}`
    )
    .join("&");

  return "?" + params;
};
