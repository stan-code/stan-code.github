import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>About Stan</h1>
    <p>Here's a bit about me</p>
    <ul>
      <li><h2>Favourite Colour:</h2>Yellow</li>
      <li><h2>Favourite Movie:</h2>Pulp Fiction</li>
      <li><h2>Favourite Car:</h2>1971 Dodge Challenger</li>
      <li><h2>Favourite Song:</h2>The F.R.I.E.N.D.S theme song</li>
      <li><h2>Favourite Drink:</h2>Vanilla Coke</li>
    </ul>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
