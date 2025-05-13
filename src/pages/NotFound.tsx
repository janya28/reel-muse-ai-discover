
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-documentary-light/50 flex items-center justify-center py-12">
        <div className="text-center max-w-lg mx-auto px-4">
          <h1 className="text-8xl font-serif font-bold mb-4 text-documentary-dark">404</h1>
          <p className="text-2xl text-documentary-muted mb-8">Oops! We couldn't find the documentary you're looking for.</p>
          <p className="mb-8 text-documentary-muted">
            The documentary you're searching for may have been moved, deleted, or never existed. 
            Let's get you back on track to discover great content.
          </p>
          <Link to="/">
            <Button className="bg-documentary-accent text-documentary-dark hover:bg-documentary-accent/90">
              Return to Home
            </Button>
          </Link>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default NotFound;
