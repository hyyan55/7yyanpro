import { Project, PhotoItem, DeveloperSkill } from '../types';

export const PERSONAL_INFO = {
  nameEn: 'HAYYAN',
  nameFullEn: 'Hayyan Mohamed',
  nameAr: 'حيان محمد',
  identityEn: 'DEVELOPER / MEDICAL STUDENT / PHOTOGRAPHER',
  identityAr: 'مطور برمجيات / طالب طب / مصور فوتوغرافي',
  locationEn: 'KASSALA, SUDAN.',
  locationAr: 'كسلا، السودان.',
  email: 'hyyanmohamed55@gmail.com',
  github: 'https://github.com/hyyan55',
  githubUsername: '@hyyan55',
  universityEn: 'East of Science and Technology University',
  universityAr: 'جامعة شرق العلوم والتكنولوجيا',
  introEn:
    'I build digital experiences, explore technology, study medicine, and capture stories through photography.',
  introAr:
    'أبني تجارب رقمية، وأستكشف التقنية، وأدرس الطب، وأوثق اللحظات والقصص عبر التصوير الفوتوغرافي.',
  aboutBriefEn:
    'Operating between clinical diagnostics, software engineering, and visual storytelling in eastern Sudan. An ongoing pursuit of purposeful digital tools that serve real communities.',
  aboutBriefAr:
    'أتحرك في المساحة الفاصلة بين دقة العلوم الطبية والتشخيص، وهندسة النظم البرمجية، والتوثيق البصري في شرق السودان. سعي مستمر لبناء أدوات رقمية هادفة تخدم المجتمع.',
};

export const THREE_WORLDS = {
  world1: {
    id: 'world-01',
    number: '01',
    tagEn: 'WORLD 01 — DEVELOPMENT',
    tagAr: 'العالم 01 — التطوير البرمجي',
    titleEn: 'I BUILD DIGITAL EXPERIENCES.',
    titleAr: 'أصنع تجارب رقمية.',
    subtitleEn:
      'Purposeful digital utilities, financial converters, and accessible web systems built with React, TypeScript, and modern engineering.',
    subtitleAr:
      'تطبيقات وأدوات رقمية خدمية، ومحولات مالية، ونظم ويب سريعة وسهلة الوصول مبنية على React وTypeScript.',
  },
  world2: {
    id: 'world-02',
    number: '02',
    tagEn: 'WORLD 02 — PHOTOGRAPHY',
    tagAr: 'العالم 02 — التصوير الفوتوغرافي',
    titleEn: 'I CAPTURE STORIES.',
    titleAr: 'أوثق الحكايات.',
    subtitleEn:
      'A cinematic exhibition of eastern Sudan. The granite peaks of the Taka Mountains, marketplace culture, and desert architectural geometry.',
    subtitleAr:
      'معرض بصري وسينمائي لشرق السودان. قمم جبال التاكا الشامخة، ونبض الأسواق التراثية، وهندسة الظلال في العمارة الصحراوية.',
  },
  world3: {
    id: 'world-03',
    number: '03',
    tagEn: 'WORLD 03 — MEDICINE & IDENTITY',
    tagAr: 'العالم 03 — الطب والهوية الأكاديمية',
    titleEn: 'ALWAYS LEARNING.',
    titleAr: 'في مسار التعلّم دائماً.',
    subtitleEn:
      'Enrolled Medical Student at East of Science and Technology University in Kassala. Clinical diagnostic rigor elevating digital systems.',
    subtitleAr:
      'طالب طب بشري بجامعة شرق العلوم والتكنولوجيا في كسلا. منهجية الملاحظة السريرية والتشخيصية ترتقي بجودة الحلول الرقمية.',
  },
};

