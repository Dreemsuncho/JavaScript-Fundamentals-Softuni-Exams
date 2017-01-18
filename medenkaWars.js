function medenkaWar(inputArr) {
    let naskorDmg = 0;
    let vitkorDmg = 0;

    let consecNaskor = {
        count: Number.NEGATIVE_INFINITY,
        damage: 0
    };
    let consecVitkor = {
        count: Number.NEGATIVE_INFINITY,
        damage: 0
    };

    inputArr.forEach(currIn => {
        let inputArgs = currIn.split(' ');
        [count, side] = [Number(inputArgs[0]), inputArgs[1]];

        if (side == 'dark') {
            let currDmg = 60 * count;

            if (consecNaskor.damage == count) {
                consecNaskor.count++;

                if (consecNaskor.count == 5) {
                    currDmg *= 4.5;
                    consecNaskor.count = 1;
                }
            } else {
                consecNaskor.count = 1;
            }

            consecNaskor.damage = count;
            naskorDmg += currDmg;
        } else {
            let currDmg = 60 * count;

            if (consecVitkor.damage == count) {
                consecVitkor.count++;

                if (consecVitkor.count == 2) {
                    currDmg *= 2.75;
                    consecVitkor.count = 0;
                }
            } else {
                consecVitkor.count = 1;
            }

            consecVitkor.damage = count;
            vitkorDmg += currDmg;
        }
    });

    if (vitkorDmg > naskorDmg) {
        console.log('Winner - Vitkor');
        console.log(`Damage - ${vitkorDmg}`);
    } else {
        console.log('Winner - Naskor');
        console.log(`Damage - ${naskorDmg}`);
    }
}

medenkaWar(['2 dark medenkas',
    '1 white medenkas',
    '2 dark medenkas',
    '2 dark medenkas',
    '15 white medenkas',
    '2 dark medenkas',
    '2 dark medenkas'
]);

medenkaWar(['5 white medenkas',
    '5 dark medenkas',
    '4 white medenkas',
]);
