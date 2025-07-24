import Image from "next/image";
import { Button } from "../ui/button";

interface GameCardProps {
    title: string;
    icon: string;
    image: string;
    cta: string;
}

export const GameCard = ({ title, icon, image, cta }: GameCardProps) => {
    return (
        <div className="bg-secondary p-4 rounded-md flex flex-col gap-4">
             <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Image src={icon} width={32} height={32} alt={title} />
                    <h3 className="text-lg font-bold text-white">{title}</h3>
                </div>
                <Button variant="outline" size="sm" className="text-xs">Lihat semua</Button>
            </div>
            <div>
                <Image src={image} width={600} height={200} alt={title} className="rounded-md w-full aspect-[16/6] object-cover" data-ai-hint={title} />
            </div>
            <Button className="btn--brand w-full">{cta}</Button>
        </div>
    )
}
