import MyComponent from '../../../../slices/KlarnaFeaturedContent';

export default {
  title: 'slices/KlarnaFeaturedContent'
}


export const _Default = () => <MyComponent slice={{"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"image":{"dimensions":{"width":1000,"height":1200},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1537498425277-c283d32ef9db?rect=984%2C0%2C2413%2C2895&w=1000&h=1200"},"title":"same","kicker_title":"guard","main_content":[{"type":"paragraph","text":"Cillum minim in aliquip ullamco non dolor.","spans":[]},{"type":"paragraph","text":"Enim voluptate exercitation aliqua aliqua. Cupidatat velit amet consectetur ipsum laboris et dolor amet ea non amet qui duis.","spans":[]}],"link":{"link_type":"Web","url":"https://slicemachine.dev"},"cta":"did"},"id":"_Default","slice_type":"text_with_image"}} />
_Default.storyName = ''

export const _WithButton = () => <MyComponent slice={{"variation":"withButton","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"text":[{"type":"paragraph","text":"Qui aute magna quis tempor cupidatat commodo irure dolore et sit. In amet dolor anim minim est nostrud elit fugiat aliqua labore in ullamco irure do. Sit sit reprehenderit sit.","spans":[]}],"buttonLink":{"link_type":"Web","url":"https://slicemachine.dev"},"buttonText":"longer","image":{"dimensions":{"width":3500,"height":2338},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1448932223592-d1fc686e76ea"}},"id":"_WithButton","slice_type":"text_with_image"}} />
_WithButton.storyName = ''
