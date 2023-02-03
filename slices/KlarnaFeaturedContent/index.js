import { PrismicRichText } from '@prismicio/react'
import React from "react";

const KlarnaFeaturedContent = ({ slice }) => {

  const { image, title, kicker_title, main_content, link, cta } = slice.primary;

  console.log(JSON.stringify(slice, null, 2));
  console.log(JSON.stringify(slice.variation, null, 2));
  return (
    <>
      {slice.variation === 'default' && (
        <div className='flex'>
          <img src={image.url} alt={image.alt} className='w-64' />
          <div className='ml-6'>
            {kicker_title && (
              <p className='text-sm font-medium'>{kicker_title}</p>
            )}
            <p className='text-4xl font-bold'>{title}</p>
            <div className='leading-relaxed'>
              <PrismicRichText field={main_content} />
            </div>
            {cta && link.url && (
              <a
                href={link.url}
                className='mt-4 rounded-lg bg-indigo-500 px-4 py-2 text-white hover:bg-indigo-600'
              >
                {cta}
              </a>
            )}
          </div>
        </div>
      )}
      {slice.variation === 'flipped' && (
        <div className='flex'>
          <div className='ml-6' style={{ paddingRight: 20 }}>
            {kicker_title && (
              <p className='text-sm font-medium'>{kicker_title}</p>
            )}
            <p className='text-4xl font-bold'>{title}</p>
            <div className='leading-relaxed'>
              <PrismicRichText field={main_content} />
            </div>
            {cta && link.url && (
              <a
                href={link.url}
                className='mt-4 rounded-lg bg-indigo-500 px-4 py-2 text-white hover:bg-indigo-600'
              >
                {cta}
              </a>
            )}
          </div>
          <img src={image.url} alt={image.alt} className='w-64' />
        </div>
      )}
    </>
  );
};

export default KlarnaFeaturedContent;