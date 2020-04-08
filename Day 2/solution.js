function solution (numbers) {
  const forward = [1];
  const backward = [1];

  numbers.forEach((number) => {
    forward.push(forward[forward.length - 1] * number);
  });
  for (let index = numbers.length - 1; index >= 0; index -=1) {
    backward.unshift(numbers[index] * backward[0]);
  }

  return numbers.map((number, index) => forward[index] * backward[index + 1]);
}

const input = [1, 2, 3, 4, 5];

console.log(solution(input));