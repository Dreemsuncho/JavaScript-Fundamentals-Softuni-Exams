function helpFormat([text]) {
    text = text.replace(/([.,!?:;])\s*/g, '$1 ')
        .replace(/\s*([.,!?:;])/g, '$1')
        .replace(/\s*\.\s*\.\s*\.\s*!/g, '...!')
        .replace(/(\s*\.\s*)([0-9])/g, '.$2')
        .replace(/"([^"]*)"/g, (match, gr) => `"${gr.trim()}"`);

    console.log(text);
}