const form = document.getElementById("form");

form.addEventListener("submit", async event => {
  event.preventDefault();

  const formData = new FormData(form);
  const nome = formData.get("nome");

  const data = {
    nome: nome,
    esito: esito
  };
  console.log(data);

  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" }
  };

  const response = await fetch("/api", options);
  const json = await response.json();

  form.reset();
  document.querySelector("button").click();
});
