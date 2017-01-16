function reportAir(flights) {
    let towns = new Map();

    towns.set('myTown', new Array());

    flights.forEach(flight => {
        let flightArgs = flight.split(' ');
        [planeId, town, pass, action] = [flightArgs[0], flightArgs[1], Number(flightArgs[2]), flightArgs[3]];

        if (action == 'land') {
            if (!towns.get('myTown').includes(planeId)) {
                towns.get('myTown').push(planeId);

                if (!towns.has(town)) {
                    towns.set(town, {
                        planes: new Set(),
                        arrivals: 0,
                        departures: 0
                    });
                }

                towns.get(town).planes.add(planeId);
                towns.get(town).arrivals += pass;
            }
        } else {
            if (towns.get('myTown').includes(planeId)) {
                let ind = towns.get('myTown').indexOf(planeId);
                towns.get('myTown').splice(ind, 1);

                if (!towns.has(town)) {
                    towns.set(town, {
                        planes: new Set(),
                        arrivals: 0,
                        departures: 0
                    });
                }
                towns.get(town).planes.add(planeId);
                towns.get(town).departures += pass;
            }
        }
    });

    let currMap = new Map();
    [...towns].forEach((town, ind) => {
        if (ind == 0) {
            console.log('Planes left:');
            let myTown = town[1].sort((a, b) => a.localeCompare(b));
            myTown.forEach(plane => {
                console.log(`- ${plane}`);
            });
        } else {
            currMap.set(town[0], town[1]);
        }
    });
    [...currMap].sort((a, b) => {
        if (a[1].arrivals < b[1].arrivals) return 1;
        if (a[1].arrivals > b[1].arrivals) return -1;
        return a[0].localeCompare(b[0]);
    }).forEach(obj => {
        console.log(obj[0]);
        console.log(`Arrivals: ${obj[1].arrivals}`);
        console.log(`Departures: ${obj[1].departures}`);

        console.log('Planes:');
        let currPlanes = [...obj[1].planes].sort((a, b) => a.localeCompare(b));
        currPlanes.forEach(w => {
            console.log(`-- ${w}`);
        });
    });
}

reportAir([
    'Airbus London 100 land',
    'Airbus Paris 200 depart',
    'Airbus Madrid 130 depart',
    'Airbus Lisbon 403 depart',
    'Airbus Moscow 505 depart',
    'Airbus Sofia 16 depart'
]);
