'use strict';

import Image from 'next/image';

export const Message = () => {
  return (
    <div
      style={{
        width: '1000px',
        border: 'solid aqua',
        backgroundColor: 'rgba(255,255,99,0.4)',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '20px',
      }}
    >
      <h2>1. 目的</h2>
      <p>
        SNS を使う中でアカウントの共有をより簡単にするために制作した。Twitter や Instgram , Github
        などのサービスは個人がそれぞれのアカウントを持っている。しかしそれらは関連付けられず、他の人にアカウントを教えるときにはそれぞれのアカウントを
        1
        つずつ教える必要があり手間である。その問題に加えてスライドや資料ではなく自分自身について簡単な説明が行えるツールがあるとアカウント交換だけに留まらない交流を生み出せると考えた。そして
        1
        つのサービスに全てのアカウントを紐づけて管理でき、かつこれまでの自分の活動についてサムネイルとテキストで説明するサイトを簡単に作れるシステムとして制作した。
      </p>
      <h2>2. 機能</h2>
      <p>
        アプリにはユーザーが作った json ファイル元に web
        サイトを構築する機能とログインしてユーザーのリンクを発行する機能、またユーザー検索機能がある。中心となる機能はアプリのユーザーが作成した
        json ファイルに従って、誰でも閲覧可能な共有用のリンクを作成し、整形された web
        サイトとして表示するものである。図 1,2 にアプリケーションの実際の画面を示す。
      </p>
      <figure>
        <Image src='/icon-192x192.png' alt='aaa' width={400} height={400} />
        <figcaption>図12 データの受け渡しの様子（一部抜粋）</figcaption>
      </figure>
    </div>
  );
};
