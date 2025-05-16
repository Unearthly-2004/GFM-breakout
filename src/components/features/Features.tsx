
import React from 'react';
import { MessageSquare, Coins, Upload, RefreshCw, GitFork } from 'lucide-react';

const features = [
  {
    icon: <MessageSquare className="w-6 h-6 text-primary" />,
    title: 'Prompt-Based App Generation',
    description: 'Type your app idea in plain text, and our AI will generate a fully functioning application for you.'
  },
  {
    icon: <Coins className="w-6 h-6 text-primary" />,
    title: 'GFM Token Integration',
    description: 'Connect your app to any existing GFM token or create a new one directly from the builder.'
  },
  {
    icon: <Upload className="w-6 h-6 text-primary" />,
    title: 'One-Click Publishing',
    description: 'Launch your app instantly with a unique URL, ready to share with the world.'
  },
  {
    icon: <RefreshCw className="w-6 h-6 text-primary" />,
    title: 'Build & Brainstorm Modes',
    description: 'Switch between building your app and exploring new ideas with our specialized modes.'
  },
  {
    icon: <GitFork className="w-6 h-6 text-primary" />,
    title: 'Remix & Fork Apps',
    description: 'Discover an app you like? Remix it with your own twist and connected tokens.'
  }
];

const Features = () => {
  return (
    <div className="py-20 bg-secondary/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Everything You Need to Launch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our platform gives you all the tools to go from idea to launched app in minutes,
            all connected to the GFM token ecosystem.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-background rounded-xl p-6 border flex flex-col hover:border-primary/50 hover:shadow-md transition-all"
            >
              <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
