import React from "react"
import { Helmet } from "react-helmet"

const Seo: React.FC<{ title: string }> = ({ title }) => (
  <Helmet>
    <title>{title}</title>
  </Helmet>
)

export default Seo
