
import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "../ui/button";
import { ArrowDown, Gift, Home, LogOut, Mail, Newspaper, Star, ThumbsUp, User, Handshake, History, Contact, Activity, LifeBuoy, Languages, ArrowUp } from "lucide-react";
import { SidebarContent, SidebarFooter, SidebarHeader } from "../ui/sidebar";
import Link from "next/link";

const gameCategories = [
    { name: 'Sports+', icon: 'https://rajamaniaman.com/img/menu/sports.svg', href: '#' },
    { name: 'Slots', icon: 'https://rajamaniaman.com/img/menu/slots.svg', href: '#' },
    { name: 'Casino', icon: 'https://rajamaniaman.com/img/menu/casino.svg', href: '#'},
    { name: 'Lotto', icon: 'https://rajamaniaman.com/img/menu/lotto.svg', href: '#' },
    { name: 'Fishing', icon: 'https://rajamaniaman.com/img/menu/fishing.svg', href: '#' },
    { name: 'Poker', icon: 'https://rajamaniaman.com/img/menu/poker.svg', href: '#' },
    { name: 'Arcade', icon: 'https://rajamaniaman.com/img/menu/arcade.svg', href: '#' },
    { name: 'Promosi', icon: 'https://rajamaniaman.com/img/menu/promo.svg', href: '#' },
];

const mainNav = [
    { name: "Beranda", icon: Home, href: "/" },
    { name: "Promosi", icon: ThumbsUp, href: "#" },
    { name: "Deposit", icon: Handshake, href: "/user/deposit" },
    { name: "Bonus", icon: Gift, href: "#" },
    { name: "Withdraw", icon: ArrowUp, href: "/user/withdraw" },
    { name: "Leaderboard", icon: Star, href: "#" },
]

const accountNav = [
    { name: "Informasi Akun", icon: User, href: "/user/account"},
    { name: "Referral", icon: User, href: "#"},
    { name: "Inbox", icon: Mail, href: "/user/activity", badge: 1},
    { name: "Aktivitas", icon: Activity, href: "/user/activity"},
    { name: "Riwayat Bermain", icon: History, href: "/user/history"},
]

export const MobileNav = () => {
    return (
        <div className="flex flex-col h-full text-white bg-[#4a5059]">
            <SidebarHeader className="bg-[#060d18] w-[300px] h-[206px] p-0 m-0 border-0 text-white text-base font-normal text-left">
                <nav>
                    <ul className="flex items-center gap-4 overflow-x-auto p-4 pb-2 -mb-2 no-scrollbar">
                        {gameCategories.map(cat => (
                            <li key={cat.name} className="flex-shrink-0">
                                <a href={cat.href} className="flex flex-col items-center justify-center text-center space-y-2 text-xs font-bold w-16">
                                    <Image src={cat.icon} alt={cat.name} width={32} height={32} className="w-8 h-8" />
                                    <span className="truncate w-full">{cat.name}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </SidebarHeader>
            <SidebarContent>
                <style jsx>{`
                    .no-scrollbar::-webkit-scrollbar {
                        display: none;
                    }
                    .no-scrollbar {
                        -ms-overflow-style: none;
                        scrollbar-width: none;
                    }
                `}</style>
                <nav>
                    <ul>
                        <li>
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="free-spins" className="border-b-0">
                                    <AccordionTrigger className="w-full flex items-center p-4 font-bold text-sm text-white hover:no-underline hover:bg-black/10">
                                        <div className="flex items-center gap-4">
                                            <Star className="h-6 w-6 text-primary" />
                                            <span>Free Spins</span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="bg-black/20 px-4 py-2 text-sm">
                                        Tidak ada freespin yang tersedia.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </li>
                        {mainNav.map(item => (
                            <li key={item.name} className="border-b border-white/10">
                                <Link href={item.href} className="flex items-center p-4 gap-4 text-sm font-bold hover:bg-black/10">
                                    <item.icon className="h-6 w-6 text-primary" />
                                    <span>{item.name}</span>
                                </Link>
                            </li>
                        ))}
                         <li>
                            <Accordion type="single" collapsible className="w-full" defaultValue="account">
                                <AccordionItem value="account" className="border-b-0">
                                    <AccordionTrigger className="w-full flex items-center p-4 font-bold text-sm text-white hover:no-underline hover:bg-black/10">
                                        <div className="flex items-center gap-4">
                                            <User className="h-6 w-6 text-primary" />
                                            <span>Akun Saya</span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="bg-black/20 p-0">
                                        <ul>
                                            {accountNav.map(item => (
                                                <li key={item.name} className="border-b border-white/10 last:border-b-0">
                                                    <Link href={item.href} className="flex items-center p-4 pl-8 gap-4 text-sm font-bold hover:bg-black/20">
                                                         <item.icon className="h-6 w-6 text-primary" />
                                                         <span>{item.name}</span>
                                                         {item.badge && <span className="ml-auto bg-red-600 text-white text-xs font-bold rounded-full px-2 py-0.5">{item.badge}</span>}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </li>
                         <li className="border-b border-white/10">
                            <a href="#" className="flex items-center p-4 gap-4 text-sm font-bold hover:bg-black/10">
                                <Contact className="h-6 w-6 text-primary" />
                                <span>Kontak</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </SidebarContent>
            <SidebarFooter className="p-4 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <Button className="btn--dark w-full"> <LogOut className="mr-2"/> Keluar</Button>
                    <Link href="/user/deposit" className='w-full'>
                      <Button className="btn--success w-full"><Handshake className="mr-2" /> Deposit</Button>
                    </Link>
                </div>
                <div className="flex items-center justify-end text-sm">
                    <span>Pilih Bahasa:</span>
                    <ul className="flex items-center ml-2 space-x-2">
                        <li>
                            <a href="#" className="block border-2 border-primary rounded-full">
                                <Image src="https://cdn-proxy.globalcontentcloud.com/common/default/flags/id-ID.svg" width={24} height={24} alt="ID" />
                            </a>
                        </li>
                         <li>
                            <a href="#" className="block rounded-full">
                                <Image src="https://cdn-proxy.globalcontentcloud.com/common/default/flags/en-GB.svg" width={24} height={24} alt="EN" />
                            </a>
                        </li>
                    </ul>
                </div>
            </SidebarFooter>
        </div>
    )
}
