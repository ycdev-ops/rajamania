import { Logo } from '@/components/icons/logo';
import { Button } from '@/components/ui/button';
import { Menu, User, Mail, Wallet, Handshake, LogOut } from 'lucide-react';
import { SidebarTrigger } from '../ui/sidebar';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export const Header = () => {
  const loggedIn = true; // Set to true to show logged-in state
  const username = "zer0jp";
  const balance = "Rp 135.211.894";

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm border-b border-border shadow-md">
      <div className="container mx-auto flex h-[54px] items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <SidebarTrigger>
            <Menu className="h-6 w-6" />
          </SidebarTrigger>
          
          <Link href="/" aria-label="Home">
            <Logo className="h-9 w-auto" />
          </Link>
        </div>

        {loggedIn ? (
          <>
            {/* Logged in state */}
            <div className="hidden md:flex items-center gap-2">
                <Link href="/user/activity">
                    <Button variant="ghost" className="relative text-muted-foreground hover:text-primary rounded-full h-9 w-9 p-0">
                        <Mail className="h-5 w-5" />
                        <span className="absolute top-0 right-0 block h-4 w-4 rounded-full bg-red-600 text-white text-[10px] leading-4">1</span>
                    </Button>
                </Link>
                <div className="flex items-center gap-2 text-sm text-white bg-secondary px-3 py-1.5 rounded-md">
                    <User className="h-4 w-4 text-primary" />
                    <span className="font-bold">{username}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-white bg-secondary px-3 py-1.5 rounded-md">
                    <Wallet className="h-4 w-4 text-primary" />
                    <span className="font-bold">{balance}</span>
                </div>
                 <Link href="/user/deposit">
                    <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-primary rounded-full h-9 w-9 p-0">
                        <Handshake className="h-5 w-5" />
                    </Button>
                 </Link>
                 <Button size="icon" variant="destructive" className="rounded-full h-9 w-9 p-0 bg-destructive/20 hover:bg-destructive/40 text-destructive-foreground/80 hover:text-destructive-foreground">
                    <LogOut className="h-5 w-5" />
                 </Button>
            </div>

            <div className="md:hidden flex items-center gap-1">
                <div className="flex items-center gap-2 text-sm text-white">
                    <Wallet className="h-5 w-5 text-primary" />
                    <span className="font-bold text-xs">{balance}</span>
                </div>
                 <Link href="/user/deposit">
                    <Button size="sm" className="btn--success font-bold text-xs h-8">
                        Deposit
                    </Button>
                 </Link>
            </div>
          </>
        ) : (
          <>
            {/* Logged out state */}
             <div className="flex items-center gap-2">
                <Button size="sm" className="btn--dark font-bold">MASUK</Button>
                <Link href="/register">
                    <Button size="sm" className="btn--brand font-bold">DAFTAR</Button>
                </Link>
            </div>
          </>
        )}
      </div>
    </header>
  );
};
