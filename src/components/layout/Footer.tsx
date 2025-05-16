
import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Twitter, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t bg-background py-8 mt-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Sparkles className="text-primary-foreground w-5 h-5" />
              </div>
              <span className="text-xl font-bold">GABlr</span>
            </div>
            <p className="text-muted-foreground max-w-md">
              Launch token-linked applications as easy as sh*tposting. GABlr is the fastest way to build and deploy web3 apps connected to GFM tokens.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Platform</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/explore" className="text-muted-foreground hover:text-foreground transition-colors">
                  Explore Apps
                </Link>
              </li>
              <li>
                <Link to="/builder" className="text-muted-foreground hover:text-foreground transition-colors">
                  App Builder
                </Link>
              </li>
              <li>
                <Link to="/templates" className="text-muted-foreground hover:text-foreground transition-colors">
                  Templates
                </Link>
              </li>
              <li>
                <Link to="/docs" className="text-muted-foreground hover:text-foreground transition-colors">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://docs.gofundmeme.io/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                  GFM Documentation
                </a>
              </li>
              <li>
                <a href="https://docs.gofundmeme.io/developers/init-gfmsdk" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                  SDK Reference
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-6 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Gablr. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
