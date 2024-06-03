import { Card } from "primereact/card";
import { Timeline } from "primereact/timeline";
import { useTranslation } from "react-i18next";
import { IS_MOBILE } from "../../constants/constants";
import "./Timeline.css";
import { useEffect } from "react";

interface TimelineEvent {
  title?: string;
  places?: string[];
  color?: string;
  textColor?: string;
  titleColor?: string;
  bgColor?: string;
}

export default function TimelineComponent() {
  const { t } = useTranslation();

  useEffect(() => {
    const title = document.getElementsByClassName("p-card-title");
    // set title color
    if (title.length > 0) {
      for (const element of title) {
        element.classList.add("text-cyan-500");
      }
    }
  }, []);

  const events: TimelineEvent[] = [
    {
      title: t("title"),
      places: [
        `UpSchool, ${t("apprenticeship")} | Toulouse, France | 2021-2024`,
      ],
      color: "bg-cyan-500",
      textColor: "text-white",
      titleColor: "text-cyan-500",
      bgColor: "bg-black",
    },
    {
      title: `${t("ynovMaster")}`,
      places: [
        `Ynov Informatique, ${t(
          "apprenticeship"
        )} | Toulouse, France | 2022-2024`,
      ],
      color: "bg-cyan-100",
      textColor: "text-cyan-500",
      titleColor: "text-cyan-100",
      bgColor: "bg-cyan-50",
    },
    {
      title: `${t("ynovBachelor")}`,
      places: [
        `Ynov Informatique, ${t(
          "apprenticeship"
        )} | Toulouse, France | 2021-2022`,
      ],
      color: "bg-cyan-100",
      textColor: "text-cyan-500",
      titleColor: "text-cyan-100",
      bgColor: "bg-cyan-50",
    },
    {
      title: t("openClassrooms"),
      places: ["OpenClassrooms | France | 2021"],
      color: "bg-cyan-100",
      textColor: "text-cyan-500",
      titleColor: "text-cyan-100",
      bgColor: "bg-cyan-50",
    },
    {
      title: t("customerService"),
      places: [
        "Concentrix-Nike | Dublin, Irlande | 2019-2020",
        "Harmonie Mutuelle | Albi, France | 2020-2021",
      ],
      color: "bg-cyan-500",
      textColor: "text-white",
      titleColor: "text-cyan-500",
    },
    {
      title: t("masterMEEF"),
      places: ["Université Jean-Jaurès | Toulouse, France | 2018"],
      color: "bg-cyan-100",
      textColor: "text-cyan-500",
      titleColor: "text-cyan-100",
      bgColor: "bg-cyan-50",
    },
  ];

  const customizedMarker = (item: TimelineEvent) => {
    return (
      <span
        className={`flex w-2rem h-2rem align-items-center justify-content-center ${item.textColor} border-circle z-1 shadow-1 ${item.color}`}
      >
        <i className="pi pi-check"></i>
      </span>
    );
  };

  const customizedContent = (item: TimelineEvent) => {
    return (
      <Card
        title={item.title}
        subTitle={
          item.places && (
            <ul style={{ margin: 0, padding: 0 }}>
              {item.places.map((place, index) => (
                <li
                  key={index}
                  style={{
                    listStyleType: "none",
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  {place}
                </li>
              ))}
            </ul>
          )
        }
        className={`${item.bgColor}`}
        style={{ marginTop: IS_MOBILE ? "1rem" : "0", }}
      />
    );
  };

  return (
    <div className="card" style={{ maxWidth: "95vw", margin: "auto", marginTop: "50px" }}>
      <Timeline
        style={{ maxWidth: "95vw", margin: "auto" }}
        value={events}
        align={IS_MOBILE ? "left" : "alternate"}
        marker={customizedMarker}
        content={customizedContent}
      />
    </div>
  );
}
