import React from "react"
import { SEO } from "../components"
import { Button, Purchase } from "../styles/components"
import { Link } from "gatsby"
export default function denegado() {
  return (
    <div>
      <SEO tittle="Compra Fallida" />
      <Purchase>
        <h2>Algo salio mal amigo </h2>
        <p>Puedes volverlo a intentar en unos minutos...</p>
        <p>Lo sentimos</p>
        <p>Weeeey Noooooo</p>
        <span role="img" arial-label="emoji">
          {" "}
          😭😭😭🐳😭😭😭{" "}
        </span>
        <br />
        <Link to="/">
          <Button>Volver al catalogo</Button>
        </Link>
      </Purchase>
    </div>
  )
}
