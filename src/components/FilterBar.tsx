
import { useState } from 'react';
import { Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';

interface FilterBarProps {
  onFilterChange: (filters: FilterState) => void;
  contentType: 'film' | 'music';
}

export interface FilterState {
  genre: string;
  year: [number, number];
  rating: number;
}

const CURRENT_YEAR = new Date().getFullYear();

export const FilterBar = ({ onFilterChange, contentType }: FilterBarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    genre: 'all',
    year: [1950, CURRENT_YEAR],
    rating: 0
  });

  const filmGenres = [
    'All', 'Nature', 'History', 'Society', 'Science', 'Biography', 
    'True Crime', 'Arts', 'Sports', 'Technology', 'Politics', 'Environmental'
  ];
  
  const musicGenres = [
    'All', 'Classical', 'Jazz', 'Rock', 'Hip Hop', 'Pop', 'Electronic', 
    'Folk', 'World', 'Indie', 'Blues', 'Country'
  ];

  const genres = contentType === 'film' ? filmGenres : musicGenres;

  const handleGenreChange = (value: string) => {
    const newFilters = { ...filters, genre: value.toLowerCase() };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleRatingChange = (value: number[]) => {
    const newFilters = { ...filters, rating: value[0] };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleYearChange = (value: number[]) => {
    const newFilters = { ...filters, year: [value[0], value[1]] };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="bg-documentary-light shadow rounded-lg p-4 mb-6">
      <div className="flex justify-between items-center">
        <h3 className="font-medium">Filter {contentType === 'film' ? 'Documentaries' : 'Music'}</h3>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => setIsOpen(!isOpen)} 
          className="flex items-center gap-2"
        >
          <Filter className="h-4 w-4" />
          <span>Filter</span>
        </Button>
      </div>
      
      {isOpen && (
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-documentary-muted mb-2">Genre</label>
            <Select onValueChange={handleGenreChange} defaultValue={filters.genre}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Genre" />
              </SelectTrigger>
              <SelectContent>
                {genres.map((genre) => (
                  <SelectItem key={genre} value={genre.toLowerCase()}>
                    {genre}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-documentary-muted mb-2">
              Minimum Rating ({filters.rating})
            </label>
            <Slider 
              defaultValue={[filters.rating]} 
              min={0} 
              max={10} 
              step={0.5}
              onValueChange={handleRatingChange}
              className="py-4"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-documentary-muted mb-2">
              Years ({filters.year[0]} - {filters.year[1]})
            </label>
            <Slider 
              defaultValue={[filters.year[0], filters.year[1]]} 
              min={1950} 
              max={CURRENT_YEAR}
              step={1}
              onValueChange={handleYearChange}
              className="py-4"
            />
          </div>
        </div>
      )}
    </div>
  );
};
