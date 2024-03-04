// 개월 수 구하기
const diffMonth = (start: string, end: string) => {
  const start_date = new Date(start);
  const end_date = new Date(end);

  const diff = (end_date.getFullYear() - start_date.getFullYear()) * 12 + end_date.getMonth() - start_date.getMonth() + 1;

  return diff;
};

// 개월 수 텍스트로 변환 (0년 0개월)
const formatDuration = (months: number) => {
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  return `${years > 0 ? `${years}년 ` : ""}${remainingMonths > 0 ? `${remainingMonths}개월` : ""}`.trim();
};

export { diffMonth, formatDuration };
