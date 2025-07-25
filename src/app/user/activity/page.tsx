
"use client";

import { useState } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Sidebar, SidebarInset } from '@/components/ui/sidebar';
import { MobileNav } from '@/components/layout/mobile-nav';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ListOrdered } from 'lucide-react';
import { cn } from '@/lib/utils';
import { BreadcrumbNav } from '@/components/layout/breadcrumb-nav';
import { usePathname } from 'next/navigation';

const activityData = [
    { id: '#3151866', service: 'request', type: 'Penarikan', amount: 'Rp 100.000.000', status: 'Menunggu', updated: '18/7/2025, 10:30' },
    { id: '#3151865', service: 'cashback', type: 'Deposit', amount: 'Rp 5.041', status: 'Disetujui', updated: '14/7/2025, 13:53' },
    { id: '#3130236', service: 'Manual', type: 'Deposit', amount: 'Rp 20.000', status: 'Disetujui', updated: '10/7/2025, 16:39' },
    { id: '#3129398', service: 'cashback', type: 'Deposit', amount: 'Rp 280', status: 'Disetujui', updated: '10/7/2025, 13:05' },
    { id: '#3124371', service: 'Manual', type: 'Deposit', amount: 'Rp 20.000', status: 'Disetujui', updated: '9/7/2025, 17:57' },
    { id: '#3124109', service: 'Manual', type: 'Deposit', amount: 'Rp 50.000', status: 'Disetujui', updated: '9/7/2025, 16:58' },
    { id: '#3124066', service: 'Manual', type: 'Deposit', amount: 'Rp 150.000', status: 'Disetujui', updated: '9/7/2025, 16:48' },
    { id: '#3124022', service: 'Manual', type: 'Deposit', amount: 'Rp 51.500', status: 'Disetujui', updated: '9/7/2025, 16:40' },
    { id: '#3123989', service: 'Manual', type: 'Deposit', amount: 'Rp 50.000', status: 'Disetujui', updated: '9/7/2025, 16:34' },
    { id: '#3123806', service: 'Manual', type: 'Deposit', amount: 'Rp 50.000', status: 'Disetujui', updated: '9/7/2025, 15:41' },
    { id: '#3123788', service: 'request', type: 'Penarikan', amount: 'Rp 302.000', status: 'Disetujui', updated: '9/7/2025, 15:38' },
    { id: '#3123121', service: 'Manual', type: 'Deposit', amount: 'Rp 100.000', status: 'Disetujui', updated: '9/7/2025, 12:38' },
    { id: '#3123100', service: 'Manual', type: 'Deposit', amount: 'Rp 49.500', status: 'Disetujui', updated: '9/7/2025, 12:33' },
    { id: '#3123073', service: 'Manual', type: 'Deposit', amount: 'Rp 32.000', status: 'Disetujui', updated: '9/7/2025, 12:27' },
    { id: '#3123031', service: 'request', type: 'Penarikan', amount: 'Rp 182.000', status: 'Disetujui', updated: '9/7/2025, 12:25' },
    { id: '#3122922', service: 'Manual', type: 'Deposit', amount: 'Rp 30.000', status: 'Disetujui', updated: '9/7/2025, 11:58' },
    { id: '#3122860', service: 'Manual', type: 'Deposit', amount: 'Rp 20.000', status: 'Disetujui', updated: '9/7/2025, 11:43' },
];

