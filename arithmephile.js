function arithmetic(numsArr) {
    numsArr = numsArr.map(Number);

    let biggetSumOfMulti = Number.NEGATIVE_INFINITY;
    numsArr.forEach((num, ind) => {
        if (num > 0 && num < 10) {
            let currSumOfMulti = numsArr[ind + 1];

            for (let i = 2; i <= num; i++) {
                currSumOfMulti = currSumOfMulti * numsArr[ind + i];
            }
            if (currSumOfMulti > biggetSumOfMulti) {
                biggetSumOfMulti = currSumOfMulti;
            }
        }
    });


    console.log(biggetSumOfMulti);
}

arithmetic(['9', '5652', '5652', '9190', '4172', '494', '536', '9510', '1584', '0', '1', '10', '6', '0', '675', '8913', '1891', '4298', '269', '3754', '6459']);
arithmetic(['18', '42', '19', '36', '1', '-297', '38', '100', '9', '-249', '-170', '-18', '-208', '-11', '-87', '-90', '-286', '-27']);
