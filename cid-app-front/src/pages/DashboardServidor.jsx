import Layout from "../components/Layout";

function DashboardServidor() {
  return (
    <Layout>
      <section className="title-bar">
        <h1>Painel do Servidor Público</h1>
      </section>

      <section className="content-card">
        <h2>Atendimento de solicitações</h2>

        <p>Bem-vindo ao painel do servidor público.</p>

        <ul>
          <li>Consultar solicitações recebidas</li>
          <li>Atualizar status do atendimento</li>
          <li>Acompanhar demandas em andamento</li>
        </ul>
      </section>
    </Layout>
  );
}

export default DashboardServidor;