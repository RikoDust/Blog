import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './Article.css';

// déclaration typage
type ArticleData = {
  id: string;
  title: string;
  tags: string[];
  author: string;
  date: string;
  banner: string;
  summary: string[];
  content: {
    intro: string;
    avantages: string;
    exemple: string;
  };
};



export default function Article() {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<ArticleData | null>(null);

  useEffect(() => {
    fetch(`/articles/${id}.json`)
      .then((res) => res.json())
      .then((data) => setArticle(data))
      .catch((err) => console.error("Erreur chargement article :", err));
  }, [id]);


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
                <li key={item}><a href={`#${item.toLowerCase()}`}>{item}</a></li>
              ))}
            </ul>
          </div>

          <section id="intro">
            <h2>Introduction</h2>
            <p>{article.content.intro}</p>
          </section>

          <section id="avantages">
            <h2>Avantages</h2>
            <p>{article.content.avantages}</p>
          </section>

          <section id="exemple">
            <h2>Exemple d'utilisation</h2>
            <pre><code>{article.content.exemple}</code></pre>
          </section>
        </article>
      </section>
    </>
  );
}