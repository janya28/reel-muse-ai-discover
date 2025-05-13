
import { ContentCard } from './ContentCard';

interface RecommendedItem {
  id: string;
  title: string;
  imageUrl: string;
  year: number;
  genre: string;
  rating: number;
  type: 'film' | 'music';
  matchScore: number;
}

interface RecommendationSectionProps {
  items: RecommendedItem[];
  isAuthenticated?: boolean;
}

export const RecommendationSection = ({ items, isAuthenticated = false }: RecommendationSectionProps) => {
  return (
    <section className="py-12 bg-documentary-dark text-documentary-light">
      <div className="content-container">
        <h2 className="text-2xl md:text-3xl font-serif font-medium mb-2">Recommended For You</h2>
        <p className="text-documentary-muted mb-8">Based on your viewing history and preferences</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.id} className="relative">
              <div className="absolute -top-2 -right-2 bg-documentary-accent text-documentary-dark px-2 py-1 rounded-full text-xs font-medium z-10">
                {item.matchScore}% Match
              </div>
              <ContentCard 
                id={item.id}
                title={item.title}
                imageUrl={item.imageUrl}
                year={item.year}
                genre={item.genre}
                rating={item.rating}
                type={item.type}
                isAuthenticated={isAuthenticated}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
