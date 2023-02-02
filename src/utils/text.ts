export const zeroPadding = (num: string | number, length: number) => {
  return num.toString().length > length
    ? num.toString()
    : (Array(length).join('0') + num).slice(-length)
}
