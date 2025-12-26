import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const carouselImages = [
  {
    url: "/images/Front/R-1.jpg",
    alt: "M-RAILS Aluminium Railing Systems",
    title: "Premium Aluminium Railing Systems",
    subtitle: "Quality, Safety, and Elegance Combined"
  },
  {
    url: "/images/Front/MRL-01_.jpg",
    alt: "Modern Railing Solutions",
    title: "Innovative Design Solutions",
    subtitle: "35+ Aluminium Railing Options"
  },
  {
    url: "/images/Front/R-2.jpg",
    alt: "Weather Proof Systems",
    title: "100% Weather Proof",
    subtitle: "Built to Last in Any Climate"
  },
  {
    url: "/images/Front/MRL-02_.jpg",
    alt: "Easy Installation",
    title: "Easy Installation",
    subtitle: "Professional-Grade Quality, Simple Setup"
  },
  {
    url: "/images/Front/R-3.jpg",
    alt: "Multiple Finish Options",
    title: "Multi-Color Options",
    subtitle: "PVDF, Wood, Anodizing & Powder Coating"
  },
  {
    url: "/images/Front/MRL-03_.jpg",
    alt: "Durable Construction",
    title: "Durable Construction",
    subtitle: "Premium Quality Aluminium Systems"
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [previousSlide, setPreviousSlide] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const changeSlide = (newSlide: number) => {
    if (isAnimating || newSlide === currentSlide) return;
    setIsAnimating(true);
    setPreviousSlide(currentSlide);
    setCurrentSlide(newSlide);
    setTimeout(() => {
      setPreviousSlide(null);
      setIsAnimating(false);
    }, 600);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const nextSlide = (currentSlide + 1) % carouselImages.length;
      changeSlide(nextSlide);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide, isAnimating]);

  const goToPrevious = () => {
    const prevSlide = (currentSlide - 1 + carouselImages.length) % carouselImages.length;
    changeSlide(prevSlide);
  };

  const goToNext = () => {
    const nextSlide = (currentSlide + 1) % carouselImages.length;
    changeSlide(nextSlide);
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
          <div className="absolute inset-0 bg-muted">
            <img 
              src={image.url} 
              alt={image.alt}
              className="w-full h-full object-contain md:object-cover object-center"
            />
          </div>
          
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl space-y-4">
                {index === currentSlide && (
                  <>
                    <h1 
                      key={`title-${index}-${currentSlide}`}
                      className="text-4xl md:text-6xl font-bold text-foreground animate-slide-up-fade-in"
                    >
                      {image.title}
                    </h1>
                    <p 
                      key={`subtitle-${index}-${currentSlide}`}
                      className="text-xl md:text-2xl text-muted-foreground animate-slide-up-fade-in"
                      style={{ animationDelay: "0.15s" }}
                    >
                      {image.subtitle}
                    </p>
                  </>
                )}
                {index === previousSlide && (
                  <>
                    <h1 
                      key={`title-out-${index}`}
                      className="text-4xl md:text-6xl font-bold text-foreground animate-slide-down-fade-out"
                    >
                      {image.title}
                    </h1>
                    <p 
                      key={`subtitle-out-${index}`}
                      className="text-xl md:text-2xl text-muted-foreground animate-slide-down-fade-out"
                      style={{ animationDelay: "0.1s" }}
                    >
                      {image.subtitle}
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation with Arrows and Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 bg-background/80 backdrop-blur"
          onClick={goToPrevious}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        
        <div className="flex space-x-2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => changeSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide ? "w-8 bg-primary" : "w-2 bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>
        
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 bg-background/80 backdrop-blur"
          onClick={goToNext}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default HeroCarousel;
