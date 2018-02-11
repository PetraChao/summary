function tpl(template, data) {
    return template.replace(/\{%([^%}]+)%\}/g, (match, $1) =>  data[$1])
}
tpl('<div class="{%className%}">{%name%}</div>', { name: 'tpl' , className: 'hd'})