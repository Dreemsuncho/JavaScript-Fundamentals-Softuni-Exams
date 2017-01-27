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