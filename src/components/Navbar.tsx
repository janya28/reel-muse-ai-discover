
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Search } from "lucide-react";

export const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  return (
    <header className="bg-documentary-dark text-documentary-light sticky top-0 z-50">
      <div className="content-container">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-x-8">
            <Link to="/" className="text-xl font-serif font-bold">
              DocuWatch
            </Link>
            <nav className="hidden md:flex space-x-4">
              <Link to="/films" className="nav-link">Films</Link>
              <Link to="/music" className="nav-link">Music</Link>
              <Link to="/explore" className="nav-link">Explore</Link>
            </nav>
          </div>
          
          <div className="flex items-center gap-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            
            {isAuthenticated ? (
              <Button variant="outline" className="border-documentary-accent text-documentary-accent hover:bg-documentary-accent/10">
                My Library
              </Button>
            ) : (
              <Link to="/login">
                <Button className="bg-documentary-accent text-documentary-dark hover:bg-documentary-accent/90">
                  Sign In
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
