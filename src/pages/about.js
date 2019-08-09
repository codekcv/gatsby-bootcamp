import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const About = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About Me</h1>
      <p>I'm currently learning web development.</p>
      <p>
        Go to <Link to="/contact">contact</Link>.
      </p>
    </Layout>
  )
}

export default About
