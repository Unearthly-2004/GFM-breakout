
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles, ArrowRight, RefreshCw } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

interface PromptInputProps {
  onGenerateApp: (prompt: string) => void;
  isGenerating: boolean;
  initialPrompt?: string; // Added initialPrompt as optional prop
}

const PromptInput: React.FC<PromptInputProps> = ({ onGenerateApp, isGenerating, initialPrompt = "" }) => {
  const [prompt, setPrompt] = useState(initialPrompt);
  const [mode, setMode] = useState<"build" | "brainstorm">("build");

  // Set prompt when initialPrompt changes (useful for remix functionality)
  useEffect(() => {
    if (initialPrompt) {
      setPrompt(initialPrompt);
    }
  }, [initialPrompt]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!prompt.trim()) {
      toast({
        title: "Error",
        description: "Please enter a prompt to generate your app.",
        variant: "destructive"
      });
      return;
    }
    
    onGenerateApp(prompt);
  };

  const examplePrompts = [
    "a token-gated chatroom with threaded messages",
    "a meme generator that mints tokens per share",
    "a voting app with weighted votes based on token holdings",
    "a token-powered leaderboard for community contributions"
  ];

  const handleExampleClick = (example: string) => {
    setPrompt(example);
  };

  return (
    <div className="bg-secondary/50 p-6 rounded-xl border">
      <div className="mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <h3 className="text-xl font-bold">Create Your App</h3>
        
        <div className="flex items-center bg-background rounded-lg p-1 border">
          <Button 
            variant={mode === "build" ? "default" : "ghost"}
            size="sm"
            className={mode === "build" ? "gradient-bg border-0 text-white" : ""}
            onClick={() => setMode("build")}
          >
            Build Mode
          </Button>
          <Button 
            variant={mode === "brainstorm" ? "default" : "ghost"}
            size="sm"
            className={mode === "brainstorm" ? "gradient-bg border-0 text-white" : ""}
            onClick={() => setMode("brainstorm")}
          >
            Brainstorm Mode
          </Button>
        </div>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <Textarea
            placeholder={
              mode === "build" 
                ? "Describe the app you want to build... (e.g., a token-gated chat app for my community)"
                : "Describe your idea and I'll help refine it... (e.g., I want to create a way for my token holders to vote)"
            }
            className="h-24 resize-none"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-between">
          <div>
            <p className="text-sm text-muted-foreground mb-2">Examples:</p>
            <div className="flex flex-wrap gap-2">
              {examplePrompts.map((example, index) => (
                <Button 
                  key={index} 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleExampleClick(example)}
                  className="text-xs"
                >
                  {example.length > 25 ? example.slice(0, 25) + '...' : example}
                </Button>
              ))}
            </div>
          </div>
          
          <Button 
            type="submit" 
            className="gradient-bg text-white border-0 w-full sm:w-auto"
            disabled={isGenerating}
          >
            {isGenerating ? (
              <>
                <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                {mode === "build" ? (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Generate App
                  </>
                ) : (
                  <>
                    <ArrowRight className="mr-2 h-4 w-4" />
                    Brainstorm
                  </>
                )}
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PromptInput;
