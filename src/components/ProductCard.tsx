import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

interface ProductCardProps {
  id: string;
  name: string;
  category: string;
  image: string;
  price: string;
}

const ProductCard = ({ id, name, category, image, price }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart({ id, name, category, image });
    toast.success("Added to cart", {
      description: name,
    });
  };

  return (
    <Link to={`/product/${id}`}>
      <Card className="group overflow-hidden hover:shadow-steel transition-all duration-300 h-full">
        <CardHeader className="p-0">
          <div className="aspect-square overflow-hidden bg-muted">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop";
              }}
            />
          </div>
        </CardHeader>
        <CardContent className="p-4 space-y-2">
          <p className="text-sm text-muted-foreground">{category}</p>
          <h3 className="font-semibold text-foreground line-clamp-2">{name}</h3>
          {price && <p className="text-primary font-medium">{price}</p>}
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <Button
            onClick={handleAddToCart}
            className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductCard;
