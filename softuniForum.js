function post(lines) {
    let banned = lines.pop().split(' ');
    let post = lines.join('\n');

    let codePattern = /<code>[\s\S]*?<\/code>/g;
    let namePattern = /\B#([a-zA-Z][a-zA-Z0-9-_]+[a-zA-Z0-9])(?![a-zA-Z0-9_-])/g;
    let codes = post.match(codePattern) || [];

    post = post.replace(codePattern, match => '*'.repeat(match.length))
        .replace(namePattern, (match, gr) => !banned.includes(gr) ?
            `<a href="/users/profile/show/${gr}">${gr}</a>` : '*'.repeat(gr.length));

    while (codes.length > 0) {
        let currCode = codes.shift();
        post = post.replace('*'.repeat(currCode.length), currCode);
    }
    console.log(post);
}