const dateUtil = (updated: number) => {
  const date = new Date(updated);
  const time = date.toLocaleDateString("ko-KR", {
    year: "2-digit",
    month: "2-digit",
    day: "numeric",
  });
  const result = time.split(" ").join("");
  return result;
};

export default dateUtil;
