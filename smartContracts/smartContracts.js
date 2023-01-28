var privateKey = bsv.PrivateKey.fromRandom();
var address = bsv.Address.fromPrivateKey(privateKey);
var script = bsv.Script.fromAddress(address);

var p = document.querySelector("#res1");
p.innerHTML = privateKey.toString();

var q = document.querySelector("#res");
q.innerHTML = address.toString();

var x = document.querySelector("#res2");
x.innerHTML = script.toASM();

var z = document.querySelector("#res3");
z.innerHTML = script.toAddress().toString();