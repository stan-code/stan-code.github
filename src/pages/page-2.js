import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>Contact Me</h1>
    <p>Here's how to get in touch with me</p>
    <ul>
      <li>email: sjgogan@me.com</li>
      <li>github: stan-code</li>
    </ul>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
