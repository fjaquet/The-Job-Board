import { useState } from "react";
import Header from "./components/Header";
import Jobs from "./components/Jobs";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const jobs = [
    {
      id: 1,
      className: "redBorder",
      title: "Full Time Sales Associate - Sydney Boutique",
      contractType: "CDI",
      country: "Australie",
      city: "Sydney",
    },
    {
      id: 2,
      className: "greenBorder",
      title: "Agent de Sécurité - Pantin",
      contractType: "CDI",
      country: "France",
      city: "Pantin",
    },
    {
      id: 3,
      className: "yellowBorder",
      title: "Responsable d'Atelier (H/F)",
      contractType: "CDD",
      country: "France",
      city: "Paris",
    },
    {
      id: 4,
      className: "blueBorder",
      title: "Chef de Projets",
      contractType: "CDD",
      country: "France",
      city: "Paris",
    },
    {
      id: 5,
      className: "salmonBorder",
      title: "Développeur React.js",
      contractType: "CDI",
      country: "France",
      city: "Paris",
    },
    {
      id: 6,
      className: "redBorder",
      title: "Sales Associate Stockholm",
      contractType: "CDI",
      country: "Suede",
      city: "Stockholm",
    },
    {
      id: 7,
      className: "greenBorder",
      title: "Vendeur/se - Crans Montana",
      contractType: "CDI",
      country: "Suisse",
      city: "Crans-Montana",
    },
    {
      id: 8,
      className: "yellowBorder",
      title: "CRM & Data Quality Analyst",
      contractType: "CDI",
      country: "USA",
      city: "New York",
    },
    {
      id: 9,
      className: "blueBorder",
      title: "Infirmier (H/F)",
      contractType: "CDI",
      country: "France",
      city: "Pantin",
    },
  ];

  return (
    <>
      <Header title="The Job Board" />
      <div className="container">
        {jobs.map((job) => (
          <Jobs
            key={job.id}
            className={job.className}
            title={job.title}
            contractType={job.contractType}
            country={job.country}
            city={job.city}
          />
        ))}
      </div>

      <Footer techno="React" orga="Le Reacteur" creator="Nono" />
    </>
  );
}

export default App;
