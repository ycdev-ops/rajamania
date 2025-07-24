import * as React from 'react';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const navItems = [
    { name: 'Sports+', href: '#' },
    { name: 'Slots', href: '#', active: true },
    { name: 'Casino', href: '#'},
    { name: 'Lotto', href: '#' },
    { name: 'Fishing', href: '#' },
    { name: 'Poker', href: '#' },
    { name: 'Arcade', href: '#' },
    { name: 'Promosi', href: '#' },
    { name: 'Leaderboard', href: '#' },
    { name: 'Referral', href: '#' },
    { name: 'Kontak', href: '#' },
];

interface BreadcrumbNavProps {
    activePage?: string;
}

export const BreadcrumbNav = ({ activePage }: BreadcrumbNavProps) => {
  return (
    <nav className="bg-card text-sm text-foreground shadow-sm">
        <ul className="container mx-auto px-4 flex items-center h-10 overflow-x-auto whitespace-nowrap space-x-2">
            <li>
                <Link href="/" className="hover:text-primary">
                    Beranda
                </Link>
            </li>
            
            {activePage && (
                <>
                    <li>
                        <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    </li>
                    <li>
                        <span className="font-semibold text-primary">{activePage}</span>
                    </li>
                </>
            )}

            {navItems.map((item) => (
                <React.Fragment key={item.name}>
                    <li>
                        <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    </li>
                    <li>
                        <Link href={item.href} className={cn("hover:text-primary", item.active && !activePage && "text-primary font-semibold")}>
                           {item.name}
                        </Link>
                    </li>
                </React.Fragment>
            ))}
        </ul>
    </nav>
  );
};
