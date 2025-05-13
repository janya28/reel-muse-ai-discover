
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-documentary-dark text-documentary-light py-12">
      <div className="content-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-serif font-medium mb-4">DocuWatch</h3>
            <p className="text-documentary-muted">
              Your gateway to the world of documentary films and music. Discover, learn, and immerse yourself.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Explore</h4>
            <ul className="space-y-2">
              <li><Link to="/films" className="text-documentary-muted hover:text-documentary-light transition-colors">Films</Link></li>
              <li><Link to="/music" className="text-documentary-muted hover:text-documentary-light transition-colors">Music</Link></li>
              <li><Link to="/explore" className="text-documentary-muted hover:text-documentary-light transition-colors">Categories</Link></li>
              <li><Link to="/new-releases" className="text-documentary-muted hover:text-documentary-light transition-colors">New Releases</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Account</h4>
            <ul className="space-y-2">
              <li><Link to="/login" className="text-documentary-muted hover:text-documentary-light transition-colors">Sign In</Link></li>
              <li><Link to="/register" className="text-documentary-muted hover:text-documentary-light transition-colors">Register</Link></li>
              <li><Link to="/profile" className="text-documentary-muted hover:text-documentary-light transition-colors">My Profile</Link></li>
              <li><Link to="/favorites" className="text-documentary-muted hover:text-documentary-light transition-colors">My Favorites</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-documentary-muted hover:text-documentary-light transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-documentary-muted hover:text-documentary-light transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookies" className="text-documentary-muted hover:text-documentary-light transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-documentary-muted/20 mt-8 pt-8 text-center text-documentary-muted">
          <p>© 2025 DocuWatch. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
