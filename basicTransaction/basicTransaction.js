var hdPrivateKey = bsv.HDPrivateKey.fromString("xprv9s21ZrQH143K2Gn3BWTXDv6xQEfX69qP7Bu31VCjxQPBqcsK98UbDqxNyQDQbPHuCsViWzckSCxiYWJ69J1JMquJEAxXahFcdekGHfM5hgR")
var privateKeyStandard = hdPrivateKey.deriveChild("m/44'/0'/0'/0/0");
var privateKey = privateKeyStandard.privateKey;

const utxo = new bsv.Transaction.UnspentOutput({
"address": "15pxKFSv7u1HmsME3usHmjZ953YHtfdutt",
"txid": "975951898cca4c71612f80b332ce05f0408247be125db445557924b93319cb3a",
"vout": 2,
"amount": 0.00005263,
"satoshis": 5263,
"value": 5263,
"height": 687940,
"confirmations": 232,
"scriptPubKey": "76a91434f23a48e5b7c103ce7abfeb707406f0a255646288ac",
"script": "76a91434f23a48e5b7c103ce7abfeb707406f0a255646288ac",
"outputIndex": 2
});

const transaction = new bsv.Transaction()
.from(utxo)
.to('18nRmzxrygHmsh5DQuVFYDZXGwcZ3CbVuk', 1800)
.change('1BoUFgA8ZnSFxARg9BgrXgmtZLj2ssrYuw')
.sign(privateKey);
    
var p = document.querySelector("#text");
p.innerHTML = transaction.toString();