
"use client";

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Sidebar, SidebarInset } from '@/components/ui/sidebar';
import { MobileNav } from '@/components/layout/mobile-nav';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { ArrowUp, TriangleAlert, Landmark } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { BreadcrumbNav } from '@/components/layout/breadcrumb-nav';
import { WithdrawNotes } from '@/components/sections/withdraw-notes';

export default function WithdrawPage() {
  return (
    <>
      <Sidebar side="left" collapsible="offcanvas">
        <MobileNav />
      </Sidebar>
      <div className="flex min-h-screen flex-col bg-background">
        <Header />
        <SidebarInset>
            <BreadcrumbNav activePage="Withdraw" />
            <main className="container mx-auto px-4 py-8">
                <Card className="bg-card border-none text-white max-w-4xl mx-auto">
                    <CardHeader>
                        <div className="flex items-center gap-3">
                           <ArrowUp className="w-8 h-8 p-1.5 bg-secondary text-white rounded-md" />
                           <h2 className="text-2xl font-bold text-white">Withdraw</h2>
                        </div>
                    </CardHeader>
                    <CardContent className="grid grid-cols-1 md:grid-cols-9 gap-8 items-start p-6">
                        <div className="md:col-span-5 space-y-6">
                            <div className='space-y-4'>
                                <div>
                                    <Label htmlFor='amount' className='mb-2 block'>Jumlah Penarikan</Label>
                                    <Input id="amount" type="number" placeholder="Masukkan jumlah penarikan" className="bg-background border-border" />
                                </div>
                                 <div className="bg-secondary p-4 rounded-md">
                                    <p className="text-sm text-muted-foreground">Anda menarik dana ke:</p>
                                    <div className="flex items-center gap-3 mt-2">
                                        <Landmark className="h-8 w-8 text-primary" />
                                        <div>
                                            <p className="font-bold text-white">Levin Santa Joy (DANA)</p>
                                            <p className="text-sm text-muted-foreground">**** **** 6650</p>
                                        </div>
                                    </div>
                                </div>
                                <Button type="submit" className="w-full btn--accent font-bold">Kirim</Button>
                            </div>
                        </div>
                        
                        <div className="md:col-span-4">
                           <WithdrawNotes />
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

    