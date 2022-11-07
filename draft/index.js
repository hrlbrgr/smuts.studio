import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Link from 'next/link';

export default function Home({ allPostsData }) {
  return (
	<Layout home>
	  <Head>
		<title>{siteTitle}</title>
	  </Head>
	  <section>
		<h2>About Us</h2>
		<p>Advertising and PR feel like a dirty thing. Especially if you’re trying to do good in the world. Because doing good often also means beginning to question our consumption in a commercialised reality.</p>
		<p>We think the dirt and the beauty can coexist. In fact, we think there's a way to use the smutsiga arts of advertising and PR to support people, products, services and companies that want to leave a more meaningful mark on the world. We're here to help them grow and prosper.</p>
		<p><a href="mailto:hej@smuts.studio">Get in touch</a></p>
	  </section>
	</Layout>
  );
}