import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Sidebar, SidebarInset } from '@/components/ui/sidebar';
import { MobileNav } from '@/components/layout/mobile-nav';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function RegisterPage() {
  return (
    <>
      <Sidebar side="left" collapsible="offcanvas">
        <MobileNav />
      </Sidebar>
      <div className="flex min-h-screen flex-col bg-background">
        <Header />
        <SidebarInset>
            <main className="container mx-auto px-4 py-8">
                <Card className="bg-secondary border-none text-white max-w-2xl mx-auto">
                    <CardHeader>
                        <CardTitle className="text-primary text-2xl font-bold text-center">Buat Akun</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form className="space-y-6">
                            <div>
                                <Label htmlFor="username">Username</Label>
                                <Input id="username" placeholder="Masukkan username Anda" className="bg-background border-border mt-1" />
                            </div>
                             <div>
                                <Label htmlFor="password">Kata Sandi</Label>
                                <Input id="password" type="password" placeholder="Masukkan kata sandi" className="bg-background border-border mt-1" />
                            </div>
                            <div>
                                <Label htmlFor="confirm-password">Konfirmasi Kata Sandi</Label>
                                <Input id="confirm-password" type="password" placeholder="Konfirmasi kata sandi Anda" className="bg-background border-border mt-1" />
                            </div>
                            <div>
                                <Label htmlFor="email">E-mail</Label>
                                <Input id="email" type="email" placeholder="Masukkan email Anda" className="bg-background border-border mt-1" />
                            </div>
                             <div>
                                <Label htmlFor="phone">Nomor Telepon</Label>
                                <Input id="phone" type="tel" placeholder="Masukkan nomor telepon Anda" className="bg-background border-border mt-1" />
                            </div>
                            <Button type="submit" className="w-full btn--success text-lg font-bold">Daftar</Button>
                        </form>
                    </CardContent>
                </Card>
            </main>
            <Footer />
        </SidebarInset>
      </div>
    </>
  );
}
