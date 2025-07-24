
"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Sidebar, SidebarInset } from '@/components/ui/sidebar';
import { MobileNav } from '@/components/layout/mobile-nav';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Handshake, Info, Landmark, Edit, Circle, Coins, Pen } from 'lucide-react';
import { cn } from '@/lib/utils';
import { BreadcrumbNav } from '@/components/layout/breadcrumb-nav';

type DepositTab = 'otomatis' | 'bank' | 'emoney';

const bankOptions = [
    { id: 'bca', name: 'BCA', image: 'https://cdn.globalcontentcloud.com/static/manual_payment_methods/method_249639.png' },
    { id: 'bni', name: 'BNI', image: 'https://cdn.globalcontentcloud.com/static/manual_payment_methods/method_423013.png' },
    { id: 'bri', name: 'BRI', image: 'https://cdn.globalcontentcloud.com/static/manual_payment_methods/method_493882.png' },
];

const presetAmounts = ["50000", "100000", "200000", "500000"];

const DepositForm = () => {
    const [selectedBank, setSelectedBank] = useState<string | null>(null);
    const [amount, setAmount] = useState('');

    return (
        <form className="space-y-6">
            <div>
                <Label className="mb-2 block font-semibold">Pilih Bank</Label>
                <RadioGroup 
                    onValueChange={setSelectedBank}
                    className="grid grid-cols-3 gap-2"
                >
                    {bankOptions.map(bank => (
                        <div key={bank.id} className="relative">
                             <RadioGroupItem value={bank.id} id={bank.id} className="sr-only" />
                             <Label 
                                htmlFor={bank.id} 
                                className={cn(
                                    "flex items-center justify-center p-2 border-2 rounded-md cursor-pointer h-16 transition-all",
                                    selectedBank === bank.id ? 'border-primary bg-primary/10' : 'border-border bg-secondary'
                                )}
                            >
                                <Image src={bank.image} alt={bank.name} width={80} height={25} className="max-h-full w-auto object-contain" />
                            </Label>
                             {selectedBank === bank.id && (
                                <div className="absolute top-1 right-1 w-4 h-4 rounded-full bg-primary flex items-center justify-center">
                                    <Circle className="w-2 h-2 text-primary-foreground fill-current" />
                                </div>
                            )}
                        </div>
                    ))}
                </RadioGroup>
            </div>
            
            {!selectedBank && (
                 <Alert variant="default" className="bg-secondary/50 border-border text-muted-foreground">
                    <Info className="h-4 w-4 text-primary" />
                    <AlertDescription className='text-xs'>
                        Silahkan memilih salah satu Bank terlebih dahulu.
                    </AlertDescription>
                </Alert>
            )}

            <div>
                <div className="flex justify-between items-center mb-2">
                    <Label className="font-semibold">Pilih nominal</Label>
                    <Button type="button" size="icon" variant="ghost" className="h-6 w-6 text-muted-foreground hover:text-primary disabled:opacity-50" disabled={!selectedBank}>
                        <Edit className="h-4 w-4" />
                    </Button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {presetAmounts.map(preset => (
                         <Button 
                            key={preset}
                            type="button" 
                            variant="outline"
                            className={cn("bg-secondary border-border h-11", amount === preset && "bg-primary text-primary-foreground border-primary")}
                            onClick={() => setAmount(preset)}
                            disabled={!selectedBank}
                        >
                            Rp {new Intl.NumberFormat('id-ID').format(parseInt(preset))}
                        </Button>
                    ))}
                </div>
            </div>

            <div>
                <Label htmlFor="amount">Jumlah</Label>
                <div className="relative mt-1">
                    <Coins className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-primary" />
                    <Input 
                        id="amount" 
                        type="number" 
                        placeholder="Masukkan jumlah deposit" 
                        className="bg-background border-border pl-10" 
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        disabled={!selectedBank} 
                    />
                </div>
            </div>
             <div>
                <Label htmlFor="notes">Catatan</Label>
                <div className="relative mt-1">
                    <Pen className="absolute left-3 top-3 h-4 w-4 text-primary" />
                    <Input 
                        id="notes" 
                        placeholder="Catatan (opsional)" 
                        className="bg-background border-border pl-10" 
                        disabled={!selectedBank} 
                    />
                </div>
            </div>
            
            <Button type="submit" className="w-full btn--success font-bold" disabled={!selectedBank || !amount}>Kirim</Button>
        </form>
    );
};


export default function DepositPage() {
    const [activeTab, setActiveTab] = useState<DepositTab>('bank');
    
    return (
    <>
      <Sidebar side="left" collapsible="offcanvas">
        <MobileNav />
      </Sidebar>
      <div className="flex min-h-screen flex-col bg-background">
        <Header />
        <SidebarInset>
            <BreadcrumbNav activePage="Deposit" />
            <main className="container mx-auto px-4 py-8">
                <Card className="bg-secondary border-none text-white max-w-4xl mx-auto">
                    <CardHeader>
                        <div className="flex items-center gap-3">
                           <Handshake className="w-8 h-8 p-1.5 bg-card text-white rounded-md" />
                           <h2 className="text-2xl font-bold text-white">Deposit</h2>
                        </div>
                    </CardHeader>
                    <CardContent className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <aside className="md:col-span-1">
                             <nav className="flex flex-col gap-2">
                                <Button 
                                    variant={activeTab === 'otomatis' ? 'default' : 'ghost'} 
                                    onClick={() => setActiveTab('otomatis')}
                                    className="justify-start gap-3"
                                >
                                    <Landmark className="h-5 w-5" />
                                    <span>Otomatis Deposit</span>
                                </Button>
                                <Button 
                                    variant={activeTab === 'bank' ? 'default' : 'ghost'} 
                                    onClick={() => setActiveTab('bank')}
                                    className="justify-start gap-3"
                                >
                                    <Landmark className="h-5 w-5" />
                                    <span>Bank Transfer</span>
                                </Button>
                                <Button 
                                    variant={activeTab === 'emoney' ? 'default' : 'ghost'} 
                                    onClick={() => setActiveTab('emoney')}
                                    className="justify-start gap-3"
                                >
                                    <Landmark className="h-5 w-5" />
                                    <span>E-money</span>
                                </Button>
                            </nav>
                        </aside>
                        <div className="md:col-span-3">
                            {activeTab === 'bank' && <DepositForm />}
                            {activeTab === 'otomatis' && (
                                 <div className="text-center text-muted-foreground p-8 border border-dashed border-border rounded-md">
                                    Konten untuk Deposit Otomatis akan ditampilkan di sini.
                                </div>
                            )}
                             {activeTab === 'emoney' && (
                                <div className="text-center text-muted-foreground p-8 border border-dashed border-border rounded-md">
                                    Konten untuk E-money akan ditampilkan di sini.
                                </div>
                            )}
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
