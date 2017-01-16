function spiceMine([startYield]) {
    startYield = Number(startYield);
    if (startYield < 100)
        return `0\n0`;

        let totalYield = startYield - 26;
    startYield -= 10;

    let days = 1;
    while (startYield > 99) {
        days++;
        totalYield += startYield - 26;
        startYield -= 10;
    }


    totalYield -= 26;
    return `${days}\n${totalYield}`;
}

let res = spiceMine(['111']);
console.log(res);
res = spiceMine(['450']);
console.log(res);
res = spiceMine(['200']);
console.log(res);
