import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta
					name="description"
					content="Church Blog. Project of Numo Francis, an expert in crafting software solutions that address unique challenges and measurably impact the bottom line."
				/>
				<meta
					name="keywords"
					content="Frontend Developer, Mobile Developer, Open Source, Freelance Web Developer, Freelance Mobile Developer, Javascript Developer, Developer Portfolio, React Developer, Web Developer, React Frontend Developer"
				/>

				<meta property="og:title" content="Church Blog" />
				<meta
					property="og:description"
					content="Church Blog. Project of Wellington Madondo, an expert in crafting software solutions that address unique challenges and measurably impact the bottom line."
				/>

				<meta property="og:image:alt" content="Church Blog" />
				<meta property="og:locale" content="en_GB" />
				<meta property="og:type" content="website" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta property="og:url" content="https://glorioushill.vercel.app/" />
				<meta name="twitter:card" content="summary" />
				<meta name="theme-color" content="#000000" />
				<meta name="robots" content="index, follow" />

				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="true"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Open+Sans:wght@300;400;500;600;700;800&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
