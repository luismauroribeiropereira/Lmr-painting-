
export default function HomePage() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">LMR Painting</h1>
        <p className="text-lg md:text-xl">Professional Painting Services in Massachusetts</p>
        <p className="text-base mt-2">Serviços profissionais de pintura em Massachusetts</p>
        <div className="mt-6">
          <a href="#contact" className="bg-white text-blue-900 font-semibold py-2 px-6 rounded-2xl shadow-lg">Get a Free Quote / Peça um Orçamento</a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">About Us / Sobre Nós</h2>
        <p className="text-gray-700 text-lg">
          We are a dedicated team offering high-quality painting services for homes and businesses across Massachusetts.
          <br />
          Somos uma equipe dedicada oferecendo serviços de pintura de alta qualidade para residências e empresas em Massachusetts.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-gray-100 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Our Services / Nossos Serviços</h2>
          <ul className="grid md:grid-cols-2 gap-6 text-lg text-gray-800">
            <li>Interior Painting / Pintura Interna</li>
            <li>Exterior Painting / Pintura Externa</li>
            <li>Deck & Fence Painting / Pintura de Decks e Cercas</li>
            <li>Drywall Repair / Reparos em Drywall</li>
            <li>Pressure Washing / Lavagem com Pressão</li>
          </ul>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Gallery / Galeria</h2>
        <p className="text-center text-gray-600 mb-4">Add your project photos here / Adicione aqui fotos dos seus projetos</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {/* Example image slots */}
          <div className="bg-gray-300 h-48 rounded-xl"></div>
          <div className="bg-gray-300 h-48 rounded-xl"></div>
          <div className="bg-gray-300 h-48 rounded-xl"></div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Testimonials / Depoimentos</h2>
          <blockquote className="italic text-lg text-gray-700 mb-4">“LMR did an amazing job on my house. Highly recommend!”</blockquote>
          <p className="font-semibold">- Sarah M.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 px-4 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Us / Fale Conosco</h2>
        <p className="text-lg mb-4">Call / Ligue: (123) 456-7890</p>
        <p className="text-lg mb-4">Email: lmrpainting@example.com</p>
        <a href="https://wa.me/11234567890" target="_blank" rel="noopener" className="inline-block bg-green-600 text-white py-2 px-6 rounded-full shadow-lg">Chat on WhatsApp</a>
      </section>
    </main>
  );
}
