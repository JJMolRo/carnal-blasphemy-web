import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

import logo from "./assets/logo.png";
import banda from "./assets/banda.jpg";
import merch1 from "./assets/merch1.jpg";
import merch2 from "./assets/merch2.jpg";
import merch3 from "./assets/merch3.jpg";
import PerversityBloodPleasure from "./assets/PerversityBloodPleasure.jpg";
import PossessionHateAndDestruction from "./assets/PossessionHateAndDestruction.jpg";
import LiarsMadeAuthority from "./assets/LiarsMadeAuthority.jpg";
import DeathHeroesAndTombs from "./assets/DeathHeroesAndTombs.jpg";

export default function App() {
  const telefono = "573184025747";

  const canciones = [
    "59UKUqTLSUgi6RpI4vB3JV",
    "0sWZi414IOXpqeG0iQJCp8",
  ];

  const productos = [
    { nombre: "Camiseta Carnal Blasphemy", precio: "$60.000", imagen: merch1 },
    { nombre: "Hoodie Ritual", precio: "$130.000", imagen: merch2 },
    { nombre: "Poster Edición Limitada", precio: "$30.000", imagen: merch3 },
  ];

  const comprar = (producto) => {
    const mensaje = `Hola, quiero comprar: ${producto}`;
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="site">
      <div className="particles"></div>
      <div className="smoke"></div>

      <header className="navbar">
        <div className="nav-container">
          <Link to="/" className="logo-link">
            <img src={logo} alt="Carnal Blasphemy" className="logo" />
          </Link>

          <nav className="nav-menu">
            <Link to="/">Inicio</Link>
            <Link to="/musica">Música</Link>
            <Link to="/discografia">Discografía</Link>
            <Link to="/miembros">Miembros</Link>
            <Link to="/resenas">Reseñas</Link>
            <Link to="/merch">Merch</Link>
            <Link to="/contacto">Contacto</Link>
          </nav>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Inicio banda={banda} />} />
        <Route path="/musica" element={<Musica canciones={canciones} />} />
        <Route path="/discografia" element={<Discografia banda={banda} merch3={merch3} />} />
        <Route path="/miembros" element={<Miembros />} />
        <Route path="/resenas" element={<Resenas />} />
        <Route path="/merch" element={<Merch productos={productos} comprar={comprar} />} />
        <Route path="/contacto" element={<Contacto comprar={comprar} />} />
      </Routes>

      <footer className="footer">
        © 2026 Carnal Blasphemy — Death Metal Underground
      </footer>
    </div>
  );
}

function Inicio({ banda }) {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${banda})` }}
    >
      <div className="heroOverlay"></div>

      <div className="heroContent">
        <p className="eyebrow">Death Metal · Bogotá · Underground</p>

        <h1 className="heroSlogan">
          <span>NO ONE LIVES</span>
          <span>WHO LEAVES</span>
          <span>NO TRACE</span>
        </h1>

        <p className="heroText">
          Sonido extremo, presencia oscura y una identidad brutal construida
          desde la escena underground.
        </p>

        <div className="heroButtons">
          <Link to="/musica" className="btnPrimary">Escuchar</Link>
          <Link to="/merch" className="btnSecondary">Ver merch</Link>
        </div>
      </div>
    </section>
  );
}

function Musica({ canciones }) {
  return (
    <section className="section pageSection">
      <p className="sectionTag">Lanzamientos oficiales</p>
      <h2>Música</h2>

      <p className="sectionText">
        Escucha canciones seleccionadas de Carnal Blasphemy directamente desde Spotify.
      </p>

      <div className="musicGrid">
        {canciones.map((id) => (
          <iframe
            key={id}
            src={`https://open.spotify.com/embed/track/${id}`}
            width="100%"
            height="152"
            className="spotify"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        ))}
      </div>
    </section>
  );
}

function Discografia() {
  const discos = [
    {
      nombre: "Perversity Blood Pleasure",
      imagen: PerversityBloodPleasure,
      descripcion: "EP brutal con sonido oscuro y agresivo.",
    },
    {
      nombre: "Possession Hate And Destruction",
      imagen: PossessionHateAndDestruction,
      descripcion: "Material underground con identidad cruda.",
    },
    {
      nombre: "Liars Made Authority",
      imagen: LiarsMadeAuthority,
      descripcion: "Producción más pesada y atmosférica.",
    },
    {
      nombre: "Death Heroes And Tombs",
      imagen: DeathHeroesAndTombs,
      descripcion: "Material underground con identidad cruda.",
    },
  ];

  return (
    <section className="section dark pageSection">
      <p className="sectionTag">Catálogo oficial</p>
      <h2>Discografía</h2>

      <div className="productGrid">
        {discos.map((disco) => (
          <article className="productCard" key={disco.nombre}>
            <img src={disco.imagen} alt={disco.nombre} />

            <div className="productInfo">
              <h3>{disco.nombre}</h3>
              <p>{disco.descripcion}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Miembros() {
  return (
    <section className="section pageSection">
      <p className="sectionTag">Alineación</p>
      <h2>Miembros</h2>

      <div className="productGrid">
        <article className="productCard">
          <div className="productInfo">
            <h3>Vocalista</h3>
            <p>Voz principal, presencia escénica y fuerza lírica.</p>
          </div>
        </article>

        <article className="productCard">
          <div className="productInfo">
            <h3>Guitarra</h3>
            <p>Riffs, composición y sonido extremo.</p>
          </div>
        </article>

        <article className="productCard">
          <div className="productInfo">
            <h3>Batería</h3>
            <p>Blast beats, groove y potencia rítmica.</p>
          </div>
        </article>
      </div>
    </section>
  );
}

function Resenas() {
  return (
    <section className="section dark pageSection">
      <p className="sectionTag">Prensa y opinión</p>
      <h2>Reseñas</h2>

      <div className="productGrid">
        <article className="productCard">
          <div className="productInfo">
            <h3>Reseña underground</h3>
            <p>“Una propuesta brutal, directa y con una identidad oscura bien marcada.”</p>
          </div>
        </article>

        <article className="productCard">
          <div className="productInfo">
            <h3>Crítica de escena</h3>
            <p>“Carnal Blasphemy mantiene viva la crudeza del metal extremo colombiano.”</p>
          </div>
        </article>
      </div>
    </section>
  );
}

function Merch({ productos, comprar }) {
  return (
    <section className="section dark pageSection">
      <p className="sectionTag">Tienda oficial</p>
      <h2>Merch Oficial</h2>

      <div className="productGrid">
        {productos.map((producto) => (
          <article className="productCard" key={producto.nombre}>
            <img src={producto.imagen} alt={producto.nombre} />

            <div className="productInfo">
              <h3>{producto.nombre}</h3>
              <p>{producto.precio}</p>

              <button onClick={() => comprar(producto.nombre)}>
                Comprar por WhatsApp
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contacto({ comprar }) {
  return (
    <section className="section dark contact pageSection">
      <p className="sectionTag">Booking / prensa / eventos</p>
      <h2>Contacto</h2>

      <p className="sectionText">
        Para conciertos, colaboraciones, entrevistas o pedidos de merch.
      </p>

      <button className="btnPrimary" onClick={() => comprar("Booking")}>
        Contactar por WhatsApp
      </button>
    </section>
  );
}