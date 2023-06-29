import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    const { value = 0 } = await fetch("https://countapi.insidethesandbox.studio/hit/praizanee.pages.dev/visits")
    .then(res => res.json())
    
    return {
        countapi: value
    };
};