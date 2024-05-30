import { Card } from "primereact/card";
import { Divider } from "primereact/divider";
import { useTranslation } from "react-i18next";
import { IS_MOBILE } from "../../constants/constants";

export default function About() {
  const { t } = useTranslation();

  return (
    <Card
      style={{
        maxWidth: "95vw",
        margin: "auto",
        marginTop: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: IS_MOBILE ? "column" : "row",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="/assets/photo.png"
          alt="Image"
          width={IS_MOBILE ? "150" : "250"}
          style={{ borderRadius: "50%", margin: IS_MOBILE ? 0 : "0 5rem" }}
        />
        <div
          style={{
            width: IS_MOBILE ? "100%" : "40%",
            margin: IS_MOBILE ? 0 : "2rem",
            textAlign: IS_MOBILE ? "center" : "justify",
            overflow: "hidden",
          }}
        >
          <h1 className="text-cyan-500">Laura Mathieu</h1>
          <h2 className="text-cyan-500">{t("title")}</h2>
          <p>{t("aboutMeText")}</p>
          <Divider />
          <p className="text-cyan-500">
            <b>{t("disponibility")}</b>
          </p>
        </div>
      </div>
    </Card>
  );
}
