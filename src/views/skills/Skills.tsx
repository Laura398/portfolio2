import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Fieldset } from "primereact/fieldset";
import { useTranslation } from "react-i18next";
import { IS_MOBILE } from "../../constants/constants";

export default function Skills() {
  const { t } = useTranslation();

  const stack = [
    {
      name: "FrontEnd",
      list: [
        {
          name: "ts",
          link: "https://www.typescriptlang.org/",
        },
        {
          name: "react",
          link: "https://fr.legacy.reactjs.org/",
        },
        {
          name: "angular",
          link: "https://angular.dev/",
        },
      ],
    },
    {
      name: "BackEnd",
      list: [
        {
          name: "ts",
          link: "https://www.typescriptlang.org/",
        },
        {
          name: "node",
          link: "https://nodejs.org/en",
        },
        {
          name: "nest",
          link: "https://nestjs.com/",
        },
      ],
    },
    {
      name: t("stack-database"),
      list: [
        {
          name: "mongo",
          link: "https://www.mongodb.com/fr-fr",
        },
        {
          name: "postgresql",
          link: "https://www.postgresql.org/",
        },
        {
          name: "mysql",
          link: "https://www.mysql.com/fr/",
        },
      ],
    },
    {
      name: "DevOps",
      list: [
        {
          name: "docker",
          link: "https://www.docker.com/",
        },
        {
          name: "github",
          link: "https://github.com/features/actions",
        },
        {
          name: "gitlab",
          link: "https://docs.gitlab.com/ci/",
        },
      ],
    },
  ];

  return (
    <Card
      id="skills"
      style={{
        maxWidth: "95vw",
        margin: "auto",
        marginTop: "20px",
      }}
    >
      <h1
        className="text-cyan-500"
        style={{ textAlign: "center", margin: "20px auto" }}
      >
        {t("skills")}
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: IS_MOBILE ? "column" : "row",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {stack.map((s, i) => (
          <Fieldset
            key={i}
            legend={s.name}
            style={{ width: IS_MOBILE ? "auto" : "45%", margin: "10px" }}
          >
            <div
              className="card"
              style={{
                display: "flex",
                flexDirection: IS_MOBILE ? "column" : "row",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {s.list.map((item, index) => (
                <Button
                  key={index}
                  className="bg-bluegray-50 hover:bg-bluegray-100 border-bluegray-100"
                  style={{ width: "150px", margin: "0.5rem" }}
                  onClick={() => window.open(item.link, "_blank")}
                >
                  <img
                    alt="logo"
                    src={`/assets/stack/${item.name}.png`}
                    className="h-2rem"
                    width="100"
                    style={{ objectFit: "fill" }}
                  ></img>
                </Button>
              ))}
            </div>
          </Fieldset>
        ))}
      </div>
    </Card>
  );
}
