
import { useState, useEffect } from 'react';
import { Hero } from '@/components/Hero';
import { FeaturedSection } from '@/components/FeaturedSection';
import { RecommendationSection } from '@/components/RecommendationSection';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

// Mock data - in a real app, this would come from an API
const featuredFilms = [
  {
    id: '1',
    title: 'Planet Earth II',
    imageUrl: 'https://via.placeholder.com/300x450?text=Planet+Earth+II',
    year: 2016,
    genre: 'Nature',
    rating: 9.5,
    type: 'film' as const
  },
  {
    id: '2',
    title: 'Free Solo',
    imageUrl: 'https://via.placeholder.com/300x450?text=Free+Solo',
    year: 2018,
    genre: 'Sports',
    rating: 8.2,
    type: 'film' as const
  },
  {
    id: '3',
    title: 'The Social Dilemma',
    imageUrl: 'https://via.placeholder.com/300x450?text=The+Social+Dilemma',
    year: 2020,
    genre: 'Technology',
    rating: 7.7,
    type: 'film' as const
  },
  {
    id: '4',
    title: 'My Octopus Teacher',
    imageUrl: 'https://via.placeholder.com/300x450?text=My+Octopus+Teacher',
    year: 2020,
    genre: 'Nature',
    rating: 8.1,
    type: 'film' as const
  }
];

const featuredMusic = [
  {
    id: '5',
    title: 'Searching for Sugar Man',
    imageUrl: 'https://via.placeholder.com/300x450?text=Searching+for+Sugar+Man',
    year: 2012,
    genre: 'Music',
    rating: 8.2,
    type: 'music' as const
  },
  {
    id: '6',
    title: 'Amy',
    imageUrl: 'https://via.placeholder.com/300x450?text=Amy',
    year: 2015,
    genre: 'Music',
    rating: 7.8,
    type: 'music' as const
  },
  {
    id: '7',
    title: 'Woodstock',
    imageUrl: 'https://via.placeholder.com/300x450?text=Woodstock',
    year: 1970,
    genre: 'Music',
    rating: 8.1,
    type: 'music' as const
  },
  {
    id: '8',
    title: 'The Beatles: Eight Days a Week',
    imageUrl: 'https://via.placeholder.com/300x450?text=Beatles+Eight+Days',
    year: 2016,
    genre: 'Music',
    rating: 7.9,
    type: 'music' as const
  }
];

const recommendations = [
  {
    id: '9',
    title: 'Icarus',
    imageUrl: 'https://via.placeholder.com/300x450?text=Icarus',
    year: 2017,
    genre: 'Sports',
    rating: 8.0,
    type: 'film' as const,
    matchScore: 94
  },
  {
    id: '10',
    title: 'Blackfish',
    imageUrl: 'https://via.placeholder.com/300x450?text=Blackfish',
    year: 2013,
    genre: 'Nature',
    rating: 8.1,
    type: 'film' as const,
    matchScore: 87
  },
  {
    id: '11',
    title: 'What Happened, Miss Simone?',
    imageUrl: 'https://via.placeholder.com/300x450?text=Miss+Simone',
    year: 2015,
    genre: 'Music',
    rating: 7.6,
    type: 'music' as const,
    matchScore: 82
  },
  {
    id: '12',
    title: 'Apollo 11',
    imageUrl: 'https://via.placeholder.com/300x450?text=Apollo+11',
    year: 2019,
    genre: 'Science',
    rating: 8.2,
    type: 'film' as const,
    matchScore: 76
  }
];

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl font-serif">Loading...</div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      
      <main>
        <Hero 
          title="Discover Reality Through Documentary"
          description="Explore our curated collection of award-winning documentaries and music films that inspire, educate, and entertain."
          imageUrl="https://via.placeholder.com/1920x1080?text=Documentary+Hero"
          buttonText="Start Exploring"
          buttonLink="/explore"
        />
        
        <FeaturedSection 
          title="Featured Documentaries"
          items={featuredFilms}
        />
        
        <RecommendationSection 
          items={recommendations}
        />
        
        <FeaturedSection 
          title="Music Documentaries"
          items={featuredMusic}
        />
      </main>
      
      <Footer />
    </>
  );
};

export default Index;
