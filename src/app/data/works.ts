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
    subDescriptions: string[],
    otherImg: string,
}

export const works:IWorks[] = [
    {
        slug: 'velvera',
        name: 'Velvera',
        label: 'Website',
        year: 2025,
        link: 'https://velvera-pink.vercel.app/',
        border: true,
        description: `An AI assistant for salons that cuts no-shows, sends automatic reminders, and captures Google reviews — fully on-brand, running 24/7. It saves staff time and cost, fills idle slots, and keeps clients on track — cheaper than one missed appointment.`,
        otherImg: '/work3.jpg',
        images: ['/velvera/img3.jpg', '/velvera/img1.jpg', '/velvera/img2.jpg'],
        subNames: ['Booking & Email Automation', 'Analytics & Daily Report'],
        subDescriptions: [
          'Clients receive instant confirmations, one-click cancel, and on-time reminders (T-1 / T-2h) in your brand voice. Clear, mobile-ready emails with optional ICS calendar attach. Fewer no-shows and phone calls, no manual WhatsApp nudges — more returning customers with near-zero effort.',
          'Owner clarity over guesswork: 7-day confirmed vs cancelled, conversion trend, and suggested open slots for tomorrow. One-click daily PDF report — ready for the team. Faster decisions, measurable utilization lift (up to +20%), and zero training required.'
        ]
    },      
    {
        slug: 'gartenservice',
        name: 'Gartenservice Augsburg',
        label: 'Website',
        year: 2025,
        border: false,
        link: 'https://www.nistor-gartenbau.de/',
        description: `Created a modern, responsive website for a garden and landscape company in Augsburg. The goal was to demonstrate how the site can effectively attract local customers and process applications 24/7. Emphasis was placed on a simple structure, fast loading and user-friendliness.`,
        images: ['/gartenservice/img1.jpg', '/gartenservice/img2.jpg', '/gartenservice/img3.jpg'],
        otherImg: '/work1.jpg',
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
        images: ['/calipso/img1.jpg', '/calipso/img2.jpg', '/calipso/img3.jpg'],
        otherImg: '/work2.jpg',
        subNames: ['Dynamic routing and parallel requests', 'State management and Local Storage'],
        subDescriptions: ['A unique page is created for each film and actor using Next.js dynamic routing. On this page, data about both the film itself and the cast is loaded simultaneously (via Promise.all), which optimizes loading speed.', "A fully functional “Favorites” system has been implemented. The status of the list of favorite movies is managed globally using React Context, which allows different components to access the latest data. The list is stored in localStorage so that the user's selection is not lost after reloading the page."]

    },
]