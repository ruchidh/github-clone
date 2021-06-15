import Head from 'next/head'

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-700">
			<Head>
				<title>Github Clone</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
				<img src="/github-logo.png" alt="github Logo" className="h-20" />
				<h4 className="text-2xl font-bold my-5 text-white">
					Welcome to Github Auth
                </h4>
				<footer className="flex items-center justify-center w-2/4 border-t" />
				<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-5"> Connect with github</button>
				<p className="text-white"> Developed by <a href="https://www.linkedin.com/in/ruchi-sharma-a0553152/" className="text-yellow-500"> Ruchi Sharma</a></p>
			</main>
		</div>
	)
};
