

"use client";

import { useState, useImperativeHandle, forwardRef, FormEvent, useRef, useEffect, KeyboardEvent } from 'react';
import Image from "next/image";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { X, MessageSquare, Minus, ArrowLeft, MoreHorizontal, Smile, Paperclip, SendHorizonal, User as UserIcon } from 'lucide-react';
import { chat, type ChatInput } from '@/ai/flows/chat-flow';
import { cn } from '@/lib/utils';


export interface LiveChatRef {
  openChat: () => void;
}

interface Message {
    role: 'info' | 'model' | 'user';
    content: string;
    time?: string;
}

interface UserInfo {
    username: string;
    helpTopic: string;
}

export const LiveChat = forwardRef<LiveChatRef, {}>((props, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [chatView, setChatView] = useState<'welcome' | 'form' | 'chatting'>('welcome');
    
    const [userInfo, setUserInfo] = useState<UserInfo>({ username: '', helpTopic: '' });
    const [messages, setMessages] = useState<Message[]>([]);

    useImperativeHandle(ref, () => ({
        openChat: () => {
            setIsOpen(true);
            setChatView('welcome');
            setMessages([]);
            setUserInfo({ username: '', helpTopic: '' });
        }
    }));

    const handleFormSubmit = (e: FormEvent) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const usernameInput = form.querySelector<HTMLInputElement>('input[name="username"]');
        const helpTopicInput = form.querySelector<HTMLInputElement>('input[name="helpTopic"]:checked');
        
        if (usernameInput && usernameInput.value && helpTopicInput) {
            const currentUserInfo = {
                username: usernameInput.value,
                helpTopic: helpTopicInput.value
            };
            setUserInfo(currentUserInfo);
            
            const now = new Date();
            const initialMessages: Message[] = [
                { role: 'info', content: `Username: ${currentUserInfo.username}\nBantuan: ${currentUserInfo.helpTopic}` },
                { role: 'model', content: 'Halo! Saya dapat membantu apa?', time: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) },
            ];
            setMessages(initialMessages);

            setChatView('chatting');
        } else if (!usernameInput?.value) {
            alert("Username tidak boleh kosong.");
        } else if (!helpTopicInput) {
            alert("Silakan pilih topik bantuan.");
        }
    };
    
    const WelcomeView = () => {
        const quickLinks = [
            { name: "Whatsapp", href: "#" },
            { name: "RTP Slot", href: "#" },
        ];
        return (
            <>
                <div className="flex-grow bg-background p-6 flex flex-col items-center text-center">
                    <a href="#" className="mb-4">
                        <Image 
                          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgVUM9OzT0I8cWW4xLrv5wIdAPE1C04yVXTYA7NPtA8esmAFnNBpBKfMaQkNgXUrh9y5CIdiPCjiAHbHCkHJFoPL9Q5q4rASLuRo4JiULx7aPcTQp0qoUo8YxohCk7PnmvptKYXAFaHhWRgH5U-M3flrpO_yEeq16VjGhdPfUDjeDI3GypR4mV-wYlTqu8R/s1600/logo%20hitam.jpg" 
                          alt="RAJAMANIA" 
                          width={180} 
                          height={48} 
                          className="object-contain"
                          data-ai-hint="company logo"
                        />
                    </a>
                    <h2 className="text-lg font-bold text-white">Selamat datang di Rajamania</h2>
                    <p className="text-sm text-muted-foreground mt-2 mb-6">
                        Kami siap membantu anda jika memiliki pertanyaan atau kendala apapun ya bosku.
                    </p>
                    <div className="w-full space-y-2 mb-4">
                        {quickLinks.map(link => (
                            <Button key={link.name} className="w-full btn--brand h-11">
                                {link.name}
                            </Button>
                        ))}
                    </div>
                    <Button className="w-full btn--brand h-12 text-base font-bold mt-auto" onClick={() => setChatView('form')}>
                        <MessageSquare className="mr-2 h-5 w-5" />
                        Mulai Obrolan
                    </Button>
                </div>
                 <footer className="p-2 bg-[#2d2d2d] flex items-center justify-center gap-1">
                    <span className="text-xs text-muted-foreground">Powered by</span>
                    <Image src="https://rajamaniaman.com/img/livechat-logo.svg" width={16} height={16} alt="LiveChat"/>
                    <span className="text-xs font-bold text-white">LiveChat</span>
                </footer>
            </>
        );
    };

    const FormView = () => {
        const helpOptions = ["Deposit", "Withdraw", "Daftar", "Lupa Password", "Bantuan Lainnya"];
        const welcomeMessage = `<strong>Selamat datang di RAJAMANIA Situs Slot Paling Gacor &amp; Bandar Bola Terpercaya.</strong>
~
<strong>Tersedia Bonus Terbesar</strong>
🔥 Bonus Rollingan Slot 0.5%
🔥 Bonus Rollingan Live Game 0.5%
🔥 Bonus Cashback Slot 5%
🔥 Bonus Cashback Sport 5%
~
<strong>Tersedia Deposit Bank &amp; E-Wallet</strong>
Minimal Deposit Rp10.000,-
~
<strong>Link RTP SLOT</strong>: <a rel="nofollow noopener" target="_blank" href="https://heylink.me/rajamania/" class="text-primary hover:underline">https://heylink.me/rajamania/</a>
~
<strong>Whatsapp</strong>: <a rel="nofollow noopener" target="_blank" href="https://wa.me/6285211455741" class="text-primary hover:underline">https://wa.me/6285211455741</a>`;

        return (
             <form onSubmit={handleFormSubmit} className="flex flex-col h-full bg-background text-sm">
                <div className="flex-grow p-4 overflow-y-auto space-y-6">
                    <div className="flex gap-3">
                         <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-1 overflow-hidden">
                            <Image alt="Current agent's avatar" draggable={false} src="https://cdn.files-text.com/api/accounts/avatars/810d620b-286e-47c5-ac7c-ead04f56f4a4/e87a1a04-6815-4fc9-ab56-1e7aa35cd6c1/869a989b-da1b-473f-9222-e606d901bce2.jpeg" width={32} height={32} className="w-full h-full object-cover"/>
                        </div>
                        <div className="bg-secondary p-3 rounded-lg rounded-tl-none">
                            <div className="text-white/90" dangerouslySetInnerHTML={{ __html: welcomeMessage.replace(/~/g, '<br /><br />') }} />
                        </div>
                    </div>
                    
                    <div className="space-y-1">
                        <Label htmlFor="username" className="text-white/90">User ID / Username</Label>
                        <Input id="username" name="username" className="bg-secondary border-border" required />
                    </div>

                    <RadioGroup name="helpTopic" required>
                        <Label className="text-white/90 mb-2 block">Bantuan:</Label>
                        <div className="space-y-2">
                        {helpOptions.map((option, index) => (
                            <div key={option} className="flex items-center space-x-2">
                                <RadioGroupItem value={option} id={`help-${index}`} />
                                <Label htmlFor={`help-${index}`} className="font-normal text-white/80">{option}</Label>
                            </div>
                        ))}
                        </div>
                    </RadioGroup>
                    <Button type="submit" className="w-full btn--brand uppercase font-bold">kirim</Button>
                </div>
            </form>
        )
    };
    
    const ChattingView = () => {
      const [inputMessage, setInputMessage] = useState('');
      const [isTyping, setIsTyping] = useState(false);
      const chatContainerRef = useRef<HTMLDivElement>(null);
      const inputRef = useRef<HTMLInputElement>(null);

      useEffect(() => {
          if (chatContainerRef.current) {
              chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
          }
      }, [messages, isTyping]);

      useEffect(() => {
          if(!isTyping) {
              inputRef.current?.focus();
          }
      }, [isTyping, messages]);

      const handleSendMessage = async (e?: FormEvent) => {
        if(e) e.preventDefault();
        if(!inputMessage.trim() || isTyping) return;

        const now = new Date();
        const userMessage: Message = {
            role: 'user',
            content: inputMessage,
            time: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        
        const newMessages = [...messages, userMessage];
        setMessages(newMessages);
        setInputMessage('');
        setIsTyping(true);

        const chatHistory = newMessages
          .filter(msg => msg.role === 'user' || msg.role === 'model')
          .map(msg => ({
            role: msg.role as 'user' | 'model',
            content: msg.content || ''
        }));
        
        try {
            const aiResponseText = await chat({
                history: chatHistory,
                user: {
                    username: userInfo.username,
                    helpTopic: userInfo.helpTopic,
                }
            });

            const aiMessage: Message = {
                role: 'model',
                content: aiResponseText,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };
            setMessages(prev => [...prev, aiMessage]);
        } catch(error) {
            console.error("Error getting AI response:", error);
             const errorMessage: Message = {
                role: 'model',
                content: 'Maaf, sedang terjadi gangguan. Silakan coba lagi nanti.',
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsTyping(false);
        }
    }

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            handleSendMessage();
        }
    };
      
      return (
        <div className="flex flex-col h-full bg-background text-white">
          <header className="relative p-3 bg-[#2d2d2d] flex items-center justify-between border-b border-border/50">
              <div className="flex items-center gap-3">
                  <Button variant="ghost" size="icon" className="text-white/70 hover:bg-white/10 hover:text-white h-8 w-8" onClick={() => setChatView('form')}>
                      <ArrowLeft className="h-5 w-5" />
                  </Button>
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center overflow-hidden">
                         <Image alt="Current agent's avatar" draggable={false} src="https://cdn.files-text.com/api/accounts/avatars/810d620b-286e-47c5-ac7c-ead04f56f4a4/e87a1a04-6815-4fc9-ab56-1e7aa35cd6c1/869a989b-da1b-473f-9222-e606d901bce2.jpeg" width={40} height={40} className="w-full h-full object-cover"/>
                    </div>
                    <div className="absolute top-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#2d2d2d] rounded-full"></div>
                  </div>
                  <div className="flex flex-col">
                      <h3 className="font-bold text-sm">Raja Mania</h3>
                      <p className="text-xs text-muted-foreground">Customer Support</p>
                  </div>
              </div>
              <div className="flex items-center">
                  <Button variant="ghost" size="icon" className="text-white/70 hover:bg-white/10 hover:text-white h-8 w-8" onClick={() => setIsOpen(false)}>
                      <Minus className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-white/70 hover:bg-white/10 hover:text-white h-8 w-8" onClick={() => setIsOpen(false)}>
                      <X className="h-5 w-5" />
                  </Button>
              </div>
          </header>
          
          <div ref={chatContainerRef} className="flex-grow p-4 overflow-y-auto space-y-4">
              {messages.map((msg, index) => {
                  if (msg.role === 'info') {
                      const [username, helpTopic] = msg.content.split('\n');
                      return (
                          <div key={index} className="border border-border bg-secondary/30 rounded-lg p-3 text-xs">
                              <p><strong className="text-muted-foreground">{username.split(':')[0]}:</strong> {username.split(':')[1]}</p>
                              <p><strong className="text-muted-foreground">{helpTopic.split(':')[0]}:</strong> {helpTopic.split(':')[1]}</p>
                          </div>
                      );
                  }
                  if (msg.role === 'model') {
                      return (
                          <div key={index} className="flex gap-3 justify-start">
                              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 overflow-hidden">
                                  <Image alt="Current agent's avatar" draggable={false} src="https://cdn.files-text.com/api/accounts/avatars/810d620b-286e-47c5-ac7c-ead04f56f4a4/e87a1a04-6815-4fc9-ab56-1e7aa35cd6c1/869a989b-da1b-473f-9222-e606d901bce2.jpeg" width={32} height={32} className="w-full h-full object-cover"/>
                              </div>
                              <div className="bg-secondary p-3 rounded-lg rounded-tl-none max-w-[80%]">
                                  <p>{msg.content}</p>
                                  <p className="text-xs text-muted-foreground text-right mt-1">{msg.time}</p>
                              </div>
                          </div>
                      );
                  }
                  if (msg.role === 'user') {
                      return (
                           <div key={index} className="flex gap-3 justify-end">
                              <div className="bg-primary text-primary-foreground p-3 rounded-lg rounded-tr-none max-w-[80%]">
                                  <p>{msg.content}</p>
                                  <p className="text-xs text-primary-foreground/70 text-right mt-1">{msg.time}</p>
                              </div>
                          </div>
                      );
                  }
                  return null;
              })}
              {isTyping && (
                 <div className="flex gap-3 justify-start">
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 overflow-hidden">
                        <Image alt="Current agent's avatar" draggable={false} src="https://cdn.files-text.com/api/accounts/avatars/810d620b-286e-47c5-ac7c-ead04f56f4a4/e87a1a04-6815-4fc9-ab56-1e7aa35cd6c1/869a989b-da1b-473f-9222-e606d901bce2.jpeg" width={32} height={32} className="w-full h-full object-cover"/>
                    </div>
                    <div className="bg-secondary p-3 rounded-lg rounded-tl-none max-w-[80%] flex items-center space-x-1">
                        <span className="h-2 w-2 bg-muted-foreground rounded-full animate-pulse [animation-delay:-0.3s]"></span>
                        <span className="h-2 w-2 bg-muted-foreground rounded-full animate-pulse [animation-delay:-0.15s]"></span>
                        <span className="h-2 w-2 bg-muted-foreground rounded-full animate-pulse"></span>
                    </div>
                </div>
              )}
              { !isTyping && messages[messages.length - 1]?.role === 'user' && <div className="text-right text-xs text-muted-foreground pr-2">Terkirim</div>}
          </div>
          
           <form onSubmit={handleSendMessage} className="p-2 bg-[#2d2d2d] border-t border-border/50">
              <div className="flex items-center gap-2 bg-background p-1 rounded-md">
                   <Button type="button" variant="ghost" size="icon" className="text-muted-foreground h-8 w-8">
                      <Smile />
                  </Button>
                  <Input 
                      ref={inputRef}
                      placeholder="Tulis pesan..."
                      className="bg-transparent border-none focus-visible:ring-0 focus-visible:ring-offset-0 flex-grow h-8"
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyDown={handleKeyDown}
                      disabled={isTyping}
                  />
                  <Button type="button" variant="ghost" size="icon" className="text-muted-foreground h-8 w-8">
                      <Paperclip />
                  </Button>
                  <Button type="submit" size="icon" className={cn("bg-primary hover:bg-primary/90 h-8 w-8 rounded-md", (isTyping || !inputMessage.trim()) && "opacity-50 cursor-not-allowed")} disabled={isTyping || !inputMessage.trim()}>
                      <SendHorizonal />
                  </Button>
              </div>
          </form>
        </div>
      );
    };
    
    const renderContent = () => {
        switch (chatView) {
            case 'form':
                return <FormView />;
            case 'chatting':
                return <ChattingView />;
            case 'welcome':
            default:
                return <WelcomeView />;
        }
    }

    if (isOpen) {
        return (
            <div className="fixed bottom-4 right-4 z-50 w-[360px] h-[520px] bg-[#1a1a1a] border border-border/50 rounded-lg shadow-2xl flex flex-col overflow-hidden">
                 <header className={cn("relative p-3 bg-[#2d2d2d] flex items-center justify-between", chatView === 'chatting' && 'hidden')}>
                    <div className="flex items-center gap-2">
                         <Image 
                          src="https://rajamaniaman.com/img/livechat-logo.svg"
                          width={32}
                          height={32}
                          alt="Raja Mania Customer Support"
                         />
                         <div className='flex flex-col'>
                            <h3 className="text-white text-sm font-bold">Live Chat</h3>
                            <span className='text-xs text-white/70'>Customer Support</span>
                         </div>
                    </div>
                    <div className="flex items-center">
                        <Button variant="ghost" size="icon" className="text-white/70 hover:bg-white/10 hover:text-white h-8 w-8" onClick={() => setIsOpen(false)}>
                            <Minus className="h-5 w-5" />
                        </Button>
                        <Button variant="ghost" size="icon" className="text-white/70 hover:bg-white/10 hover:text-white h-8 w-8" onClick={() => setIsOpen(false)}>
                            <X className="h-5 w-5" />
                        </Button>
                    </div>
                </header>
                {renderContent()}
            </div>
        )
    }

    return (
         <div className="fixed bottom-4 right-4 z-40 cursor-pointer" onClick={() => { setIsOpen(true); setChatView('welcome'); setMessages([]); }}>
            <Button className="btn--brand h-12 px-6 rounded-full font-bold shadow-lg flex items-center gap-2">
                <span>Ngobrol sekarang</span>
                <MessageSquare className="h-5 w-5" />
            </Button>
        </div>
    )
});

LiveChat.displayName = 'LiveChat';
