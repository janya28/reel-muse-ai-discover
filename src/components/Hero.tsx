
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  description: string;
  imageUrl: string;
  buttonText: string;
  buttonLink: string;
}

export const Hero = ({ 
  title, 
  description, 
  imageUrl, 
  buttonText, 
  buttonLink 
}: HeroProps) => {
  return (
    <section className="hero-section">
      {/* Overlay image with dark gradient */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${imageUrl})`,
          filter: 'brightness(0.4)'
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-documentary-dark/30 via-documentary-dark/60 to-documentary-dark" />
      
      {/* Content */}
      <div className="content-container relative h-full flex items-center">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-documentary-light mb-4">
            {title}
          </h1>
          <p className="text-lg text-documentary-light/80 mb-8">
            {description}
          </p>
          <Link to={buttonLink}>
            <Button size="lg" className="bg-documentary-accent text-documentary-dark hover:bg-documentary-accent/90">
              {buttonText}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
