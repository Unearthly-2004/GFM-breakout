import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles, Github, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  useAddress,
  useConnect,
  useDisconnect,
} from "@thirdweb-dev/react";
import { client, wallets } from "@/thirdweb/thirdwebClient";

const Navbar = () => {
  const address = useAddress(); // gets connected wallet address
  const connect = useConnect(); // connects wallet
  const disconnect = useDisconnect(); // disconnects wallet

  const handleConnect = () => {
    // Use the thirdweb client to connect with the first wallet in wallets array
    connect(wallets[0]);
  };

  return (
    <nav className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center gap-2">
        <Sparkles className="text-purple-600" />
        <Link to="/" className="text-lg font-semibold">
          GABlr
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-4">
        {address ? (
          <>
            <span className="text-sm font-mono">
              {address.slice(0, 6)}...{address.slice(-4)}
            </span>
            <Button variant="destructive" onClick={disconnect}>
              Disconnect
            </Button>
          </>
        ) : (
          <Button variant="outline" onClick={handleConnect}>
            Connect Wallet
          </Button>
        )}

        <a
          href="https://github.com/Unearthly-2004/GFM-breakout"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
        </a>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <Button variant="ghost" size="icon">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription className="flex flex-col gap-2">
                {address ? (
                  <>
                    <span className="text-sm font-mono text-center">
                      {address.slice(0, 6)}...{address.slice(-4)}
                    </span>
                    <Button
                      variant="destructive"
                      onClick={disconnect}
                      className="w-full"
                    >
                      Disconnect
                    </Button>
                  </>
                ) : (
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={handleConnect}
                  >
                    Connect Wallet
                  </Button>
                )}
                <a
                  href="https://github.com/Unearthly-2004/GFM-breakout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center mt-2"
                >
                  <Github />
                </a>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