export const PROJECTS: Project[] = [
  {
    id: 'bban-sudan',
    title: 'BBAN Sudan',
    titleAr: 'BBAN السودان',
    tagline: 'Sudanese Bank Account to BBAN Format Converter',
    taglineAr: 'محول أرقام الحسابات البنكية السودانية إلى صيغة BBAN',
    description:
      'A Sudanese application that converts regular bank account numbers into standard BBAN format for seamless interbank transfers.',
    descriptionAr:
      'تطبيق سوداني متكامل يقوم بتحويل أرقام الحسابات المصرفية التقليدية إلى صيغة الحساب المصرفي الأساسي (BBAN) المعتمدة.',
    longDescription:
      'BBAN Sudan simplifies interbank financial transfers across Sudan by validating and standardizing standard local bank account numbers into the official Basic Bank Account Number (BBAN) structure.',
    longDescriptionAr:
      'يسهل تطبيق BBAN السودان عمليات التحويلات المالية بين البنوك في السودان من خلال التحقق من صحة أرقام الحسابات المحلية وتحويلها بدقة إلى تركيبة رقم الحساب المصرفي الأساسي (BBAN).',
    url: 'https://bban-sd.pages.dev/',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Financial Validation'],
    features: [
      'Algorithmic conversion conforming to Sudanese banking standards',
      'Validation for Bank of Khartoum, Faisal Islamic, Omdurman Bank',
      'Instant copy and zero-latency feedback',
    ],
    featuresAr: [
      'تحويل خوارزمي دقيق وفق المعايير المصرفية السودانية المعتمدة',
      'تدقيق فوري لمصرف الخرطوم، بنك فيصل الإسلامي، بنك أمدرمان الوطني',
      'إمكانية نسخ الرمز فورا مع استجابة سريعة',
    ],
    image: '/src/assets/images/preview_bban_sudan_1793815403511.jpg',
    category: 'Financial Utility',
    categoryAr: 'أدوات مالية',
  },
  {
    id: 'easy-convert',
    title: 'Easy Convert',
    titleAr: 'Easy Convert',
    tagline: 'Streamlined Utility Conversion Application',
    taglineAr: 'تطبيق عملي ذكي للتحويلات والقياسات اليومية',
    description:
      'A utility conversion application designed for rapid, hassle-free calculations across essential everyday units.',
    descriptionAr:
      'تطبيق أدوات خفيف وبديهي مصمم لإجراء التحويلات السريعة والمباشرة لمختلف المقاييس والوحدات اليومية بدقة.',
    longDescription:
      'Easy Convert provides a distraction-free environment for converting units, measurements, and numerical calculations with zero latency.',
    longDescriptionAr:
      'يقدم Easy Convert بيئة سلسة وسريعة للتحويل بين الوحدات والأرقام والمقاييس اليومية، مع استجابة فورية وتصميم مريح.',
    url: 'https://easy-convert-9ff25.web.app/',
    techStack: ['React', 'JavaScript', 'Firebase Hosting', 'Utility Algorithms'],
    features: [
      'Dual-input real-time conversion',
      'Zero latency on mobile browsers',
      'Clean typography and distraction-free interface',
    ],
    featuresAr: [
      'تحويل ثنائي فوري ومتزامن بمجرد إدخال القيمة',
      'خفيف وسريع التصفح حتى مع شبكات الاتصال المحدودة',
      'واجهة هادئة خالية من التشتت وتعتمد على الوضوح الرقمي',
    ],
    image: '/src/assets/images/preview_easy_convert_1793816292009.jpg',
    category: 'Productivity Tool',
    categoryAr: 'أدوات إنتاجية',
  },
];

export const PHOTOGRAPHY_GALLERY: PhotoItem[] = [
  {
    id: 'kassala-taka',
    title: 'Taka Mountains at Golden Hour',
    titleAr: 'جبال التوتيل والتاكا وقت الغروب',
    location: 'Kassala, Sudan',
    locationAr: 'كسلا، السودان',
    category: 'landscape',
    aspectRatio: '16:9',
    image: '/src/assets/images/photo_kassala_mountains_1793815401865.jpg',
    cameraInfo: 'Documentary Landscape · Golden Hour Light',
    cameraInfoAr: 'تصوير مناظر طبيعية وثائقية · الضوء الذهبي',
    year: '2026',
    description:
      'The timeless monolithic granite massifs of Taka rising above the acacia valley in Kassala, illuminated by late afternoon desert sun.',
    descriptionAr:
      'كتل الجرانيت الشاهقة لجبال التاكا وقمم التوتيل المطلة على وادي القاش وواحات الأكاسيا في كسلا.',
  },
  {
    id: 'kassala-street',
    title: 'Market Life & Cultural Weaving',
    titleAr: 'سوق كسلا وفنون الحِرف اليدوية',
    location: 'Kassala Old Souq, Sudan',
    locationAr: 'السوق الكبير، كسلا',
    category: 'documentary',
    aspectRatio: '4:3',
    image: '/src/assets/images/photo_sudan_documentary_1793815402421.jpg',
    cameraInfo: '35mm Lens · Ambient Sudanese Sun',
    cameraInfoAr: 'عدسة 35 ملم · إضاءة طبيعية',
    year: '2026',
    description:
      'Authentic documentary street photography capturing traditional eastern Sudanese artisanal woven crafts and market vitality.',
    descriptionAr:
      'توثيق واقعي للحياة اليومية في السوق العتيق وحِرف القش والنسيج التراثية المميزة لشرق السودان.',
  },
  {
    id: 'kassala-arch',
    title: 'Historic Arches & Desert Geometry',
    titleAr: 'أقواس تاريخية وظلال الصحراء',
    location: 'Historic Kassala, Sudan',
    locationAr: 'المعالم التاريخية، كسلا',
    category: 'architecture',
    aspectRatio: '3:4',
    image: '/src/assets/images/photo_kassala_architecture_1793815402709.jpg',
    cameraInfo: 'Architectural Framing · Deep Contrast',
    cameraInfoAr: 'تأطير معماري · تباين الضوء والظل',
    year: '2026',
    description:
      'A quiet architectural study of rhythmic clay arches and sharp geometric desert shadows under the clear eastern Sudanese sky.',
    descriptionAr:
      'دراسة بصرية لجماليات العمارة التقليدية من الأقواس الطينية والقباب وانعكاسات الظلال في هدوء الصحراء.',
  },
];

