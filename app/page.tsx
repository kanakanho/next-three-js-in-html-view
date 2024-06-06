'use client';

import { Html } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { ARButton } from '@react-three/xr';
import { Message } from './Message';

export default function Home() {
  return (
    <>
      <ARButton />
      <Canvas style={{ width: '100vw', height: '100vh' }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Html position={[-3, 3, 0]}>
          <Message />
        </Html>
      </Canvas>
    </>
  );
}
