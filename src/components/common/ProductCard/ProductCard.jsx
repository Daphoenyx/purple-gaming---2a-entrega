import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const ProductCard = ({ item }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={item.img} title={item.title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.genre}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          EUR {item.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="outlined">
          Ver mas
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
