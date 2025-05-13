
import { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ContentCard } from '@/components/ContentCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock data - combined from films and music
const allContent = [
  // Films
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
  },
  // Music
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
  },
  // More films
  {
    id: '9',
    title: 'Icarus',
    imageUrl: 'https://via.placeholder.com/300x450?text=Icarus',
    year: 2017,
    genre: 'Sports',
    rating: 8.0,
    type: 'film' as const
  },
  {
    id: '10',
    title: 'Blackfish',
    imageUrl: 'https://via.placeholder.com/300x450?text=Blackfish',
    year: 2013,
    genre: 'Nature',
    rating: 8.1,
    type: 'film' as const
  },
  {
    id: '12',
    title: 'Apollo 11',
    imageUrl: 'https://via.placeholder.com/300x450?text=Apollo+11',
    year: 2019,
    genre: 'Science',
    rating: 8.2,
    type: 'film' as const
  }
];

// Categories
const categories = [
  "All", "Nature", "History", "Society", "Science", "Biography", 
  "True Crime", "Arts", "Sports", "Technology", "Politics", "Music"
];

const Explore = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredContent, setFilteredContent] = useState(allContent);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate API loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredContent(allContent);
    } else {
      const filtered = allContent.filter(item => 
        item.genre.toLowerCase() === activeCategory.toLowerCase() ||
        (activeCategory === "Music" && item.type === "music")
      );
      setFilteredContent(filtered);
    }
  }, [activeCategory]);

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-documentary-light/50 py-8">
        <div className="content-container">
          <h1 className="text-3xl font-serif font-medium mb-6">Explore Documentaries</h1>
          
          <Tabs defaultValue="categories" className="mb-8">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="categories">Categories</TabsTrigger>
              <TabsTrigger value="trending">Trending</TabsTrigger>
            </TabsList>
            <TabsContent value="categories" className="pt-4">
              <div className="flex flex-wrap gap-2 mb-6">
                {categories.map((category) => (
                  <Button 
                    key={category}
                    variant={activeCategory === category ? "default" : "outline"}
                    onClick={() => setActiveCategory(category)}
                    className={activeCategory === category ? "bg-documentary-accent text-documentary-dark hover:bg-documentary-accent/90" : ""}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="trending" className="pt-4">
              <p className="mb-6">Discover what's trending this week in documentaries.</p>
            </TabsContent>
          </Tabs>
          
          {isLoading ? (
            <div className="py-12 text-center">
              <p className="text-lg">Loading content...</p>
            </div>
          ) : filteredContent.length === 0 ? (
            <div className="py-12 text-center">
              <p className="text-lg">No documentaries found in this category.</p>
            </div>
          ) : (
            <>
              <h2 className="text-xl font-medium mb-4">
                {activeCategory === "All" ? "All Documentaries" : `${activeCategory} Documentaries`}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredContent.map((item) => (
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
            </>
          )}
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Explore;