export const DEVELOPER_SKILLS: DeveloperSkill[] = [
  {
    name: 'Web Development',
    nameAr: 'تطوير الويب',
    category: 'core',
    description: 'Modern performant web applications and responsive systems.',
    descriptionAr: 'بناء تطبيقات الويب الحديثة والواجهات المتجاوبة.',
  },
  {
    name: 'Mobile App Development',
    nameAr: 'تطوير تطبيقات الموبايل',
    category: 'core',
    description: 'Touch-first mobile interfaces and ergonomic utility apps.',
    descriptionAr: 'تصميم وبناء تجارب استخدام مخصصة للهواتف الذكية.',
  },
  {
    name: 'React',
    nameAr: 'React',
    category: 'framework',
    description: 'Component architecture, reactive state, and modern hooks.',
    descriptionAr: 'بناء المكونات المعيارية وإدارة الحالة بكفاءة.',
  },
  {
    name: 'TypeScript',
    nameAr: 'TypeScript',
    category: 'language',
    description: 'Strict type safety and resilient self-documenting codebases.',
    descriptionAr: 'الأمان البرمجي وتحديد الأنواع الصارمة في المشاريع.',
  },
  {
    name: 'JavaScript',
    nameAr: 'JavaScript',
    category: 'language',
    description: 'Modern ESNext standards, asynchronous architecture, and web APIs.',
    descriptionAr: 'لغة الويب الأساسية والمعايير البرمجية الحديثة.',
  },
  {
    name: 'Firebase',
    nameAr: 'Firebase',
    category: 'platform',
    description: 'Cloud hosting, fast client deployments, and realtime integration.',
    descriptionAr: 'استضافة التطبيقات السريعة والخدمات السحابية.',
  },
];

export const UI_TEXT = {
  en: {
    navDevelopment: 'Development',
    navPhotography: 'Photography',
    navMedicine: 'Medicine & About',
    navContact: 'Contact',
    getInTouch: 'Get in Touch',
    visitProject: 'Visit Project',
    scrollExplore: 'Scroll to explore the universe',
    interactivePreview: 'Interactive live preview',
    
    // Exhibition
    exhibitionBadge: 'EXHIBITION VIEW',
    viewFullscreen: 'View Fullscreen',
    closeExhibition: 'Close',
    nextPhoto: 'Next Image',
    prevPhoto: 'Previous Image',
    
    // Academic & Identity
    medicalStudentTitle: 'Medical Student',
    universityName: 'East of Science and Technology University',
    campusCity: 'Kassala, Sudan',
    disciplinesTag: 'Clinical Sciences · Anatomy · Pathology · Human Physiology',
    
    // Contact
    contactHeadline: "LET'S BUILD SOMETHING MEANINGFUL.",
    contactPrompt: 'Direct inquiries regarding software engineering, healthcare tools, or photography:',
    copyEmail: 'Copy Email',
    emailCopied: 'Copied to clipboard!',
    directEmail: 'Send Email',
    viewGithub: 'Explore GitHub @hyyan55',
    
    // Footer
    allRightsReserved: 'All rights reserved.',
  },
  ar: {
    navDevelopment: 'التطوير البرمجي',
    navPhotography: 'المعرض الفوتوغرافي',
    navMedicine: 'الطب والمسار الأكاديمي',
    navContact: 'تواصل',
    getInTouch: 'تواصل معي',
    visitProject: 'زيارة المشروع',
    scrollExplore: 'مرّر لاستكشاف العوالم الثلاثة',
    interactivePreview: 'معاينة تفاعلية حية',
    
    // Exhibition
    exhibitionBadge: 'وضع المعرض البصري',
    viewFullscreen: 'عرض بدقة كاملة',
    closeExhibition: 'إغلاق',
    nextPhoto: 'الصورة التالية',
    prevPhoto: 'الصورة السابقة',
    
    // Academic & Identity
    medicalStudentTitle: 'طالب طب بشري',
    universityName: 'جامعة شرق العلوم والتكنولوجيا',
    campusCity: 'كسلا، السودان',
    disciplinesTag: 'العلوم السريرية · علم التشريح · علم الأمراض · وظائف الأعضاء',
    
    // Contact
    contactHeadline: 'لنصنع معاً شيئاً ذا أثر واستدامة.',
    contactPrompt: 'للتواصل المباشر حول هندسة البرمجيات، أو التقنيات الطبية، أو التصوير:',
    copyEmail: 'نسخ البريد',
    emailCopied: 'تم نسخ البريد الإلكتروني!',
    directEmail: 'إرسال بريد',
    viewGithub: 'استكشف GitHub @hyyan55',
    
    // Footer
    allRightsReserved: 'جميع الحقوق محفوظة.',
  },
};
