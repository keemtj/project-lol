const textUtil = (text: string) => {
  const result = text.split(" ").join("+");
  return result;
};

export default textUtil;
