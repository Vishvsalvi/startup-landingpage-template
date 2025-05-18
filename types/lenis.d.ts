declare module 'lenis/react' {
  import React from 'react';
  
  interface LenisProps {
    children: React.ReactNode;
    root?: boolean;
    options?: any;
  }

  const ReactLenis: React.FC<LenisProps>;
  export default ReactLenis;
} 