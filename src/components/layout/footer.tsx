import Image from "next/image"

const socialIcons = [
    { name: "Instagram", hint: "instagram logo", href:"https://www.instagram.com/rajamania.gacor/", icon: "https://rajamaniaman.com/img/social/instagram.svg" }
]

const partners = [
    { name: "IDNPOKER", icon: "https://rajamaniaman.com/img/provider/idnpoker.svg" },
    { name: "IDNArcade", icon: "https://rajamaniaman.com/img/provider/idnarcade.svg" },
    { name: "UboBet", icon: "https://rajamaniaman.com/img/provider/ubo.svg" },
    { name: "SABA Sports", icon: "https://rajamaniaman.com/img/provider/saba.svg" },
    { name: "SBOBET", icon: "https://rajamaniaman.com/img/provider/sbobet.svg" },
    { name: "CMD368", icon: "https://rajamaniaman.com/img/provider/cmd.svg" },
    { name: "NSOFT 88", icon: "https://rajamaniaman.com/img/provider/nsoft.svg" },
    { name: "TFGaming", icon: "https://rajamaniaman.com/img/provider/tfgaming.svg" },
    { name: "IDNSLOT", icon: "https://rajamaniaman.com/img/provider/idnslot.svg" },
    { name: "Slot Mania", icon: "https://rajamaniaman.com/img/provider/slot-mania.svg" },
    { name: "Spin Royal", icon: "https://rajamaniaman.com/img/provider/spin-royal.svg" },
    { name: "Level Up", icon: "https://rajamaniaman.com/img/provider/level-up.svg" },
    { name: "PG Soft", icon: "https://rajamaniaman.com/img/provider/pgsoft.svg" },
    { name: "Nolimit City", icon: "https://rajamaniaman.com/img/provider/evolution-nlc.svg" },
    { name: "PragmaticPlay", icon: "https://rajamaniaman.com/img/provider/pragmaticplay.svg" },
    { name: "Fat Panda", icon: "https://rajamaniaman.com/img/provider/panda.svg" },
    { name: "Microgaming", icon: "https://rajamaniaman.com/img/provider/microgaming.svg" },
    { name: "Nsoft", icon: "https://rajamaniaman.com/img/provider/nsoftcasino.svg" },
    { name: "Penguin King", icon: "https://rajamaniaman.com/img/provider/penguin_king.svg" },
    { name: "BigPot", icon: "https://rajamaniaman.com/img/provider/bigpot.svg" },
    { name: "TTG", icon: "https://rajamaniaman.com/img/provider/ttg.svg" },
    { name: "Habanero", icon: "https://rajamaniaman.com/img/provider/habanero.svg" },
    { name: "PlayStar", icon: "https://rajamaniaman.com/img/provider/playstar.svg" },
    { name: "Spadegaming", icon: "https://rajamaniaman.com/img/provider/spadegaming_slot.svg" },
    { name: "5G", icon: "https://rajamaniaman.com/img/provider/5g.svg" },
    { name: "Playtech", icon: "https://rajamaniaman.com/img/provider/playtech_slot.svg" },
    { name: "PP 98% RTP", icon: "https://rajamaniaman.com/img/provider/pragmaticplay98.svg" },
    { name: "CQ9", icon: "https://rajamaniaman.com/img/provider/cq9.svg" },
    { name: "Play'n Go", icon: "https://rajamaniaman.com/img/provider/playngo.svg" },
    { name: "Reevo", icon: "https://rajamaniaman.com/img/provider/reevo.svg" },
    { name: "FastSpin", icon: "https://rajamaniaman.com/img/provider/fastspin.svg" },
    { name: "Yggdrasil", icon: "https://rajamaniaman.com/img/provider/yggdrasil.svg" },
    { name: "BNG", icon: "https://rajamaniaman.com/img/provider/bng.svg" },
    { name: "Bgaming", icon: "https://rajamaniaman.com/img/provider/bgaming.svg" },
    { name: "Booming", icon: "https://rajamaniaman.com/img/provider/booming_games.svg" },
    { name: "NetEnt", icon: "https://rajamaniaman.com/img/provider/evolution-netent.svg" },
    { name: "GMW", icon: "https://rajamaniaman.com/img/provider/gmw.svg" },
    { name: "RedTiger", icon: "https://rajamaniaman.com/img/provider/evolution-redtiger.svg" },
    { name: "Apparat", icon: "https://rajamaniaman.com/img/provider/apparat.svg" },
    { name: "BTG", icon: "https://rajamaniaman.com/img/provider/evolution-btg.svg" },
    { name: "Evolution", icon: "https://rajamaniaman.com/img/provider/evolution.svg" },
    { name: "IDNLIVE", icon: "https://rajamaniaman.com/img/provider/idnlive.svg" },
    { name: "SA Gaming", icon: "https://rajamaniaman.com/img/provider/sagaming.svg" },
    { name: "Oriental Game", icon: "https://rajamaniaman.com/img/provider/og.svg" },
    { name: "WE", icon: "https://rajamaniaman.com/img/provider/ebetlive.svg" },
    { name: "VivoGaming", icon: "https://rajamaniaman.com/img/provider/vivo-gaming.svg" },
    { name: "Ezugi", icon: "https://rajamaniaman.com/img/provider/ezugi-gaming.svg" },
    { name: "LuckyStreak", icon: "https://rajamaniaman.com/img/provider/luckystreak.svg" },
];

