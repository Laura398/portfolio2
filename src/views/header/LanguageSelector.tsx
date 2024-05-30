import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import { useTranslation } from "react-i18next";

const countries = [
  {
    code: "en",
    name: "English",
  },
  {
    code: "fr",
    name: "Français",
  },
];

export default function LanguageSelector() {
  const { i18n } = useTranslation();

  const language = countries.find((lng) => lng.code === i18n.language) || countries.find((lng) => lng.code === "fr");

  const href = window.location.href;
  const isHome =
    href.split("/")[href.split("/").length - 2] !== "legal-mentions";

  return (
    <div className="card flex justify-content-center">
      <Dropdown
        value="code"
        onChange={(e: DropdownChangeEvent) => {
            i18n.changeLanguage(e.value.code);
            localStorage.setItem("laura-lang", e.value.code);
            if (!isHome) {
              window.location.href = `/legal-mentions/${e.value.code}`;
            }
        }}
        options={countries}
        optionLabel="name"
        placeholder={language!.name}
        className="w-full"
      />
    </div>
  );
}
