import emailjs from "@emailjs/browser";
import { Button } from "primereact/button";
import { Editor } from "primereact/editor";
import { FloatLabel } from "primereact/floatlabel";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { IS_MOBILE } from "../../constants/constants";

export default function ContactForm() {
  const { t } = useTranslation();

  const toast = useRef<Toast>(null);

  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState(false);
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [phone, setPhone] = useState("");
  const [object, setObject] = useState("");
  const [objectError, setObjectError] = useState(false);
  const [message, setMessage] = useState<string | null>();

  const showError = (message: string) => {
    if (toast.current)
      toast.current.show({
        severity: "error",
        summary: t("error"),
        detail: t(`${message}`),
        life: 3000,
      });
  };

  const showSuccess = () => {
    toast.current?.show({
      severity: "success",
      detail: t("mailSent"),
      life: 3000,
    });
  };

  const submit = async () => {
    if (!firstName) {
      setFirstNameError(true);
    } else {
      setFirstNameError(false);
    }

    if (!lastName) {
      setLastNameError(true);
    } else {
      setLastNameError(false);
    }

    if (!email) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    if (!object) {
      setObjectError(true);
    } else {
      setObjectError(false);
    }

    if (!firstName || !lastName || !email || !object) {
      return showError("requiredError");
    }

    if (!message) {
      return showError("messageError");
    }
    
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const templateParams = {
      user_firstname: firstName,
      user_lastname: lastName,
      user_company: company,
      user_email: email,
      user_phone: phone,
      object: object,
      message: message,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, {
        publicKey: publicKey,
      });

      setFirstName("");
      setLastName("");
      setCompany("");
      setEmail("");
      setPhone("");
      setObject("");
      setMessage(undefined);

      showSuccess();
    } catch (error) {
      console.error(error);
      showError("mailError");
    }
  };

  return (
    <div
      className="card flex justify-content-center m-auto"
      style={{
        flexDirection: "column",
        gap: "2rem",
        width: IS_MOBILE ? "90%" : "50%",
      }}
    >
      <Toast ref={toast} />
      <div
        className="card flex"
        style={{
          width: "100%",
          justifyContent: "space-between",
          flexDirection: IS_MOBILE ? "column" : "row",
          gap: "1rem",
        }}
      >
        <div
          className="flex flex-column gap-2"
          style={{ width: IS_MOBILE ? "100%" : "50%" }}
        >
          <FloatLabel>
            <label htmlFor="firstname">{t("firstname")}*</label>
            <InputText
              id="firstname"
              aria-describedby="firstname-help"
              invalid={firstNameError}
              style={{ width: "100%" }}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </FloatLabel>
        </div>
        <div
          className="flex flex-column gap-2"
          style={{ width: IS_MOBILE ? "100%" : "50%" }}
        >
          <FloatLabel>
            <label htmlFor="lastname">{t("lastname")}*</label>
            <InputText
              id="lastname"
              aria-describedby="lastname-help"
              invalid={lastNameError}
              style={{ width: "100%" }}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </FloatLabel>
        </div>
      </div>
      <div
        className="card flex justify-content-center"
        style={{
          width: "100%",
          flexDirection: IS_MOBILE ? "column" : "row",
          gap: "1rem",
        }}
      >
        <div
          className="flex flex-column gap-2"
          style={{ width: IS_MOBILE ? "100%" : "50%" }}
        >
          <FloatLabel>
            <label htmlFor="company">{t("company")}</label>
            <InputText
              id="company"
              value={company}
              aria-describedby="company-help"
              style={{ width: "100%" }}
              onChange={(e) => setCompany(e.target.value)}
            />
          </FloatLabel>
        </div>
        <div
          className="flex flex-column gap-2"
          style={{ width: IS_MOBILE ? "100%" : "50%" }}
        >
          <FloatLabel>
            <label htmlFor="phone">{t("phone")}</label>
            <InputText
              id="phone"
              value={phone}
              aria-describedby="phone-help"
              keyfilter="num"
              style={{ width: "100%" }}
              onChange={(e) => setPhone(e.target.value)}
            />
          </FloatLabel>
        </div>
      </div>
      <div
        className="card flex justify-content-center"
        style={{
          width: "100%",
          flexDirection: IS_MOBILE ? "column" : "row",
          gap: "1rem",
        }}
      >
        <div className="flex flex-column gap-2" style={{ width: "100%" }}>
          <FloatLabel>
            <label htmlFor="email">{t("email")}*</label>
            <InputText
              id="email"
              value={email}
              aria-describedby="email-help"
              keyfilter="email"
              invalid={emailError}
              style={{ width: "100%" }}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FloatLabel>
        </div>
      </div>
      <div
        className="card flex justify-content-center"
        style={{
          width: "100%",
          flexDirection: IS_MOBILE ? "column" : "row",
          gap: "1rem",
        }}
      >
        <div className="flex flex-column gap-2" style={{ width: "100%" }}>
          <FloatLabel>
            <label htmlFor="object">{t("object")}*</label>
            <InputText
              id="object"
              value={object}
              aria-describedby="object-help"
              invalid={objectError}
              style={{ width: "100%" }}
              onChange={(e) => setObject(e.target.value)}
            />
          </FloatLabel>
        </div>
      </div>
      <div
        className="card flex justify-content-center"
        style={{
          width: "100%",
          flexDirection: IS_MOBILE ? "column" : "row",
          gap: "1rem",
        }}
      >
        <Editor
          value={message || ""}
          onTextChange={(e) => setMessage(e.htmlValue)}
          style={{ height: "320px" }}
        />
      </div>
      <Button
        label={t("submit")}
        className="p-button-raised"
        onClick={submit}
      />
    </div>
  );
}
