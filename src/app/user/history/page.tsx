
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Sidebar, SidebarInset } from '@/components/ui/sidebar';
import { MobileNav } from '@/components/layout/mobile-nav';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { History } from 'lucide-react';
import { BreadcrumbNav } from '@/components/layout/breadcrumb-nav';
import { HistoryItem, type HistoryItemProps } from '@/components/sections/history-item';

const historyData: HistoryItemProps[] = [
    {
      date: "2025-07-17T02:59:00",
      gameName: "Mahjong Ways 2",
      gameType: "Slots",
      provider: "PG Soft",
      imageUrl: "https://cdn.globalcontentcloud.com/game-images/pgsoft/3796/thumbnail.jpg",
      providerIconUrl: "https://cdn-proxy.globalcontentcloud.com/common/dark/slot/pgsoft.svg",
      aiHint: "mahjong gold"
    },
    {
      date: "2025-07-17T02:58:00",
      gameName: "Lucky Neko",
      gameType: "Slots",
      provider: "PG Soft",
      imageUrl: "https://cdn.globalcontentcloud.com/game-images/pgsoft/3815/thumbnail.jpg",
      providerIconUrl: "https://cdn-proxy.globalcontentcloud.com/common/dark/slot/pgsoft.svg",
      aiHint: "japanese cat"
    },
    {
      date: "2025-07-17T02:57:00",
      gameName: "Treasures of Aztec",
      gameType: "Slots",
      provider: "PG Soft",
      imageUrl: "https://cdn.globalcontentcloud.com/game-images/pgsoft/3817/thumbnail.jpg",
      providerIconUrl: "https://cdn-proxy.globalcontentcloud.com/common/dark/slot/pgsoft.svg",
      aiHint: "aztec treasure"
    },
    {
      date: "2025-07-17T02:51:00",
      gameName: "15.000x Mania",
      gameType: "Slots",
      provider: "PragmaticPlay",
      imageUrl: "https://cdn.globalcontentcloud.com/game-images/pragmaticplay/8875/thumbnail.jpg",
      providerIconUrl: "https://cdn-proxy.globalcontentcloud.com/common/dark/slot/pragmaticplay.svg",
      aiHint: "treasure gems"
    },
    {
      date: "2025-07-17T02:51:00",
      gameName: "Gates of Olympus",
      gameType: "Slots",
      provider: "PragmaticPlay",
      imageUrl: "https://cdn.globalcontentcloud.com/game-images/pragmaticplay/3868/thumbnail.jpg",
      providerIconUrl: "https://cdn-proxy.globalcontentcloud.com/common/dark/slot/pragmaticplay.svg",
      aiHint: "zeus mythology"
    },
    {
      date: "2025-07-17T02:51:00",
      gameName: "Starlight Princess",
      gameType: "Slots",
      provider: "PragmaticPlay",
      imageUrl: "https://cdn.globalcontentcloud.com/game-images/pragmaticplay/6463/thumbnail.jpg",
      providerIconUrl: "https://cdn-proxy.globalcontentcloud.com/common/dark/slot/pragmaticplay.svg",
      aiHint: "anime princess"
    },
    {
      date: "2025-07-17T02:42:00",
      gameName: "Sugar Rush",
      gameType: "Slots",
      provider: "PragmaticPlay",
      imageUrl: "https://cdn.globalcontentcloud.com/game-images/pragmaticplay/7212/thumbnail.jpg",
      providerIconUrl: "https://cdn-proxy.globalcontentcloud.com/common/dark/slot/pragmaticplay.svg",
      aiHint: "candy rush"
    },
     {
      date: "2025-07-17T02:41:00",
      gameName: "Power of Odin",
      gameType: "Slots",
      provider: "IDNSLOT",
      imageUrl: "https://cdn.globalcontentcloud.com/game-images/idnslot/6673/thumbnail.jpg",
      providerIconUrl: "https://cdn-proxy.globalcontentcloud.com/common/dark/slot/idnslot.svg",
      aiHint: "odin mythology"
    },
    {
      date: "2025-07-17T02:41:00",
      gameName: "Kutukan Medusa",
      gameType: "Slots",
      provider: "IDNSLOT",
      imageUrl: "https://cdn.globalcontentcloud.com/game-images/idnslot/3820/thumbnail.jpg",
      providerIconUrl: "https://cdn-proxy.globalcontentcloud.com/common/dark/slot/idnslot.svg",
      aiHint: "medusa snake"
    },
    {
      date: "2025-07-17T02:38:00",
      gameName: "Archipelago Tribes",
      gameType: "Slots",
      provider: "IDNSLOT",
      imageUrl: "https://cdn.globalcontentcloud.com/game-images/idnslot/1253/thumbnail.jpg",
      providerIconUrl: "https://cdn-proxy.globalcontentcloud.com/common/dark/slot/idnslot.svg",
      aiHint: "tribal mask"
    },
    {
      date: "2025-07-17T02:38:00",
      gameName: "Tombstone R.I.P",
      gameType: "Slots",
      provider: "Nolimit City",
      imageUrl: "https://cdn.globalcontentcloud.com/game-images/nolimit-city/6727/thumbnail.jpg",
      providerIconUrl: "https://cdn-proxy.globalcontentcloud.com/common/dark/slot/evolution-nlc.svg",
      aiHint: "western outlaw"
    },
    {
      date: "2025-07-17T02:37:00",
      gameName: "Mental",
      gameType: "Slots",
      provider: "Nolimit City",
      imageUrl: "https://cdn.globalcontentcloud.com/game-images/nolimit-city/6373/thumbnail.jpg",
      providerIconUrl: "https://cdn-proxy.globalcontentcloud.com/common/dark/slot/evolution-nlc.svg",
      aiHint: "asylum horror"
    },
    {
      date: "2025-07-17T02:37:00",
      gameName: "San Quentin",
      gameType: "Slots",
      provider: "Nolimit City",
      imageUrl: "https://cdn.globalcontentcloud.com/game-images/nolimit-city/3867/thumbnail.jpg",
      providerIconUrl: "https://cdn-proxy.globalcontentcloud.com/common/dark/slot/evolution-nlc.svg",
      aiHint: "prison riot"
    },
    {
      date: "2025-07-17T02:02:00",
      gameName: "Live - Lobby",
      gameType: "Casino",
      provider: "PragmaticPlay",
      imageUrl: "https://cdn-proxy.globalcontentcloud.com/common/dark/casino/pragmaticplay.png",
      providerIconUrl: "https://cdn-proxy.globalcontentcloud.com/common/dark/slot/pragmaticplay.svg",
      aiHint: "casino lobby"
    },
    {
      date: "2025-07-17T02:02:00",
      gameName: "Blackjack",
      gameType: "Casino",
      provider: "PragmaticPlay",
      imageUrl: "https://cdn-proxy.globalcontentcloud.com/game-images/pragmaticplay/8381/thumbnail.jpg",
      providerIconUrl: "https://cdn-proxy.globalcontentcloud.com/common/dark/slot/pragmaticplay.svg",
      aiHint: "blackjack cards"
    },
     {
      date: "2025-07-17T02:01:00",
      gameName: "Roulette",
      gameType: "Casino",
      provider: "PragmaticPlay",
      imageUrl: "https://cdn.globalcontentcloud.com/game-images/pragmaticplay/5934/thumbnail.jpg",
      providerIconUrl: "https://cdn-proxy.globalcontentcloud.com/common/dark/slot/pragmaticplay.svg",
      aiHint: "roulette wheel"
    },
    {
      date: "2025-07-17T01:31:00",
      gameName: "Immortal Romance",
      gameType: "Slots",
      provider: "Microgaming",
      imageUrl: "https://cdn.globalcontentcloud.com/game-images/microgaming/3785/thumbnail.jpg",
      providerIconUrl: "https://cdn-proxy.globalcontentcloud.com/common/dark/slot/microgaming.svg",
      aiHint: "vampire love"
    },
    {
      date: "2025-07-17T01:30:00",
      gameName: "Mega Moolah",
      gameType: "Slots",
      provider: "Microgaming",
      imageUrl: "https://cdn.globalcontentcloud.com/game-images/microgaming/3786/thumbnail.jpg",
      providerIconUrl: "https://cdn-proxy.globalcontentcloud.com/common/dark/slot/microgaming.svg",
      aiHint: "safari jackpot"
    },
    {
      date: "2025-07-17T01:29:00",
      gameName: "Thunderstruck II",
      gameType: "Slots",
      provider: "Microgaming",
      imageUrl: "https://cdn.globalcontentcloud.com/game-images/microgaming/3787/thumbnail.jpg",
      providerIconUrl: "https://cdn-proxy.globalcontentcloud.com/common/dark/slot/microgaming.svg",
      aiHint: "thor hammer"
    },
    {
      date: "2025-07-17T01:05:00",
      gameName: "Sweet Bonanza 1000",
      gameType: "Slots",
      provider: "PragmaticPlay",
      imageUrl: "https://cdn.globalcontentcloud.com/game-images/pragmaticplay/7209/thumbnail.jpg",
      providerIconUrl: "https://cdn-proxy.globalcontentcloud.com/common/dark/slot/pragmaticplay.svg",
      aiHint: "candy sweets"
    },
];

