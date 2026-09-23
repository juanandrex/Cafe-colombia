fetch("https://uselessfacts.jsph.pl/api/v2/facts/random?language=en")
.then(r => r.json()).then(d => console.log(d))
