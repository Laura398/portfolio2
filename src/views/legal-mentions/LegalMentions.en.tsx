import { Card } from "primereact/card";
import { IS_MOBILE } from "../../constants/constants";

export default function LegalMentionsEn() {
  return (
    <Card
      style={{
        maxWidth: IS_MOBILE ? "95vw" : "80vw",
        margin: "auto",
        marginTop: "20px",
        textAlign: "justify"
      }}
    >
      <h1 style={{ textAlign: "center" }}>Legal Mentions</h1>

      <p>
        In accordance with the provisions of law n° 2004-575 of June 21, 2004
        for confidence in the digital economy, users of the Laura Mathieu -
        Portfolio website are informed of the identity of the various parties
        involved in its creation and monitoring.
      </p>
      <h3>
        Site edition:
      </h3>
      <p>
        This site, accessible at the URL
        https://www.portfolio.lauramathieu.com/, is edited by Laura Mathieu,
        residing at avenue Etienne Billieres 31300 Toulouse, of French (France)
        nationality, born on 02/05/1995.
      </p>
      <h3>
        <strong>Hosting</strong>:
      </h3>
      <p>
        The Site is hosted by the company OVH SAS, located 2 rue Kellermann - BP
        80157 - 59053 Roubaix Cedex 1, (telephone contact or email: 1007).
      </p>
      <h3>
        <strong>Publishing manager</strong>:
      </h3>
      <p>Laura Mathieu</p>
      <h3>
        <strong>Contact us</strong>:
      </h3>
      <p>
        By phone: +33683794378
        <br />
        By email: laura.mathieu@protonmail.com
      </p>
      <h3>
        <strong>Personal data</strong>:
      </h3>
      <p>
        Personal data refers to any information concerning an identified or
        identifiable natural person (data subject). An identifiable person is a
        person who can be identified, directly or indirectly, in particular by
        reference to a name, an identification number or one or more specific
        elements specific to his physical, physiological, genetic,
        psychological, economic, cultural or social identity.
      </p>
      <p>
        Personal information may be collected when browsing the site, in
        particular via the contact form. The information collected is in no way
        transmitted to third parties and is used only in the context of the
        commercial relationship between the user and Laura Mathieu.
      </p>
      <h3>
        The personal data collected is as follows:
      </h3>
      <p>
        First and last name
        <br />
        Email address
      </p>
      <h3>
        <strong>Applicable law</strong>:
      </h3>
      <p>
        This site is subject to French law.
      </p>
    </Card>
  );
}
