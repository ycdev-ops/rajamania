import Image from "next/image";
import { Button } from "../ui/button";

const gameProviders = [
    { name: 'Hot', icon: 'https://cdn-proxy.globalcontentcloud.com/common/dark/slot/hot.svg' },
    { name: 'Exclusive', icon: 'https://cdn-proxy.globalcontentcloud.com/common/dark/slot/exclusive.svg' },
    { name: 'New', icon: 'https://cdn-proxy.globalcontentcloud.com/common/dark/slot/new.svg' },
    { name: 'IDNSLOT', icon: 'https://cdn-proxy.globalcontentcloud.com/common/dark/slot/idnslot.svg' },
    { name: 'PG Soft', icon: 'https://cdn-proxy.globalcontentcloud.com/common/dark/slot/pgsoft.svg' },
    { name: 'Nolimit City', icon: 'https://cdn-proxy.globalcontentcloud.com/common/dark/slot/evolution-nlc.svg' },
    { name: 'PragmaticPlay', icon: 'https://cdn-proxy.globalcontentcloud.com/common/dark/slot/pragmaticplay.svg' },
    { name: 'Fat Panda', icon: 'https://cdn-proxy.globalcontentcloud.com/common/dark/slot/panda.svg' },
]

const games = [
    { name: 'Sweet Bonanza Super Scatter', image: 'https://cdn.globalcontentcloud.com/game-images/pragmaticplay/12068/thumbnail.jpg', hint: 'sweet candy' },
    { name: 'Moonlight Romance The Awakening', image: 'https://cdn.globalcontentcloud.com/game-images/microgaming/12110/thumbnail.jpg', hint: 'vampire romance' },
    { name: 'Planetons', image: 'https://cdn.globalcontentcloud.com/game-images/pragmaticplay/11495/thumbnail.jpg', hint: 'aliens space' },
    { name: 'Mahjong Ways III', image: 'https://cdn.globalcontentcloud.com/game-images/idnslot/6702/thumbnail.jpg', hint: 'mahjong tiles' },
    { name: 'Book of Inferno', image: 'https://cdn.globalcontentcloud.com/game-images/playtech/12061/thumbnail.jpg', hint: 'demon fire' },
    { name: 'Brute Force Alien Onslaught', image: 'https://cdn.globalcontentcloud.com/game-images/nolimit-city/12046/thumbnail.jpg', hint: 'alien invasion' },
    { name: 'Medusa', image: 'https://cdn.globalcontentcloud.com/game-images/gmw/10716/thumbnail.png', hint: 'greek mythology' },
    { name: 'Chilli Heat Spicy Spins', image: 'https://cdn.globalcontentcloud.com/game-images/pragmaticplay/11521/thumbnail.jpg', hint: 'mexican party' },
    { name: 'Candy Pop', image: 'https://cdn-proxy.globalcontentcloud.com/game-images/nsoft/10506/thumbnail.png', hint: 'candy sweets' },
    { name: 'Her Genie Ways', image: 'https://cdn.globalcontentcloud.com/game-images/reevo/12112/thumbnail.jpg', hint: 'genie lamp' },
    { name: 'Greedy Alice', image: 'https://cdn.globalcontentcloud.com/game-images/yggdrasil/11911/thumbnail.png', hint: 'fantasy story' },
    { name: 'NECROMANCER SHA', image: 'https://cdn.globalcontentcloud.com/game-images/playstar/12009/thumbnail.jpg', hint: 'dark magic' },
]

export const GameShowcase = () => {
    return (
        <div className="bg-secondary p-4 rounded-md my-2">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <Image src="/_nuxt/img/slots-muted.a305ba0.svg" width={32} height={32} alt="Slots" />
                    <h3 className="text-lg font-bold text-white">Slots</h3>
                </div>
                <Button variant="outline" size="sm" className="text-xs rounded-sm">Lihat semua</Button>
            </div>
            
            <div className="grid grid-cols-4 md:grid-cols-8 gap-4 mb-6">
                {gameProviders.map((provider) => (
                    <a href="#" key={provider.name} className="flex flex-col items-center gap-2 group">
                        <div className="w-14 h-14 bg-background rounded-full flex items-center justify-center border border-transparent group-hover:border-primary transition-all">
                            <Image src={provider.icon} width={36} height={36} alt={provider.name} className="object-contain" />
                        </div>
                        <span className="text-xs font-semibold text-center text-muted-foreground group-hover:text-primary transition-colors">{provider.name}</span>
                    </a>
                ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {games.map(game => (
                    <div key={game.name} className="group relative rounded-md overflow-hidden cursor-pointer">
                        <Image src={game.image} width={200} height={150} alt={game.name} className="w-full h-full object-cover transition-transform group-hover:scale-105" data-ai-hint={game.hint} />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 flex flex-col justify-end p-2">
                            <span className="text-white text-xs font-bold">{game.name}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
