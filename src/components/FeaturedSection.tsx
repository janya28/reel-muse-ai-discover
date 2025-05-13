
import { ContentCard } from './ContentCard';

interface FeaturedItem {
  id: string;
  title: string;
  imageUrl: string;
  year: number;
  genre: string;
  rating: number;
  type: 'film' | 'music';
}

interface FeaturedSectionProps {
  title: string;
  items: FeaturedItem[];
  isAuthenticated?: boolean;
}

export const FeaturedSection = ({ title, items, isAuthenticated = false }: FeaturedSectionProps) => {
  return (
    <section className="py-12">
      <div className="content-container">
        <h2 className="text-2xl md:text-3xl font-serif font-medium mb-8">{title}</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <ContentCard 
              key={item.id}
              id={item.id}
              title={item.title}
              imageUrl={item.imageUrl}
              year={item.year}
              genre={item.genre}
              rating={item.rating}
              type={item.type}
              isAuthenticated={isAuthenticated}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
