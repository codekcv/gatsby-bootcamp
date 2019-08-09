import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"

const Contact = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p>
        The best way to reach me is via{" "}
        <a href="https://twitter.com/villamin_c" target="_blank">
          @villamin_c
        </a>{" "}
        on Twitter.
      </p>
    </Layout>
  )
}

export default Contact
