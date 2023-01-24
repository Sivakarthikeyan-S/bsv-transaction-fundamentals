var hdPrivateKey = bsv.HDPrivateKey.fromString
    ("xprv9s21ZrQH143K4GkitpC59MzX9D4zPjfRUY5DAz83xVtqTEVxnGqJMr4RydK4sUyok8AvAXxkS8h41sBuyzeZ7z6L746bbvxtfjoBsnWxV2T");
    
var privateKeyStandard = hdPrivateKey.
deriveChild("m/44'/0'/0'/0/0");

var privateKey = privateKeyStandard.privateKey;
    
var config = {
  safe: true,
  data: ["0x6d02", "hello world"],
  pay: {
    key: privateKey,
    rpc: "https://api.mattercloud.net",
    feeb: 0.5,
    to: [{
      address: "1BoUFgA8ZnSFxARg9BgrXgmtZLj2ssrYuw",
      value: 1000
    }]
}
}
    
filepay.build(config, function(error, tx) {
    let p = document.querySelector("#res");
    p.innerHTML = tx.toString();
});