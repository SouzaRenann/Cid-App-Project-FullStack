import Layout from "../components/Layout";

function DashboardPage() {
  return (
    <Layout>
      <section className="title-bar">
        <h1>Painel do Cidadão</h1>
      </section>

      <section className="content-card">
        <h2>Resumo do Sistema</h2>
        <p>Bem-vindo ao CID APP.</p>
        <p>Sistema simples para cadastro e acompanhamento de solicitações públicas.</p>
      </section>
    </Layout>
  );
}

export default DashboardPage;