import { Link } from "gatsby"
import React from "react"
import ButtonLight from "../components/button/Button"

const Index = () => {
  return (
    <div>
      Welcome to Gatsby
      <div>
        <Link to="/about">About</Link>
      </div>
      <div>
        <ButtonLight label="test" />
      </div>
    </div>
  )
}

export default Index
