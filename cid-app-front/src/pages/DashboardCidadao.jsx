import Layout from "../components/Layout";

function DashboardCidadao() {
  return (
    <Layout>
      <section className="title-bar">
        <h1>Painel do Cidadão</h1>
      </section>

      <section className="content-card">
        <h2>Registro e acompanhamento</h2>

        <p>Bem-vindo ao painel do cidadão.</p>

        <ul>
          <li>Registrar solicitação ou denúncia</li>
          <li>Acompanhar solicitações cadastradas</li>
          <li>Consultar protocolo de atendimento</li>
        </ul>
      </section>
    </Layout>
  );
}

export default DashboardCidadao;