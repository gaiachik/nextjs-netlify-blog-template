import Head from "next/head";
import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../../prismicio";
import { components } from "../../slices";
import { Layout } from "../../components/Layout";

const Page = ({ page, navigation, settings }) => {
  return (
    <Layout navigation={navigation} settings={settings}>
      <Head>
        <title>{`${prismicH.asText(page.data.title)} | ${prismicH.asText(settings.data.siteTitle)}`} </title>
      </Head>
      <SliceZone slices={page.data.slices} components={components} />
    </Layout>
  );
};

export default Page;

export async function getStaticProps({ params, locale, previewData }) {
  const client = createClient({ previewData });
  const uid = params.slug && params.slug.pop() || params.landing
  const page = await client.getByUID("page", uid, { lang: locale });

  const navigation = await client.getSingle("navigation", { lang: locale });
  const settings = await client.getSingle("settings", { lang: locale });

  return {
    props: {
      page,
      navigation,
      settings,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const pages = await client.getAllByType("page", { lang: "*" });
  return {
    paths: pages.map((page) => {
      let slug = null;
      let initialPath = page.uid;
      if(page.data.url_path){
        const landingPagePath = page.data.url_path.split("/").filter((s)=>!!s)
        initialPath = landingPagePath.shift();
        slug = [...landingPagePath, page.uid];
      }
      return {
        params: { slug, "landing": initialPath } ,
        locale: page.lang,
      };
    }),
    fallback: false,
  };
}
