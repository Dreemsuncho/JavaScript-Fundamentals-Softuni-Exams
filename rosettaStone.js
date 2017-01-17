function rosettaSolve(inputArr) {
    let sizeTemp = Number(inputArr.shift());
    let template = [];

    let wheelOfLetters = [' '];
    for (let l = 'A'.charCodeAt(0); l <= 'Z'.charCodeAt(0); l++) {
        wheelOfLetters.push(String.fromCharCode(l));
    }

    for (let row = 0; row < sizeTemp; row++) {
        let currRow = inputArr.shift().split(' ').map(Number);
        template.push(currRow);
    }

    let encodedMatrix = [];
    inputArr.forEach(row => {
        let rowArgs = row.split(' ').map(Number);
        encodedMatrix.push(rowArgs);
    });

    debugger;
    for (let row = 0; row < encodedMatrix.length; row += sizeTemp) {
        for (let col = 0; col < encodedMatrix[row].length; col += template[0].length) {
            for (let tempRow = 0; tempRow < sizeTemp; tempRow++) {
                for (let tempCol = 0; tempCol < template[tempRow].length; tempCol++) {
                    if ((row + tempRow < encodedMatrix.length) &&
                        (col + tempCol < encodedMatrix[row].length)) {
                        let currNum = encodedMatrix[row + tempRow][col + tempCol] + template[tempRow][tempCol];
                        encodedMatrix[row + tempRow][col + tempCol] = wheelOfLetters[currNum % 27];
                    }
                }
            }
        }
    }

    let decodedText='';
    encodedMatrix.forEach((row, rowInd) => {
        row.forEach((col, colInd) => decodedText += encodedMatrix[rowInd][colInd]);
    });
    console.log(decodedText.replace(/\s+/g, ' '));
}

rosettaSolve(['1',
             '1 3 13',
             '12 22 14 13 25 0 4 24 23',
             '18 24 2 25 22 0 0 11 18',
             '8 25 6 26 8 23 13 4 14',
             '14 3 14 10 6 1 6 16 14',
             '11 12 2 10 24 2 13 24 0',
             '24 24 10 14 15 25 18 24 12',
             '4 24 0 8 4 22 19 22 14',
             '0 11 18 26 1 19 18 13 15',
             '8 15 14 26 24 14 26 24 14']);
