export const areParametersEqual = (params1, params2) => {
  const res = params1.every(
    (param1, index) => param1.value._id === params2[index].value._id
  );

  return res;
};
