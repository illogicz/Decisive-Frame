import '../App.css'

export default function Contact() {
  return (
    <section className="content">
      <h2>Contact</h2>
      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" rows="4" required />
        <button type="submit">Send</button>
      </form>
    </section>
  )
}
