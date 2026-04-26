import { useState } from "react";
import "./App.css";
import logo from "./assets/logo.png";
import banda from "./assets/banda.jpg";
import merch1 from "./assets/merch1.jpg";
import merch2 from "./assets/merch2.jpg";
import merch3 from "./assets/merch3.jpg";

export default function App() {
  const telefono = "573184025747";
  const [hovered, setHovered] = useState(null);

  const canciones = [
    "59UKUqTLSUgi6RpI4vB3JV",
    "0sWZi414IOXpqeG0iQJCp8",
  ];

  const productos = [
    { nombre: "Camiseta Carnal Blasphemy", precio: "$60.000", imagen: merch1 },
    { nombre: "Hoodie Ritual", precio: "$130.000", imagen: merch2 },
    { nombre: "Embodied Corruption", precio: "$30.000", imagen: merch3 },
  ];

  const comprar = (producto) => {
    const mensaje = `Hola, quiero comprar: ${producto}`;
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  return (
    <div style={styles.body}>
      <header style={styles.nav}>
        <img src={logo} style={styles.logo} alt="Carnal Blasphemy" />

        <nav>
          {["Música", "Merch", "Banda", "Contacto"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                ...styles.link,
                transform: hovered === item ? "scale(1.1)" : "scale(1)",
                color: hovered === item ? "white" : "#aaa",
              }}
              onMouseEnter={() => setHovered(item)}
              onMouseLeave={() => setHovered(null)}
            >
              {item}
            </a>
          ))}
        </nav>
      </header>

      <section
        style={{
          ...styles.hero,
          background: `url(${banda}) center/cover`,
        }}
      >
        <div style={styles.overlay}></div>

        <div style={styles.heroContent}>
          <h1
            className="glitch glow"
            data-text="DEATH HEROES AND TOMBS"
            style={styles.heroTitle}
          >
            DEATH HEROES AND TOMBS
          </h1>

          <p style={styles.heroText}>
            EXTREME DEATH METAL.
          </p>
        </div>
      </section>

      <section id="musica" style={styles.section}>
        <h2 style={styles.title}>Música</h2>

        {canciones.map((id, i) => (
  <div
    key={i}
    style={{
      transform: hovered === `song-${i}` ? "scale(1.02)" : "scale(1)",
      transition: "0.3s"
    }}
    onMouseEnter={() => setHovered(`song-${i}`)}
    onMouseLeave={() => setHovered(null)}
  >
    <iframe
      src={`https://open.spotify.com/embed/track/${id}`}
      width="100%"
      height="152"
      style={styles.spotify}
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  </div>
))}
      </section>

      <section id="merch" style={styles.sectionDark}>
        <h2 style={styles.title}>Merch Oficial</h2>

        <div style={styles.grid}>
          {productos.map((producto, i) => (
            <div
              key={producto.nombre}
              style={{
                ...styles.card,
                transform: hovered === i ? "scale(1.05)" : "scale(1)",
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <img
                src={producto.imagen}
                style={styles.imageReal}
                alt={producto.nombre}
              />

              <h3>{producto.nombre}</h3>
              <p style={{ color: "#888" }}>{producto.precio}</p>

              <button
                style={styles.button}
                onClick={() => comprar(producto.nombre)}
              >
                Comprar
              </button>
            </div>
          ))}
        </div>
      </section>

      <section id="banda" style={styles.section}>
        <h2 style={styles.title}>La Banda</h2>
        <p style={styles.text}>
                    CARNAL BLASPHEMY, banda bogotana de metal extremo con casi de 20 años de trayectoria. 
                    Mezcla death metal, grindcore y groove con crítica social y fuerza escénica.
        </p>
      </section>

      <section id="contacto" style={styles.sectionDark}>
        <h2 style={styles.title}>Booking</h2>

        <button style={styles.ctaPrimary} onClick={() => comprar("Booking")}>
          Contactar
        </button>
      </section>

      <footer style={styles.footer}>
        © 2026 Carnal Blasphemy — Death Metal
      </footer>
    </div>
  );
}

const styles = {
  body: {
    background: "#050505",
    color: "white",
    fontFamily: "Arial",
  },

  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    borderBottom: "1px solid #111",
  },

  logo: {
    height: "50px",
    filter: "drop-shadow(0px 0px 8px orange)",
  },

  link: {
    margin: "10px",
    textDecoration: "none",
    transition: "0.3s",
    display: "inline-block",
  },

  hero: {
    position: "relative",
    height: "80vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.75)",
  },

  heroContent: {
    position: "relative",
    textAlign: "center",
    padding: "20px",
  },

  heroTitle: {
    fontSize: "60px",
    letterSpacing: "6px",
  },

  heroText: {
    color: "#aaa",
  },

  section: {
    padding: "60px 40px",
  },

  sectionDark: {
    padding: "60px 40px",
    background: "#0a0a0a",
  },

  title: {
    fontSize: "28px",
    borderBottom: "1px solid #222",
    paddingBottom: "10px",
  },

 spotify: {
  marginTop: "20px",
  borderRadius: "10px",
  border: "1px solid #222",
  transition: "0.3s",
  boxShadow: "0px 0px 20px rgba(255,60,0,0.15)"
},

  grid: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    marginTop: "20px",
  },

  card: {
    border: "1px solid #222",
    padding: "20px",
    width: "250px",
    background: "#080808",
    transition: "0.3s",
  },

  imageReal: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
  },

  button: {
    marginTop: "10px",
    background: "white",
    color: "black",
    border: "none",
    padding: "10px",
    cursor: "pointer",
  },

  text: {
    marginTop: "20px",
    color: "#aaa",
    lineHeight: "1.7",
    maxWidth: "800px",
  },

  ctaPrimary: {
    padding: "12px 25px",
    background: "white",
    color: "black",
    border: "none",
    cursor: "pointer",
  },

  footer: {
    textAlign: "center",
    padding: "20px",
    borderTop: "1px solid #111",
    color: "#666",
  },
};