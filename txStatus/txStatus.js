var config = {
  method: "get",
  url: "https://merchantapi.taal.com/mapi/tx/de7cc62ea33eac822a3a2dd9cd8cc295401ba9941c96f66c00b310adfdfe4882",
};

let p = document.querySelector("#res");
axios(config)
  .then((response) => {
    console.log(response);
    let data = JSON.stringify(response.data);
    p.innerHTML = data;
  })
  .catch((error) => {
    p.innerHTML = JSON.stringify(error.response.data.message);
  });
