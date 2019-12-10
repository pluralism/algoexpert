function searchInSortedMatrix(matrix, target) {
    let row = 0;
    let column = matrix[row].length - 1;

    while (row < matrix.length && column >= 0) {
        if (matrix[row][column] === target) {
            return [row, column];
        }
        column - 1 >= 0 && matrix[row][column - 1] >= target ? column-- : row++;
    }

    return [-1, -1];
}
