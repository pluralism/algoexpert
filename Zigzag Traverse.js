function zigzagTraverse(array) {
    const result = [];
    let row = 0;
    let col = 0;
    const lastRow = array.length - 1;
    const lastColumn = array[0].length - 1;
    let goingDown = true;

    while(row !== lastRow || col !== lastColumn) {
        result.push(array[row][col]);
        if (goingDown) {
            if (!isOutOfBounds(row + 1, col - 1, array)) {
                row++;
                col--;
            } else {
                !isOutOfBounds(row + 1, col, array) ? row++ : col++;
                goingDown = false;
            }
        } else {
            if (!isOutOfBounds(row - 1, col + 1, array)) {
                row--;
                col++;
            } else {
                !isOutOfBounds(row, col  + 1, array) ? col++ : row++;
                goingDown = true;
            }
        }
    }
    result.push(array[row][col]);
    return result;
}

function isOutOfBounds(row, col, array) {
    return row < 0 || col < 0 || row > array.length - 1 || col > array[0].length - 1;
}
