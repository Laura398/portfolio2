import { useTranslation } from "react-i18next";
import TimelineComponent from "./Timeline";

export default function Experiences() {
  const {t } = useTranslation();
  return (
    <div
      id="experiences"
      style={{
        maxWidth: "95vw",
        margin: "auto",
        marginTop: "50px",
      }}
    >
      <h1 style={{ textAlign: "center", margin: "20px auto" }}>{t("experience")}</h1>
      <TimelineComponent />
    </div>
  );
}
