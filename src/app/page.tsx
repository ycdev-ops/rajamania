
"use client";

import { useRef } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroBanner } from '@/components/sections/hero-banner';
import { PromoSection } from '@/components/sections/promo-section';
import { RunningText } from '@/components/sections/running-text';
import { FloatingPromo } from '@/components/sections/floating-promo';
import { LiveChat, type LiveChatRef } from '@/components/sections/live-chat';
import { GameShowcase } from '@/components/sections/game-showcase';
import { GameCard } from '@/components/sections/game-card';
import { Sidebar, SidebarInset } from '@/components/ui/sidebar';
import { MobileNav } from '@/components/layout/mobile-nav';
import { LeftFloatingPromo } from '@/components/sections/left-floating-promo';
import { BreadcrumbNav } from '@/components/layout/breadcrumb-nav';

export default function Home() {
  const liveChatRef = useRef<LiveChatRef>(null);

  return (
    <>
      <Sidebar side="left" collapsible="offcanvas">
        <MobileNav />
      </Sidebar>
      <div className="flex min-h-screen flex-col bg-background">
        <Header />
        <SidebarInset>
          <BreadcrumbNav />
          <main className="container mx-auto px-2 md:px-4">
            <RunningText />
            <section className="grid grid-cols-1 gap-2">
                <div className="col-span-full">
                    <HeroBanner />
                </div>
                <div className="col-span-full">
                    <PromoSection />
                </div>
                <div className='col-span-full'>
                  <GameShowcase />
                </div>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mt-2">
                 <GameCard title="Sports+" icon="/_nuxt/img/sports-muted.aba62f9.svg" image="https://cdn-proxy.globalcontentcloud.com/common/default/sport.png" cta="Main Sports+" />
                 <GameCard title="Lotto" icon="/_nuxt/img/lotto-muted.42a4023.svg" image="https://cdn-proxy.globalcontentcloud.com/common/default/lotto.png" cta="Main Lotto" />
                 <GameCard title="Poker" icon="/_nuxt/img/poker-muted.a0c9bb9.svg" image="https://cdn-proxy.globalcontentcloud.com/common/default/poker.png" cta="Main Poker" />
                 <GameCard title="Fishing" icon="/_nuxt/img/fishing-muted.3bbc777.svg" image="https://cdn-proxy.globalcontentcloud.com/common/default/fishing.png" cta="Main Fishing" />
            </section>
          </main>
          <Footer />
        </SidebarInset>
      </div>
      <LeftFloatingPromo />
      <FloatingPromo liveChatRef={liveChatRef} />
      <LiveChat ref={liveChatRef} />
    </>
  );
}
