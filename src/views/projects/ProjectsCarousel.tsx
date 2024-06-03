/* eslint-disable @typescript-eslint/no-explicit-any */

import { Galleria, GalleriaResponsiveOptions } from "primereact/galleria";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { IS_MOBILE, PROJECTS } from "../../constants/constants";
import { Project } from "../../types/types";
import Modal from "./Modal";

export default function Gallery() {
  const { t } = useTranslation();

  const [images, setImages] = useState<Project[]>([]);
  const [visible, setVisible] = useState<boolean>(false);

  const responsiveOptions: GalleriaResponsiveOptions[] = [
    {
      breakpoint: "991px",
      numVisible: 4,
    },
    {
      breakpoint: "767px",
      numVisible: 3,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
    },
  ];

  const action = (item: Project) => {
    if (item.mobile) {
      setVisible(true);
    } else {
      window.open(item.link, "_blank");
    }
  };

  useEffect(() => {
    const projects = PROJECTS;
    setImages(projects);
  }, []);

  const itemTemplate = (item: Project) => {
    return (
      <div>
        <img
          src={item.itemImageSrc}
          alt={item.title}
          style={{ maxWidth: "100%", maxHeight: "400px", display: "block" }}
          onClick={() => action(item)}
        />
        <Modal visible={visible} setVisible={setVisible} project={item} />
      </div>
    );
  };

  const thumbnailTemplate = (item: Project) => {
    return (
      <img
        src={item.thumbnailImageSrc}
        alt={item.title}
        width={200}
        style={{ display: "block" }}
      />
    );
  };

  const caption = (item: Project) => {
    const type = `${item.type}`;
    const alt = (
      <p className="text-white">
        <b>Type :</b> {t(`${type}`)}
        <br />
        <b>Stack :</b> {item.stack}
      </p>
    );

    return (
      <React.Fragment>
        <div className="text-xl mb-2 font-bold">{item.title}</div>
        {alt}
      </React.Fragment>
    );
  };

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
      <Galleria
        value={images}
        responsiveOptions={responsiveOptions}
        numVisible={5}
        item={itemTemplate}
        thumbnail={thumbnailTemplate}
        caption={caption}
        style={{
          maxWidth: IS_MOBILE ? "100vw" : "60%",
          margin: "auto",
          border: "1px solid #06b5d3",
          backgroundColor: "white",
        }}
      />
    </div>
  );
}
