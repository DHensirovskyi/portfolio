export interface IWorks{
    slug: string;
    name: string;
    label: string;
    year: number;
    link: string;
    border: boolean; 
    description: string;
    images: string[];
    subNames: string[];
    subDescriptions: string[]
}

export const works:IWorks[] = [
    {
        slug: 'gartenservice',
        name: 'Gartenservice Augsburg',
        label: 'Website',
        year: 2025,
        border: false,
        link: 'https://www.nistor-gartenbau.de/',
        description: `Created a modern, responsive website for a garden and landscape company in Augsburg. The goal was to demonstrate how the site can effectively attract local customers and process applications 24/7. Emphasis was placed on a simple structure, fast loading and user-friendliness.`,
        images: ['/gartenservice/img1.svg', '/gartenservice/img2.svg', '/gartenservice/img3.svg'],
        subNames: ['Integration with Headless CMS (Contentful)', 'Dynamic content display'],
        subDescriptions: ['To enable the client to easily modify texts and add services without developer assistance, I integrated the website with Headless CMS Contentful. I designed an intuitive content structure that allows for the management of all text and media blocks on the website.', 'All information that the client enters into Contentful is automatically and beautifully displayed on the website. This screenshot shows the “Services” section, the content for which is fully managed by the client through the CMS, proving the successful integration of the frontend and backend.']

    },
    {
        slug: 'calipso',
        name: 'Calipso Movies',
        label: 'WebApp',
        year: 2025,
        link: 'https://movie-search-calipso.vercel.app/',
        border: true,
        description: `A personal project created to demonstrate skills in working with modern frontend technologies. This is a SPA (Single Page Application) for searching and viewing information about movies, built on Next.js using The Movie Database (TMDB) API.`,
        images: ['/calipso/img1.svg', '/calipso/img2.svg', '/calipso/img3.svg'],
        subNames: ['Dynamic routing and parallel requests', 'State management and Local Storage'],
        subDescriptions: ['A unique page is created for each film and actor using Next.js dynamic routing. On this page, data about both the film itself and the cast is loaded simultaneously (via Promise.all), which optimizes loading speed.', "A fully functional “Favorites” system has been implemented. The status of the list of favorite movies is managed globally using React Context, which allows different components to access the latest data. The list is stored in localStorage so that the user's selection is not lost after reloading the page."]

    },
]