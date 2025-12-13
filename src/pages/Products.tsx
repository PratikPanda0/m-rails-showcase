import { useState } from "react";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import ProductCard from "@/components/ProductCard";
import { Input } from "@/components/ui/input";
import { Search, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleCategorySelect = (categoryName: string) => {
    setSelectedCategory(categoryName);
    setSelectedSubcategory(null);
  };

  const handleSubcategorySelect = (subcategory: string) => {
    setSelectedSubcategory(subcategory);
  };

  const filteredProducts = products.filter((p) => {
    const matchesCategory = selectedCategory === "all" || p.category === selectedCategory;
    const matchesSubcategory = !selectedSubcategory || p.subcategory === selectedSubcategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         p.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSubcategory && matchesSearch;
  });

  const getCategoryWithSubcategories = (categoryName: string) => {
    return categories.find(c => c.name === categoryName);
  };

  const railingSystemCategory = getCategoryWithSubcategories("Aluminium Railing System");

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">Our Products</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our extensive range of premium aluminum railing systems, brackets, spigots, handrails, and accessories
          </p>
        </div>

        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {/* All Products Tab */}
          <button
            onClick={() => handleCategorySelect("all")}
            className={cn(
              "px-4 py-2 rounded-md text-sm font-medium transition-colors",
              selectedCategory === "all"
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            )}
          >
            All Products
          </button>

          {/* Category Tabs */}
          {categories.map((category) => (
            category.subcategories ? (
              <DropdownMenu key={category.name}>
                <DropdownMenuTrigger asChild>
                  <button
                    className={cn(
                      "px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1",
                      selectedCategory === category.name
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    )}
                  >
                    {category.name}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-background border border-border z-50">
                  <DropdownMenuItem
                    onClick={() => {
                      handleCategorySelect(category.name);
                    }}
                    className="cursor-pointer"
                  >
                    All {category.name}
                  </DropdownMenuItem>
                  {category.subcategories.map((sub) => (
                    <DropdownMenuItem
                      key={sub}
                      onClick={() => {
                        setSelectedCategory(category.name);
                        handleSubcategorySelect(sub);
                      }}
                      className="cursor-pointer"
                    >
                      {sub}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <button
                key={category.name}
                onClick={() => handleCategorySelect(category.name)}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                  selectedCategory === category.name
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                )}
              >
                {category.name}
              </button>
            )
          ))}
        </div>

        {/* Subcategory indicator */}
        {selectedSubcategory && (
          <div className="text-center mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
              {selectedSubcategory}
              <button
                onClick={() => setSelectedSubcategory(null)}
                className="hover:text-primary/80"
              >
                ×
              </button>
            </span>
          </div>
        )}

        {/* Products Display */}
        <div className="space-y-12">
          {selectedCategory === "all" && !searchQuery && !selectedSubcategory ? (
            // Show by category when "all" is selected and no search
            categories.map((category) => {
              const categoryProducts = products.filter((p) => p.category === category.name);
              return (
                <div key={category.name} className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground border-b border-border pb-2">
                    {category.name}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {categoryProducts.map((product) => (
                      <ProductCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        category={product.category}
                        image={product.image}
                        price={product.price}
                      />
                    ))}
                  </div>
                </div>
              );
            })
          ) : (
            // Show filtered products
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    category={product.category}
                    image={product.image}
                    price={product.price}
                  />
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-muted-foreground">No products found matching your search.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
