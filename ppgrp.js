/**
 * Pretty Print GraphQL Request Payload
 */
window.onload = function() {
  let form = document.getElementById("form");
  let tb_result = document.getElementById("result");
  let tb_query = document.getElementById("query");

  form.addEventListener('reset', function(e) {
    tb_result.innerText = '';
    tb_query.innerText = '';
  });

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    let txt = form.querySelector("textarea").value;
    if (txt === "") {
      return;
    }

    try {
      let json = JSON.parse(txt);
      tb_result.innerText = JSON.stringify(json, null, 4);
      tb_query.innerText = json["query"];
    } catch (err) {
      tb_result.innerText = err;
    }
  });
};
