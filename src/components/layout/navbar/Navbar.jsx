import CartWidget from "../../common/cartWidget/CartWidget";
import Button from "@mui/material/Button";

export const Navbar = () => {
  return (
    <div>
      <h4>Logo</h4>
      <ul>
        <li>
          <Button variant="contained" color="secondary">
            Aventura
          </Button>
        </li>
        <li>
          <Button variant="contained" color="secondary">
            RPG
          </Button>
        </li>
        <li>
          <Button variant="contained" color="secondary">
            Horror
          </Button>
        </li>
      </ul>
      <CartWidget />
    </div>
  );
};
