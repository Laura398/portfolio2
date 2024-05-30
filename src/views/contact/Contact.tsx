import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { useTranslation } from "react-i18next";
import ContactForm from "./ContactForm";
import { useState } from "react";
import { Dialog } from "primereact/dialog";
import { IS_MOBILE } from "../../constants/constants";

export default function Contact() {
  const { t } = useTranslation();

  const [visible, setVisible] = useState<boolean>(false);

  return (
    <Card
      id="contact"
      style={{
        maxWidth: "95vw",
        margin: "auto",
        marginTop: "40px",
      }}
    >
      <h1
        className="text-cyan-500"
        style={{ textAlign: "center", margin: "20px auto" }}
      >
        {t("contactMe")}
      </h1>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <Button
          label="LinkedIn"
          icon="pi pi-linkedin"
          onClick={() => {
            const languageCode = localStorage.getItem("laura-lang");
            if (languageCode === "fr") {
              window.open(
                "https://www.linkedin.com/in/laura-mathieu-lm",
                "_blank"
              );
            } else {
              window.open(
                "https://www.linkedin.com/in/laura-mathieu-lm/?locale=en_US",
                "_blank"
              );
            }
          }}
        />
        <Button
          label="Github"
          icon="pi pi-github"
          onClick={() => window.open("https://github.com/Laura398", "_blank")}
        />
        <Button
          label={t("email")}
          icon="pi pi-inbox"
          onClick={() =>
            (window.location.href = "mailto:laura.mathieu@protonmail.com")
          }
        />
        <Button
          label={t("phone")}
          icon="pi pi-phone"
          onClick={() => setVisible(true)}
        />
      </div>

      <h2
        className="text-cyan-500"
        style={{ textAlign: "center", margin: "40px auto" }}
      >
        {t("orSendMessage")}
      </h2>

      <ContactForm />

      <Dialog
        header={t("phone")}
        visible={visible}
        style={{ width: IS_MOBILE ? "90vw" : "50vw" }}
        onHide={() => {
          if (!visible) return;
          setVisible(false);
        }}
      >
        <p className="m-0">
          {t("phoneMessage")}
          <br />
          <a href="tel:+33612345678">{t("phoneNumber")}</a>
        </p>
      </Dialog>
    </Card>
  );
}
