
"use client";

import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "../ui/button";
import { Gift, Home, LogOut, Mail, Star, ThumbsUp, User, Handshake, History, Contact, Activity, ArrowUp } from "lucide-react";
import { SidebarContent, SidebarFooter, SidebarHeader } from "../ui/sidebar";
import Link from "next/link";


const gameCategories = [
    { name: 'Sports+', iconUrl: '/assets/sports.5879738.svg', href: '/id/sports' },
    { name: 'Slots', iconUrl: '/assets/slots.ddf496a.svg', href: '/id/slot/category/hot' },
    { name: 'Casino', iconUrl: '/assets/casino.01e8b7b.svg', href: '/id/casino'},
    { name: 'Lotto', iconUrl: '/assets/lotto.6e10ea7.svg', href: '/id/lotto' },
    { name: 'Fishing', iconUrl: '/assets/fishing.62277f4.svg', href: '/id/fishing' },
    { name: 'Poker', iconUrl: '/assets/poker.41b5642.svg', href: '/id/poker' },
    { name: 'Arcade', iconUrl: '/assets/arcade.3a38b14.svg', href: '/id/arcade/category/hot' },
    { name: 'Promosi', iconUrl: '/assets/promo.57bb699.svg', href: '/id/promotions' },
];

const mainNav = [
    { name: "Beranda", Icon: Home, href: "/" },
    { name: "Promosi", Icon: ThumbsUp, href: "#" },
    { name: "Deposit", Icon: Handshake, href: "/user/deposit" },
    { name: "Bonus", Icon: Gift, href: "#" },
    { name: "Withdraw", Icon: ArrowUp, href: "/user/withdraw" },
    { name: "Leaderboard", Icon: Star, href: "#" },
]

const accountNav = [
    { name: "Informasi Akun", Icon: User, href: "/user/account"},
    { name: "Referral", Icon: User, href: "#"},
    { name: "Inbox", Icon: Mail, href: "/user/activity", badge: 1},
    { name: "Aktivitas", Icon: Activity, href: "/user/activity"},
    { name: "Riwayat Bermain", Icon: History, href: "/user/history"},
]

export const MobileNav = () => {
    return (
        <div className="flex flex-col h-full text-white bg-[#4a5059]">
            <SidebarHeader className="bg-[#060d18] p-4">
                 <nav>
                    <ul className="grid grid-cols-4 gap-4">
                        {gameCategories.map(cat => (
                            <li key={cat.name}>
                                <a href={cat.href} className="flex flex-col items-center justify-center text-center space-y-2 text-xs font-bold text-white">
                                    <Image src={cat.iconUrl} alt={cat.name} width={40} height={40} className="w-10 h-10 object-contain" />
                                    <span className="truncate w-full">{cat.name}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </SidebarHeader>
            <SidebarContent className="flex-grow">
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
                                    <item.Icon className="h-6 w-6 text-primary" />
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
                                                         <item.Icon className="h-6 w-6 text-primary" />
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
