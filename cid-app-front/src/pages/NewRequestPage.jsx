import { useState } from "react";
import Layout from "../components/Layout";
import { createRequest } from "../service/requestService";

function NewRequestPage() {
  const [category, setCategory] = useState("LIMPEZA");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [anonymous, setAnonymous] = useState(false);
  const [createdRequest, setCreatedRequest] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();

    const sectorMap = {
      PROBLEMAS_ENERGIA: "ILUMINACAO_PUBLICA",
      LIMPEZA: "LIMPEZA_URBANA",
      SAUDE: "SAUDE",
      SEGURANCA: "SEGURANCA",
      EDUCACAO: "EDUCACAO",
    };

    try {
      const response = await createRequest({
        category,
        description,
        location,
        neighborhood,
        anonymous,
        status: "ABERTO",
        priority: "MEDIA",
        sector: sectorMap[category],
      });

      setCreatedRequest(response.data);
      setDescription("");
      setLocation("");
      setNeighborhood("");
      setAnonymous(false);
    } catch (error) {
      alert("Erro ao registrar solicitação.");
      console.log(error);
    }
  }

  return (
    <Layout>
      <div className="card">
        <div className="card-header bg-primary text-white">
          <strong>Registrar Solicitação ou Denúncia</strong>
        </div>

        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Categoria</label>
                <select
                  className="form-select"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="PROBLEMAS_ENERGIA">
                    Problemas de Energia
                  </option>
                  <option value="LIMPEZA">Limpeza Urbana</option>
                  <option value="SAUDE">Saúde</option>
                  <option value="SEGURANCA">Segurança</option>
                  <option value="EDUCACAO">Educação</option>
                </select>
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Bairro</label>
                <input
                  className="form-control"
                  value={neighborhood}
                  onChange={(e) => setNeighborhood(e.target.value)}
                />
              </div>

              <div className="col-md-12 mb-3">
                <label className="form-label">Localização</label>
                <input
                  className="form-control"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>

              <div className="col-md-12 mb-3">
                <label className="form-label">Descrição</label>
                <textarea
                  className="form-control"
                  rows="4"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <div className="col-md-12 mb-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="anonymous"
                    checked={anonymous}
                    onChange={(e) => setAnonymous(e.target.checked)}
                  />

                  <label className="form-check-label" htmlFor="anonymous">
                    Registrar como anônimo
                  </label>
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-end">
              <button className="btn btn-primary" type="submit">
                Enviar Solicitação
              </button>
            </div>
          </form>

          {createdRequest && (
            <div className="alert alert-success mt-4">
              <h5>Solicitação registrada com sucesso!</h5>
              <p className="mb-1">
                <strong>Protocolo:</strong> {createdRequest.protocol}
              </p>
              <p className="mb-0">
                <strong>Status:</strong> {createdRequest.status}
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default NewRequestPage;