import { Megaphone } from 'lucide-react';

export const RunningText = () => {
  const textContent = "Selamat datang di Rajamania Bandar Slot Gacor dan Agen Bola Terpercaya - Situsnya Para Mania";
  return (
    <div className="bg-secondary text-foreground py-2 my-2 rounded-md overflow-hidden border-y border-border">
        <div className="container mx-auto px-4 flex items-center">
            <Megaphone className="text-primary mr-3 flex-shrink-0 h-5 w-5" />
            <div className="relative flex overflow-x-hidden w-full">
                <div className="animate-marquee whitespace-nowrap">
                    <span className="mx-8 text-sm text-muted-foreground">{textContent}</span>
                    <span className="mx-8 text-sm text-muted-foreground">{textContent}</span>
                </div>
                <div className="absolute top-0 animate-marquee2 whitespace-nowrap">
                   <span className="mx-8 text-sm text-muted-foreground">{textContent}</span>
                   <span className="mx-8 text-sm text-muted-foreground">{textContent}</span>
                </div>
            </div>
        </div>
    </div>
  );
};
