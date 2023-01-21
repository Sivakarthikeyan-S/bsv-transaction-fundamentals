var config = {
  method: "get",
  headers: { Authorization: "mainnet_cc1450be25bf110c57d45a9e8dce5b75" },
  url: "https://merchantapi.taal.com/mapi/feeQuote",
};

axios(config).then((response) => {
  let data = JSON.stringify(response.data);
  let p = document.querySelector("#res");
  p.innerHTML = data;
});
