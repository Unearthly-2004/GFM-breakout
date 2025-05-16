
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

const CallToAction = () => {
  return (
    <div className="py-20 px-4">
      <div className="container">
        <div className="max-w-4xl mx-auto rounded-2xl border p-8 md:p-12 bg-gradient-to-br from-primary/5 to-accent/5 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-accent/20 rounded-full blur-3xl" />
          
          <div className="relative text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border bg-background">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Ready to build?</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Turn your ideas into reality in minutes
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join others building the next generation of token-powered applications with AppSh and GFM.
            </p>
            
            <Button size="lg" className="gradient-bg text-white border-0">
              <Link to="/builder" className="flex items-center gap-2">
                Start Building Now <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
