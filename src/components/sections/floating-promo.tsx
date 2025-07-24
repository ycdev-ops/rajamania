
"use client";

import Image from "next/image";
import type { LiveChatRef } from "./live-chat";
import { useRef } from "react";

// This component is now only for triggering the LiveChat modal
// So we pass the liveChatRef to it from the parent page.
export const FloatingPromo = ({ liveChatRef }: { liveChatRef: React.RefObject<LiveChatRef> }) => {
    const handleOpenChat = () => {
        liveChatRef.current?.openChat();
    };

    return (
        <aside 
            className="hidden lg:block fixed bottom-[88px] right-4 z-40 cursor-pointer"
            onClick={handleOpenChat}
        >
            <Image 
                src="https://cdn.livechat-files.com/api/file/lc/main/16246374/0/ec/32103cf8f14282b68af7fc80579d0f97.gif" 
                width={240} 
                height={152} 
                alt="Hubungi Kami Disini"
                className="w-[240px] h-[152px]"
                unoptimized
                data-ai-hint="astronaut space" />
        </aside>
    )
}
