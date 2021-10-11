export default function MainLayout() {
  return (
    <div>
      <div id="product">
      main
      </div>
    <style jsx>{`
        #product {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          width: 100%;
        }
        #product .main {
          flex-grow: 1;
          padding-left: 30px;
        }
        @media (max-width: 900px) {
          #product .main {
            padding-left: 0;
          }
        }
      `}</style>
    </div>
    
  );
}