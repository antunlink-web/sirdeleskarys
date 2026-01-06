import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'lt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  lt: {
    // Navigation
    'nav.about': 'Apie mus',
    'nav.howWeHelp': 'Kaip padedame',
    'nav.donate': 'Paaukoti',
    'nav.contact': 'Kontaktai',
    'nav.donateButton': 'Paaukoti',

    // Hero
    'hero.title': 'Mažoms širdims – didelis rūpestis',
    'hero.subtitle': 'Pirmasis Lietuvoje specializuotas projektas, skirtas padėti šeimoms, auginančioms vaikus su įgimtomis širdies ydomis.',
    'hero.donateButton': 'Paaukoti dabar',
    'hero.learnMore': 'Sužinoti daugiau',

    // What is CHD
    'chd.title': 'Kas yra įgimta širdies yda?',
    'chd.description': 'Įgimta širdies yda (ĮŠY) – tai struktūrinė širdies problema, kuri yra nuo gimimo. Tai gali būti skylės tarp širdies kamerų, vožtuvų problemos arba kraujagyslių anomalijos.',
    'chd.positive': 'Su tinkama priežiūra vaikai išgyvena ir klesti.',
    'chd.stat1': '250-300',
    'chd.stat1Label': 'naujų atvejų kasmet Lietuvoje',
    'chd.stat2': '1',
    'chd.stat2Label': 'ligoninė – Santaros Klinikos',
    'chd.stat3': '100-300 km',
    'chd.stat3Label': 'kelionė šeimoms iš regionų',

    // Problem
    'problem.title': 'Su kuo susiduria šeimos',
    'problem.hospitalization': '7-21 dienų hospitalizacija',
    'problem.accommodation': 'Apgyvendinimo išlaidos: €15-30/naktis be valstybės paramos',
    'problem.wages': 'Prarastos pajamos: 1-6 mėn. neapmokamų atostogų',
    'problem.equipment': 'Įrangos išlaidos: €500-3,000+ iš savo kišenės',
    'problem.total': 'Bendra našta: €300-1,500+ vienai hospitalizacijai',

    // Support Gap
    'gap.title': 'Paramos spraga',
    'gap.exists': 'Kas egzistuoja',
    'gap.missing': 'Ko trūksta',
    'gap.exists1': 'Valstybė apmoka operacijas ir ligoninę',
    'gap.exists2': 'Mažos savanorių grupės (Mažoji širdelė)',
    'gap.missing1': 'Nėra apgyvendinimo paramos',
    'gap.missing2': 'Nėra įrangos aukojimo',
    'gap.missing3': 'Nėra sistemingos pagalbos šeimoms',
    'gap.missing4': 'Nėra reabilitacijos paramos',

    // Solution
    'solution.title': 'Mūsų sprendimas',
    'solution.pillar1': 'Skubi pagalba šeimoms',
    'solution.pillar1Desc': 'Apgyvendinimas, maitinimas, transportas hospitalizacijos metu',
    'solution.pillar2': 'Ligoninės įranga',
    'solution.pillar2Desc': 'Širdies monitoriai, echokardiografija, reabilitacijos prietaisai',
    'solution.pillar3': 'Pagalba po išrašymo',
    'solution.pillar3Desc': 'Namų įranga atsigavimui',

    // Partnership
    'partnership.title': 'Partnerystė su Santaros Klinikomis',
    'partnership.description': 'Tiesioginis bendradarbiavimas su vienintele Lietuvos vaikų širdies chirurgijos centru.',
    'partnership.point1': 'Mėnesiniai susitikimai dėl įrangos poreikių',
    'partnership.point2': 'Ligoninės nukreipimai šeimoms krizėje',
    'partnership.point3': 'Įrangos atskaitomybė ir poveikio stebėjimas',
    'partnership.model': 'Taip sėkmingai veikia "Ankstukai" neišnešiotiems kūdikiams. Mes pritaikome šį modelį ĮŠY.',

    // Donation
    'donate.title': 'Jūsų auka suteikia vilties',
    'donate.subtitle': 'Kiekvienas euras padeda šeimoms, kovojančioms su įgimtomis širdies ydomis.',
    'donate.amount1': '€15',
    'donate.amount1Desc': 'Viena nakvynė šeimai',
    'donate.amount2': '€50',
    'donate.amount2Desc': 'Savaitės maitinimas',
    'donate.amount3': '€100',
    'donate.amount3Desc': 'Transporto parama',
    'donate.custom': 'Kita suma',
    'donate.button': 'Paaukoti',
    'donate.secure': 'Saugus mokėjimas per Stripe',

    // Contact
    'contact.title': 'Susisiekite',
    'contact.subtitle': 'Turite klausimų? Norite prisidėti? Parašykite mums.',
    'contact.name': 'Vardas',
    'contact.email': 'El. paštas',
    'contact.message': 'Žinutė',
    'contact.send': 'Siųsti žinutę',
    'contact.address': 'Vilnius, Lietuva',
    'contact.emailLabel': 'El. paštas',
    'contact.phoneLabel': 'Telefonas',

    // Footer
    'footer.tagline': 'Pirmasis Lietuvoje ĮŠY šeimų paramos projektas',
    'footer.rights': 'Visos teisės saugomos.',
    'footer.privacy': 'Privatumo politika',
  },
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.howWeHelp': 'How We Help',
    'nav.donate': 'Donate',
    'nav.contact': 'Contact',
    'nav.donateButton': 'Donate',

    // Hero
    'hero.title': 'For Small Hearts – Great Care',
    'hero.subtitle': "Lithuania's first dedicated project helping families with children born with Congenital Heart Disease.",
    'hero.donateButton': 'Donate Now',
    'hero.learnMore': 'Learn More',

    // What is CHD
    'chd.title': 'What is Congenital Heart Disease?',
    'chd.description': 'Congenital Heart Defect (CHD) is a structural problem with the heart present at birth. This can include holes between heart chambers, valve problems, or blood vessel abnormalities.',
    'chd.positive': 'With proper care, children survive and thrive.',
    'chd.stat1': '250-300',
    'chd.stat1Label': 'new cases annually in Lithuania',
    'chd.stat2': '1',
    'chd.stat2Label': 'hospital – Santaros Klinikos',
    'chd.stat3': '100-300 km',
    'chd.stat3Label': 'travel for regional families',

    // Problem
    'problem.title': 'What Families Face',
    'problem.hospitalization': '7-21 days hospitalization',
    'problem.accommodation': 'Accommodation costs: €15-30/night with no state support',
    'problem.wages': 'Lost wages: 1-6 months unpaid leave',
    'problem.equipment': 'Equipment costs: €500-3,000+ out-of-pocket',
    'problem.total': 'Total burden: €300-1,500+ per hospitalization',

    // Support Gap
    'gap.title': 'The Support Gap',
    'gap.exists': 'What Exists',
    'gap.missing': "What's Missing",
    'gap.exists1': 'State covers surgery + hospital care',
    'gap.exists2': 'Small volunteer groups (Mažoji širdelė)',
    'gap.missing1': 'No accommodation support',
    'gap.missing2': 'No equipment donations',
    'gap.missing3': 'No systematic family aid',
    'gap.missing4': 'No rehabilitation support',

    // Solution
    'solution.title': 'Our Solution',
    'solution.pillar1': 'Emergency Family Support',
    'solution.pillar1Desc': 'Accommodation, meals, transport during hospital stays',
    'solution.pillar2': 'Hospital Equipment',
    'solution.pillar2Desc': 'Cardiac monitors, echocardiography, rehabilitation devices',
    'solution.pillar3': 'Post-Discharge Support',
    'solution.pillar3Desc': 'Home equipment for recovery',

    // Partnership
    'partnership.title': 'Partnership with Santaros Klinikos',
    'partnership.description': "Direct collaboration with Lithuania's only pediatric heart surgery center.",
    'partnership.point1': 'Monthly liaison meetings for equipment needs',
    'partnership.point2': 'Hospital referrals for families in crisis',
    'partnership.point3': 'Equipment accountability and impact tracking',
    'partnership.model': 'This is how Ankstukai succeeded for premature babies. We replicate this model for CHD.',

    // Donation
    'donate.title': 'Your Donation Gives Hope',
    'donate.subtitle': 'Every euro helps families fighting congenital heart disease.',
    'donate.amount1': '€15',
    'donate.amount1Desc': 'One night accommodation',
    'donate.amount2': '€50',
    'donate.amount2Desc': 'Weekly meal support',
    'donate.amount3': '€100',
    'donate.amount3Desc': 'Transport support',
    'donate.custom': 'Custom amount',
    'donate.button': 'Donate',
    'donate.secure': 'Secure payment via Stripe',

    // Contact
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'Have questions? Want to help? Send us a message.',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.address': 'Vilnius, Lithuania',
    'contact.emailLabel': 'Email',
    'contact.phoneLabel': 'Phone',

    // Footer
    'footer.tagline': "Lithuania's First CHD Family Support Project",
    'footer.rights': 'All rights reserved.',
    'footer.privacy': 'Privacy Policy',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('lt');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
