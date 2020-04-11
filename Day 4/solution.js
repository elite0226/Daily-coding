function solution (K) {
    const integer = {};

    K.forEach(num => integer[num] = true);
    
    let result = 1;
    while (integer[result]) {
        result += 1;
    }

    console.log(result);
    return result;
}

const input = [1, 2, 0];
solution(input);