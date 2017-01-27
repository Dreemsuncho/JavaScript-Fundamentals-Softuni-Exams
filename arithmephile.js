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