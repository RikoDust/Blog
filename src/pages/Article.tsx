import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ScrollToTopButton from '../components/ScrollToTopButton/ScrollToTopButton';
import './Article.css';

// TypeScript : structure des données de l'article
type ArticleData = {
  id: string;
  title: string;
  tags: string[];
  author: string;
  date: string;
  banner: string;
  excerpt: string;
  image: string;
  summary: string[];
  content: Record<string, string>;
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

      <div className="article-wrapper">
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
                      <p
                        key={index}
                        dangerouslySetInnerHTML={{ __html: line }}
                      />
                    ))
                  )}
                </section>
              );
            })}
          </article>
        </section>

        <ScrollToTopButton />
      </div>
    </>
  );
}
