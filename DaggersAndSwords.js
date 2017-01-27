function blades(arrLengths) {
    let lengths = arrLengths.map(Number)
        .map(n => Math.floor(n));

    let swordsAndDaggers = [];
    lengths.forEach(l => {
        if (l <= 40 && l > 10) {
            swordsAndDaggers.push({
                'Length': l,
                'Type': 'dagger',
                'Application': checkApp(l)
            });
        }
        else if (l > 10) {
            swordsAndDaggers.push({
                'Length': l,
                'Type': 'sword',
                'Application': checkApp(l)
            });
        }
    });

    let html = '<table border="1">\n<thead>\n<tr><th colspan="3">Blades</th></tr>\n<tr><th>Length [cm]</th><th>Type</th><th>Application</th></tr>\n</thead>\n<tbody>\n';
    swordsAndDaggers.forEach(sd => {
        html += `<tr><td>${sd['Length']}</td><td>${sd['Type']}</td><td>${sd['Application']}</td></tr>\n`;
    });
    html += '</tbody>\n</table>';
    console.log(html);
    function checkApp(length) {
        let appLen = length % 10;
        switch (appLen) {
            case 1:
            case 6:
                return 'blade';
            case 2:
            case 7:
                return 'quite a blade';
            case 3:
            case 8:
                return 'pants-scraper';
            case 4:
            case 9:
                return 'frog-butcher';
            case 5:
            case 0:
                return '*rap-poker';
        }
    }
}