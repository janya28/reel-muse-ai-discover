
import { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ContentCard } from '@/components/ContentCard';
import { FilterBar, FilterState } from '@/components/FilterBar';

// Mock data - in a real app, this would come from an API
const allMusic = [
  {
    id: '5',
    title: 'Searching for Sugar Man',
    imageUrl: 'https://via.placeholder.com/300x450?text=Searching+for+Sugar+Man',
    year: 2012,
    genre: 'rock',
    rating: 8.2,
    type: 'music' as const,
    description: 'Two South Africans set out to discover what happened to their unlikely musical hero, the mysterious 1970s rock n roller, Rodriguez.'
  },
  {
    id: '6',
    title: 'Amy',
    imageUrl: 'https://via.placeholder.com/300x450?text=Amy',
    year: 2015,
    genre: 'pop',
    rating: 7.8,
    type: 'music' as const,
    description: 'The story of Amy Winehouse in her own words, featuring unseen archival footage and unheard tracks.'
  },
  {
    id: '7',
    title: 'Woodstock',
    imageUrl: 'https://via.placeholder.com/300x450?text=Woodstock',
    year: 1970,
    genre: 'rock',
    rating: 8.1,
    type: 'music' as const,
    description: 'The film chronicle of the legendary 1969 music festival.'
  },
  {
    id: '8',
    title: 'The Beatles: Eight Days a Week',
    imageUrl: 'https://via.placeholder.com/300x450?text=Beatles+Eight+Days',
    year: 2016,
    genre: 'rock',
    rating: 7.9,
    type: 'music' as const,
    description: 'A compilation of found footage featuring music, interviews, and stories of The Beatles\' 250 concerts from 1963 to 1966.'
  },
  {
    id: '11',
    title: 'What Happened, Miss Simone?',
    imageUrl: 'https://via.placeholder.com/300x450?text=Miss+Simone',
    year: 2015,
    genre: 'jazz',
    rating: 7.6,
    type: 'music' as const,
    description: 'A documentary about the life and legend Nina Simone, an American singer, pianist, and civil rights activist.'
  },
  {
    id: '14',
    title: '20 Feet from Stardom',
    imageUrl: 'https://via.placeholder.com/300x450?text=20+Feet+from+Stardom',
    year: 2013,
    genre: 'pop',
    rating: 7.4,
    type: 'music' as const,
    description: 'A documentary that follows the behind-the-scenes of backup singers during the heyday of rock\'n\'roll.'
  },
  {
    id: '15',
    title: 'Kurt Cobain: Montage of Heck',
    imageUrl: 'https://via.placeholder.com/300x450?text=Montage+of+Heck',
    year: 2015,
    genre: 'rock',
    rating: 7.5,
    type: 'music' as const,
    description: 'An authorized documentary on the late musician Kurt Cobain, from his early days in Aberdeen, Washington to his success with the grunge band Nirvana.'
  },
  {
    id: '16',
    title: 'Miles Davis: Birth of the Cool',
    imageUrl: 'https://via.placeholder.com/300x450?text=Miles+Davis',
    year: 2019,
    genre: 'jazz',
    rating: 7.3,
    type: 'music' as const,
    description: 'The life and music of legendary trumpeter Miles Davis.'
  },
];

const Music = () => {
  const [music, setMusic] = useState(allMusic);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate API loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const handleFilterChange = (filters: FilterState) => {
    // Filter the music documentaries based on the selected filters
    const filteredMusic = allMusic.filter(item => {
      // Filter by genre
      if (filters.genre !== 'all' && item.genre !== filters.genre) {
        return false;
      }
      
      // Filter by year
      if (item.year < filters.year[0] || item.year > filters.year[1]) {
        return false;
      }
      
      // Filter by rating
      if (item.rating < filters.rating) {
        return false;
      }
      
      return true;
    });
    
    setMusic(filteredMusic);
  };

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-documentary-light/50 py-8">
        <div className="content-container">
          <h1 className="text-3xl font-serif font-medium mb-6">Music Documentaries</h1>
          
          <FilterBar onFilterChange={handleFilterChange} contentType="music" />
          
          {isLoading ? (
            <div className="py-12 text-center">
              <p className="text-lg">Loading music documentaries...</p>
            </div>
          ) : music.length === 0 ? (
            <div className="py-12 text-center">
              <p className="text-lg">No music documentaries match your current filters.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {music.map((item) => (
                <ContentCard
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  imageUrl={item.imageUrl}
                  year={item.year}
                  genre={item.genre}
                  rating={item.rating}
                  type={item.type}
                />
              ))}
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Music;
