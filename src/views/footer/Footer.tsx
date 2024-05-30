import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  const selectedLanguage = localStorage.getItem("laura-lang");
  return (
    <div className="card" style={{ marginTop: "50px", textAlign: "center" }}>
      {/* <Menubar model={items} /> */}
      <a href={`/legal-mentions/${selectedLanguage}`} style={{ color: "white" }}>
        <p>{t("legalMentions")}</p>
      </a>

      <p>
        &copy; 2024 <span>Laura Mathieu</span>. {t("allRightsReserved")}
      </p>
    </div>
  );
}
