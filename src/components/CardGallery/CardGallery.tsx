import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './CardGallery.css';



// Définition des types pour typer les données des articles
type Article = {
  id: string;
  title: string;
  tags: string[];
  author: string;
  date: string;
  banner: string;
  image: string;
  excerpt: string;
};



const CardGallery = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    // A la création du composant, charger la liste des IDs d'articles
    fetch('/articles/index.json')
      .then(res => res.json())
      .then(ids =>
        // Charger chaque article
        Promise.all(
          ids.map((id: string) =>
            fetch(`/articles/${id}.json`) // Charger chaque fichier JSON des articles
              .then(res => res.json())
              .catch(() => null)
          )
        )
      )
      .then(data => {
        const filtered = data.filter(article => article !== null);
        setArticles(filtered);
      });
  }, []);




  return (
    <section className="articles">
      {articles.map(article => (
        <Link key={article.id} to={`/article/${article.id}`} className="card">
          <img src={article.image} alt={`Illustration de ${article.title}`} />
          <div className="card-content">
            <p className='date'>{article.date}</p>
            <h3>{article.title}</h3>
            <div className="tags">
              {article.tags.map((tag, i) => (
                <span key={i}>#{tag}</span>
              ))}
            </div>
            <p>{article.excerpt}</p>
          </div>
        </Link>
      ))}
    </section>
  );
};




export default CardGallery;


