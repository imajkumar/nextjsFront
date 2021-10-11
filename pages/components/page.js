import PageContainer from './page-container';
import Footer from './footer';

export default function Page({ title, description, children }) {
  return (
    <PageContainer title={title} description={description}>
  

      <div className="content">{children}</div>
      <Footer />
      <style jsx>{`
        .content {
          display: flex;
          align-items: center;
          flex-direction: column;
          width: 100%;
          height:45px;
          max-width: 1700px;
          background:#16426b;
        }
      `}</style>
    </PageContainer>
  );
}