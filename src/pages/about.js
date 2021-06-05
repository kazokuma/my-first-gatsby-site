// Step 1: Import your component
import * as React from 'react';
import Layout from "../components/layout";

// Step 2: Define your component
const AboutPage = () => {
  return (
    <main>
      <Layout pageTitle="About Me">
        <p>I'm making this at About by following the Gatsby Tutorial.</p>
      </Layout>
    </main>
  )
}

// Step 3: Export your component
export default AboutPage