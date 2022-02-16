import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Resume from "./pages/Resume/Resume";
import Portfolio from "./pages/Portfolio/Portfolio";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
 
  const renderPage = () => {
    switch (currentPage) {
      case "#about":
        return <About />;
      case "#portfolio":
        return <Portfolio />;
      case "#contact":
        return <Contact />;
      case "#resume":
        return <Resume />;
      default:
        return <About />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <main>
      <Header
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      ></Header>
      {renderPage()}
      <Footer></Footer>
    </main>
  );
}

export default App;
