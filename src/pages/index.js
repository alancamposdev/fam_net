import React from "react";

/**Estilos */
import "./home/header.css";
import "./home/main.css";
//componentes
import Header from "./home/components/HeaderComponent";

function Home(){
  return(
    <div>
      <Header/>
      <main className="main">
          <div className="navbar">Navbar</div>
          <div className="feed">Feed</div>
          
      </main>
    </div>
  )
}
export default Home;