function filtSeq(input) {
    let len = Number(input.pop());
    let seq = input.join(' ').split(' ');

    let currLen = 1;
    seq.forEach((c, i) => {
        seq[i] === seq[i + 1] ? currLen++ : currLen = 1;

        if (currLen === len) {
            for (let b = (i + 1); b > (i + 1) - len; b--) {
                seq[b] = undefined;
            }
            currLen = 1;
        }
    });

    let index = 0;
    input.forEach(row => {
        let currRow = row.split(' ').filter(x => seq[index++]);
        currRow.length > 0 ? console.log(currRow.join(' ')) : console.log('(empty)');
    });
}