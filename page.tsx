export default function HomePage() {
  return (
    <main style={{ padding: '2rem', color: '#fff', textAlign: 'center' }}>
      <h1 style={{ fontSize: '3rem', color: '#d4af37' }}>REVISTA NOBILIS</h1>
      <p style={{ color: '#ccc' }}>Conectando empresários e contadores de alto nível.</p>
      <a href="https://wa.me/5534996790847" target="_blank" style={{ 
        position: 'fixed', bottom: '20px', right: '20px', backgroundColor: '#25D366', 
        color: 'white', padding: '10px 15px', borderRadius: '50px', textDecoration: 'none', fontWeight: 'bold'
      }}>
        Fale conosco no WhatsApp
      </a>
    </main>
  );
}