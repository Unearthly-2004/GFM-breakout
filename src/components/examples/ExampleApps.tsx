
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const exampleApps = [
  {
    title: 'Token-Gated Chat Room',
    description: 'A private chat application where access is controlled by GFM token ownership.',
    image: '/gfm.png',
    tags: ['Social', 'Community', 'Token-Gating'],
    prompt: 'a token-gated chatroom with threaded messages',
  },
  {
    title: 'Meme Generator & NFT Minter',
    description: 'Create memes and mint them as NFTs connected to your GFM token.',
    image: '/b1.jpg',
    tags: ['NFT', 'Creator', 'Content'],
    prompt: 'a meme generator that mints tokens per share',
  },
  {
    title: 'Token-Powered Voting App',
    description: 'A governance platform where voting power is proportional to token holdings.',
    image: '/b2.jpg',
    tags: ['Governance', 'DAO', 'Voting'],
    prompt: 'a voting app with weighted votes based on token holdings',
  }
];

const ExampleApps = () => {
  return (
    <div className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Example Apps</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Check out what others have built with AppSh and get inspired for your next project.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {exampleApps.map((app, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow border-border hover:border-primary/30">
              <div className="aspect-video w-full bg-muted overflow-hidden">
                <img 
                  src={app.image} 
                  alt={app.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{app.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {app.tags.map((tag, i) => (
                    <Badge key={i} variant="outline">{tag}</Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{app.description}</p>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <div className="text-sm text-muted-foreground">
                  <span className="font-medium">Prompt:</span> "{app.prompt}"
                </div>
                <Link to="/builder" className="text-primary flex items-center gap-1 text-sm font-medium">
                  Build similar <ArrowRight className="w-3 h-3" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/explore" className="text-primary flex items-center gap-2 justify-center">
            View all example apps <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExampleApps;
