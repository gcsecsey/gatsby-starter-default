import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Welcome to my website!</h1>
    <p>
      Though it is under construction now, it'll become the most quirky thing
      you've seen.
    </p>
    <p>
      Check out my{" "}
      <Link to="https://instagram.com/thequirkyhedgehog">Instagram</Link> and{" "}
      <Link to="https://www.etsy.com/shop/quirkyhedgehog">Etsy store</Link> too!
    </p>
  </Layout>
)

export default IndexPage
