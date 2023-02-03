import React from 'react'
import { PrismicRichText } from '@prismicio/react'


const BoldCta = ({ slice }) => {
  const { title, cta, link, blurb, background } = slice.primary;

  return (
    <div
      className={`flex flex-col items-center justify-center text-center h-screen`} style={{
        background:background
      }}
    >
      {title && <h2 className="text-3xl font-bold">{title}</h2>}
      {blurb && (
<PrismicRichText field={slice.primary.blurb} />
      )}
      {cta && link && (
        <a
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 mt-4 text-lg font-bold text-white bg-indigo-500 rounded-full"
        >
          {cta}
        </a>
      )}
    </div>
  );
};

export default BoldCta;
