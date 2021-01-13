import fs from "fs";
import Link from "next/link";

import styles from "../../styles/Home.module.css";

const pathsData = JSON.parse(fs.readFileSync("data.json"));

function Page({ content, locale, path, alternateLocales }) {
  return (
    <div className={styles.container}>
      <h1>{locale.toUpperCase()}</h1>
      <p>
        Other locales:
        {alternateLocales.map((locale) => (
          <Link key={locale} href={`/${locale}/${path}`}>
            <a
              style={{
                margin: ".5em",
                border: "1px solid",
                padding: ".5em",
              }}
            >
              {locale}
            </a>
          </Link>
        ))}
      </p>
      <p>{content}</p>
    </div>
  );
}

export const getStaticPaths = async () => {
  const paths = [];

  for (const [path, data] of Object.entries(pathsData)) {
    data.forEach(({ locale }) => {
      const localeData = {
        params: {
          path,
          locale,
        },
      };

      paths.push(localeData);
    });
  }

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { locale, path } }) => {
  const pathData = pathsData[path];
  const { content } = pathData.find((pathData) => pathData.locale === locale);
  const alternateLocales = pathData
    .map(({ locale }) => locale)
    .filter((alternateLocale) => alternateLocale !== locale);

  return {
    props: { locale, path, content, alternateLocales },
  };
};

export default Page;
