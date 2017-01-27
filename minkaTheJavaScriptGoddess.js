function minkaJavascript(tasksArr) {
    let tasksCollect = new Map();

    tasksArr.forEach(t => {
        let currArgs = t.split('&').map(t => t.trim());
        let name = currArgs[0];
        let type = currArgs[1];
        let taskNumber = currArgs[2];
        let score = Number(currArgs[3]);
        let linesOfCode = Number(currArgs[4]);

        if (!tasksCollect.has(`Task ${taskNumber}`)) {
            tasksCollect.set(`Task ${taskNumber}`, {
                'tasksCollect': [],
                'average': [],
                'lines': 0
            })
        }

        tasksCollect.get(`Task ${taskNumber}`)['tasksCollect'].push({
            'name': name,
            'type': type
        });
        tasksCollect.get(`Task ${taskNumber}`)['average'].push(score);
        tasksCollect.get(`Task ${taskNumber}`)['lines'] += linesOfCode;
    });

    let result = {};
    new Map([...tasksCollect].sort((x, y) => {
        let result = Number(y[1]['average'].reduce((a, b) => a + b) / y[1]['average'].length) -
                     Number(x[1]['average'].reduce((a, b) => a + b) / x[1]['average'].length);
        if(result === 0){
            result = x[1]['lines'] - y[1]['lines'];
        }
        return result;
    })).forEach((obj, tsk) => {
        result[tsk] = {
            'tasks': obj['tasksCollect'].sort((x,y) => x['name'].localeCompare(y['name'])),
            'average': Number((obj['average'].reduce((a, b) => a + b) / obj['average'].length)
                .toFixed(2)
                .replace(/\.0+$/, '')),
            'lines': obj['lines']
        }
    });

    console.log(JSON.stringify(result));
}