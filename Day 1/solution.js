function solution (numbers, N) {
  const exist = {};

  numbers.forEach(number => exist[number] = true);

  for (let index = 0; index < numbers.length; index += 1) {
    if (exist[N - numbers[index]]) return true;
  }

  return false;
}

const input = [10, 15, -5, 7];

console.log(solution(input, 5));