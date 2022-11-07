import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const name = 'smuts';
export const siteTitle = 'smuts';

export default function Layout({ children, home }) {
  return (
	<div>
	  <Head>
		<link rel="icon" href="/favicon.ico" />
		<link rel="preconnect" href="https://cdn.fonts.net" />
		<link href="https://cdn.fonts.net/kit/1ad9c07e-908d-4ede-8b95-c753dc644a5f/1ad9c07e-908d-4ede-8b95-c753dc644a5f.css" rel="stylesheet" />
		<meta
		  name="description"
		  content="Learn how to build a personal website using Next.js"
		/>
		<meta
		  property="og:image"
		  content={`https://og-image.vercel.app/${encodeURI(
			siteTitle,
		  )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
		/>
		<meta name="og:title" content={siteTitle} />
		<meta name="twitter:card" content="summary_large_image" />
	  </Head>
	  <header>
			<h1><Link href="/">{name}</Link></h1>
	  </header>
	  <main>{children}</main>
	  {!home && (
		<div>
		  <Link href="/">← Back to home</Link>
		</div>
	  )}
	<footer>
		<ul>
		<li>smuts AB</li>
		<li>Org. No. 559283-3189</li>
		<li><a href="tel:+46738244203">+46 73 824 42 03</a></li>
		<li><a href="mailto:hej@smuts.studio">hej@smuts.studio</a></li>
		</ul>
	</footer>
	</div>
  );
}
