
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Upload, Play, Code, RefreshCw, Sparkles } from "lucide-react";
import { GFMToken } from '@/utils/gfmSdk';

interface AppPreviewProps {
  generatedApp: {
    title: string;
    description: string;
    features: string[];
    template?: string;
    token?: GFMToken;
  } | null;
  isGenerating: boolean;
  onPublish: () => void;
  isPublishing: boolean;
}

const AppPreview: React.FC<AppPreviewProps> = ({ 
  generatedApp, 
  isGenerating, 
  onPublish,
  isPublishing
}) => {
  if (isGenerating) {
    return (
      <div className="bg-background border rounded-xl flex flex-col items-center justify-center py-16 px-4 text-center">
        <div className="animate-pulse-glow">
          <Sparkles className="h-12 w-12 text-primary mb-4" />
        </div>
        <h3 className="text-xl font-medium mb-2">Generating Your App</h3>
        <p className="text-muted-foreground max-w-md">
          Our AI is creating your application based on your description...
        </p>
        <div className="mt-6 flex items-center gap-2">
          <RefreshCw className="animate-spin h-4 w-4" />
          <span className="text-sm">This may take a few moments</span>
        </div>
      </div>
    );
  }
  
  if (!generatedApp) {
    return (
      <div className="bg-background border rounded-xl flex flex-col items-center justify-center py-16 px-4 text-center">
        <Sparkles className="h-12 w-12 text-muted mb-4" />
        <h3 className="text-xl font-medium mb-2">No App Generated Yet</h3>
        <p className="text-muted-foreground max-w-md">
          Enter a description of the app you want to build in the prompt box on the left and click "Generate App".
        </p>
      </div>
    );
  }
  
  const getTemplateCode = () => {
    const template = generatedApp.template || 'default';
    const tokenAddress = generatedApp?.token?.address || "YOUR_TOKEN_ADDRESS";
    
    if (template === 'chat') {
      return `// Generated Chat App Code
import { useState, useEffect } from 'react';
import { useGFMToken } from '@gfm/react';

export function TokenChat() {
  const { token, balance, connected } = useGFMToken('${tokenAddress}');
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  
  // Authenticate users based on token ownership
  useEffect(() => {
    if (connected && balance > 0) {
      // Load messages for token holders
    }
  }, [connected, balance]);

  function sendMessage() {
    // Send message implementation
  }

  return (
    <div className="app-container">
      <header>
        <h1>${generatedApp.title}</h1>
        <div className="token-info">
          <span>Connected to: ${generatedApp?.token?.name || "No token connected"}</span>
          {balance && <span>Balance: {balance}</span>}
        </div>
      </header>
      
      <main className="chat-container">
        {/* Chat UI */}
      </main>
    </div>
  );
}`;
    } else if (template === 'meme') {
      return `// Generated Meme App Code
import { useState } from 'react';
import { useGFMToken } from '@gfm/react';

export function MemeFactory() {
  const { token, balance, mintNFT } = useGFMToken('${tokenAddress}');
  const [selectedImage, setSelectedImage] = useState(null);
  const [memeText, setMemeText] = useState('');
  
  async function createMeme() {
    // Meme creation implementation
    const memeData = { image: selectedImage, text: memeText };
    await mintNFT(memeData);
  }

  return (
    <div className="app-container">
      <header>
        <h1>${generatedApp.title}</h1>
        <div className="token-info">
          <span>Connected to: ${generatedApp?.token?.name || "No token connected"}</span>
        </div>
      </header>
      
      <main className="meme-editor">
        {/* Meme creation UI */}
      </main>
    </div>
  );
}`;
    } else if (template === 'voting') {
      return `// Generated Voting App Code
import { useState, useEffect } from 'react';
import { useGFMToken } from '@gfm/react';

export function GovernanceVoting() {
  const { token, balance, vote } = useGFMToken('${tokenAddress}');
  const [proposals, setProposals] = useState([]);
  
  useEffect(() => {
    // Load active proposals
  }, []);
  
  async function castVote(proposalId, support) {
    // Vote implementation using token weight
    await vote(proposalId, support, balance);
  }

  return (
    <div className="app-container">
      <header>
        <h1>${generatedApp.title}</h1>
        <div className="token-info">
          <span>Voting Power: {balance || 0}</span>
        </div>
      </header>
      
      <main className="proposals-list">
        {/* Proposals UI */}
      </main>
    </div>
  );
}`;
    } else {
      return `// Generated app code
import { useState, useEffect } from 'react';
import { useGFMToken } from '@gfm/react';

export function ${generatedApp.title.replace(/\s+/g, '')}() {
  const { token, balance } = useGFMToken('${tokenAddress}');
  
  // App specific functionality
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Initialize app
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  return (
    <div className="app-container">
      <header>
        <h1>${generatedApp.title}</h1>
        <div className="token-info">
          <span>Connected to: ${generatedApp?.token?.name || "No token connected"}</span>
          {balance && <span>Balance: {balance}</span>}
        </div>
      </header>
      
      <main>
        {/* App specific UI */}
      </main>
    </div>
  );
}`;
    }
  };
  
  return (
    <div className="bg-background border rounded-xl p-6">
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-4">App Preview</h3>
        <Tabs defaultValue="preview">
          <TabsList>
            <TabsTrigger value="preview">
              <Play className="mr-2 h-4 w-4" />
              Preview
            </TabsTrigger>
            <TabsTrigger value="code">
              <Code className="mr-2 h-4 w-4" />
              Code
            </TabsTrigger>
          </TabsList>
          <TabsContent value="preview" className="p-4 bg-secondary/20 rounded-md mt-4 min-h-[400px]">
            <div className="flex flex-col h-full">
              <div className="text-center py-4 border-b mb-4">
                <h2 className="text-xl font-medium">{generatedApp.title}</h2>
              </div>
              
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <Sparkles className="mx-auto h-10 w-10 text-primary mb-4" />
                  <p className="text-muted-foreground">
                    Live preview will appear here after publishing
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="code" className="p-4 bg-secondary/20 rounded-md mt-4 min-h-[400px] font-mono text-sm overflow-auto">
            <pre className="text-xs text-muted-foreground">
              {getTemplateCode()}
            </pre>
          </TabsContent>
        </Tabs>
      </div>
      
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>{generatedApp.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">{generatedApp.description}</p>
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Features:</h4>
            <ul className="list-disc pl-5 space-y-1">
              {generatedApp.features.map((feature, index) => (
                <li key={index} className="text-sm">{feature}</li>
              ))}
            </ul>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-2">
          <div className="flex items-center gap-2 w-full">
            <Badge variant="outline">AI-generated</Badge>
            {generatedApp.template && (
              <Badge variant="outline" className="bg-secondary/20">
                Template: {generatedApp.template}
              </Badge>
            )}
            {generatedApp.token && (
              <Badge variant="outline" className="bg-primary/10">
                {generatedApp.token.type.toUpperCase()}: {generatedApp.token.name}
              </Badge>
            )}
          </div>
          <Button 
            className="gradient-bg text-white border-0 w-full mt-2"
            onClick={onPublish}
            disabled={isPublishing || !generatedApp.token}
          >
            {isPublishing ? (
              <>
                <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                Publishing...
              </>
            ) : (
              <>
                <Upload className="mr-2 h-4 w-4" />
                Publish App
              </>
            )}
          </Button>
          {!generatedApp.token && (
            <p className="text-xs text-muted-foreground w-full text-center mt-2">
              Connect a token before publishing
            </p>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default AppPreview;
