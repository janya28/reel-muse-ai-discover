
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bookmark } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ContentCardProps {
  id: string;
  title: string;
  imageUrl: string;
  year: number;
  genre: string;
  rating: number;
  type: 'film' | 'music';
  isAuthenticated?: boolean;
}

export const ContentCard = ({
  id,
  title,
  imageUrl,
  year,
  genre,
  rating,
  type,
  isAuthenticated = false
}: ContentCardProps) => {
  const [isFavorited, setIsFavorited] = useState(false);
  const { toast } = useToast();

  const handleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!isAuthenticated) {
      toast({
        title: "Authentication Required",
        description: "Please sign in to save favorites",
        variant: "destructive"
      });
      return;
    }
    
    setIsFavorited(!isFavorited);
    toast({
      title: isFavorited ? "Removed from favorites" : "Added to favorites",
      description: isFavorited ? `${title} has been removed from your favorites` : `${title} has been added to your favorites`,
    });
  };

  return (
    <Card className="card-hover overflow-hidden h-full flex flex-col">
      <div className="relative">
        <img
          src={imageUrl || 'https://via.placeholder.com/300x450?text=No+Image'} 
          alt={title}
          className="w-full aspect-[2/3] object-cover"
          loading="lazy"
        />
        <Button
          variant="ghost"
          size="icon"
          className={`absolute top-2 right-2 rounded-full bg-black/30 hover:bg-black/50 ${isFavorited ? 'text-documentary-accent' : 'text-documentary-light'}`}
          onClick={handleFavorite}
        >
          <Bookmark className="h-5 w-5" />
        </Button>
      </div>
      
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-serif font-medium text-lg line-clamp-2">{title}</h3>
        <div className="mt-2 flex justify-between items-center text-sm text-documentary-muted">
          <span>{year}</span>
          <span>{genre}</span>
        </div>
        <div className="mt-1 flex items-center">
          <div className="bg-documentary-accent/20 text-documentary-accent px-2 py-0.5 text-xs rounded font-medium">
            {rating.toFixed(1)}
          </div>
          <span className="ml-2 text-sm text-documentary-muted capitalize">{type}</span>
        </div>
      </div>
    </Card>
  );
};
