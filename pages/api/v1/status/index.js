function status(request, response) {
  response.status(200).json({ result: "Testando a parada" });
}

export default status;
