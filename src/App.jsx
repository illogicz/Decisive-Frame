import './App.css'

function App() {
  return (
    <>
      <header className="navbar">
        <h1 className="logo">Merel Schoneveld</h1>
        <nav>
          <a href="#">Home</a>
          <a href="#">Portfolio</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      <section
        className="hero"
        style={{
          backgroundImage:
            "url('https://static1.squarespace.com/static/58fb0b1d414fb5f44892da9e/t/5ea688ff41e9232ab09e7b07/1584798644478/Merel+Schoneveld-10.jpg')",
        }}
      >
        <div className="overlay">
          <h2>Merel Schoneveld Photography</h2>
          <p>Street photographer from The Netherlands - Photographing life</p>
        </div>
      </section>

      <section className="gallery">
        <img
          src="https://images.squarespace-cdn.com/content/v1/58fb0b1d414fb5f44892da9e/1611308116810-HO75GLN3YBXJF38O7Y2H/Merel-Schoneveld-47.jpg"
          alt="Street scene 1"
        />
        <img
          src="https://images.squarespace-cdn.com/content/v1/58fb0b1d414fb5f44892da9e/1610309548782-10VTF4G58J6SDR74GSZB/Merel-Schoneveld-11.jpg"
          alt="Street scene 2"
        />
        <img
          src="https://images.squarespace-cdn.com/content/v1/58fb0b1d414fb5f44892da9e/1551646566321-KWIMQG25TXB9N5XFUBGK/merel-schoneveld-23.jpg"
          alt="Street scene 3"
        />
      </section>

      <footer className="footer">
        &copy; {new Date().getFullYear()} Merel Schoneveld
      </footer>
    </>
  )
}

export default App
