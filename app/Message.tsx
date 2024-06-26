'use strict';

import DOMPurify from 'dompurify';
import parse from 'html-react-parser';
import { useEffect, useState } from 'react';
import { JSX } from 'react';
import ReactMarkdown from 'react-markdown';

export const Message = () => {
  const [html, setHtml] = useState<string | JSX.Element | JSX.Element[]>('');
  const [md, setMd] = useState<string>('');

  useEffect(() => {
    fetch('http://localhost:8787/api/jsx')
      .then((res) => res.text())
      .then((data) => {
        const sanitizedHtml = DOMPurify.sanitize(data);
        const html = parse(sanitizedHtml);
        setHtml(html);
      });
  }, []);

  useEffect(() => {
    fetch('http://localhost:8787/api/md')
      .then((res) => res.text())
      .then((data) => {
        setMd(data);
      });
  }, []);

  return (
    <div
      style={{
        width: '1000px',
        height: '500px',
      }}
    >
      <h2>1. 目的</h2>
      {html}
      <ReactMarkdown>{md}</ReactMarkdown>
    </div>
  );
};
