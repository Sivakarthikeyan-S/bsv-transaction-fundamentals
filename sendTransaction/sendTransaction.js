var hdPrivateKey = bsv.HDPrivateKey.fromString(
  "xprv9s21ZrQH143K4EJsx5KCssHtK6cUh9SrFmwXJis8G8ixTx7mwuAdyq8DwH7AVtS3f5fjKaFmZWFtckkGDATMSFFjEpmfeNKNLUL3nsuzTfc"
);
var privateKeyStandard = hdPrivateKey.deriveChild("m/44'/0'/0'/0/0");
var privateKey = privateKeyStandard.privateKey;

const utxo = new bsv.Transaction.UnspentOutput({
  address: "15pxKFSv7u1HmsME3usHmjZ953YHtfdutt",
  txid: "6ef57831894fac2ea4a306ad25345f3a833abe15ae70cbe959e84d78ba2383e9",
  vout: 0.00001,
  satoshis: 1000,
  scriptPubKey: "76a91434f23a48e5b7c103ce7abfeb707406f0a255646288ac",
});

const transaction = new bsv.Transaction()
  .from(utxo)
  .to("18nRmzxrygHmsh5DQuVFYDZXGwcZ3CbVuk", 1000)
  .change("1BoUFgA8ZnSFxARg9BgrXgmtZLj2ssrYuw")
  .sign(privateKey);

var p = document.querySelector("#res1");
p.innerHTML = transaction.toString();

var rawTX =
  "0100000001e98323ba784de859e9cb70ae15be3a833a5f3425ad06a3a42eac4f893178f56e0000000000ffffffff01e8030000000000001976a914556047d5ca688f1b6c51c8abc08aa8b16b941d9588ac00000000";

const pushTx = async () => {
  const res = await axios.post(
    "https://merchantapi.taal.com/mapi/tx",
    { rawtx: rawTX },
    {
      headers: {
        "content-type": "application/json",
      },
    }
  );
  let txData = res.data;
  let txid = txData.payload;
  let p = document.querySelector("#res");
  p.innerHTML = txid;
};

pushTx();
