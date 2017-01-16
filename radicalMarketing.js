function radicalM(inputArr) {
    class SubscribeArgs {
        constructor(subscribe, subscribers) {
            this.subscribe = subscribe;
            this.subscribers = subscribers;
        }
    }

    let persons = {};

    inputArr.forEach(cmd => {
        if (cmd.length === 1) {
            if (!(cmd in persons)) {
                persons[cmd] = new SubscribeArgs(new Set(), new Set());
            }
        } else {
            let inpArgs = cmd.split('-');
            [subscriber, sufferer] = [inpArgs[0], inpArgs[1]];

            if (persons[sufferer] &&
                persons[subscriber] &&
                subscriber != sufferer) {
                persons[subscriber].subscribe.add(sufferer);
                persons[sufferer].subscribers.add(subscriber);
            }
        }
    });

    let sortedPers = Object.keys(persons).map(key => [key, persons[key]]).sort((a, b) => {
        if (a[1].subscribers.size < b[1].subscribers.size) return 1;
        if (a[1].subscribers.size > b[1].subscribers.size) return -1;
        if (a[1].subscribe.size > b[1].subscribe.size) return -1;
        if (a[1].subscribe.size < b[1].subscribe.size) return 1;
         return 0;
    }).every(per => {
        console.log(per[0]);
        [...per[1].subscribers].forEach((s, i) => {
            console.log(`${i + 1}. ${s}`);
        });
        return;
    });
}


radicalM(['Z',
          'O',
          'R',
          'D',
          'Z-O',
          'R-O',
          'D-O',
          'P',
          'O-P',
          'O-Z',
          'R-Z',
          'D-Z'
]);
