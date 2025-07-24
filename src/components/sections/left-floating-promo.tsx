import Image from "next/image";

export const LeftFloatingPromo = () => {
    return (
        <aside className="hidden lg:block fixed bottom-4 left-4 z-40">
            <a href="#">
                 <Image 
                    src="https://cdn.globalcontentcloud.com/icons/icon_production_562_7109.gif" 
                    width={150} 
                    height={150} 
                    alt="RTP SLOT RAJAMANIA"
                    unoptimized={true}
                    data-ai-hint="slot machine" />
            </a>
        </aside>
    )
}
