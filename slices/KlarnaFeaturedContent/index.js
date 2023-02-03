import { PrismicRichText } from '@prismicio/react'
import React from "react";

const KlarnaFeaturedContent = ({ slice }) => {
  const { image, title, kicker_title, main_content, link, cta } = slice.primary;

  return (
    <div className="flex">
      <img src={image.url} alt={image.alt} className="w-64" />
      <div className="ml-6">
        {kicker_title && (
          <p className="text-sm font-medium">{kicker_title}</p>
        )}
        <p className="text-4xl font-bold">{title}</p>
        <div className="leading-relaxed">
<PrismicRichText field={slice.primary.main_content} />
          
        </div>
        {cta && link.url && (

        <a href={link.url} className="mt-4 bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600">
          {cta}
        </a>
        )}
      </div>
    </div>
  );
};

export default KlarnaFeaturedContent;