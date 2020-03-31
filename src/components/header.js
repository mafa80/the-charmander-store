import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useContext } from "react"
import { MenuItem, StyledHeader } from "../styles/components"
import { CartContext } from "../context"

const Header = ({ siteTitle }) => {
  const { cart } = useContext(CartContext)
  return (
    <StyledHeader>
      <Link to="/">
        <img src="https://i.ibb.co/BG1kzCn/ball.png" alt="pokeball" />
      </Link>
      <nav>
        <ul>
          <MenuItem margin>
            <Link to="/">Productos</Link>
          </MenuItem>
          <MenuItem margin>
            <a href="https://github.com/mafa80">GitHub</a>
          </MenuItem>
          <MenuItem>
            <Link to="/cart">
              <span>
                <img src="https://i.ibb.co/ZMDZY0K/cart.png" alt="Cart Logo" />
                {cart.length}
              </span>
            </Link>
          </MenuItem>
        </ul>
      </nav>
    </StyledHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
