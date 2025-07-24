import React from 'react';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: 'Como automatizar 80% do seu atendimento no WhatsApp com IA',
      excerpt: 'Descubra as melhores práticas para implementar automação inteligente no seu WhatsApp Business e aumentar sua produtividade.',
      image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1',
      author: 'Maria Silva',
      date: '15 Jan 2025',
      readTime: '5 min',
      category: 'Automação',
    },
    {
      id: 2,
      title: 'Inteligência Artificial no atendimento: o futuro é agora',
      excerpt: 'Entenda como a IA está revolucionando o atendimento ao cliente e por que sua empresa não pode ficar para trás.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1',
      author: 'Carlos Mendes',
      date: '12 Jan 2025',
      readTime: '7 min',
      category: 'Inteligência Artificial',
    },
    {
      id: 3,
      title: '5 estratégias para gerar mais leads pelo WhatsApp',
      excerpt: 'Aprenda técnicas comprovadas para transformar conversas no WhatsApp em oportunidades de negócio reais.',
      image: 'https://images.pexels.com/photos/5632371/pexels-photo-5632371.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1',
      author: 'Ana Costa',
      date: '10 Jan 2025',
      readTime: '6 min',
      category: 'Marketing Digital',
    },
    {
      id: 4,
      title: 'WhatsApp Business API: guia completo para empresas',
      excerpt: 'Tudo que você precisa saber sobre a API oficial do WhatsApp e como integrar com seu sistema de atendimento.',
      image: 'https://images.pexels.com/photos/5632381/pexels-photo-5632381.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1',
      author: 'João Santos',
      date: '8 Jan 2025',
      readTime: '8 min',
      category: 'Tecnologia',
    },
    {
      id: 5,
      title: 'ROI de automação: como medir o retorno do investimento',
      excerpt: 'Métricas essenciais para avaliar o sucesso da sua estratégia de automação no WhatsApp.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1',
      author: 'Patricia Lima',
      date: '5 Jan 2025',
      readTime: '4 min',
      category: 'Negócios',
    },
    {
      id: 6,
      title: 'Chatbots vs IA Conversacional: qual escolher?',
      excerpt: 'Compare as diferentes tecnologias de automação e descubra qual é a melhor para o seu negócio.',
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1',
      author: 'Roberto Oliveira',
      date: '3 Jan 2025',
      readTime: '6 min',
      category: 'Tecnologia',
    },
  ];

  const categories = ['Todos', 'Automação', 'Inteligência Artificial', 'Marketing Digital', 'Tecnologia', 'Negócios'];
  const [selectedCategory, setSelectedCategory] = React.useState('Todos');

  const filteredPosts = selectedCategory === 'Todos' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  return (
    <section id="blog" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Blog do Agentify
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Dicas, estratégias e insights sobre automação, IA e WhatsApp Business
          </p>
        </div>
        
        {/* Filtros de Categoria */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Grid de Posts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
              <div className="relative overflow-hidden rounded-t-xl">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold group">
                  <span>Ler mais</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>
        
        {/* Newsletter Signup */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 mt-16 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Receba conteúdos exclusivos
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Assine nossa newsletter e receba dicas semanais sobre automação, IA e estratégias para WhatsApp Business
          </p>
          
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
              Assinar
            </button>
          </div>
          
          <p className="text-xs text-gray-500 mt-4">
            Sem spam. Cancele quando quiser.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blog;