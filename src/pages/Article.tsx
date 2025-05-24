import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


import './Article.css';


type ArticleData = {
  id: string;
  title: string;
  tags: string[];
  author: string;
  date: string;
  banner: string;
  excerpt: string;
  image: string;
  summary: string[]; // ex: ["Introduction", "Avantages", "Exemple", "Conclusion"]
  content: Record<string, string>; // clé dynamique, ex: { intro: "...", avantages: "...", ... }
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
                <li key={item}>
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
                <h2>{title}</h2>
                {key === 'exemple' ? (
                  <pre><code>{content}</code></pre>
                ) : (
                  <p>{content}</p>
                )}
              </section>
            );
          })}
        </article>
      </section>
    </>
  );
}

