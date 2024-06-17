'use client';

import { Html } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { ARButton } from '@react-three/xr';
import { useEffect, useState } from 'react';
import { ToHtml } from '../components/ToHtml';

export default function Home() {
  const [md, setMd] = useState<string>('');
  const [css, setCss] = useState<string>('');

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/kanakanho/ShareLinks/main/README.md')
      .then((res) => res.text())
      .then((data) => {
        setMd(data);
      });
  }, []);

  useEffect(() => {
    fetch('http://localhost:8787/api/css')
      .then((res) => res.text())
      .then((data) => {
        setCss(data);
      });
  }, []);
  return (
    <>
      <ARButton />
      <Canvas style={{ width: '100vw', height: '100vh' }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Html position={[-3, 3, 0]}>
          <ToHtml content={md} styles={css} />
        </Html>
      </Canvas>
    </>
  );
}
