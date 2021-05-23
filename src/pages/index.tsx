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
          <div className="social-icons">
            <i className="fab fa-instagram"></i>
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
          </div>
          <div className="container inner">
            <div className="name mb-4">
              <p className="joy">JOY</p>
              <p className="simdi">SIMDI</p>
            </div>

            <div className="title text-center text-light">
              <h4>Nigerian Supermodel &amp; Enterpreneur</h4>
            </div>
            <div className="arrow-down">
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                fill-rule="evenodd"
                clip-rule="evenodd"
              >
                <path d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z" />
              </svg>
            </div>
          </div>
        </div>
      </header>

      <main></main>
    </div>
  );
}
