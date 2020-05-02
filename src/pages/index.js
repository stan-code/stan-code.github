import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Stan's Static Website</h1>
    <p>It's pretty kewl.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <h2>Here's a photo of Quentin Tarantino</h2><img src="images/quentin.png"/>
    </div>
    <div>
    <Link to="/page-2/">Contact</Link>
    </div>
    <Link to ="/page-3/">About Me</Link>
  </Layout>
)

export default IndexPage
