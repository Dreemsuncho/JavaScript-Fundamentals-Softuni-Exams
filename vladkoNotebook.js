function noteBook(input) {
    let newNoteBook = new Map();

    input.forEach(line => {
        let lineArgs = line.split('|').filter(arg => arg!='');
        let color = lineArgs[0].trim();
        let prop = lineArgs[1].trim();
        let value = lineArgs[2].trim();

        if (!newNoteBook.has(color)) {
            newNoteBook.set(color, {
                'age': undefined,
                'name': undefined,
                'opponents': [],
                'win': 1,
                'loss': 1
            });
        }
        if (prop == 'win' || prop == 'loss') {
            newNoteBook.get(color)['opponents'].push(value);
            newNoteBook.get(color)[prop]++;
        }
        else if (prop == 'name') {
            newNoteBook.get(color)[prop] = value;
        }
        else {
            newNoteBook.get(color)[prop] = value;
        }
    });

    let result = {};
    [...newNoteBook].filter(sh => sh[1]['name'] !== undefined && sh[1]['age'] !== undefined)
                    .sort((x,y)=>x[0].localeCompare(y[0]))
                    .forEach(sh => result[sh[0]] = {
                        'age': sh[1]['age'],
                        'name': sh[1]['name'],
                        'opponents': sh[1]['opponents'].sort(),
                        'rank': (sh[1]['win'] / sh[1]['loss']).toFixed(2)
                    });
    console.log(JSON.stringify(result));
}