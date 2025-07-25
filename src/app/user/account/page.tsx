
"use client";

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Sidebar, SidebarInset } from '@/components/ui/sidebar';
import { MobileNav } from '@/components/layout/mobile-nav';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { User, Mail, Phone, Calendar as CalendarIcon, MapPin, Building, Landmark, Wallet } from "lucide-react";
import { ChangePasswordForm } from '@/components/sections/change-password-form';
import { BreadcrumbNav } from '@/components/layout/breadcrumb-nav';
import { usePathname } from 'next/navigation';

export default function AccountPage() {
    const balance = "Rp 135.211.894";
    const pathname = usePathname();
    const runningTextLine1 = "KEPADA YTH LEVIN SANTA JOY | PROSES WITHDRAW Rp 100.000.000 MASIH DALAM PROSES";
    const runningTextLine2 = "MOHON MENUNGGU KAMI SEDANG PERBAIKAN SISTEM";
    
    return (
    <>
      <Sidebar side="left" collapsible="offcanvas">
        <MobileNav />
      </Sidebar>
      <div className="flex min-h-screen flex-col bg-background">
        <Header />
        <SidebarInset>
            <BreadcrumbNav activePage="Akun Saya" />
            <main className="container mx-auto px-4 py-8">
                <Card className="bg-secondary border-none text-white p-6">
                    <div className="flex flex-col gap-4 mb-6">
                        <div className="flex items-center gap-3">
                            <User className="w-10 h-10 p-2 bg-card text-white rounded-md" />
                            <h2 className="text-2xl font-bold text-white">Akun Saya</h2>
                        </div>
                        
                        {/* Running Text Section */}
                        <div className="bg-red-900/20 border border-red-500/30 text-red-400 py-2 rounded-md overflow-hidden">
                            <div className="relative flex overflow-x-hidden w-full">
                                <div className="animate-marquee whitespace-nowrap">
                                    <span className="mx-8 text-sm font-bold uppercase">{runningTextLine1}</span>
                                    <span className="mx-8 text-sm font-bold uppercase">{runningTextLine1}</span>
                                </div>
                                <div className="absolute top-0 animate-marquee2 whitespace-nowrap">
                                   <span className="mx-8 text-sm font-bold uppercase">{runningTextLine1}</span>
                                   <span className="mx-8 text-sm font-bold uppercase">{runningTextLine1}</span>
                                </div>
                            </div>
                             <div className="relative flex overflow-x-hidden w-full mt-1">
                                <div className="animate-marquee whitespace-nowrap [animation-duration:50s]">
                                    <span className="mx-8 text-sm font-bold uppercase">{runningTextLine2}</span>
                                    <span className="mx-8 text-sm font-bold uppercase">{runningTextLine2}</span>
                                </div>
                                <div className="absolute top-0 animate-marquee2 whitespace-nowrap [animation-duration:50s]">
                                   <span className="mx-8 text-sm font-bold uppercase">{runningTextLine2}</span>
                                   <span className="mx-8 text-sm font-bold uppercase">{runningTextLine2}</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card p-3 rounded-md border border-border">
                            <div className="flex items-center gap-3">
                                <Wallet className="h-6 w-6 text-primary" />
                                <div className='flex flex-col'>
                                    <span className="text-sm text-muted-foreground">Saldo Saat Ini</span>
                                    <span className="text-lg font-bold text-white">{balance}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Left Column */}
                        <div className="space-y-6">
                            <div className="bg-card p-6 rounded-lg border border-border space-y-6">
                                <form className="space-y-6">
                                    <h3 className="font-bold text-primary pb-3 mb-4">PERBARUI DETAIL AKUN</h3>
                                    {/* Locked Fields */}
                                    <div className="space-y-4">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className="relative">
                                                <Label htmlFor="username">Username</Label>
                                                <User className="absolute left-3 top-9 h-4 w-4 text-primary" />
                                                <Input id="username" defaultValue="zer0jp" disabled className="bg-secondary border-border pl-10 mt-1" />
                                            </div>
                                            <div className="relative">
                                                <Label htmlFor="fullname">Nama</Label>
                                                <User className="absolute left-3 top-9 h-4 w-4 text-primary" />
                                                <Input id="fullname" defaultValue="Levin" disabled className="bg-secondary border-border pl-10 mt-1" />
                                            </div>
                                            <div className="relative">
                                                <Label htmlFor="email">E-mail</Label>
                                                <Mail className="absolute left-3 top-9 h-4 w-4 text-primary" />
                                                <Input id="email" defaultValue="anotherpin6@gmail.com" disabled className="bg-secondary border-border pl-10 mt-1" />
                                            </div>
                                            <div className="relative">
                                                <Label htmlFor="phone">Nomor Telepon</Label>
                                                <Phone className="absolute left-3 top-9 h-4 w-4 text-primary" />
                                                <Input id="phone" defaultValue="+62 838-4644-6650" disabled className="bg-secondary border-border pl-10 mt-1" />
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Editable Fields */}
                                    <div className="space-y-4">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className="relative">
                                                <Label>Pilih Tanggal lahir</Label>
                                                <Popover>
                                                    <PopoverTrigger asChild>
                                                        <Button variant="outline" className="w-full justify-start text-left font-normal bg-secondary border-border hover:bg-secondary/80 mt-1 pl-10 text-muted-foreground">
                                                            <CalendarIcon className="absolute left-3 h-4 w-4 text-primary" />
                                                            Pilih Tanggal lahir
                                                        </Button>
                                                    </PopoverTrigger>
                                                    <PopoverContent className="w-auto p-0">
                                                        <CalendarComponent
                                                            mode="single"
                                                            captionLayout="dropdown-buttons"
                                                            fromYear={1900}
                                                            toYear={new Date().getFullYear()}
                                                        />
                                                    </PopoverContent>
                                                </Popover>
                                            </div>
                                            <div className="relative">
                                                <Label htmlFor="city">Kota</Label>
                                                <MapPin className="absolute left-3 top-9 h-4 w-4 text-primary" />
                                                <Input id="city" placeholder="Kota" className="bg-secondary border-border pl-10 mt-1" />
                                            </div>
                                        </div>
                                        <div className="relative">
                                            <Label htmlFor="address">Alamat</Label>
                                            <Building className="absolute left-3 top-9 h-4 w-4 text-primary" />
                                            <Input id="address" placeholder="Alamat" className="bg-secondary border-border pl-10 mt-1" />
                                        </div>

                                        <div className="flex items-center space-x-2 pt-4">
                                            <Checkbox id="notifications" className="border-primary data-[state=checked]:bg-primary"/>
                                            <Label htmlFor="notifications" className="text-sm font-normal text-muted-foreground">
                                                Terima notifikasi pemberitahuan untuk Deposit, Withdraw, Taruhan Selesai dan Hadiah Promo.
                                            </Label>
                                        </div>
                                    </div>

                                    <Button type="submit" className="w-full btn--success">Simpan</Button>
                                </form>
                                
                                <div className="space-y-4">
                                    <h3 className="font-bold text-primary pb-3 mb-4">INFORMASI BANK</h3>
                                    <div className="space-y-4">
                                        <div className="relative">
                                            <Label htmlFor="bank">Bank</Label>
                                            <Landmark className="absolute left-3 top-9 h-4 w-4 text-primary" />
                                            <Input id="bank" defaultValue="DANA" disabled className="bg-secondary border-border pl-10 mt-1" />
                                        </div>
                                        <div className="relative">
                                            <Label htmlFor="accountName">Nama Rekening</Label>
                                            <User className="absolute left-3 top-9 h-4 w-4 text-primary" />
                                            <Input id="accountName" defaultValue="Levin Santa Joy" disabled className="bg-secondary border-border pl-10 mt-1" />
                                        </div>
                                        <div className="relative">
                                            <Label htmlFor="accountNumber">Nomor Rekening</Label>
                                            <Landmark className="absolute left-3 top-9 h-4 w-4 text-primary" />
                                            <Input id="accountNumber" defaultValue="********6650" disabled className="bg-secondary border-border pl-10 mt-1" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-6">
                           <ChangePasswordForm />
                        </div>
                    </div>
                </Card>
            </main>
            <Footer />
        </SidebarInset>
      </div>
    </>
    );
}
