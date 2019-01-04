var fetch = require('node-fetch')
fetch('https://raw.githubusercontent.com/eleijonmarck/eleijonmarck/master/eleijonmarck/content/_blogs/2018-01-03-pyenv-macosx.md').then(resp=> resp.text()).then(body => console.log(body)) ;
