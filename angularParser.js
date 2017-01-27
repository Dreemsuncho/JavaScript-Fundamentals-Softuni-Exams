function angularParser(inputArr) {

    let modulePatt = /^\$app='([^']+)'$/;
    let controllerPat = /^\$controller='([^']+)'&app='([^']+)'$/;
    let modelPatt = /^\$model='([^']+)'&app='([^']+)'$/;
    let viewPatt = /^\$view='([^']+)'&app='([^']+)'$/;

    let modules = new Map();
    let queueModules = new Map();

    inputArr.forEach(el => {
        let moduleMatch = modulePatt.exec(el);
        let controllerMatch = controllerPat.exec(el);
        let modelMatch = modelPatt.exec(el);
        let viewMatch = viewPatt.exec(el);

        let moduleName;
        if (moduleMatch) {
            moduleName = moduleMatch[1];
            if (queueModules.has(moduleName)) {
                modules.set(moduleName, queueModules.get(moduleName))
            }
            else if (!modules.has(moduleName)) {
                modules.set(moduleName, {
                    'controllers': [],
                    'models': [],
                    'views': []
                });
            }
        }
        else if (controllerMatch) {
            let controllerName = controllerMatch[1];
            moduleName = controllerMatch[2];

            if (!modules.has(moduleName)) {
                if (!queueModules.has(moduleName)) {
                    queueModules.set(moduleName, {
                        'controllers': [],
                        'models': [],
                        'views': []
                    });
                }
                queueModules.get(moduleName)['controllers'].push(controllerName)
            }
            else {
                modules.get(moduleName)['controllers'].push(controllerName);
            }
        }
        else if (modelMatch) {
            let modelName = modelMatch[1];
            moduleName = modelMatch[2];

            if (!modules.has(moduleName)) {
                if (!queueModules.has(moduleName)) {
                    queueModules.set(moduleName, {
                        'controllers': [],
                        'models': [],
                        'views': []
                    });
                }
                queueModules.get(moduleName)['models'].push(modelName)
            }
            else {
                modules.get(moduleName)['models'].push(modelName);
            }
        }
        else if (viewMatch) {
            let viewName = viewMatch[1];
            moduleName = viewMatch[2];

            if (!modules.has(moduleName)) {
                if (!queueModules.has(moduleName)) {
                    queueModules.set(moduleName, {
                        'controllers': [],
                        'models': [],
                        'views': []
                    });
                }
                queueModules.get(moduleName)['views'].push(viewName)
            }
            else {
                modules.get(moduleName)['views'].push(viewName);
            }
        }
    });


    for (let obj of modules) {
        modules.get(obj[0])['controllers'].sort();
        modules.get(obj[0])['models'].sort();
        modules.get(obj[0])['views'].sort();
    }

    let result = [...modules].sort((x, y) => {
        let result = y[1]['controllers'].length - x[1]['controllers'].length;

        if (result == 0)
            result = x[1]['models'].length - y[1]['models'].length;
        return result;
    });

    let objRes = {};
    result.forEach(x => objRes[x[0]] = x[1]);
    console.log(JSON.stringify(objRes));
}