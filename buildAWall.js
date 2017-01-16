function wallBuild(crews) {
    crews = crews.map(Number);

    let totalCubicConcrete = 0;
    let dayCubicConcrete = [];

    let isReady = false;
    let days = 0;
    while (!isReady) {
        isReady = true;
        let currDayCub = 0;

        crews.forEach((n, i) => {
            if (n < 30) {
                crews[i]++;
                totalCubicConcrete += 195;
                currDayCub += 195;

                isReady = false;
            }
        });
        dayCubicConcrete.push(currDayCub);
    }

    let concCost = totalCubicConcrete * 1900;

    let result = dayCubicConcrete.filter(n => n != 0).join(", ");
    result += `\n${concCost} pesos`;
    return result;
}

let res = wallBuild(['21', '25', '28']);
console.log(res);
res = wallBuild(['17']);
console.log(res);
res = wallBuild(['17', '22', '17', '19', '17']);
console.log(res);
