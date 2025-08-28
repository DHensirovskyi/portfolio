export const dict = {
  En: {
    marquee:{
        item1: 'Web Development',
        item2: 'AI & Automation',
        item3: 'Business Solutions',
    },

    hero: {
      line1: "I'm Dmytro,",
      line2: "Web Developer.",
      sub: "I help businesses automate routine work, save hours weekly, and grow faster.",
      works: "See Works",
      contact: "Contact",
    },

    latestworks: {
      line1: 'Latest works',
      line2: 'See all',
      works: [
        {
          slug: 'velvera',
          name: 'Velvera — Modern Salon with AI Automation',
          description: 'Modern salon site with AI-powered booking and email automation.',
          label: 'Website',
        },
        {
          slug: 'gartenservice',
          name: 'Gartenservice Augsburg — Corporate Website',
          description: 'Development of a modern corporate website for a German company.',
          label: 'Website',
        },
      ],
    },

    whatido: {
        line1: 'What I do',
        services:[{  
            img: "/webdevIcon.svg",
            name: 'Modern business websites',
            description: 'Conversion-focused websites that are fast, scalable, and easy to update via CMS.'
        },
        {
            img: "/AIIcon.svg",
            name: "AI & Automation",
            description: "I build automations that reduce manual work — from client onboarding to reports & email handling. Less routine, more growth.",
        }]
    },

    faq: [
      {
        value: "What are your core services?",
        description:
          "I specialize in two main areas: developing high-performance websites using Next.js, and implementing custom AI-powered automation systems. My goal is to not just build you an online presence, but to provide a tool that actively saves you time and earns you more clients.",
      },
      {
        value: 'What exactly is "AI Automation"?',
        description:
          "It's a system designed to handle your repetitive business tasks 24/7. For example, instead of just receiving an email from a contact form, an AI can instantly analyze the request, qualify the lead, send a personalized preliminary response, and notify you in WhatsApp/Telegram only about the most promising customers.",
      },
      {
        value: "What types of businesses do you work with?",
        description:
          "I primarily partner with local businesses and agencies in Germany. My solutions are most effective for those who want to optimize their lead generation process and improve their response time to new customer inquiries.",
      },
      {
        value: "What does your development process look like?",
        description: `My process is straightforward and transparent, consisting of four key stages:
        1. Discovery: We start with a deep dive into your business goals and challenges.
        2. Strategy & Design: I design a solution and a clean, user-friendly interface.
        3. Development: I build and implement the system using modern, reliable technology.
        4. Deployment & Handover: I launch the project and provide you with all the necessary access and training.`,
      },
      {
        value: "What is your primary tech stack?",
        description:
          "I build with a focus on performance and scalability. My core stack includes Next.js, TypeScript, React, and Vercel for web development. For automation, I use powerful platforms like n8n and integrate them with leading AI APIs such as OpenAI.",
      },
      {
        value: "We are interested. What are the next steps?",
        description:
          "Excellent. The first step is a free, 30-minute strategy call where we can discuss your business and identify potential areas for automation and growth. Please get in touch via the contact section below, and let's schedule a conversation.",
      },
    ],

    pricing: {
      line1: 'Prices',
      button: 'Discuss the project',
      plans: [
        {
          name: "One-time development",
          description: "For businesses that need a modern, fast and reliable website to attract customers",
          price: '€1500',
          services: ['Development on Next.js (speed and SEO guarantee)', 'Adaptive design for all devices', 'Integration with CMS for independent content updating', 'Basic SEO optimization'],
          duration: '/project',
          recom: false,
        },
        {
          name: "Website + AI-Automation",
          description: "For companies that want not just an online presence, but a system that works for them 24/7, saves time and doesn't miss a single customer.",
          price: '€2500',
          services: ['Setting up a system of instant response to requests', 'AI integration for analyzing and qualifying queries', 'Automatically send notifications in Telegram/WhatsApp'],
          duration: '/project',
          recom: true,
        },
        {
          name: "AI-Automation for your website",
          description: "For businesses that already have a good website, but you're losing time and customers due to manual processing of applications and long response times.",
          price: '€1000',
          services: ['Audit of your current business processes', 'Integration with your contact form', 'Configuring AI logic for analysis and response', 'Customize notifications for you and your team'],
          duration: '/project',
          recom: false,
        }
      ]
    },

    comments:{
    line1: 'What others say',
    comment:[{
        description: "“Dmytro made the development process smooth and exciting. His unique approach and dedication resulted in a huge business results.”",
        img: "/commentPerson.svg",
        name: "Vadim Nistor",
        position: 'Business owner',
    }],
    },

    end:{
        line1: 'Ready to take your business to the next level?',
        description: "Whether it's a high-performance website, a complex web application, or smart AI automation, I'm here to turn your business idea into reality.",
        button: 'Discuss the project'
    },

    footer:{
       line1: "Let's create something",
       line11: 'awesome together',
       line12: '.',
       line2: 'Pages',
       line3: 'Built by Dmytro Hensirovskyi',
    nav:[{
        path: '/',
        name: 'Home'
    },
    {
        path: '/works',
        name: 'Projects'
    },
    {
        path: '/about',
        name: 'About'
    },
    {
        path: '/contact',
        name: 'Contact'
    },
    ]},
    
    works:{
        line1: 'The hall',
        line2: 'of fame.',
        label: 'Works',
        arr: [
            {
              slug: 'velvera',
              img: "/work3.jpg",
              name: 'Velvera — Modern Salon with AI Automation',
              label: 'Website',
            },
            {   slug: 'gartenservice',
                img: "/work1.jpg",
                name: 'Gartenservice Augsburg — Corporate Website',
                label: 'Website'
            },
            {
                slug: 'calipso',
                img: "/work2.jpg",
                name: 'Calipso Movies — Web Application',
                label: 'WebApp'
            }
        ]
    },

    about:{
        line1: 'A bit more',
        line2: 'about me.',
        label: 'Background',
        img: '/me.jpg',
        line3: "I'm Dmytro, a Web Developer based in Augsburg, Germany, with a mission to solve business problems through modern technology. For me, the greatest reward is taking full ownership of a challenge and turning an ambitious idea into a real, high-performance web application.",
        line4: 'My journey into development began with a simple question in school: "How do websites even work?". This curiosity led to a school project to build my first page with HTML & CSS. I became so immersed in the process that I completely lost track of time—it was my first experience in a state of flow, and the feeling of creating something from nothing was incredible. That same passion for the IT world drives me to this day.',
        line5: "What sets me apart is my focus on the 'why' behind every project. I love to see clean code transform into a beautiful, functional interface, but I believe a website is more than just a collection of pages. It’s an engine for growth. My goal is to understand your business needs and build that engine for you.",
        line6: "When I'm not coding, you can usually find me at the gym, exploring new music, or planning my next trip."
    },

    contact: {
        line1: 'Any questions?',
        line2: "I'm all ears.",
        label: 'Contact',
        details: 'Contact details',
        adress: 'Address',
        country: 'Germany',
        question: 'Question',
        questionText: "What's on your mind?",
        button: 'Submit form',
        ok: 'Thank you! Your message has been sent.',
        error: 'Error sending. Please try again later.'
    },

    workPage: {
      back: '‹ Back',
      other: 'Other projects',
      seeAll: 'See all',
      link: 'Visit'
    },
    workDetails: {
      velvera: {
        slug: 'velvera',
        name: 'Velvera',
        label: 'Website',
        description:
          'Website with AI assistant for salons that cuts no-shows, sends automatic reminders, and captures Google reviews — fully on-brand, running 24/7. It saves staff time and cost, fills idle slots, and keeps clients on track — cheaper than one missed appointment.',
      
        subNames: [
          'Booking & Email Automation',
          'Analytics & Daily Report',
        ],
        subDescriptions: [
          'Clients receive instant confirmations, one-click cancel, and on-time reminders in your brand voice. Clear, mobile-ready emails with optional ICS calendar attach. Fewer no-shows and phone calls, no manual WhatsApp nudges — more returning customers with near-zero effort.',
          'Owner clarity over guesswork: 7-day confirmed vs cancelled, conversion trend, and suggested open slots for tomorrow. One-click daily PDF report — ready for the team. Faster decisions, measurable utilization lift (up to +20%), and zero training required.',
        ],
      },           
      gartenservice: {
        name: 'Gartenservice Augsburg',
        label: 'Website',
        description:
          'Created a modern, responsive website for a garden and landscape company in Augsburg. The goal was to demonstrate how the site can effectively attract local customers and process applications 24/7. Emphasis was placed on a simple structure, fast loading and user-friendliness.',
        subNames: ['Integration with Headless CMS (Contentful)', 'Dynamic content display'],
        subDescriptions: [
          'To enable the client to easily modify texts and add services without developer assistance, I integrated the website with Headless CMS Contentful. I designed an intuitive content structure that allows for the management of all text and media blocks on the website.',
          ' All information that the client enters into Contentful is automatically and beautifully displayed on the website. This screenshot shows the “Services” section, the content for which is fully managed by the client through the CMS, proving the successful integration of the frontend and backend.',
        ],
      },
      calipso: {
        name: 'Calipso Movies',
        label: 'WebApp',
        description:
          'A personal project created to demonstrate skills in working with modern frontend technologies. This is a SPA (Single Page Application) for searching and viewing information about movies, built on Next.js using The Movie Database (TMDB) API.',
        subNames: ['Dynamic routing and parallel requests', 'State management and Local Storage'],
        subDescriptions: [
          'A unique page is created for each film and actor using Next.js dynamic routing. On this page, data about both the film itself and the cast is loaded simultaneously (via Promise.all), which optimizes loading speed.',
          "A fully functional “Favorites” system has been implemented. The status of the list of favorite movies is managed globally using React Context, which allows different components to access the latest data. The list is stored in localStorage so that the user's selection is not lost after reloading the page.",
        ],
      },
    },
 },




  De: {
    hero: {
      line1: "Ich bin Dmytro,",
      line2: "Webentwickler.",
      sub: "Ich helfe Unternehmen, Routinearbeit zu automatisieren, wöchentlich Stunden zu sparen und schneller zu wachsen.",
      works: "Projekte",
      contact: "Kontakt",
    },

    marquee:{
        item1: 'Webentwicklung',
        item2: 'KI & Automatisierung',
        item3: 'Geschäftslösungen',
    },

    latestworks: {
      line1: 'Neueste Arbeiten',
      line2: 'Alle',
      works: [
        {
          slug: 'velvera',
          name: 'Velvera — Moderner Salon mit KI-Automatisierung',
          description: 'Moderne Salon-Website mit KI-gestützter Terminvergabe und E-Mail-Automation.',
          label: 'Website',
        },        
        {
          slug: 'gartenservice',
          name: 'Gartenservice Augsburg — Unternehmenswebsite',
          description: 'Entwicklung einer modernen Unternehmenswebsite für ein deutsches Unternehmen.',
          label: 'Website',
        },
      ],
    },

    whatido: {
    line1: 'Was ich mache',
    services: [{ 
      img: "/webdevIcon.svg",
      name: 'Moderne Business-Websites',
      description: 'Conversion-orientierte Websites, die schnell, skalierbar und einfach über ein CMS zu aktualisieren sind.'
    },
    {
      img: "/AIIcon.svg",
      name: "KI & Automatisierung",
      description: "Ich entwickle Automatisierungen, die manuelle Arbeit reduzieren – vom Kunden-Onboarding bis zu Berichten und E-Mail-Bearbeitung. Weniger Routine, mehr Wachstum."
    }]
    },

    faq: [
    {
        value: "Was sind Ihre Hauptdienstleistungen?",
        description:
        "Ich spezialisiere mich auf zwei Hauptbereiche: die Entwicklung leistungsstarker Websites mit Next.js und die Implementierung maßgeschneiderter KI-gestützter Automatisierungssysteme. Mein Ziel ist es nicht nur, Ihnen eine Online-Präsenz zu schaffen, sondern ein Werkzeug zu bieten, das Ihnen aktiv Zeit spart und mehr Kunden bringt."
    },
    {
        value: 'Was genau ist „KI-Automatisierung“?',
        description:
        "Es handelt sich um ein System, das Ihre sich wiederholenden Geschäftsaufgaben rund um die Uhr übernimmt. Zum Beispiel: Anstatt nur eine E-Mail aus einem Kontaktformular zu erhalten, kann eine KI die Anfrage sofort analysieren, den Lead qualifizieren, eine personalisierte erste Antwort senden und Sie in WhatsApp/Telegram nur über die vielversprechendsten Kunden informieren."
    },
    {
        value: "Mit welchen Arten von Unternehmen arbeiten Sie?",
        description:
        "Ich arbeite in erster Linie mit lokalen Unternehmen und Agenturen in Deutschland zusammen. Meine Lösungen sind besonders effektiv für diejenigen, die ihren Lead-Generierungsprozess optimieren und ihre Reaktionszeit auf neue Kundenanfragen verbessern möchten."
    },
    {
        value: "Wie sieht Ihr Entwicklungsprozess aus?",
        description: `Mein Prozess ist unkompliziert und transparent und besteht aus vier Hauptphasen:
        1. Analyse: Wir beginnen mit einer detaillierten Untersuchung Ihrer Geschäftsziele und Herausforderungen.
        2. Strategie & Design: Ich entwerfe eine Lösung und ein sauberes, benutzerfreundliches Interface.
        3. Entwicklung: Ich baue und implementiere das System mit moderner, zuverlässiger Technologie.
        4. Bereitstellung & Übergabe: Ich starte das Projekt und stelle Ihnen alle notwendigen Zugänge und Schulungen zur Verfügung.`
    },
    {
        value: "Was ist Ihr primärer Tech-Stack?",
        description:
        "Ich entwickle mit Fokus auf Leistung und Skalierbarkeit. Mein Kern-Stack umfasst Next.js, TypeScript, React und Vercel für die Webentwicklung. Für Automatisierung nutze ich leistungsstarke Plattformen wie n8n und integriere führende KI-APIs wie OpenAI."
    },
    {
        value: "Wir sind interessiert. Was sind die nächsten Schritte?",
        description:
        "Ausgezeichnet. Der erste Schritt ist ein kostenloses, 30-minütiges Strategiegespräch, in dem wir Ihr Unternehmen besprechen und potenzielle Bereiche für Automatisierung und Wachstum identifizieren. Bitte kontaktieren Sie mich über den unten stehenden Kontaktbereich, um einen Termin zu vereinbaren."
    }
    ],

    pricing: {
    line1: 'Preise',
    button: 'Projekt besprechen',
    plans: [
    {
        name: "Einmalige Entwicklung",
        description: "Für Unternehmen, die eine moderne, schnelle und zuverlässige Website benötigen, um Kunden zu gewinnen.",
        price: '€1500',
        services: [
        'Entwicklung mit Next.js (Garantie für Geschwindigkeit und SEO)',
        'Responsives Design für alle Geräte',
        'Integration mit CMS zur eigenständigen Inhaltsaktualisierung',
        'Grundlegende SEO-Optimierung'
        ],
        duration: '/projekt',
        recom: false,
    },
    {
        name: "Website + KI-Automatisierung",
        description: "Für Unternehmen, die nicht nur eine Online-Präsenz wollen, sondern ein System, das 24/7 für sie arbeitet, Zeit spart und keinen Kunden verpasst.",
        price: '€2500',
        services: [
        'Einrichtung eines Systems für sofortige Reaktion auf Anfragen',
        'KI-Integration zur Analyse und Qualifizierung von Anfragen',
        'Automatischer Versand von Benachrichtigungen in Telegram/WhatsApp'
        ],
        duration: '/projekt',
        recom: true
    },
    {
        name: "KI-Automatisierung für Ihre Website",
        description: "Für Unternehmen, die bereits eine gute Website haben, aber aufgrund manueller Antragsbearbeitung und langer Reaktionszeiten Zeit und Kunden verlieren.",
        price: '€1000',
        services: [
        'Audit Ihrer aktuellen Geschäftsprozesse',
        'Integration mit Ihrem Kontaktformular',
        'Konfiguration der KI-Logik für Analyse und Antwort',
        'Anpassung von Benachrichtigungen für Sie und Ihr Team'
        ],
        duration: '/projekt',
        recom: false,
    }
    ]},

    comments: {
    line1: 'Was andere sagen',
    comment: [{
        description: "„Dmytro hat den Entwicklungsprozess reibungslos und spannend gestaltet. Sein einzigartiger Ansatz und seine Hingabe führten zu großartigen Geschäftsergebnissen.“",
        img: "/commentPerson.svg",
        name: "Vadim Nistor",
        position: 'Geschäftsinhaber'
    }]
    },

    end: {
    line1: 'Bereit, Ihr Unternehmen auf die nächste Stufe zu bringen?',
    description: "Ob leistungsstarke Website, komplexe Webanwendung oder intelligente KI-Automatisierung – ich bin hier, um Ihre Geschäftsidee in die Realität umzusetzen.",
    button: 'Projekt besprechen'
    },

    footer: {
    line1: "Lassen Sie uns gemeinsam",
    line11: 'etwas Großartiges schaffen',
    line12: '.',
    line2: 'Seiten',
    line3: 'Erstellt von Dmytro Hensirovskyi',
    nav:[{
        path: '/',
        name: 'Startseite'
    },
    {
        path: '/works',
        name: 'Projekte'
    },
    {
        path: '/about',
        name: 'Über mich'
    },
    {
        path: '/contact',
        name: 'Kontakt'
    },
    ],
    },

    works:{
        line1: 'Die',
        line2: 'Ruhmeshalle',
        label: 'Projekte',
        arr: [
            {
                slug: 'gartenservice',
                img: "/work1.jpg",
                name: 'Gartenservice Augsburg — Unternehmenswebsite',
                label: 'Website'
            },
            {
                slug: 'calipso',
                img: "/work2.jpg",
                name: 'Calipso Movies — Webanwendung',
                label: 'WebApp'
            }
        ]
    },

    about:{
        line1: 'Ein bisschen mehr',
        line2: 'über mich.',
        label: 'Hintergrund',
        img: '/me.jpg',
        line3: "Ich bin Dmytro, ein Webentwickler mit Sitz in Augsburg, Deutschland, mit der Mission, Geschäftsprobleme durch moderne Technologie zu lösen. Für mich ist die größte Belohnung, die volle Verantwortung für eine Herausforderung zu übernehmen und eine ehrgeizige Idee in eine reale, leistungsstarke Webanwendung zu verwandeln.",
        line4: 'Mein Weg in die Entwicklung begann mit einer einfachen Frage in der Schule: „Wie funktionieren Websites überhaupt?“. Diese Neugier führte zu einem Schulprojekt, bei dem ich meine erste Seite mit HTML & CSS erstellte. Ich war so vertieft in den Prozess, dass ich völlig das Zeitgefühl verlor – es war meine erste Erfahrung im Flow-Zustand, und das Gefühl, etwas aus dem Nichts zu erschaffen, war unglaublich. Diese gleiche Leidenschaft für die IT-Welt treibt mich bis heute an.',
        line5: "Was mich auszeichnet, ist mein Fokus auf das „Warum“ hinter jedem Projekt. Ich liebe es, sauberen Code in eine schöne, funktionale Benutzeroberfläche zu verwandeln, aber ich glaube, dass eine Website mehr ist als nur eine Sammlung von Seiten. Sie ist ein Motor für Wachstum. Mein Ziel ist es, Ihre Geschäftsbedürfnisse zu verstehen und diesen Motor für Sie zu bauen.",
        line6: "Wenn ich nicht programmiere, findet man mich meist im Fitnessstudio, beim Entdecken neuer Musik oder bei der Planung meiner nächsten Reise."
    },

    contact:{
        line1: 'Haben Sie noch Fragen?',
        line2: 'Ich bin ganz Ohr.',
        label: 'Kontakt',
        details: 'Kontaktdaten',
        adress: 'Adresse',
        country: 'Deutschland',
        question: "Frage",
        questionText: 'Was beschäftigt dich gerade?',
        button: 'Formular absenden',
        ok: 'Vielen Dank! Ihre Nachricht wurde gesendet.',
        error: 'Fehler beim Senden. Bitte versuchen Sie es später erneut.'
    },

    workPage: {
      back: '‹ Zurück',
      other: 'Weitere Projekte',
      seeAll: 'Alle',
      link: 'Besuchen'
    },
    workDetails: {
      velvera: {
        slug: 'velvera',
        name: 'Velvera',
        label: 'Website',
        description:
          'Website mit KI-Assistent für Salons, der No-Shows senkt, automatisch erinnert und Google-Bewertungen einsammelt — vollständig gebrandet, 24/7 im Hintergrund. Spart Zeit und Personalkosten, füllt leere Slots und hält Kund:innen zuverlässig im Flow — günstiger als ein ausgefallener Termin.',
      
        subNames: [
          'Buchung & E-Mail-Automation',
          'Analytics & Tagesbericht',
        ],
        subDescriptions: [
          'Kund:innen erhalten sofortige Bestätigung, 1-Klick-Storno und punktgenaue Erinnerungen in Ihrem Branding. Klar formulierte Mails, mobil optimiert; optional ICS-Kalenderdatei. Weniger Ausfälle und Telefonate, keine WhatsApp-Erinnerungen von Hand — mehr Stammgäste mit minimalem Aufwand.',
          'Transparente Inhaber-Sicht statt Bauchgefühl: 7-Tage-Vergleich bestätigt vs. storniert, Conversion-Trend und Vorschläge freier Slots für morgen. Tagesbericht als PDF in einem Klick — bereit fürs Team. Schnellere Entscheidungen, messbar mehr Auslastung (bis +20 %) und null Schulungsaufwand.',
        ],
      },      
      gartenservice: {
        name: 'Gartenservice Augsburg',
        label: 'Website',
        description:
          'Erstellung einer modernen, responsiven Website für ein Garten- und Landschaftsbauunternehmen in Augsburg. Ziel war es zu zeigen, wie die Website effektiv lokale Kunden anziehen und Anfragen rund um die Uhr bearbeiten kann. Der Schwerpunkt lag auf einer einfachen Struktur, schneller Ladezeit und Benutzerfreundlichkeit.',
        subNames: ['Integration mit Headless CMS (Contentful)', 'Dynamische Inhaltsanzeige'],
        subDescriptions: [
          'Um dem Kunden die Möglichkeit zu geben, Texte und Dienstleistungen einfach zu ändern, ohne die Hilfe eines Entwicklers, habe ich die Website mit dem Headless CMS Contentful integriert. Ich habe eine intuitive Inhaltsstruktur entworfen, die die Verwaltung aller Text- und Medienblöcke auf der Website ermöglicht.',
          'Alle Informationen, die der Kunde in Contentful eingibt, werden automatisch und ansprechend auf der Website angezeigt. Dieser Screenshot zeigt den Abschnitt „Dienstleistungen“, dessen Inhalte vollständig vom Kunden über das CMS verwaltet werden, was die erfolgreiche Integration von Frontend und Backend beweist.',
        ],
      },
      calipso: {
        name: 'Calipso Movies',
        label: 'WebApp',
        description:
          'Ein persönliches Projekt, das entwickelt wurde, um Fähigkeiten im Umgang mit modernen Frontend-Technologien zu demonstrieren. Es handelt sich um eine SPA (Single Page Application) zur Suche und Anzeige von Informationen über Filme, erstellt mit Next.js unter Verwendung der The Movie Database (TMDB) API.',
        subNames: ['Dynamisches Routing und parallele Anfragen', 'Zustandsverwaltung und Local Storage'],
        subDescriptions: [
          'Für jeden Film und Schauspieler wird mit dem dynamischen Routing von Next.js eine eigene Seite erstellt. Auf dieser Seite werden gleichzeitig (über Promise.all) Daten sowohl zum Film selbst als auch zur Besetzung geladen, was die Ladegeschwindigkeit optimiert.',
          'Ein vollständig funktionsfähiges „Favoriten“-System wurde implementiert. Der Status der Favoritenliste wird global mit React Context verwaltet, sodass verschiedene Komponenten auf die aktuellen Daten zugreifen können. Die Liste wird im localStorage gespeichert, damit die Auswahl des Benutzers nach dem Neuladen der Seite nicht verloren geht.',
        ],
      },
    },
  }
}
export type Lang = keyof typeof dict;
