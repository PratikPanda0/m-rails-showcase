import { useState } from "react";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import ProductCard from "@/components/ProductCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search, ChevronDown } from "lucide-react";
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

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
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
    <div className="min-h-screen bg-background py-2">
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

        <Tabs value={selectedCategory} className="w-full" onValueChange={handleCategoryChange} defaultValue="all">
          <TabsList className="w-full justify-start overflow-x-auto flex-wrap h-auto mb-8">
            <TabsTrigger value="all" className="flex-shrink-0">
              All Products
            </TabsTrigger>
            {categories.map((category) => (
              category.subcategories ? (
                <DropdownMenu key={category.name}>
                  <DropdownMenuTrigger asChild>
                    <button
                      onClick={() => handleCategoryChange(category.name)}
                      className={`flex-shrink-0 inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${
                        selectedCategory === category.name
                          ? "bg-background text-foreground shadow"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {category.name}
                      <ChevronDown className="h-4 w-4 ml-1" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-background border border-border z-50">
                    <DropdownMenuItem
                      onClick={() => {
                        handleCategoryChange(category.name);
                      }}
                      className="cursor-pointer"
                    >
                      All {category.name}
                    </DropdownMenuItem>
                    {category.subcategories.map((sub) => {
                      const subName = typeof sub === 'string' ? sub : (sub as { name: string }).name;
                      return (
                        <DropdownMenuItem
                          key={subName}
                          onClick={() => {
                            setSelectedCategory(category.name);
                            handleSubcategorySelect(subName);
                          }}
                          className="cursor-pointer"
                        >
                          {subName}
                        </DropdownMenuItem>
                      );
                    })}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <TabsTrigger key={category.name} value={category.name} className="flex-shrink-0">
                  {category.name}
                </TabsTrigger>
              )
            ))}
          </TabsList>

          {/* Subcategory indicator */}
          {selectedSubcategory && (
            <div className="mb-6">
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

          <div className="space-y-12">
            {selectedCategory === "all" && !searchQuery ? (
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
        </Tabs>
      </div>
    </div>
  );
};

export default Products;
