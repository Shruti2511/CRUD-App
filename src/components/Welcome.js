// src/components/WelcomePage.js
import React, { useContext } from "react";
import "./Welcome.css";
import { UserContext } from "../UserContext";
import Footer from "./Footer";
import CRUDTable from "./Functions";

const WelcomePage = () => {
  const { name } = useContext(UserContext);
  const footerTexts = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure dolorum possimus cumque quia animi, facilis autem adipisci ullam dicta sint, ipsa nam? Asperiores aliquam officiis unde, mollitia, facilis distinctio vel molestiae architecto ",
    "Explicabo ab laboriosam similique eius repellat facilis tenetur iure expedita sint laudantium assumenda dignissimos dicta molestias omnis voluptatem cumque alias fugit mollitia?earum fugiat sequi quibusdam aperiam maiores fugit cumque accusamus",
    "unde accusamus,  Labore molestias temporibus dolores voluptate voluptatem ratione sapiente maxime ex nobis repudiandae, deserunt nulla sit, exercitationem consequatur maiores recusandae tempora ipsum assumenda nemo officia saepe vel possimus error. ",
  ];

  return (
    <div className="welcome-container">
      <header className="welcome-header">
        <h1>Welcome, {name}!</h1>
      </header>
      <CRUDTable />
      <Footer texts={footerTexts} />
    </div>
  );
};

export default WelcomePage;
