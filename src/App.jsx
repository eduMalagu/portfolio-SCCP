import styles from './App.module.css'
import { useState } from 'react'

function App() {
  const defaultPhoneNumber = '5541999999999'

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const handleZap = () => {
    const { name, email, message } = formData
    const urlZap = `https://api.whatsapp.com/send?phone=${defaultPhoneNumber}&text=
    Nome:%20${name}%0D%0A
    Email:%20${email}%0D%0A
    Mensagem:%20${message}%0D%0A`
    window.open(urlZap, "_blank")
  }

  return (
    <>
      <nav className={styles.menu}>
        <a href="#s1">Home</a>
        <a href="#s2">Tecnologias</a>
        <a href="#s3">Projetos</a>
        <a href="#s4">Contato</a>
      </nav>

      <main>
        {/* Seção Perfil */}
        <section className={styles.s1} id='s1'>
          <div className={styles.left}>
            <img className={styles.imgPerfil} src="/foto1.png" alt="Foto perfil" />
          </div>
          <div className={styles.right}>
            <h2 className={styles.title}>Eduardo</h2>
            <p className={styles.paragraph}>Aluno de programação e Corinthiano.</p>
          </div>
        </section>

        {/* Seção Tecnologias */}
        <section className={styles.s2} id='s2'>
          <h2 className={styles.tecTitle}>Tecnologias</h2>
          <div className={styles.wrapCards}>
            {[
              { img: '/HTML.png', title: 'HTML', text: 'Linguagem de marcação padrão para estruturar páginas da web.' },
              { img: '/CSS.png', title: 'CSS', text: 'Define o estilo visual e o layout das páginas HTML.' },
              { img: '/JS.png', title: 'JavaScript', text: 'Adiciona interatividade e dinamismo às páginas.' },
              { img: '/VITE.png', title: 'Vite', text: 'Ferramenta moderna e rápida para desenvolvimento front-end.' },
              { img: '/REACT.png', title: 'React', text: 'Biblioteca para criar interfaces dinâmicas e reutilizáveis.' },
              { img: '/VERCEL.png', title: 'Vercel', text: 'Plataforma de hospedagem moderna para aplicações web.' }
            ].map((item, index) => (
              <div className={styles.card} key={index}>
                <img width={100} src={item.img} alt={item.title} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Seção Projetos */}
        <section id='s3' className={styles.s3}>
          <h2>Projetos</h2>
          <p>Em breve: meus repositórios e projetos hospedados no GitHub!</p>
        </section>

        {/* Seção Contato */}
        <section id='s4' className={styles.s4}>
          <h2>CONTATO</h2>
          <div className={styles.formData}>
            <label htmlFor="name">Informe seu nome</label>
            <input type="text" id='name' name='name' value={formData.name} onChange={handleChange} required />

            <label htmlFor="email">Informe seu email</label>
            <input type="email" id='email' name='email' value={formData.email} onChange={handleChange} required />

            <label htmlFor="message">Informe uma mensagem</label>
            <textarea name="message" id="message" value={formData.message} onChange={handleChange} cols="30" rows="10" required></textarea>

            <button onClick={handleZap}>Enviar mensagem</button>
          </div>
        </section>
      </main>

      {/* Rodapé */}
      <footer className={styles.rodape}>
        <a href="https://facebook.com" target='_blank' rel='noreferrer'>
          <img width={70} src="/facebook.webp" alt="Facebook" />
        </a>
        <a href="https://instagram.com" target='_blank' rel='noreferrer'>
          <img width={70} src="/instagram.webp" alt="Instagram" />
        </a>
        <a href="https://linkedin.com" target='_blank' rel='noreferrer'>
          <img width={70} src="/linkedin.webp" alt="LinkedIn" />
        </a>
        <a href="https://whatsapp.com" target='_blank' rel='noreferrer'>
          <img width={70} src="/whatsapp.webp" alt="WhatsApp" />
        </a>
      </footer>
    </>
  )
}

export default App
