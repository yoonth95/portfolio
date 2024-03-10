// hex -> rgb
const hexToRgb = (hex: string) => {
  let r = 0,
    g = 0,
    b = 0;
  // 3자리 HEX 코드인 경우
  if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  }
  // 6자리 HEX 코드인 경우
  else if (hex.length === 7) {
    r = parseInt(hex[1] + hex[2], 16);
    g = parseInt(hex[3] + hex[4], 16);
    b = parseInt(hex[5] + hex[6], 16);
  }
  return { r, g, b };
};

// rgb -> hex
const rgbToHex = (r: number, g: number, b: number) => {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

// 컬러 색 어둡게 바꾸기
const darkenColor = (hex: string, amount: number): string => {
  const { r, g, b } = hexToRgb(hex);
  // 색상 값을 어둡게 조절
  const dr = Math.max(0, r - amount);
  const dg = Math.max(0, g - amount);
  const db = Math.max(0, b - amount);

  return rgbToHex(dr, dg, db);
};

export { hexToRgb, rgbToHex, darkenColor };