const casinoActivityData = [
    { id: '#586324137', provider: 'PG Soft', bet: 'Rp 20.000', gain: 'Rp 0', balance: 'Rp 135.191.894', date: '17/7/2025, 02:59' },
    { id: '#586323989', provider: 'PG Soft', bet: 'Rp 0', gain: 'Rp 50.000.000', balance: 'Rp 135.211.894', date: '17/7/2025, 02:58' },
    { id: '#586323940', provider: 'PG Soft', bet: 'Rp 10.000', gain: 'Rp 0', balance: 'Rp 85.211.894', date: '17/7/2025, 02:57' },
    { id: '#586314137', provider: 'Pragmatic Slot', bet: 'Rp 5.000', gain: 'Rp 0', balance: 'Rp 85.221.894', date: '17/7/2025, 02:51' },
    { id: '#586313989', provider: 'Pragmatic Slot', bet: 'Rp 0', gain: 'Rp 1.000.000', balance: 'Rp 85.226.894', date: '17/7/2025, 02:51' },
    { id: '#586313940', provider: 'Pragmatic Slot', bet: 'Rp 2.000', gain: 'Rp 0', balance: 'Rp 84.226.894', date: '17/7/2025, 02:51' },
    { id: '#584611221', provider: 'Pragmatic Slot', bet: 'Rp 10.000', gain: 'Rp 0', balance: 'Rp 84.228.894', date: '17/7/2025, 02:42' },
    { id: '#584610991', provider: 'IDNSLOT', bet: 'Rp 0', gain: 'Rp 250.000', balance: 'Rp 84.238.894', date: '17/7/2025, 02:41' },
    { id: '#584610964', provider: 'IDNSLOT', bet: 'Rp 5.000', gain: 'Rp 0', balance: 'Rp 83.988.894', date: '17/7/2025, 02:41' },
    { id: '#584609797', provider: 'IDNSLOT', bet: 'Rp 0', gain: 'Rp 20.000.000', balance: 'Rp 83.993.894', date: '17/7/2025, 02:38' },
    { id: '#584609728', provider: 'Nolimit City', bet: 'Rp 50.000', gain: 'Rp 0', balance: 'Rp 63.993.894', date: '17/7/2025, 02:38' },
    { id: '#584609556', provider: 'Nolimit City', bet: 'Rp 0', gain: 'Rp 15.000.000', balance: 'Rp 64.043.894', date: '17/7/2025, 02:37' },
    { id: '#584609536', provider: 'Nolimit City', bet: 'Rp 50.000', gain: 'Rp 0', balance: 'Rp 49.043.894', date: '17/7/2025, 02:37' },
    { id: '#582570967', provider: 'Pragmatic Casino', bet: 'Rp 100.000', gain: 'Rp 0', balance: 'Rp 49.093.894', date: '17/7/2025, 02:02' },
    { id: '#582570900', provider: 'Pragmatic Casino', bet: 'Rp 0', gain: 'Rp 10.000.000', balance: 'Rp 49.193.894', date: '17/7/2025, 02:02' },
    { id: '#582570637', provider: 'Pragmatic Casino', bet: 'Rp 50.000', gain: 'Rp 0', balance: 'Rp 39.193.894', date: '17/7/2025, 02:01' },
    { id: '#582570548', provider: 'Microgaming', bet: 'Rp 50.000', gain: 'Rp 0', balance: 'Rp 39.243.894', date: '17/7/2025, 01:31' },
    { id: '#582570471', provider: 'Microgaming', bet: 'Rp 0', gain: 'Rp 45.000.000', balance: 'Rp 39.293.894', date: '17/7/2025, 01:30' },
    { id: '#582570312', provider: 'Microgaming', bet: 'Rp 100.000', gain: 'Rp 0', balance: 'Rp -5.706.106', date: '17/7/2025, 01:29' },
    { id: '#582570111', provider: 'Pragmatic Slot', bet: 'Rp 20.000', gain: 'Rp 0', balance: 'Rp -5.606.106', date: '17/7/2025, 01:05' },
    { id: '#586314138', provider: 'Pragmatic Slot', bet: 'Rp 400', gain: 'Rp 0', balance: 'Rp 5.191.894', date: '14/7/2025, 02:51' },
];

type ActivityTab = 'Saldo' | 'Casino' | 'Sports';

