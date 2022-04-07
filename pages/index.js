import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I'm Paul. I'm a former classicist and a passionate web
          developer from Germany. You can contact me on{" "}
          <a href="https://github.com/PReichetanz" target="_blank">
            GitHub
          </a>
          .
        </p>
        <p>
          (This is a sample website build with{" "}
          <a href="https://nextjs.org/learn">the Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
