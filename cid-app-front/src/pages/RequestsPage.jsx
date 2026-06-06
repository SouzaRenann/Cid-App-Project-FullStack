import { useEffect, useState } from "react";
import Layout from "../components/Layout";

import {
  getRequests,
  createRequest,
  deleteRequest,
  updateRequestStatus,
} from "../service/requestService";

function RequestsPage() {
  const [requests, setRequests] = useState([]);

  const [userId, setUserId] = useState("");
  const [category, setCategory] = useState("LIMPEZA");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [neighborhood, setNeighborhood] = useState("");

  async function loadRequests() {
    try {
      const response = await getRequests();
      setRequests(response.data);
    } catch (error) {
      console.log("Erro ao buscar solicitações:", error);
    }
  }

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
      await createRequest({
        category,
        description,
        location,
        neighborhood,
        anonymous: false,
        status: "ABERTO",
        priority: "MEDIA",
        sector: sectorMap[category],
        user: {
          id: Number(userId),
        },
      });

      setUserId("");
      setDescription("");
      setLocation("");
      setNeighborhood("");

      loadRequests();
    } catch (error) {
      alert("Erro ao registrar solicitação.");
      console.log(error);
    }
  }

  async function handleDelete(id) {
    try {
      await deleteRequest(id);
      loadRequests();
    } catch (error) {
      alert("Erro ao excluir solicitação.");
      console.log(error);
    }
  }

  async function handleStatus(id, status) {
    try {
      await updateRequestStatus(id, status);
      loadRequests();
    } catch (error) {
      alert("Erro ao alterar status.");
      console.log(error);
    }
  }

  useEffect(() => {
    loadRequests();
  }, []);

  return (
    <Layout>
      <div className="card mb-4">
        <div className="card-header bg-primary text-white">
          <strong>Registrar Solicitação</strong>
        </div>

        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-4 mb-3">
                <label className="form-label">ID do Usuário</label>
                <input
                  className="form-control"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                />
              </div>

              <div className="col-md-8 mb-3">
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

              <div className="col-md-6 mb-3">
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
            </div>

            <div className="d-flex justify-content-end">
              <button className="btn btn-primary" type="submit">
                Registrar Solicitação
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <strong>Solicitações Cadastradas</strong>
        </div>

        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-striped table-bordered align-middle">
              <thead className="table-light">
                <tr>
                  <th>Protocolo</th>
                  <th>Categoria</th>
                  <th>Status</th>
                  <th>Prioridade</th>
                  <th>Setor</th>
                  <th>Bairro</th>
                  <th>Ações</th>
                </tr>
              </thead>

              <tbody>
                {requests.map((request) => (
                  <tr key={request.id}>
                    <td>{request.protocol}</td>
                    <td>{request.category}</td>
                    <td>
                      <span className="badge bg-secondary">
                        {request.status}
                      </span>
                    </td>
                    <td>{request.priority}</td>
                    <td>{request.sector}</td>
                    <td>{request.neighborhood}</td>
                    <td>
                      <button
                        className="btn btn-warning btn-sm me-2"
                        onClick={() =>
                          handleStatus(request.id, "EM_ANDAMENTO")
                        }
                      >
                        Em Andamento
                      </button>

                      <button
                        className="btn btn-success btn-sm me-2"
                        onClick={() =>
                          handleStatus(request.id, "RESOLVIDO")
                        }
                      >
                        Resolver
                      </button>

                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(request.id)}
                      >
                        Excluir
                      </button>
                    </td>
                  </tr>
                ))}

                {requests.length === 0 && (
                  <tr>
                    <td colSpan="7" className="text-center">
                      Nenhuma solicitação cadastrada.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default RequestsPage;