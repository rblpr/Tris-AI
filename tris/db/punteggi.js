getData();
async function getData() {
  console.log("fetching");
  const response = await fetch("/api");
  const data = await response.json();

  for (item of data) {
    const root = document.createElement("h5");
    const utente = document.createElement("h5");
    const dateString = new Date(item.timestamp).toLocaleString();
    utente.textContent = `Nome: ${item.nome} ${item.esito} --- Data: ${dateString}`;
    root.append(utente);
    document.body.append(root);
  }
}
