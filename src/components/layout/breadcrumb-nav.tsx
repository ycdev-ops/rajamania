
import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const navItems = [
    { name: 'Sports+', href: '#', icon: 'https://rajamaniasol.com/assets/images/icons/menu-items/sports.png' },
    { name: 'Slots', href: '#', icon: 'https://rajamaniasol.com/assets/images/icons/menu-items/slots.png' },
    { name: 'Casino', href: '#', icon: 'https://rajamaniasol.com/assets/images/icons/menu-items/casino.png'},
    { name: 'Lotto', href: '#', icon: 'https://rajamaniasol.com/assets/images/icons/menu-items/lotto.png' },
    { name: 'Fishing', href: '#', icon: 'https://rajamaniasol.com/assets/images/icons/menu-items/fishing.png' },
    { name: 'Poker', href: '#', icon: 'https://rajamaniasol.com/assets/images/icons/menu-items/poker.png' },
    { name: 'Arcade', href: '#', icon: 'https://rajamaniasol.com/assets/images/icons/menu-items/arcade.png' },
    { name: 'Promosi', href: '#', icon: 'https://rajamaniasol.com/assets/images/icons/menu-items/promo.png' },
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
             <ul className="flex items-stretch justify-start">
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
