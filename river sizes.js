function riverSizes(matrix) {
    const visited = new Array(matrix.length * matrix[0].length).fill(false);
    const result = [];

    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            const size = visit(i, j, matrix, visited);
            if (size) {
                result.push(size);
            }
        }
    }

    result.sort((a, b) => +a - +b);
    return result;
}

function visit(i, j, matrix, visited) {
    const Q = [[i, j]];
    let size = 0;

    while (Q.length > 0) {
        const [i, j] = Q.shift();
        const index = getIndex(matrix, i, j);
        const isVisited = visited[index];
        if (!matrix[i][j] || isVisited) {
            continue;
        }
        visited[index] = true;
        size++;
        if (i - 1 >= 0) {
            Q.push([i - 1, j]);
        }

        if (i + 1 < matrix.length) {
            Q.push([i + 1, j]);
        }

        if (j - 1 >= 0) {
            Q.push([i, j - 1]);
        }

        if (j + 1 < matrix[0].length) {
            Q.push([i, j + 1]);
        }
    }

    return size;
}

function getIndex(matrix, i, j) {
    return i * matrix[0].length + j;
}
