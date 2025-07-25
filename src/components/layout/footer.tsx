
import Image from "next/image"
import Link from "next/link"
import { Logo } from "../icons/logo"

const quickLinks = [
    { name: 'Bantuan', href: '#' },
    { name: 'Promosi', href: '#' },
    { name: 'Hubungi Kami', href: '#' },
    { name: 'Syarat & Ketentuan', href: '#' },
]

const socialLinks = [
    { name: 'Facebook', icon: 'https://rajamaniasol.com/assets/images/icons/socials/facebook.svg' },
    { name: 'Instagram', icon: 'https://rajamaniasol.com/assets/images/icons/socials/instagram.svg' },
    { name: 'Telegram', icon: 'https://rajamaniasol.com/assets/images/icons/socials/telegram.svg' },
]

const partners = [
    { name: "IDNPOKER", icon: "https://rajamaniaman.com/img/provider/idnpoker.svg" },
    { name: "IDNArcade", icon: "https://rajamaniaman.com/img/provider/idnarcade.svg" },
    { name: "UboBet", icon: "https://rajamaniaman.com/img/provider/ubo.svg" },
    { name: "SABA Sports", icon: "https://rajamaniaman.com/img/provider/saba.svg" },
    { name: "PragmaticPlay", icon: "https://rajamaniaman.com/img/provider/pragmaticplay.svg" },
    { name: "PG Soft", icon: "https://rajamaniaman.com/img/provider/pgsoft.svg" },
    { name: "Microgaming", icon: "https://rajamaniaman.com/img/provider/microgaming.svg" },
    { name: "Nolimit City", icon: "https://rajamaniaman.com/img/provider/evolution-nlc.svg" },
];

const paymentMethods = [
    { name: "BCA", hint: "BCA logo", image: "https://cdn-proxy.globalcontentcloud.com/common/dark/payment/BCA.svg" },
    { name: "BRI", hint: "BRI logo", image: "https://cdn-proxy.globalcontentcloud.com/common/dark/payment/BRI.svg" },
    { name: "BNI", hint: "BNI logo", image: "https://cdn-proxy.globalcontentcloud.com/common/dark/payment/BNI.svg" },
    { name: "Mandiri", hint: "Mandiri logo", image: "https://cdn-proxy.globalcontentcloud.com/common/dark/payment/MANDIRI.svg" },
    { name: "Danamon", hint: "Danamon logo", image: "https://rajamaniasol.com/assets/images/footer/payment/danamon.webp" },
    { name: "CIMB", hint: "CIMB logo", image: "https://rajamaniasol.com/assets/images/footer/payment/cimb.webp" },
    { name: "OVO", hint: "OVO logo", image: "https://cdn-proxy.globalcontentcloud.com/common/dark/payment/OVO.svg" },
    { name: "Gopay", hint: "Gopay logo", image: "https://rajamaniasol.com/assets/images/footer/payment/gopay.webp" },
    { name: "LinkAja", hint: "LinkAja logo", image: "https://cdn-proxy.globalcontentcloud.com/common/dark/payment/LINKAJA.svg" },
    { name: "DANA", hint: "DANA logo", image: "https://cdn-proxy.globalcontentcloud.com/common/dark/payment/DANA.svg" },
];

const licenses = [
    { name: 'PAGCOR', image: 'https://rajamaniasol.com/assets/images/footer/pagcor.webp' },
    { name: 'BMM', image: 'https://rajamaniasol.com/assets/images/footer/bmm.webp' },
    { name: '18+', image: 'https://rajamaniasol.com/assets/images/footer/18.webp' },
]

export const Footer = () => {
    return (
        <footer className="bg-card text-muted-foreground pt-10 pb-4 mt-[-0.5rem] z-0">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-8">
                    {/* Tentang Kami */}
                    <div className="lg:col-span-2">
                        <Logo className="h-10 w-auto mb-4" />
                        <p className="text-sm text-slate-400">
                            RAJAMANIA adalah situs slot online terkemuka di Indonesia, yang dikenal karena keandalannya dan beragamnya permainan yang ditawarkan. Sebagai agen bandar bola terpercaya, RAJAMANIA juga menyediakan platform taruhan olahraga yang aman dan adil.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h5 className="font-bold text-primary mb-4 text-base">Quick Links</h5>
                        <ul className="space-y-2">
                            {quickLinks.map(link => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm text-slate-400 hover:text-primary transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h5 className="font-bold text-primary mb-4 text-base">Social Media</h5>
                        <ul className="flex items-center space-x-3">
                            {socialLinks.map(social => (
                                <li key={social.name}>
                                    <a href="#" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-primary transition-colors">
                                        <Image src={social.icon} width={32} height={32} alt={social.name} />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="space-y-6 mb-8">
                    {/* Partners */}
                    <section>
                        <h5 className="font-bold text-primary mb-4 text-sm text-center">Partners</h5>
                        <div className="flex justify-center items-center flex-wrap gap-6">
                            {partners.map(p => (
                                <div key={p.name}>
                                    <Image src={p.icon} alt={p.name} width={80} height={25} className="h-6 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all" />
                                </div>
                            ))}
                        </div>
                    </section>
                    
                    {/* Metode Deposit */}
                    <section>
                         <h5 className="font-bold text-primary mb-4 text-sm text-center">Metode Deposit & Penarikan</h5>
                         <div className="flex justify-center items-center flex-wrap gap-4">
                            {paymentMethods.map(p => (
                                <div key={p.name} className="bg-secondary p-2 rounded-md flex items-center justify-center h-10 w-24">
                                    <Image src={p.image} alt={p.name} width={80} height={25} className="max-h-full w-auto object-contain" data-ai-hint={p.hint} />
                                </div>
                            ))}
                         </div>
                    </section>

                    {/* Lisensi Resmi */}
                    <section>
                         <h5 className="font-bold text-primary mb-4 text-sm text-center">Lisensi Resmi</h5>
                         <div className="flex justify-center items-center flex-wrap gap-6">
                            {licenses.map(l => (
                                <div key={l.name} className="flex items-center justify-center h-12">
                                    <Image src={l.image} alt={l.name} width={80} height={40} className="max-h-full w-auto object-contain" />
                                </div>
                            ))}
                         </div>
                    </section>
                </div>

                <div className="border-t border-border/50 pt-4 text-center text-xs text-slate-400">
                    <p>&copy; 2025 RAJAMANIA. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
