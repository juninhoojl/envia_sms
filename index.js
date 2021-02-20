// npm install node-fetch
const fetch = require('node-fetch');

function main2(){
  let dados = {
    to:["5535984165058"],
    text: "mensaje de texto",
    from: "msg"
  };

  const user = "";
  const pass = "";

  const buffer_text = new Buffer.from(user+':'+pass);
  const base64_text = buffer_text.toString('base64');
  console.log(base64_text);
  const adicional = {
    method: "POST",
    body: JSON.stringify(dados),
    headers: {
      "Content-type": 'application/json; charset=UTF-8',
      "Authorization": 'Basic '+base64_text
    }
  };

  const url = 'https://gateway.plusmms.net/rest/message';
  fetch(url, adicional)
  .then(response => response.json())
  .then(json =>console.log(json))
  .catch(err =>onsole.log(err));
};

main2();