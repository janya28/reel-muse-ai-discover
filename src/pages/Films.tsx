
import { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ContentCard } from '@/components/ContentCard';
import { FilterBar, FilterState } from '@/components/FilterBar';

// Mock data - in a real app, this would come from an API
const allFilms = [
  {
    id: '1',
    title: 'Planet Earth II',
    imageUrl: 'https://via.placeholder.com/300x450?text=Planet+Earth+II',
    year: 2016,
    genre: 'nature',
    rating: 9.5,
    type: 'film' as const,
    description: 'David Attenborough returns with a new wildlife documentary that shows life in a variety of habitats.'
  },
  {
    id: '2',
    title: 'Free Solo',
    imageUrl: 'https://via.placeholder.com/300x450?text=Free+Solo',
    year: 2018,
    genre: 'sports',
    rating: 8.2,
    type: 'film' as const,
    description: 'Follow Alex Honnold as he becomes the first person to ever free solo climb Yosemite\'s 3,000ft high El Capitan Wall.'
  },
  {
    id: '3',
    title: 'The Social Dilemma',
    imageUrl: 'https://via.placeholder.com/300x450?text=The+Social+Dilemma',
    year: 2020,
    genre: 'technology',
    rating: 7.7,
    type: 'film' as const,
    description: 'Explores the dangerous human impact of social networking, with tech experts sounding the alarm on their own creations.'
  },
  {
    id: '4',
    title: 'My Octopus Teacher',
    imageUrl: 'https://via.placeholder.com/300x450?text=My+Octopus+Teacher',
    year: 2020,
    genre: 'nature',
    rating: 8.1,
    type: 'film' as const,
    description: 'A filmmaker forges an unusual friendship with an octopus living in a South African kelp forest.'
  },
  {
    id: '9',
    title: 'Icarus',
    imageUrl: 'https://via.placeholder.com/300x450?text=Icarus',
    year: 2017,
    genre: 'sports',
    rating: 8.0,
    type: 'film' as const,
    description: 'When Bryan sets out to uncover the truth about doping in sports, a chance meeting with a Russian scientist transforms his story.'
  },
  {
    id: '10',
    title: 'Blackfish',
    imageUrl: 'https://via.placeholder.com/300x450?text=Blackfish',
    year: 2013,
    genre: 'nature',
    rating: 8.1,
    type: 'film' as const,
    description: 'A documentary following the controversial captivity of killer whales, and its dangers for both humans and whales.'
  },
  {
    id: '12',
    title: 'Apollo 11',
    imageUrl: 'https://via.placeholder.com/300x450?text=Apollo+11',
    year: 2019,
    genre: 'science',
    rating: 8.2,
    type: 'film' as const,
    description: 'A look at the Apollo 11 mission to land on the moon led by commander Neil Armstrong and pilots Buzz Aldrin and Michael Collins.'
  },
  {
    id: '13',
    title: 'The Act of Killing',
    imageUrl: 'https://via.placeholder.com/300x450?text=The+Act+of+Killing',
    year: 2012,
    genre: 'history',
    rating: 8.2,
    type: 'film' as const,
    description: 'A documentary which challenges former Indonesian death-squad leaders to reenact their mass-killings in whatever cinematic genres they wish.'
  }
];

const Films = () => {
  const [films, setFilms] = useState(allFilms);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate API loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const handleFilterChange = (filters: FilterState) => {
    // Filter the films based on the selected filters
    const filteredFilms = allFilms.filter(film => {
      // Filter by genre
      if (filters.genre !== 'all' && film.genre !== filters.genre) {
        return false;
      }
      
      // Filter by year
      if (film.year < filters.year[0] || film.year > filters.year[1]) {
        return false;
      }
      
      // Filter by rating
      if (film.rating < filters.rating) {
        return false;
      }
      
      return true;
    });
    
    setFilms(filteredFilms);
  };

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-documentary-light/50 py-8">
        <div className="content-container">
          <h1 className="text-3xl font-serif font-medium mb-6">Documentary Films</h1>
          
          <FilterBar onFilterChange={handleFilterChange} contentType="film" />
          
          {isLoading ? (
            <div className="py-12 text-center">
              <p className="text-lg">Loading films...</p>
            </div>
          ) : films.length === 0 ? (
            <div className="py-12 text-center">
              <p className="text-lg">No films match your current filters.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {films.map((film) => (
                <ContentCard
                  key={film.id}
                  id={film.id}
                  title={film.title}
                  imageUrl={film.imageUrl}
                  year={film.year}
                  genre={film.genre}
                  rating={film.rating}
                  type={film.type}
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

export default Films;
