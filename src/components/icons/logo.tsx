import Image from 'next/image';
import type { ComponentProps } from 'react';

export const Logo = (props: Omit<ComponentProps<typeof Image>, 'src' | 'alt' | 'width' | 'height'>) => (
  <Image 
    src="https://cdn-proxy.globalcontentcloud.com/562/logo/logo.png" 
    alt="Rajamania" 
    width={160} 
    height={34}
    {...props}
  />
);
