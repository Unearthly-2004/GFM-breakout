
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PromptInput from '@/components/builder/PromptInput';
import TokenConnect from '@/components/builder/TokenConnect';
import AppPreview from '@/components/builder/AppPreview';
import { toast } from "@/components/ui/use-toast";
import { 
  connectToGFMToken, 
  createNewGFMToken, 
  publishApp, 
  GFMToken, 
  AppTemplate 
} from '@/utils/gfmSdk';

interface LocationState {
  remixedApp?: {
    title: string;
    description: string;
    features: string[];
    template?: string;
  };
}

const Builder = () => {
  const location = useLocation();
  const state = location.state as LocationState;
  const remixedApp = state?.remixedApp;

  const [isGenerating, setIsGenerating] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  const [generatedApp, setGeneratedApp] = useState<{
    title: string;
    description: string;
    features: string[];
    template?: string;
    token?: GFMToken;
  } | null>(remixedApp || null);

  useEffect(() => {
    // If the page is loaded with a remixed app, show a welcome toast
    if (remixedApp) {
      toast({
        title: "App Remixed!",
        description: "You can now customize this app and connect it to your token.",
      });
    }
  }, [remixedApp]);

  const handleGenerateApp = (prompt: string) => {
    setIsGenerating(true);
    
    // Simulate AI generation with a timeout
    setTimeout(() => {
      // Generate a title based on the prompt
      const title = prompt
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
        .replace(/a |an |the /i, '');
      
      // Generate template type
      let template = "default";
      
      // Generate features based on the prompt
      let features = [];
      
      if (prompt.includes('chat') || prompt.includes('messaging')) {
        features.push('Real-time messaging between token holders');
        features.push('Token-gated access control');
        features.push('User profiles linked to wallet addresses');
        template = "chat";
      } else if (prompt.includes('meme') || prompt.includes('nft')) {
        features.push('Image upload and meme creation tools');
        features.push('NFT minting directly from the app');
        features.push('Social sharing integration');
        template = "meme";
      } else if (prompt.includes('vote') || prompt.includes('voting')) {
        features.push('Proposal creation and voting system');
        features.push('Vote weight based on token holdings');
        features.push('Real-time voting results and analytics');
        template = "voting";
      } else {
        features.push('Customized UI based on your requirements');
        features.push('Token-gated access control');
        features.push('Integration with GFM token ecosystem');
      }
      
      features.push('Responsive design for mobile and desktop');
      
      setGeneratedApp({
        title,
        description: `A custom application that ${prompt}, powered by GFM tokens.`,
        features,
        template,
      });
      
      setIsGenerating(false);
    }, 3000);
  };

  const handleTokenConnect = async (tokenDetails: { name: string; address: string; type: string }) => {
    try {
      let token: GFMToken;
      
      if (tokenDetails.address) {
        // Connect to existing token
        token = await connectToGFMToken(tokenDetails.address, tokenDetails.type);
        toast({
          title: "Token Connected",
          description: `Successfully connected to ${token.name}`,
        });
      } else {
        // Create new token
        token = await createNewGFMToken(tokenDetails.name, tokenDetails.type);
        toast({
          title: "Token Created",
          description: `Successfully created ${token.name} with address ${token.address.slice(0, 6)}...${token.address.slice(-4)}`,
        });
      }
      
      if (generatedApp) {
        setGeneratedApp({
          ...generatedApp,
          token
        });
      }
    } catch (error) {
      console.error("Token connection error:", error);
      toast({
        title: "Error",
        description: "Failed to connect or create token. Please try again.",
        variant: "destructive"
      });
    }
  };

  const handlePublish = async () => {
    if (!generatedApp?.token) {
      toast({
        title: "Error",
        description: "Please connect a token before publishing.",
        variant: "destructive"
      });
      return;
    }
    
    setIsPublishing(true);
    
    try {
      // Create an app template to publish
      const appToPublish: AppTemplate = {
        id: "app_" + Math.random().toString(36).substring(2, 10),
        title: generatedApp.title,
        description: generatedApp.description,
        features: generatedApp.features,
        token: generatedApp.token,
        createdAt: new Date().toISOString(),
        createdBy: "current_user", // Would come from authentication in production
        published: true,
        template: generatedApp.template || "default"
      };
      
      // Publish the app using GFM SDK
      const publishedUrl = await publishApp(appToPublish);
      
      toast({
        title: "Success!",
        description: `Your app "${generatedApp.title}" has been published successfully!`,
      });
      
      // Show a toast with the published URL
      toast({
        title: "App Published",
        description: (
          <div>
            Your app is live at: <a href={publishedUrl} target="_blank" rel="noopener noreferrer" className="underline">{publishedUrl}</a>
          </div>
        ),
      });
    } catch (error) {
      console.error("Publishing error:", error);
      toast({
        title: "Publishing Failed",
        description: "There was an error publishing your app. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsPublishing(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-12">
        <div className="container">
          <h1 className="text-3xl font-bold mb-8">
            {remixedApp ? 'Remix App Builder' : 'App Builder'}
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-6">
              <PromptInput 
                onGenerateApp={handleGenerateApp} 
                isGenerating={isGenerating}
                initialPrompt={remixedApp?.description || ""}
              />
              <TokenConnect onTokenConnect={handleTokenConnect} />
            </div>
            
            <div>
              <AppPreview 
                generatedApp={generatedApp}
                isGenerating={isGenerating}
                onPublish={handlePublish}
                isPublishing={isPublishing}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Builder;
