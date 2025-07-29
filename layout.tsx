export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <title>Revista Nobilis</title>
        <meta name="description" content="Conectando empresários e contadores de alto nível." />
      </head>
      <body style={{ margin: 0, fontFamily: 'Arial, sans-serif', backgroundColor: '#111' }}>
        {children}
      </body>
    </html>
  );
}