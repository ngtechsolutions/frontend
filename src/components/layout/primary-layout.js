import Header from "./header";
// import Footer from "./footer";

function PrimaryLayout({ children }) {
  return (
    <>
      <div className="min-h-full">
        <Header />
        <main>
          <div className="mx-auto py-6 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </>
  );
}

export default PrimaryLayout;
