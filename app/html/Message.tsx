'use strict';

import DOMPurify from 'dompurify';
import parse from 'html-react-parser';
import { useEffect, useState } from 'react';
import { JSX } from 'react';
import { ToHtml } from '../components/ToHtml';

export const Message = () => {
  const [html, setHtml] = useState<string | JSX.Element | JSX.Element[]>('');
  const [md, setMd] = useState<string>('');
  const [css, setCss] = useState<string>('');

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

  useEffect(() => {
    fetch('http://localhost:8787/api/css')
      .then((res) => res.text())
      .then((data) => {
        setCss(data);
      });
  }, []);

  return (
    <>
      <style>{css}</style>
      <div className='markdown'>{html}</div>
      <ToHtml content={md} styles={css} />
    </>
  );
};
