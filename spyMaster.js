function spy(inputArr) {
    let specKey = inputArr.shift();

    let pattern = '(( |^)';
    [...specKey].forEach(l =>
        pattern += `[${l.toLowerCase()}${l.toUpperCase()}]`);
    pattern += ' {1,})([!%$#A-Z]{8,})( |\\.|,|$)';

    let regex = new RegExp(pattern, 'g');
    inputArr.forEach(sen => {
        let lineSen = sen.replace(regex, replacing);
        console.log(lineSen);
    });

    function replacing(match, firstGr, secondGr, thirdGr, fourthGr) {
        let replaced = thirdGr.replace(/!/g, 1)
            .replace(/%/g, 2)
            .replace(/\#/g, 3)
            .replace(/\$/g, 4)
            .replace(/[A-Z]/g, l => l.toLowerCase());

        return firstGr + replaced + fourthGr;
    }
}

spy(['specialKey',
    'In this text the specialKey HELLOWORLD! is correct, but',
    'the following specialKey $HelloWorl#d and spEcIaLKEy HOLLOWORLD1 are not, while',
    'SpeCIaLkeY   SOM%%ETH$IN and SPECIALKEY ##$$##$$ are!'
]);

spy(['enCode',
    'Some messages are just not encoded what can you do?',
    'RE - ENCODE THEMNOW! - he said.',
    'Damn encode, ITSALLHETHINKSABOUT, eNcoDe BULL$#!%.'
]);
