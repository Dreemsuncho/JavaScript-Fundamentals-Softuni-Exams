function xShapes(arrStr) {
    let letterMatrix = [];

    arrStr.forEach(line => {
        let lineRow = line.split('');
        letterMatrix.push(lineRow);
    });
    letterMatrix = checkForXShapes(letterMatrix);
    letterMatrix.forEach(row => {
        let currRow = row.filter(c => c != null);
        console.log(currRow.join(''));
    });

    function checkForXShapes(matrix) {
        let arrIndexes = [];

        for (let row = 0; row < matrix.length - 2; row++) {
            for (let col = 0; col < matrix[row].length - 2; col++) {
                let currChar = matrix[row][col];

                if (matrix[row][col] != null && matrix[row][col].toLowerCase() == currChar.toLowerCase() &&
                    matrix[row][col + 2] != null && matrix[row][col + 2].toLowerCase() == currChar.toLowerCase() &&
                    matrix[row + 2][col] != null && matrix[row + 2][col].toLowerCase() == currChar.toLowerCase() &&
                    matrix[row + 2][col + 2] != null && matrix[row + 2][col + 2].toLowerCase() == currChar.toLowerCase() &&
                    matrix[row + 1][col + 1] != null && matrix[row + 1][col + 1].toLowerCase() == currChar.toLowerCase()) {
                    arrIndexes.push(
                        [row, col],
                        [row, col + 2],
                        [row + 2, col],
                        [row + 2, col + 2],
                        [row + 1, col + 1]
                    );
                }
            }
        }
        arrIndexes.forEach(row => {
            let currRow = row[0];
            let currCol = row[1];

            matrix[currRow][currCol] = null;
        });

        return matrix;
    }
}