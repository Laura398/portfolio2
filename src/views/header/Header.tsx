import { MegaMenu } from "primereact/megamenu";
import { MenuItem } from "primereact/menuitem";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";

export default function Header() {
  const { t } = useTranslation();

  const href = window.location.href;
  const isHome =
    href.split("/")[3] === "";

  const onClick = (item: MenuItem) => {
    if (isHome) {
      console.log(item.id);
      if (item.id) {
        const element = document.getElementById(item.id);
        console.log(element);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          });
        }
      }
    } else {
      window.location.href = "/";
    }
  };

  const itemRenderer = (item: MenuItem) => {
    return (
      <div
        className="flex align-items-center cursor-pointer px-3 py-2 overflow-hidden font-semibold text-lg text-cyan-500 uppercase hover:shadow-2 hover:text-cyan-500 hover:bg-cyan-100 hover:rounded-lg"
        style={{ borderRadius: "0.5rem" }}
        onClick={() => onClick(item)}
      >
        <span className={item.icon} />
        <span className="ml-2">{item.label}</span>
      </div>
    );
  };

  const items: MenuItem[] = [
    {
      label: t("about"),
      template: itemRenderer,
      id: "about",
    },
    {
      label: t("experience"),
      template: itemRenderer,
      id: "experiences",
    },
    {
      label: t("skills"),
      template: itemRenderer,
      id: "skills",
    },
    {
      label: t("projects"),
      template: itemRenderer,
      id: "projects",
    },
    {
      label: t("contact"),
      template: itemRenderer,
      id: "contact",
    },
  ];

  const items2: MenuItem[] = [
    {
      label: t("home"),
      template: itemRenderer,
    },
  ];

  const end = <LanguageSelector />;

  return (
    <div className="card" style={{ maxWidth: "95vw", margin: "20px auto" }}>
      {isHome ? (
        <MegaMenu
          model={items}
          orientation="horizontal"
          end={end}
          breakpoint="960px"
          className="p-3 surface-0 shadow-2 top-0 left-0 right-0 z-100"
        />
      ) : (
        <MegaMenu
          model={items2}
          orientation="horizontal"
          end={end}
          breakpoint="960px"
          className="p-3 surface-0 shadow-2 top-0 left-0 right-0 z-100"
        />
      )}
    </div>
  );
}
