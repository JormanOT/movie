import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'

export const Client = sanityClient({
    projectId : process.env.NEXT_PUBLIC_SANITY_ID,
    dataset : 'production',
    apiVersion : '2022-11-29',
    useCdn : true,
    token : process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageUrlBuilder(Client);

export const urlFor = (source)=> builder.image(source);