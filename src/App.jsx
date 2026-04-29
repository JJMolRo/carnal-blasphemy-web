import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import logo from "./assets/logo.png";
import banda from "./assets/banda.jpg";
import merch1 from "./assets/merch1.jpg";
import merch2 from "./assets/merch2.jpg";
import merch3 from "./assets/merch3.jpg";


export default function App() {
  const telefono = "573184025747";
  const [tabActiva, setTabActiva] = useState("inicio");

  const tabs = {
    inicio: {
      titulo: "Inicio",
      texto: "Bienvenido al sitio oficial de Carnal Blasphemy.",
    },
    musica: {
      titulo: "Música",
      texto: "Escucha los lanzamientos oficiales de la banda en Spotify.",
    },
    discografia: {
      titulo: "Discografía",
      texto: "Catálogo oficial, EPs, splits y próximos lanzamientos.",
    },
    miembros: {
      titulo: "Miembros",
      texto: "Alineación, roles e historia de los integrantes.",
    },
    resenas: {
      titulo: "Reseñas",
      texto: "Opiniones, prensa underground y comentarios de la escena.",
    },
    merch: {
      titulo: "Merch",
      texto: "Camisetas, hoodies, posters y mercancía oficial.",
    },
    contacto: {
      titulo: "Contacto",
      texto: "Booking, prensa, conciertos y pedidos por WhatsApp.",
    },
  };

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
          <a href="#inicio" className="logo-link" onClick={() => setTabActiva("inicio")}>
            <img src={logo} alt="Carnal Blasphemy" className="logo" />
          </a>

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

      <section
        id="inicio"
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
            <button className="btnPrimary" onClick={() => setTabActiva("musica")}>
              Escuchar
            </button>
            <button className="btnSecondary" onClick={() => setTabActiva("merch")}>
              Ver merch
            </button>
          </div>
        </div>
      </section>

      <section className="tabPanel">
        <p className="sectionTag">Sección activa</p>
        <h2>{tabs[tabActiva].titulo}</h2>
        <p>{tabs[tabActiva].texto}</p>
      </section>

      {tabActiva === "inicio" && (
        <section className="section">
          <p className="sectionTag">Sitio oficial</p>
          <h2>Carnal Blasphemy</h2>
          <p className="sectionText">
            Plataforma oficial para música, discografía, miembros, reseñas, merch
            y contacto de la banda.
          </p>
        </section>
      )}

      {tabActiva === "musica" && (
        <section className="section">
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
      )}

      {tabActiva === "discografia" && (
        <section className="section dark">
          <p className="sectionTag">Catálogo oficial</p>
          <h2>Discografía</h2>

          <div className="productGrid">
            <article className="productCard">
              <img src={merch3} alt="Pain Industry" />
              <div className="productInfo">
                <h3>Pain Industry</h3>
                <p>Álbum / EP oficial de Carnal Blasphemy.</p>
              </div>
            </article>

            <article className="productCard">
              <img src={banda} alt="Devoured Souls" />
              <div className="productInfo">
                <h3>Devoured Souls</h3>
                <p>Material destacado disponible en Spotify.</p>
              </div>
            </article>
          </div>
        </section>
      )}

      {tabActiva === "miembros" && (
        <section className="section">
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
      )}

      {tabActiva === "resenas" && (
        <section className="section dark">
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
      )}

      {tabActiva === "merch" && (
        <section className="section dark">
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
      )}

      {tabActiva === "contacto" && (
        <section className="section dark contact">
          <p className="sectionTag">Booking / prensa / eventos</p>
          <h2>Contacto</h2>

          <p className="sectionText">
            Para conciertos, colaboraciones, entrevistas o pedidos de merch.
          </p>

          <button className="btnPrimary" onClick={() => comprar("Booking")}>
            Contactar por WhatsApp
          </button>
        </section>
      )}

      <footer className="footer">
        © 2026 Carnal Blasphemy — Death Metal Underground
      </footer>
    </div>
  );
}