const paymentMethods = [
    { name: "BCA", hint: "BCA logo", image: "https://cdn-proxy.globalcontentcloud.com/common/dark/payment/BCA.svg" },
    { name: "BRI", hint: "BRI logo", image: "https://cdn-proxy.globalcontentcloud.com/common/dark/payment/BRI.svg" },
    { name: "BNI", hint: "BNI logo", image: "https://cdn-proxy.globalcontentcloud.com/common/dark/payment/BNI.svg" },
    { name: "OVO", hint: "OVO logo", image: "https://cdn-proxy.globalcontentcloud.com/common/dark/payment/OVO.svg" },
    { name: "LinkAja", hint: "LinkAja logo", image: "https://cdn-proxy.globalcontentcloud.com/common/dark/payment/LINKAJA.svg" },
    { name: "DANA", hint: "DANA logo", image: "https://cdn-proxy.globalcontentcloud.com/common/dark/payment/DANA.svg" },
];

export const Footer = () => {
    return (
        <footer className="bg-card text-muted-foreground pt-10 pb-10 mt-[-0.5rem] z-0">
            <div className="container mx-auto px-4">
                
                <section className="mb-6 pb-6 border-b border-border/50">
                    <h5 className="font-bold text-primary mb-4 text-sm md:text-left">Partner</h5>
                    <ul className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-10 lg:grid-cols-12 gap-x-4 gap-y-6">
                        {partners.map(p => (
                            <li key={p.name}>
                                <a href="#" className="flex flex-col items-center justify-start gap-1 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all text-center">
                                    <Image src={p.icon} alt={p.name} width={40} height={40} className="h-10 w-auto object-contain" />
                                    <span className="text-[10px] text-slate-400">{p.name}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="mb-6 pb-6 border-b border-border/50">
                     <h5 className="font-bold text-primary mb-4 text-sm md:text-left">Metode deposit</h5>
                     <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
                        {paymentMethods.map(p => (
                             <div key={p.name} className="bg-secondary p-2 rounded-md flex items-center justify-center h-12">
                                <Image src={p.image} alt={p.name} width={80} height={25} className="max-h-full w-auto object-contain" data-ai-hint={p.hint} />
                            </div>
                        ))}
                     </div>
                </section>

                <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
                     <div className="text-xs text-slate-400">
                        <p>&copy; 2025 RAJAMANIA. All rights reserved.</p>
                    </div>
                    <div>
                        <ul className="flex space-x-3">
                            {socialIcons.map(social => (
                                <li key={social.name}>
                                    <a href={social.href} target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-primary transition-colors">
                                        <Image src={social.icon} width={32} height={32} alt={social.name} data-ai-hint={social.hint} />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
