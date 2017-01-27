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