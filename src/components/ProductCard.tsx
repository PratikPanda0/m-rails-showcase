import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface ProductCardProps {
  id: string;
  name: string;
  category: string;
  image: string;
  price: string;
}

const ProductCard = ({ id, name, category, image, price }: ProductCardProps) => {
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
      </Card>
    </Link>
  );
};

export default ProductCard;
