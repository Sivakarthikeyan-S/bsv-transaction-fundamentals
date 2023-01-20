var hdPrivateKey = bsv.HDPrivateKey.fromString("xprv9s21ZrQH143K3cke7YKLyMEU9h9Ty6e9FzdJKBZpLrpjthV5MwpeDGJ5LsAbLjFaiE114frbHcrndqL5Z1p42yMQF2LZkrAbvrj5ugMNxCS")
var privateKeyStandard = hdPrivateKey.deriveChild("m/44'/0'/0'/0/0");
var privateKey = privateKeyStandard.privateKey;



const utxo = new bsv.Transaction.UnspentOutput({
    "address": "1NMZn3eedN1VPWemWcfVmh4NZASc2tMY3q",
    "txid": "7443c030b5a1576311f89e97a9217e3a29b9f81701746dba9d33fe474fc33183",
    "vout": 1,
    "satoshis": 3350,
    "scriptPubKey": "76a914ea3e523e6087be9c637195be0125f40dfb0530de88ac",
});

const transaction = new bsv.Transaction()
    .from(utxo)
    .to('1BoUFgA8ZnSFxARg9BgrXgmtZLj2ssrYuw', 1000)
    .change('1BoUFgA8ZnSFxARg9BgrXgmtZLj2ssrYuw')
    .sign(privateKey)
    
var p = document.querySelector("#text");
p.innerHTML = transaction.toString();