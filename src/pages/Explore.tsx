
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight, Search, Coins } from 'lucide-react';
import { Link } from 'react-router-dom';

const exampleApps = [
  {
    title: 'Token-Gated Chat Room',
    description: 'A private chat application where access is controlled by GFM token ownership.',
    image: '/placeholder.svg',
    tags: ['Social', 'Community', 'Token-Gating'],
    prompt: 'a token-gated chatroom with threaded messages',
    author: '0xa1b2...c3d4',
    tokenName: 'CHAT',
  },
  {
    title: 'Meme Generator & NFT Minter',
    description: 'Create memes and mint them as NFTs connected to your GFM token.',
    image: '/placeholder.svg',
    tags: ['NFT', 'Creator', 'Content'],
    prompt: 'a meme generator that mints tokens per share',
    author: '0x1234...5678',
    tokenName: 'MEME',
  },
  {
    title: 'Token-Powered Voting App',
    description: 'A governance platform where voting power is proportional to token holdings.',
    image: '/placeholder.svg',
    tags: ['Governance', 'DAO', 'Voting'],
    prompt: 'a voting app with weighted votes based on token holdings',
    author: '0xabcd...ef12',
    tokenName: 'VOTE',
  },
  {
    title: 'Community Leaderboard',
    description: 'Track contributions and reward community members with token rewards.',
    image: '/placeholder.svg',
    tags: ['Community', 'Rewards', 'Leaderboard'],
    prompt: 'a token-powered leaderboard for community contributions',
    author: '0xdef0...1234',
    tokenName: 'LEAD',
  },
  {
    title: 'Token-Gated Blog Platform',
    description: 'Create and share blog posts exclusively for token holders.',
    image: '/placeholder.svg',
    tags: ['Content', 'Blog', 'Token-Gating'],
    prompt: 'a token-gated blog platform for exclusive content',
    author: '0x7890...abcd',
    tokenName: 'BLOG',
  },
  {
    title: 'NFT Marketplace',
    description: 'Buy, sell, and trade NFTs using your GFM token as currency.',
    image: '/placeholder.svg',
    tags: ['NFT', 'Marketplace', 'Trading'],
    prompt: 'an NFT marketplace that uses my token as currency',
    author: '0x2345...6789',
    tokenName: 'MART',
  }
];

const Explore = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
            <h1 className="text-3xl font-bold">Explore Apps</h1>
            <Link to="/builder" className="gradient-bg text-white px-4 py-2 rounded-md flex items-center gap-2">
              Build Your Own <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="mb-8 bg-secondary/30 p-6 rounded-xl border">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="col-span-1 md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input 
                    placeholder="Search apps by name, description, or tag..." 
                    className="pl-10"
                  />
                </div>
              </div>
              <div>
                <Select defaultValue="newest">
                  <SelectTrigger>
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="trending">Trending</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
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
                  <p className="text-muted-foreground mb-4">{app.description}</p>
                  <div className="flex items-center gap-2 text-sm">
                    <Coins className="w-4 h-4 text-primary" />
                    <span className="text-primary font-medium">{app.tokenName}</span>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <div className="text-xs text-muted-foreground">
                    By {app.author.slice(0, 6)}...{app.author.slice(-4)}
                  </div>
                  <Link to={`/app/${index}`} className="text-primary flex items-center gap-1 text-sm font-medium">
                    View App <ArrowRight className="w-3 h-3" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Explore;