const groupHistoryByDate = (history: HistoryItemProps[]) => {
    return history.reduce((acc, item) => {
        const itemDate = new Date(item.date);
        const dateKey = itemDate.toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
        if (!acc[dateKey]) {
            acc[dateKey] = [];
        }
        acc[dateKey].push(item);
        return acc;
    }, {} as Record<string, HistoryItemProps[]>);
};


export default function HistoryPage() {
    const groupedHistory = groupHistoryByDate(historyData);

    return (
    <>
      <Sidebar side="left" collapsible="offcanvas">
        <MobileNav />
      </Sidebar>
      <div className="flex min-h-screen flex-col bg-background">
        <Header />
        <SidebarInset>
            <BreadcrumbNav activePage="Riwayat Bermain" />
            <main className="container mx-auto px-4 py-8">
                <Card className="bg-secondary border-none text-white">
                    <CardHeader className="p-4 border-b border-border/50">
                        <div className="flex items-center gap-3">
                           <History className="w-8 h-8 p-1.5 bg-card text-white rounded-md" />
                           <h2 className="text-2xl font-bold text-white">Riwayat Bermain</h2>
                        </div>
                    </CardHeader>
                    <CardContent className="p-4 md:p-6">
                        <div className="space-y-6">
                            {Object.entries(groupedHistory).map(([date, items]) => (
                                <div key={date}>
                                    <h5 className="font-bold text-primary mb-3">{date}</h5>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {items.map(item => (
                                            <li key={`${item.gameName}-${item.date}`}>
                                                <HistoryItem {...item} />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </main>
            <Footer />
        </SidebarInset>
      </div>
    </>
    );
}
