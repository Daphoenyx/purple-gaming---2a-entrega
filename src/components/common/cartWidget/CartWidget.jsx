import { Badge } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <Link to="/cart">
      <Badge badgeContent={4} showZero color="primary">
        <AddShoppingCartIcon color="action" />
      </Badge>
    </Link>
  );
};

export default CartWidget;
