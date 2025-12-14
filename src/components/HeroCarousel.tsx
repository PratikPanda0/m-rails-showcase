import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const carouselImages = [
  {
    url: "/public/images/Front/R-1.jpg",
    alt: "M-RAILS Aluminium Railing Systems",
    title: "Premium Aluminium Railing Systems",
    subtitle: "Discover premium audio gear"
  },
  {
    url: "/public/images/Front/MRL-01_.jpg",
    alt: "Modern Railing Solutions",
    title: "Innovative Design Solutions",
    subtitle: "Bring music to life with style"
  },
  {
    url: "/public/images/Front/R-2.jpg",
    alt: "Weather Proof Systems",
    title: "100% Weather Proof",
    subtitle: "Illuminate your world creatively"
  },
  {
    url: "/public/images/Front/MRL-02_.jpg",
    alt: "Easy Installation",
    title: "Easy Installation",
    subtitle: "Bring music to life with style"
  },
  {
    url: "/public/images/Front/R-3.jpg",
    alt: "Multiple Finish Options",
    title: "Multi-Color Options",
    subtitle: "Illuminate your world creatively"
  },
  {
    url: "/public/images/Front/MRL-03_.jpg",
    alt: "Easy Installation",
    title: "Easy Installation",
    subtitle: "Bring music to life with style"
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  return (
    <div className="relative h-[500px] md:h-[600px] w-full overflow-hidden bg-muted">
      {/* Slides */}
      {carouselImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image.url})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
          </div>
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-foreground animate-fade-in">
                  {image.title}
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground animate-fade-in">
                  {image.subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur"
        onClick={goToPrevious}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur"
        onClick={goToNext}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide ? "w-8 bg-primary" : "w-2 bg-muted-foreground/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
