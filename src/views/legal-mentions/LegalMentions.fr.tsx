import { Card } from "primereact/card";
import { IS_MOBILE } from "../../constants/constants";

export default function LegalMentionsFr() {
  return (
    <Card
      style={{
        maxWidth: IS_MOBILE ? "95vw" : "80vw",
        margin: "auto",
        marginTop: "20px",
        textAlign: "justify",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Mentions Légales</h1>

      <p>
        Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour
        la confiance en l'économie numérique, il est précisé aux utilisateurs du
        site Laura Mathieu - Portfolio l'identité des différents intervenants
        dans le cadre de sa réalisation et de son suivi.
      </p>
      <h3>
        <strong>Édition du site</strong> :
      </h3>
      <p>
        Le présent site, accessible à l’URL
        https://www.portfolio.lauramathieu.com/, est édité par Laura Mathieu,
        résidant avenue Etienne Billieres 31300 Toulouse, de nationalité
        Française (France), née le 02/05/1995.
      </p>
      <h3>
        <strong>Hébergement</strong> :
      </h3>
      <p>
        Le Site est hébergé par la société OVH SAS, situé 2 rue Kellermann - BP
        80157 - 59053 Roubaix Cedex 1, (contact téléphonique ou email : 1007).
      </p>
      <h3>
        <strong>Responsable de publication</strong> :
      </h3>
      <p>Laura Mathieu</p>
      <h3>
        <strong>Nous contacter</strong> :
      </h3>
      <p>
        Par téléphone : +33683794378
        <br />
        Par email : laura.mathieu@protonmail.com
      </p>
      <h3>
        <strong>Données personnelles</strong> :
      </h3>
      <p>
        Une donnée à character personnel désigne toute information concernant
        une personne physique identifiée ou identifiable (personne concernée).
        Une personne identifiable est une personne qui peut être identifiée,
        directement ou indirectement, notamment par référence à un nom, un
        numéro d'identification ou à un ou plusieurs éléments spécifiques,
        propres à son identité physique, physiologique, génétique, psychique,
        économique, culturelle ou sociale.
      </p>
      <p>
        Les informations personnelles peuvent être recueillies lors de la
        navigation sur le site, notamment via le formulaire de contact. Les
        informations recueillies ne sont en aucun cas transmises à des tiers et
        ne sont utilisées que dans le cadre de la relation commerciale entre
        l'utilisateur et Laura Mathieu.
      </p>
      <p>
        Les données personnelles collectées sont les suivantes :
      </p>
      <p>
        Nom et prénom
        <br />
        Adresse mail
      </p>
      <h3>
        <strong>Loi applicable</strong> :
      </h3>
      <p>
        Le présent site est soumis au droit français.
      </p>
    </Card>
  );
}
