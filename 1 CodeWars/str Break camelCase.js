function solution(string) {
  let uppers = string.split(/(?=[A-Z])/g);
  return uppers.join(' ');
}

console.log(solution('camelCase'));
