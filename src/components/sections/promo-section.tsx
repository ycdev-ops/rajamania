import { Button } from '@/components/ui/button';
import { History, Medal, Handshake } from 'lucide-react';

const promoButtons = [
    { label: "Promosi", icon: Medal, className: "btn-accent-secondary" },
    { label: "Histori", icon: History, className: "btn-accent" },
    { label: "Deposit", icon: Handshake, className: "btn-success" },
]

export const PromoSection = () => {
  return (
    <div className="my-2 grid grid-cols-3 gap-2">
        {promoButtons.map(btn => (
             <Button key={btn.label} className={`${btn.className} w-full h-10 text-sm`}>
                <btn.icon className="mr-2 h-5 w-5"/>
                {btn.label}
             </Button>
        ))}
    </div>
  )
}
