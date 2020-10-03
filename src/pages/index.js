import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import '../styles/index.css';

function AvumLink() { 
  return (
    <a
      href="http://www.avum.com"
      target="_blank"
      rel="noreferrer noopener"
    >
      Avum
    </a>
  );
}

function Index() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <main>
      <Helmet>
        <title>UCert.com</title>
      </Helmet>
      <h1>UCert</h1>
      <h2>
      A Joint Venture between Avum and Pengele
      </h2>
      <p>
        UCert.com is a Joint Venture company between Avum and Pengele. Both
        companies have joined forces to take advantage of Avum's resources
        and Pengele's expertise in creating secure business intelligence
        solutions.
      </p>
      <h2>Website Technology</h2>
      <p>
        This website was created using Gatsby + Node.js (TypeScript) API. The
        current date is {date ? date : 'Loading date...'}
      </p>
      <p>
        Deployed with{' '}
        <a
          href="https://vercel.com/docs"
          target="_blank"
          rel="noreferrer noopener"
        >
          Vercel
        </a>
      </p>
    </main>
  );
}

export default Index;
