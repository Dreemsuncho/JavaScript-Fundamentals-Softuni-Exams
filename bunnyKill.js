function bunny(inputArr) {
    let hanger = [];
    let coords = [];

    inputArr.forEach((row, ind) => {
        if (ind !== inputArr.length - 1) {
            let cols = row.split(' ').map(Number);
            hanger.push(cols);
        } else {
            let lineCoords = row.split(' ');
            lineCoords.forEach(c => {
                coordArgs = c.split(',').map(Number);
                coords.push([coordArgs[0], coordArgs[1]]);
            });
        }
    });

    let bunnyStat = {
        'damage': 0,
        'frags': 0
    };

    coords.forEach(c => {
        let xCoord = c[0];
        let yCoord = c[1];

        if (hanger[xCoord][yCoord] > 0) {
            bunnyStat.damage += hanger[xCoord][yCoord];
            bunnyStat.frags++;

            let bombDmg = hanger[xCoord][yCoord];
            hanger.forEach((row, indRow) => {
                row.forEach((col, indCol) => {
                    if ((indRow == xCoord - 1 || indRow == xCoord + 1 || indRow == xCoord) &&
                        (indCol == yCoord - 1 || indCol == yCoord + 1 || indCol == yCoord)) {
                        hanger[indRow][indCol] -= bombDmg;
                    }
                });
            });
        }
    });

    hanger.forEach((row, rowInd) => {
        row.forEach((col, colInd) => {
            if (hanger[rowInd][colInd] > 0) {
                bunnyStat.frags++;
                bunnyStat.damage += hanger[rowInd][colInd];
            }
        });
    });
    console.log(`${bunnyStat['damage']}\n${bunnyStat['frags']}`);
}