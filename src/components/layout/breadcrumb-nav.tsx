
import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const navItems = [
    { name: 'Sports+', href: '#', icon: '/assets/sports.5879738.svg' },
    { name: 'Slots', href: '#', icon: '/assets/slots.ddf496a.svg' },
    { name: 'Casino', href: '#', icon: '/assets/casino.01e8b7b.svg'},
    { name: 'Lotto', href: '#', icon: '/assets/lotto.6e10ea7.svg' },
    { name: 'Fishing', href: '#', icon: '/assets/fishing.62277f4.svg' },
    { name: 'Poker', href: '#', icon: '/assets/poker.41b5642.svg' },
    { name: 'Arcade', href: '#', icon: '/assets/arcade.3a38b14.svg' },
    { name: 'Promosi', href: '#', icon: '/assets/promo.57bb699.svg' },
    { name: 'Leaderboard', href: '#', icon: 'https://rajamaniasol.com/assets/images/icons/menu-items/leaderboard.png' },
    { name: 'Referral', href: '#', icon: 'https://rajamaniasol.com/assets/images/icons/menu-items/referral.png' },
    { name: 'Kontak', href: '#', icon: 'https://rajamaniasol.com/assets/images/icons/menu-items/contact.png' },
];

interface BreadcrumbNavProps {
    activePage?: string;
}

const NavMenu = () => {
    const pathname = usePathname();
    // A simple way to determine active state. In a real app, this would be more robust.
    const isActive = (href: string) => href !== '#' && pathname.startsWith(href);

    return (
        <nav className="app-menu app-menu--primary">
             <ul className="flex items-stretch justify-start overflow-x-auto hide-scrollbar">
                {navItems.map((item) => (
                    <li key={item.name} className="app-menu__item flex-shrink-0">
                        <Link href={item.href} className={cn("app-menu__link", isActive(item.href) && 'app-menu--active')}>
                            <Image src={item.icon} alt={item.name} width={28} height={28} className="h-7 w-7 object-contain" />
                            <span>{item.name}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};


export const BreadcrumbNav = ({ activePage }: BreadcrumbNavProps) => {
    if (activePage) {
        // You can decide how to render the breadcrumb for active pages
        // For now, we will just render the NavMenu
        return <NavMenu />;
    }
  
    return <NavMenu />;
};
