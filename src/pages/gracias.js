import React from "react"
import { Link } from "gatsby"
import { SEO } from "../components"
import { Button, Purchase } from "../styles/components"
export default function gracias() {
  return (
    <div>
      <SEO title="Compra exitosa" />
      <Purchase>
        <h2>Compra Exitosa</h2>
        <p>Espero disfrutes de tu Charmander.</p>
        <p>Char char char... char char....</p>
        <Link to="/">
          <Button>Buscar mas Charmander</Button>
        </Link>
      </Purchase>
    </div>
  )
}
