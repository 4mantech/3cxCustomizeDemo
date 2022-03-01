import type { NextPage } from "next";
import { useTranslation } from "react-i18next";

const Home: NextPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <p>{t("swiftlet")}</p>
    </>
  );
};

export default Home;
