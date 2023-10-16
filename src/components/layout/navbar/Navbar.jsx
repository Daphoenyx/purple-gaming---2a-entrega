import CartWidget from "../../common/cartWidget/CartWidget";
import Button from "@mui/material/Button";
import { Outlet, Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div>
        <Link to="/">
          <h4>Purple man Gaming</h4>
        </Link>
        <ul>
          <Link to="/category/adventure">
            <li>
              <Button variant="contained" color="secondary">
                Aventure
              </Button>
            </li>
          </Link>
          <Link to="/category/puzzle">
            <li>
              <Button variant="contained" color="secondary">
                Puzzle
              </Button>
            </li>
          </Link>
          <Link to="/category/simulation">
            <li>
              <Button variant="contained" color="secondary">
                Simulation
              </Button>
            </li>
          </Link>
          <Link to="/category/strategy">
            <li>
              <Button variant="contained" color="secondary">
                Strategy
              </Button>
            </li>
          </Link>
          <Link to="/category/actionadventure">
            <li>
              <Button variant="contained" color="secondary">
                Action-Adventure
              </Button>
            </li>
          </Link>
          <Link to="/category/roleplaying">
            <li>
              <Button variant="contained" color="secondary">
                Role-Playing
              </Button>
            </li>
          </Link>
          <Link to="/category/platformer">
            <li>
              <Button variant="contained" color="secondary">
                Platformer
              </Button>
            </li>
          </Link>
        </ul>
        <CartWidget />
      </div>
      <Outlet />
    </>
  );
};