export default function ActivityPage() {
    const [activeTab, setActiveTab] = useState<ActivityTab>('Casino');
    const pathname = usePathname();

    return (
    <>
      <Sidebar side="left" collapsible="offcanvas">
        <MobileNav />
      </Sidebar>
      <div className="flex min-h-screen flex-col bg-background">
        <Header />
        <SidebarInset>
            <BreadcrumbNav activePage="Aktivitas" />
            <main className="container mx-auto px-4 py-8">
                <Card className="bg-secondary border-none text-white">
                    <CardHeader className="p-4 border-b border-border/50">
                        <div className="flex items-center gap-3">
                           <ListOrdered className="w-8 h-8 p-1.5 bg-card text-white rounded-md" />
                           <h2 className="text-2xl font-bold text-white">Aktivitas</h2>
                        </div>
                    </CardHeader>
                    <CardContent className="p-0">
                       <div className="p-4">
                           <div className="flex items-center gap-2 bg-background p-1 rounded-md">
                                <Button onClick={() => setActiveTab('Saldo')} className={cn("flex-1", activeTab === 'Saldo' ? 'btn--brand' : 'btn--dark')}>Saldo</Button>
                                <Button onClick={() => setActiveTab('Casino')} className={cn("flex-1", activeTab === 'Casino' ? 'btn--brand' : 'btn--dark')}>Casino</Button>
                                <Button onClick={() => setActiveTab('Sports')} className={cn("flex-1", activeTab === 'Sports' ? 'btn--brand' : 'btn--dark')}>Sports</Button>
                           </div>
                       </div>
                       
                        {activeTab === 'Saldo' && (
                            <div className="overflow-x-auto">
                                <Table>
                                    <TableHeader>
                                        <TableRow className="border-b-border/50 hover:bg-secondary/50">
                                            <TableHead className="text-primary-foreground font-semibold bg-primary text-sm">ID</TableHead>
                                            <TableHead className="text-primary-foreground font-semibold bg-primary text-sm">Service</TableHead>
                                            <TableHead className="text-primary-foreground font-semibold bg-primary text-sm">Tipe</TableHead>
                                            <TableHead className="text-primary-foreground font-semibold bg-primary text-right text-sm">Jumlah</TableHead>
                                            <TableHead className="text-primary-foreground font-semibold bg-primary text-center text-sm">Status</TableHead>
                                            <TableHead className="text-primary-foreground font-semibold bg-primary text-right text-sm">Diperbarui pada</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {activityData.map((item) => (
                                            <TableRow key={item.id} className="border-b-border/50 hover:bg-secondary/80">
                                                <TableCell className="font-medium text-primary text-xs">{item.id}</TableCell>
                                                <TableCell className="text-xs">{item.service}</TableCell>
                                                <TableCell className="text-xs">{item.type}</TableCell>
                                                <TableCell className="text-right text-xs">{item.amount}</TableCell>
                                                <TableCell className="text-center text-xs">
                                                    <Badge 
                                                        className={cn(
                                                            'text-xs',
                                                            item.status === 'Disetujui' && 'bg-green-600/20 text-green-400 border-green-500/30 hover:bg-green-600/30',
                                                            item.status === 'Menunggu' && 'bg-yellow-600/20 text-yellow-400 border-yellow-500/30 hover:bg-yellow-600/30'
                                                        )}
                                                    >
                                                        {item.status}
                                                    </Badge>
                                                </TableCell>
                                                <TableCell className="text-right text-xs">{item.updated}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                        )}
                        {activeTab === 'Casino' && (
                            <div className="overflow-x-auto">
                                <Table>
                                    <TableHeader>
                                        <TableRow className="border-b-border/50 hover:bg-secondary/50">
                                            <TableHead className="text-primary-foreground font-semibold bg-primary text-sm">ID</TableHead>
                                            <TableHead className="text-primary-foreground font-semibold bg-primary text-sm">Provider</TableHead>
                                            <TableHead className="text-primary-foreground font-semibold bg-primary text-right text-sm">Bet</TableHead>
                                            <TableHead className="text-primary-foreground font-semibold bg-primary text-right text-sm">Menang</TableHead>
                                            <TableHead className="text-primary-foreground font-semibold bg-primary text-right text-sm">Saldo</TableHead>
                                            <TableHead className="text-primary-foreground font-semibold bg-primary text-right text-sm">Tanggal</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {casinoActivityData.map((item) => (
                                            <TableRow key={item.id} className="border-b-border/50 hover:bg-secondary/80">
                                                <TableCell className="font-medium text-primary text-xs">{item.id}</TableCell>
                                                <TableCell className="text-xs">{item.provider}</TableCell>
                                                <TableCell className="text-right text-xs">{item.bet}</TableCell>
                                                <TableCell className="text-right text-xs">{item.gain}</TableCell>
                                                <TableCell className="text-right text-xs">{item.balance}</TableCell>
                                                <TableCell className="text-right text-xs">{item.date}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                                <div className="p-4 flex justify-center">
                                     <Button size="sm" className="btn--accent">Muat lebih banyak</Button>
                                </div>
                            </div>
                        )}
                        {activeTab === 'Sports' && (
                             <div className="p-8 text-center text-muted-foreground">
                                Riwayat untuk {activeTab} akan ditampilkan di sini.
                            </div>
                        )}
                    </CardContent>
                </Card>
            </main>
            <Footer />
        </SidebarInset>
      </div>
    </>
    );
}
