import { useEffect, useState } from 'react';
// Import pour récupérer les paramètres de l'URL (ici l'id de l'article)
import { useParams } from 'react-router-dom';


import './Article.css';


// Définition du type TypeScript pour structurer les données d’un article
type ArticleData = {
  id: string;
  title: string;
  tags: string[];
  author: string;
  date: string;
  banner: string;
  excerpt: string;
  image: string;
  summary: string[]; // Liste des sections pour le sommaire
  content: Record<string, string>; // Contenu de chaque section (clé = nom section)
};





export default function Article() {
  // Récupération de l'id de l'article depuis l'URL
  const { id } = useParams<{ id: string }>();
  // État local pour stocker les données de l'article
  const [article, setArticle] = useState<ArticleData | null>(null);

  // Effet exécuté à chaque fois que l'id change
  useEffect(() => {
    // Requête pour charger le fichier JSON correspondant à l'article
    fetch(`/articles/${id}.json`)
      .then((res) => res.json())  // Conversion de la réponse en JSON
      .then((data) => setArticle(data)) // Stocke les données dans l’état
      .catch((err) => console.error("Erreur chargement article :", err));
  }, [id]); // Dépendance : se relance si l'id change

  // Affichage si chargement
  if (!article) return <p>Chargement...</p>;





  return (
    <>
      <section className="banner">
        <img src={article.banner} alt="Bannière de l'article" />
      </section>

      <section className="article-container">
        <article className="article-box">
          <h1>{article.title}</h1>

          <div className="tags">
            {article.tags.map((tag) => (
              <span key={tag}>#{tag}</span>
            ))}
          </div>

          <div className="meta">
            <span>Par <strong>{article.author}</strong></span> | <span>{article.date}</span>
          </div>

          <div className="summary-box">
            <h2>Sommaire</h2>
            <ul>
              {article.summary.map((item) => (
                <li className='summary-item' key={item}>
                  <a href={`#${item.toLowerCase()}`}>{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {article.summary.map((title) => {
            const key = title.toLowerCase();
            const content = article.content[key];

            if (!content) return null;

            return (
              <section key={key} id={key}>
                <h2 className='title-chapter'>{title}</h2>
                {key === 'exemple' ? (
                  <pre><code>{content}</code></pre>
                ) : (
                  content.split('\n').map((line, index) => (
                    <p key={index}>{line}</p>
                  ))
                )}
              </section>
            );
          })}
        </article>
      </section>
    </>
  );
}


