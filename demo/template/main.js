function tpl(template, data) {
    result = template.replace(/{%([^%}])+%}/g, (match, p) => { console.log(match[1]); return data[p]})
}
tpl('<div class="{%className%}">{%name%}</div>', { name: 'tpl' , className: 'hd'})