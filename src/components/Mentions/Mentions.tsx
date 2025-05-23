import './Mentions.css';




const Mentions = () => {
  return (
    <div className='mentions-container'>
            <h1>Mentions légales</h1>

            <section>
            <h2>Propriétaire du site</h2>
            <p>Emeric Pataut<br />
            Développeur intégrateur web<br />
            91240 Saint-Michel-sur-Orge<br />
            Email : <a href="mailto:emeric.pataut@gmail.com">emeric.pataut@gmail.com</a></p>
            </section>

            <section>
            <h2>Hébergement</h2>
            <p>Le site est hébergé par :<br />
            <strong>Vercel Inc.</strong><br />
            340 S Lemon Ave #4133<br />
            Walnut, CA 91789, USA<br />
            <a href="https://vercel.com" target="_blank">https://vercel.com</a></p>
            </section>

            <section>
            <h2>Responsable de la publication</h2>
            <p>Emeric Pataut</p>
            </section>

            <section>
                <h2>Responsabilité éditoriale</h2>
                <p>
                    Le contenu de ce site est rédigé par Emeric Pataut à titre personnel. Les articles reflètent des opinions ou des interprétations basées sur son expérience et ses connaissances au moment de la publication.
                </p>
                <p>
                    Malgré tout le soin apporté à la rédaction, certaines informations peuvent être inexactes, incomplètes ou obsolètes. Il appartient au lecteur de vérifier les données avant toute utilisation.
                </p>
                <p>
                    Emeric Pataut ne pourra être tenu responsable d’éventuels dommages liés à l’utilisation des contenus publiés.
                </p>
            </section>
            
            <section>
            <h2>Données personnelles</h2>
            <p>Ce site ne collecte pas de données personnelles à des fins de suivi ou de statistiques.</p>
            </section>

            <section>
            <h2>Newsletter</h2>
            <p>Une fonctionnalité de newsletter pourra être proposée ultérieurement. Les adresses e-mail ne seront utilisées que pour l’envoi des nouveaux articles et ne seront jamais partagées.</p>
            </section>

            <section>
            <h2>Cookies</h2>
            <p>Aucun cookie de suivi n’est utilisé sur ce site.</p>
            </section>

            <section>
            <h2>Propriété intellectuelle</h2>
            <p>Le contenu du site (textes, images, code, etc.) est protégé par le droit d’auteur. Toute reproduction est interdite sans l’accord de l’auteur.</p>
            </section>

    </div>
  );
};

export default Mentions;