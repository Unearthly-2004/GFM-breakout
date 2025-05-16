
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <div className="pt-24 pb-12">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border bg-secondary">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Launch with GFM tokens</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 glow-text">
            Launch apps from your <span className="text-primary">prompts</span> + <span className="text-accent">tokens</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Create fully functional web3 applications by describing them in plain text. Connect to GFM tokens, publish instantly, and iterate with AI.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="gradient-bg text-white border-0 w-full sm:w-auto">
              <Link to="/builder" className="flex items-center gap-2">
                Start Building <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              <Link to="/explore" className="flex items-center gap-2">
                Explore Apps
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
