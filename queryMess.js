function query(queryArr) {
    let pairs = [];

    queryArr.forEach(q => {
        let currPair = q.split('&');
        pairs.push(currPair);
    });

    let keyValues = new Map();
    pairs.forEach(pairs => {
        extractAndPrintQueries(pairs);
    });

    function extractAndPrintQueries(queriesArr) {
        let keyvaluePattern = /([^?]+)=([^?]+)/;
        let currKeyValues = new Map();

        queriesArr.forEach(pair => {
            let currPair = pair.match(keyvaluePattern);
            if (currPair) {
                let key = reduceSpaces(currPair[1]);
                let value = reduceSpaces(currPair[2]);

                if (!currKeyValues.has(key)) {
                    currKeyValues.set(key, []);
                }
                currKeyValues.get(key).push(value);
            }
        });

        let currResult = '';
        for (let [key, value] of currKeyValues) {
            currResult += `${key}=[${value.join(', ')}]`;
        }

        console.log(currResult);
    }

    function reduceSpaces(word) {
        return word.replace(/(\+|%20)/g, ' ')
            .replace(/\s+/g, ' ').trim();
    }
}