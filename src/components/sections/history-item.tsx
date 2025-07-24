
import Image from "next/image";
import { Button } from "../ui/button";

export interface HistoryItemProps {
    date: string;
    gameName: string;
    gameType: string;
    provider: string;
    imageUrl: string;
    providerIconUrl: string;
    aiHint: string;
}

export const HistoryItem = ({ date, gameName, gameType, provider, imageUrl, providerIconUrl, aiHint }: HistoryItemProps) => {
    const formattedDate = new Date(date).toLocaleDateString('id-ID', { day: 'numeric', month: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' }).replace('.', ':');
    
    return (
        <div className="flex items-center gap-4 bg-card p-3 rounded-lg border border-border/50">
            <div className="relative flex-shrink-0 w-24 h-24 rounded-md overflow-hidden">
                <Image 
                    src={imageUrl} 
                    alt={gameName} 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    data-ai-hint={aiHint}
                />
                <div className="absolute bottom-1 right-1">
                    <Image src={providerIconUrl} alt={provider} width={24} height={24} />
                </div>
            </div>
            <div className="flex flex-col justify-between h-full flex-grow">
                <div>
                    <h5 className="font-bold text-sm text-white">{gameName}</h5>
                    <p className="text-xs text-muted-foreground">{gameType}</p>
                    <p className="text-xs text-muted-foreground">{provider}</p>
                    <p className="text-xs text-muted-foreground mt-1">{formattedDate}</p>
                </div>
                <Button className="btn--brand h-8 w-full mt-2 text-xs">Main Lagi</Button>
            </div>
        </div>
    );
};
