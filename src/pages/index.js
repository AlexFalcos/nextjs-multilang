import { useTranslation } from "next-i18next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <h1>{t("HELLO_WORLD")}</h1>
    </>
  );
}

export async function getStaticProps(context) {
  const { locale } = context;

  return {
    props: {
      ...(await serverSideTranslations(locale))
    }
  }
}
