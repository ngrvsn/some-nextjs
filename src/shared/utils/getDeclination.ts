export const getDeclination = (number: number, titles: string[]): string => {
  let res
  const remains = number % 10

  if (number >= 5 && number <= 20) {
    res = titles[0]
  } else if (remains == 1) {
    res = titles[1]
  } else if (remains >= 2 && remains <= 4) {
    res = titles[2]
  } else {
    res = titles[0]
  }

  return res
}
