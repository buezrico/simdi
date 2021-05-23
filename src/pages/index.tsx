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
        <nav className="navbar text-primary">
          <div className="container">
            <a className="navbar-brand">SIMDI</a>

            <button className="btn rounded-circle btn-outline-primary py-1">
              <i className="fas fa-bars"></i>
            </button>

            <button className="btn rounded-0 btn-outline-primary">
              Book Me
            </button>
          </div>
        </nav>

        <div className="content">
          <div className="container inner"></div>
        </div>
      </header>

      <main></main>
    </div>
  );
}
