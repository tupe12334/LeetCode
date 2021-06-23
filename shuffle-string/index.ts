function restoreString(s: string, indices: number[]): string {
  let finishArray = [];
  let sArray = s.split("");
  for (let i = 0; i < sArray.length; i++) {
    const placeInLastString = indices[i];
    const char = sArray[i];
    finishArray[placeInLastString] = char;
  }
  let finishS = finishArray.join("");
  return finishS;
}

console.log(restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]));
// console.log(restoreString("aiohn", [3, 1, 4, 2, 0])); //nihao
