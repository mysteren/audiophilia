export function ruPhoneTransformer(val: string): string {
  const cleaned = val.replace(/\D/g, "");

  let m = cleaned.match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
  if (m) {
    if (!["8", "7"].includes(m[1])) {
      m = ["7", ...m];
    }
    return (
      "" +
      (m[1] === '7' ? "+7" : m[1]) +
      (m[2] ? " (" + m[2] : "") +
      (m[3] ? ") " + m[3] : "") +
      (m[4] ? "-" + m[4] : "") +
      (m[5] ? "-" + m[5] : "")
    );
  }

  return cleaned;
}

export function ruPhoneClean(val: string): string {
  const cleaned = val.replace(/[^0-9+]/g, "")
  return cleaned;
}