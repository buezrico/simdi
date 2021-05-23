import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>I am Simdi</title>
        <meta name="description" content="I am Simdi and I am a Model" />
        <link rel="icon" href="/images/logo.ico" />
      </Head>

      <header>
        <nav className="navbar">
          <div className="container">
            <a className="navbar-brand text-secondary">SIMDI</a>
          </div>
        </nav>
      </header>

      <main></main>
    </div>
  );
}
