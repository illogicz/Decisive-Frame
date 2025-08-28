import '../App.css'

export default function Home() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage:
          "url('http://static1.squarespace.com/static/58fb0b1d414fb5f44892da9e/t/5ea688ff41e9232ab09e7b07/1584798644478/Merel+Schoneveld-10.jpg')",
      }}
    >
      <div className="overlay">
        <h2>Merel Schoneveld Photography</h2>
        <p>Street photographer from The Netherlands - Photographing life</p>
      </div>
    </section>
  )
}
