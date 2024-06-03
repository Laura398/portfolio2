import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { IS_MOBILE, PROJECTS } from "../../constants/constants";
import { Project } from "../../types/types";
import Modal from "./Modal";

export default function Projects() {
  const { t } = useTranslation();
  const projects = PROJECTS;

  const [visible, setVisible] = useState<boolean>(false);

  const action = (project: Project) => {
    if (project.mobile) {
      setVisible(true);
    } else {
      window.open(project.link, "_blank");
    }
  };

  const header = (itemImageSrc: string) => (
    <img alt="Card" src={itemImageSrc} />
  );
  const footer = (project: Project) => (
    <div style={{position: "absolute", bottom:"20px", right:"20px"}}>
      <Button
        label={t("view")}
        style={{ marginLeft: "0.5em" }}
        onClick={() => action(project)}
      />
    </div>
  );

  return (
    <div
      id="projects"
      style={{
        maxWidth: "95vw",
        margin: "auto",
        marginTop: "20px",
      }}
    >
      <h1 style={{ textAlign: "center", margin: "40px auto" }}>
        {t("projects")}
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: IS_MOBILE ? "column" : "row",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {projects.map((project: Project) => {
          const type = `${project.type}`;
          return (
          <div key={project.title} className="card flex justify-content-center"
          style={{ width: IS_MOBILE ? "100%" : "49%", height: "auto", position: "relative" }}
          >
            <Card
              title={project.title}
              subTitle={t(`${type}`)}
              footer={footer(project)}
              header={header(project.thumbnailImageSrc)}
              className="m-2 p-2"
              // style={{ width: "100%", height: "400px", position: "relative" }}
            >
              <p className="m-0"><b>Stack :</b> {project.stack}</p>
            </Card>
            <Modal visible={visible} setVisible={setVisible} project={project} />
          </div>
        )})}
      </div>
    </div>
  );
}
