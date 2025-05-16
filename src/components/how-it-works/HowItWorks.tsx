
import React from 'react';
import { MessageSquare, Coins, Upload, Check } from 'lucide-react';

const steps = [
  {
    icon: <MessageSquare className="w-6 h-6 text-primary" />,
    title: 'Describe Your App',
    description: 'Start with a simple prompt describing what you want to build - from token-gated communities to NFT projects.'
  },
  {
    icon: <Coins className="w-6 h-6 text-primary" />,
    title: 'Connect Your Token',
    description: 'Link your app to an existing GFM token or create a new one right within the builder.'
  },
  {
    icon: <Upload className="w-6 h-6 text-primary" />,
    title: 'Publish Instantly',
    description: 'Launch your app with one click and get a shareable URL to send to your community.'
  },
  {
    icon: <Check className="w-6 h-6 text-primary" />,
    title: 'Iterate & Improve',
    description: 'Use the built-in editing tools to refine your app and add new features as you grow.'
  }
];

const HowItWorks = () => {
  return (
    <div className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From idea to launched app in minutes, not months. Here's how AppSh makes it possible.
          </p>
        </div>
        
        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2 hidden md:block" />
          
          <div className="space-y-12 relative z-10">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`flex flex-col md:flex-row gap-8 ${
                  index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1 flex md:justify-end">
                  <div className={`max-w-md ${index % 2 !== 0 ? 'md:text-right' : ''}`}>
                    <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                      {step.icon}
                    </div>
                    <h3 className="font-semibold text-xl mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
                
                <div className="hidden md:flex items-center justify-center w-12 relative">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-medium">
                    {index + 1}
                  </div>
                </div>
                
                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
