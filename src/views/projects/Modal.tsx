import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { useTranslation } from "react-i18next";
import { IS_MOBILE } from "../../constants/constants";
import { Project } from "../../types/types";

export default function Modal(props: { visible: boolean, setVisible: (visible: boolean) => void, project: Project }) {
  const { visible, setVisible, project } = props;
  const { t } = useTranslation();
  const footerContent = (
    <div>
      <Button
        label={t("goToWebsite")}
        onClick={() => {
            window.open(project.link, "_blank");
            setVisible(false);
        }}
        className="p-button-text"
      />
      <Button
        label={t("downloadApp")}
        onClick={() => {
            window.open(project.app);
            setVisible(false)
        }}
        autoFocus
      />
    </div>
  );

  return (
    <Dialog
      header={t("whatHappens")}
      visible={visible}
      position="top"
      style={{ width: IS_MOBILE ? "100vw" : "50vw"}}
      onHide={() => {
        if (!visible) return;
        setVisible(false);
      }}
      footer={footerContent}
      draggable={false}
      resizable={false}
    >
      <p className="m-0">
        {t("whatHappensDescription")}
      </p>
    </Dialog>
  );
}
