function balancedBrackets(string) {
    const stack = [];
    const mappings = {
        '(': ')',
        ')': '(',
        '[': ']',
        ']': '[',
        '{': '}',
        '}': '{'
    };

    for (const char of string) {
        if (stack.length > 0 && stack[stack.length - 1] === mappings[char]) {
            stack.pop();
        } else {
            stack.push(char);
        }
    }

    return stack.length === 0;
}
