let who = ['The dog','My granma','His turtle','My bird'];
let what = ['ate','pissed','crushed','broked'];
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];
let whoRandomNumber = Math.floor(Math.random() * who.length);
let whatRandomNumber = Math.floor(Math.random() * what.length);
let whenRandomNumber = Math.floor(Math.random() * when.length);

let excuse =  `${who[whoRandomNumber]} ${what[whatRandomNumber]} ${when[whenRandomNumber]}`;

console.log(excuse);
