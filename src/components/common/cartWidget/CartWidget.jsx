import { Badge } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const CartWidget = () => {
  return (
    <div>
      <Badge badgeContent={4} showZero color="primary">
        <AddShoppingCartIcon color="action" />
      </Badge>
    </div>
  );
};

export default CartWidget;
