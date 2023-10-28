function status(request, response) {
  response.status(200).send({ chave: "API is alive.\n" });
}

export default status;
