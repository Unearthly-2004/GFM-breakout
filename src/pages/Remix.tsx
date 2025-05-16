
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "@/components/ui/use-toast";
import { getAppById, AppTemplate } from '@/utils/gfmSdk';
import { ArrowLeft, Copy, RefreshCw } from 'lucide-react';

const Remix = () => {
  const { appId } = useParams<{ appId: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [app, setApp] = useState<AppTemplate | null>(null);
  const [remixing, setRemixing] = useState(false);

  useEffect(() => {
    const fetchApp = async () => {
      if (appId) {
        try {
          setLoading(true);
          const appData = await getAppById(appId);
          setApp(appData);
        } catch (error) {
          console.error("Failed to fetch app:", error);
          toast({
            title: "Error",
            description: "Failed to load app template. Please try again.",
            variant: "destructive"
          });
        } finally {
          setLoading(false);
        }
      }
    };
    
    fetchApp();
  }, [appId]);

  const handleRemix = () => {
    setRemixing(true);
    
    // Simulate remixing process
    setTimeout(() => {
      // Navigate to builder with the remixed app data
      navigate('/builder', { 
        state: { 
          remixedApp: {
            title: app?.title ? `Remix of ${app.title}` : "Remixed App",
            description: app?.description,
            features: app?.features || [],
            template: app?.template
          }
        }
      });
    }, 1500);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-24 pb-12">
          <div className="container">
            <div className="flex items-center mb-6">
              <Button variant="ghost" size="sm" className="mr-2" onClick={() => navigate('/explore')}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Explore
              </Button>
            </div>
            
            <Card className="p-6">
              <Skeleton className="h-8 w-1/3 mb-4" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-3/4" />
              
              <div className="mt-6 space-y-2">
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-full" />
              </div>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!app) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-24 pb-12">
          <div className="container">
            <div className="flex items-center mb-6">
              <Button variant="ghost" size="sm" className="mr-2" onClick={() => navigate('/explore')}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Explore
              </Button>
            </div>
            
            <Card className="p-6 text-center">
              <h2 className="text-2xl font-bold mb-4">App Not Found</h2>
              <p className="text-muted-foreground mb-6">The app template you're looking for doesn't exist or has been removed.</p>
              <Button onClick={() => navigate('/explore')}>
                Browse App Templates
              </Button>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-12">
        <div className="container">
          <div className="flex items-center mb-6">
            <Button variant="ghost" size="sm" className="mr-2" onClick={() => navigate('/explore')}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Explore
            </Button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-2">{app.title}</h2>
                <p className="text-muted-foreground mb-6">{app.description}</p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium mb-2">Features:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {app.features.map((feature, index) => (
                        <li key={index} className="text-sm">{feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  {app.token && (
                    <div className="p-4 rounded-md bg-secondary/20">
                      <h4 className="text-sm font-medium mb-2">Connected Token:</h4>
                      <p className="text-sm"><strong>Name:</strong> {app.token.name}</p>
                      <p className="text-sm truncate"><strong>Address:</strong> {app.token.address}</p>
                      <p className="text-sm"><strong>Type:</strong> {app.token.type.toUpperCase()}</p>
                    </div>
                  )}
                </div>
              </Card>
              
              <Button 
                className="w-full mt-4 gradient-bg text-white border-0" 
                onClick={handleRemix}
                disabled={remixing}
              >
                {remixing ? (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                    Remixing...
                  </>
                ) : (
                  <>
                    <Copy className="mr-2 h-4 w-4" />
                    Remix This App
                  </>
                )}
              </Button>
            </div>
            
            <div>
              <Card className="p-6 h-full">
                <h3 className="text-lg font-medium mb-4">Live Preview</h3>
                <CardContent className="flex items-center justify-center h-[300px] bg-secondary/20 rounded-md">
                  <div className="text-center">
                    <p className="text-muted-foreground">
                      Click "Remix This App" to customize and make your own version
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Remix;
