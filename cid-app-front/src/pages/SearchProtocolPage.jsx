import { useState } from "react";
import Layout from "../components/Layout";
import { findRequestByProtocol } from "../service/requestService";

function SearchProtocolPage() {
  const [protocol, setProtocol] = useState("");
  const [request, setRequest] = useState(null);
  const [error, setError] = useState("");

  async function handleSearch(e) {
    e.preventDefault();

    try {
      const response = await findRequestByProtocol(protocol);

      setRequest(response.data);
      setError("");
    } catch (error) {
      setRequest(null);
      setError("Solicitação não encontrada.");
    }
  }

  return (
    <Layout>
      <div className="card">
        <div className="card-header bg-primary text-white">
          <strong>Acompanhar Solicitação</strong>
        </div>

        <div className="card-body">
          <form onSubmit={handleSearch}>
            <div className="row align-items-end">
              <div className="col-md-9 mb-3">
                <label className="form-label">Protocolo</label>
                <input
                  className="form-control"
                  placeholder="Ex: CID-2026-00001"
                  value={protocol}
                  onChange={(e) => setProtocol(e.target.value)}
                />
              </div>

              <div className="col-md-3 mb-3">
                <button className="btn btn-primary w-100" type="submit">
                  Pesquisar
                </button>
              </div>
            </div>
          </form>

          {error && (
            <div className="alert alert-danger mt-3">
              {error}
            </div>
          )}

          {request && (
            <div className="card mt-4">
              <div className="card-header">
                <strong>Detalhes da Solicitação</strong>
              </div>

              <div className="card-body">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <strong>Protocolo:</strong>
                    <p>{request.protocol}</p>
                  </div>

                  <div className="col-md-6 mb-3">
                    <strong>Status:</strong>
                    <p>{request.status}</p>
                  </div>

                  <div className="col-md-6 mb-3">
                    <strong>Categoria:</strong>
                    <p>{request.category}</p>
                  </div>

                  <div className="col-md-6 mb-3">
                    <strong>Prioridade:</strong>
                    <p>{request.priority}</p>
                  </div>

                  <div className="col-md-6 mb-3">
                    <strong>Setor:</strong>
                    <p>{request.sector}</p>
                  </div>

                  <div className="col-md-6 mb-3">
                    <strong>Bairro:</strong>
                    <p>{request.neighborhood}</p>
                  </div>

                  <div className="col-md-12 mb-3">
                    <strong>Localização:</strong>
                    <p>{request.location}</p>
                  </div>

                  <div className="col-md-12">
                    <strong>Descrição:</strong>
                    <p>{request.description}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default SearchProtocolPage;