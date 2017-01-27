function ajaxReq(reqArr) {
    let hashCode = reqArr.pop().split('');
    let validRequests = [];

    let methodPat = /^Method: (GET|POST|PUT|DELETE)$/;
    let authentPat = /^Credentials: (Basic|Bearer) ([a-zA-Z0-9]+)$/;
    let contentPat = /^Content: ([a-zA-Z0-9.]+)$/;

    for (let i = 0; i < reqArr.length; i += 3) {

        let methodMatch = methodPat.exec(reqArr[i]);
        let authentMatch = authentPat.exec(reqArr[i + 1]);
        let contentMatch = contentPat.exec(reqArr[i + 2]);

        let currRequest = {};
        if (methodMatch && authentMatch && contentMatch) {
            currRequest['method'] = methodMatch[1];
            currRequest['content'] = contentMatch[1];
            currRequest['authentication'] = {
                'type': authentMatch[1],
                'message': authentMatch[2]
            };

            validRequests.push(currRequest);
        }
        else {
            validRequests.push(`Response-Code:400`);
        }
    }


    validRequests.forEach(req => {
        let responseMethod = `Response-Method:${req.method}&Code:`;

        if (req == 'Response-Code:400') {
            console.log(req);
        }
        else if (req.authentication.type == 'Basic' &&
            (req.method == 'POST' || req.method == 'PUT' || req.method == 'DELETE')) {
            console.log(responseMethod + '401');
        }
        else if (!checkHashCode(hashCode, req.authentication.message)) {
            console.log(responseMethod + '403');
        }
        else {
            console.log(`${responseMethod}200&Header:${req.authentication.message}`);
        }
    });

    function checkHashCode(hash, message) {
        for (let i = 0; i < hash.length; i += 2) {
            let count = Number(hash[i]);
            let desiredChar = hash[i + 1];

            if ((message.match(RegExp(desiredChar, 'g')) || []).length == count) {
                return true;
            }
        }
        return false;
    }
}