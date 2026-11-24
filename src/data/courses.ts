/* ------------------------------------------------------------------
   FASLA.DEV — central catalog data
   6 specializations (majors) · 25 fields.
   Prices are the OFFICIAL course prices in Egyptian Pounds (EGP).
   Edit a price here and it updates across the whole website.
------------------------------------------------------------------- */

export type Bi = { ar: string; en: string };

const b = (en: string, ar: string): Bi => ({ en, ar });
const p = (en: string, ar: string): Bi => ({ en, ar });

export const LEVEL = {
  beginner: b("Beginner", "مبتدئ"),
  beginnerIntermediate: b("Beginner → Intermediate", "من المبتدئ إلى المتوسط"),
  beginnerAdvanced: b("Beginner → Advanced", "من المبتدئ إلى المتقدم"),
  intermediate: b("Intermediate", "متوسط"),
  advanced: b("Advanced", "متقدم"),
};

export type Major = {
  slug: string;
  index: string;
  icon: string;
  name: Bi;
  concept: Bi;
  objectives: Bi[];
};

export type Course = {
  slug: string;
  index: string;
  major: string;
  icon: string;
  name: Bi;
  description: Bi;
  level: Bi;
  price: number;
  weeklyProjects: number;
  technologies: string[];
  projects: Bi[];
  featured?: boolean;
};

export const majors: Major[] = [
  {
    slug: "software-development",
    index: "01",
    icon: "code",
    name: b("Software Development", "تطوير البرمجيات"),
    concept: b(
      "Building websites, web applications, desktop software and complete digital systems — from interface to database and deployment.",
      "بناء المواقع وتطبيقات الويب وبرامج سطح المكتب والأنظمة الرقمية المتكاملة — من الواجهة إلى قاعدة البيانات والنشر."
    ),
    objectives: [
      b("Build responsive interfaces and secure server-side systems.", "بناء واجهات متجاوبة وأنظمة خادم آمنة."),
      b("Work with databases, REST APIs and authentication.", "العمل مع قواعد البيانات وواجهات REST والمصادقة."),
      b("Follow clean code, testing and deployment practices.", "اتباع ممارسات الكود النظيف والاختبار والنشر."),
      b("Ship complete, portfolio-ready software products.", "إطلاق منتجات برمجية متكاملة جاهزة لملف الأعمال."),
    ],
  },
  {
    slug: "mobile-development",
    index: "02",
    icon: "device",
    name: b("Mobile Development", "تطوير تطبيقات الموبايل"),
    concept: b(
      "Developing applications for smartphones and tablets, including Android and iOS applications.",
      "تطوير تطبيقات الهواتف الذكية والأجهزة اللوحية، بما في ذلك تطبيقات أندرويد وiOS."
    ),
    objectives: [
      b("Design native-quality mobile interfaces and user flows.", "تصميم واجهات موبايل بجودة أصلية وتدفقات مستخدم واضحة."),
      b("Connect apps to APIs, Firebase and local storage.", "ربط التطبيقات بواجهات برمجية وFirebase والتخزين المحلي."),
      b("Manage app state, navigation and notifications.", "إدارة حالة التطبيق والتنقل والإشعارات."),
      b("Publish and maintain apps on Google Play and the App Store.", "نشر التطبيقات وصيانتها على Google Play وApp Store."),
    ],
  },
  {
    slug: "ai-data",
    index: "03",
    icon: "spark",
    name: b("Artificial Intelligence & Data", "الذكاء الاصطناعي والبيانات"),
    concept: b(
      "Building intelligent systems and turning data into decisions — from machine learning models to dashboards and data pipelines.",
      "بناء أنظمة ذكية وتحويل البيانات إلى قرارات — من نماذج تعلم الآلة إلى لوحات المعلومات وخطوط البيانات."
    ),
    objectives: [
      b("Write Python for data and AI applications.", "كتابة بايثون لتطبيقات البيانات والذكاء الاصطناعي."),
      b("Train, evaluate and deploy machine learning models.", "تدريب نماذج تعلم الآلة وتقييمها ونشرها."),
      b("Analyze and visualize data for business decisions.", "تحليل البيانات وعرضها بصريًا لدعم قرارات الأعمال."),
      b("Build practical AI products and data pipelines.", "بناء منتجات ذكاء اصطناعي عملية وخطوط بيانات."),
    ],
  },
  {
    slug: "cybersecurity-cloud",
    index: "04",
    icon: "shield",
    name: b("Cybersecurity & Cloud", "الأمن السيبراني والحوسبة السحابية"),
    concept: b(
      "Protecting computer systems and networks while building, automating and scaling cloud infrastructure.",
      "حماية أنظمة الكمبيوتر والشبكات مع بناء البنية التحتية السحابية وأتمتتها وتوسيعها."
    ),
    objectives: [
      b("Understand networks, systems and common attack surfaces.", "فهم الشبكات والأنظمة وأسطح الهجوم الشائعة."),
      b("Secure and harden servers and cloud environments.", "تأمين الخوادم والبيئات السحابية وتقويتها."),
      b("Automate deployment with containers and CI/CD pipelines.", "أتمتة النشر بالحاويات وخطوط CI/CD."),
      b("Monitor, detect and respond to security incidents.", "مراقبة الحوادث الأمنية واكتشافها والاستجابة لها."),
    ],
  },
  {
    slug: "game-development",
    index: "05",
    icon: "game",
    name: b("Game Development", "تطوير الألعاب"),
    concept: b(
      "Creating 2D and 3D video games for computers, consoles, mobile devices, and virtual environments.",
      "إنشاء ألعاب فيديو ثنائية وثلاثية الأبعاد لأجهزة الكمبيوتر والمنصات والموبايل والبيئات الافتراضية."
    ),
    objectives: [
      b("Build 2D and 3D games with professional engines.", "بناء ألعاب ثنائية وثلاثية الأبعاد بمحركات احترافية."),
      b("Program gameplay, physics, animation and game AI.", "برمجة أسلوب اللعب والفيزياء والرسوم المتحركة وذكاء الألعاب."),
      b("Design levels, mechanics and balanced player experiences.", "تصميم المراحل والميكانيكيات وتجارب لعب متوازنة."),
      b("Optimize and test complete playable prototypes.", "تحسين نماذج ألعاب قابلة للعب واختبارها."),
    ],
  },
  {
    slug: "iot-automation",
    index: "06",
    icon: "cpu",
    name: b("IoT & Automation", "إنترنت الأشياء والأتمتة"),
    concept: b(
      "Programming connected devices, sensors, smart machines and automated systems for the real world.",
      "برمجة الأجهزة المتصلة والحساسات والآلات الذكية والأنظمة المؤتمتة للعالم الحقيقي."
    ),
    objectives: [
      b("Program microcontrollers and connected devices.", "برمجة المتحكمات الدقيقة والأجهزة المتصلة."),
      b("Connect sensors, motors and cloud platforms.", "توصيل الحساسات والمحركات والمنصات السحابية."),
      b("Automate repetitive tasks with scripts and tools.", "أتمتة المهام المتكررة بالسكربتات والأدوات."),
      b("Prototype and test real smart systems.", "إنشاء نماذج أولية واختبار أنظمة ذكية حقيقية."),
    ],
  },
];

export const getMajor = (slug: string): Major =>
  majors.find((major) => major.slug === slug) ?? majors[0];

type RawCourse = {
  slug: string;
  major: string;
  name: Bi;
  description: Bi;
  level: Bi;
  price: number;
  technologies: string[];
  projects: Bi[];
  featured?: boolean;
};

const raw: RawCourse[] = [
  /* ---------------- 01 · Software Development ---------------- */
  {
    slug: "front-end-development",
    major: "software-development",
    name: b("Front-End Development", "تطوير الواجهات الأمامية"),
    description: b(
      "Build fast, responsive and professional interfaces with HTML, CSS, JavaScript, React, TypeScript and Next.js.",
      "ابنِ واجهات سريعة ومتجاوبة واحترافية باستخدام HTML وCSS وJavaScript وReact وTypeScript وNext.js."
    ),
    level: LEVEL.beginnerAdvanced,
    price: 6000,
    technologies: ["HTML5", "CSS3", "Responsive Web Design", "JavaScript", "DOM Manipulation", "Git & GitHub", "React.js", "TypeScript", "Next.js", "API Integration"],
    projects: [
      p("Business Website", "موقع أعمال"),
      p("E-commerce Website", "موقع تجارة إلكترونية"),
      p("Admin Dashboard", "لوحة تحكم إدارية"),
      p("Educational Platform", "منصة تعليمية"),
      p("Booking Website", "موقع حجوزات"),
    ],
  },
  {
    slug: "back-end-development",
    major: "software-development",
    name: b("Back-End Development", "تطوير الواجهات الخلفية"),
    description: b(
      "Engineer secure APIs, databases and server-side systems with Node.js, Laravel or ASP.NET Core.",
      "ابنِ واجهات برمجية آمنة وقواعد بيانات وأنظمة خادم باستخدام Node.js أو Laravel أو ASP.NET Core."
    ),
    level: LEVEL.beginnerAdvanced,
    price: 7000,
    technologies: ["Programming Fundamentals", "JavaScript / Python / PHP / C#", "Node.js / Laravel / ASP.NET Core", "REST APIs", "SQL", "MySQL / PostgreSQL", "MongoDB", "Authentication & Authorization", "Security Fundamentals", "Testing & Debugging", "Server Deployment"],
    projects: [
      p("Authentication System", "نظام مصادقة"),
      p("Inventory Management System", "نظام إدارة المخزون"),
      p("Booking Management System", "نظام إدارة الحجوزات"),
      p("E-commerce API", "واجهة برمجية لمتجر إلكتروني"),
      p("Employee Management System", "نظام إدارة الموظفين"),
    ],
  },
  {
    slug: "full-stack-development",
    major: "software-development",
    name: b("Full-Stack Development", "التطوير المتكامل (Full-Stack)"),
    description: b(
      "Own the complete product: interface, server, database, testing and deployment in one integrated path.",
      "امتلك المنتج كاملًا: الواجهة والخادم وقاعدة البيانات والاختبار والنشر في مسار واحد متكامل."
    ),
    level: LEVEL.beginnerAdvanced,
    price: 10000,
    technologies: ["HTML & CSS", "JavaScript", "React.js / Next.js", "Node.js / Laravel / ASP.NET", "Database Management", "REST APIs", "Authentication", "Git & GitHub", "Testing", "Deployment", "System Design Fundamentals"],
    projects: [
      p("Complete E-commerce Platform", "منصة تجارة إلكترونية متكاملة"),
      p("Learning Management System", "نظام إدارة التعلم"),
      p("ERP System", "نظام تخطيط موارد المؤسسات"),
      p("Company Management Platform", "منصة إدارة شركات"),
      p("Complete Booking Application", "تطبيق حجوزات متكامل"),
    ],
    featured: true,
  },
  {
    slug: "wordpress-development",
    major: "software-development",
    name: b("WordPress Development", "تطوير ووردبريس"),
    description: b(
      "Build and customize professional WordPress websites, blogs and WooCommerce stores — and launch them live.",
      "ابنِ وخصّص مواقع ووردبريس احترافية ومدونات ومتاجر WooCommerce وأطلقها على الإنترنت."
    ),
    level: LEVEL.beginnerIntermediate,
    price: 4000,
    technologies: ["WordPress", "Themes & Plugins", "WooCommerce", "Page Builders", "PHP Basics", "MySQL", "SEO Basics", "Website Security", "Hosting & Deployment"],
    projects: [
      p("Business Website", "موقع أعمال"),
      p("Online Store with WooCommerce", "متجر إلكتروني بـ WooCommerce"),
      p("Blog / News Website", "موقع مدونة / أخبار"),
      p("Landing Page", "صفحة هبوط"),
    ],
  },
  {
    slug: "desktop-application-development",
    major: "software-development",
    name: b("Desktop Application Development", "تطوير تطبيقات سطح المكتب"),
    description: b(
      "Build fast, reliable desktop applications for Windows with C#, .NET and Python.",
      "ابنِ تطبيقات سطح مكتب سريعة وموثوقة لويندوز باستخدام C# و.NET وبايثون."
    ),
    level: LEVEL.intermediate,
    price: 8000,
    technologies: ["C# / .NET", "WPF / Windows Forms", "Python (Tkinter / PyQt)", "Desktop UI Design", "SQLite Local Database", "File Management", "Packaging & Installation"],
    projects: [
      p("Management System", "نظام إدارة"),
      p("Inventory Desktop App", "تطبيق مخزون لسطح المكتب"),
      p("Point of Sale (POS) System", "نظام نقاط بيع"),
      p("Personal Finance App", "تطبيق إدارة مالية شخصية"),
    ],
  },
  {
    slug: "software-engineering",
    major: "software-development",
    name: b("Software Engineering", "هندسة البرمجيات"),
    description: b(
      "Build strong engineering foundations: data structures, algorithms, OOP, SOLID and clean architecture.",
      "ابنِ أسسًا هندسية قوية: هياكل البيانات والخوارزميات والبرمجة الكائنية وSOLID والهندسة النظيفة."
    ),
    level: LEVEL.beginnerIntermediate,
    price: 9000,
    technologies: ["Programming Fundamentals", "Data Structures", "Algorithms", "OOP", "SOLID Principles", "Design Patterns", "Clean Code", "Software Architecture"],
    projects: [
      p("Employee Management System", "نظام إدارة الموظفين"),
      p("Library Management System", "نظام إدارة المكتبات"),
      p("Banking System Prototype", "نموذج نظام بنكي"),
    ],
  },
  {
    slug: "software-testing-qa",
    major: "software-development",
    name: b("Software Testing / QA Automation", "اختبار البرمجيات وأتمتة الجودة"),
    description: b(
      "Ensure software quality with professional manual testing, automation frameworks and performance testing.",
      "اضمن جودة البرمجيات بالاختبار اليدوي الاحترافي وأطر الأتمتة واختبار الأداء."
    ),
    level: LEVEL.intermediate,
    price: 10000,
    technologies: ["Software Testing Fundamentals", "Test Cases & Bug Reporting", "Selenium", "Playwright", "Cypress", "API Testing (Postman)", "Performance Testing (JMeter)", "CI/CD Fundamentals"],
    projects: [
      p("E-commerce Testing", "اختبار متجر إلكتروني"),
      p("Automated Login Testing", "اختبار تسجيل دخول آلي"),
      p("API Testing Framework", "إطار اختبار واجهات برمجية"),
      p("Performance Testing Report", "تقرير اختبار أداء"),
    ],
  },
  {
    slug: "software-development-ai-foundation",
    major: "software-development",
    name: b("Software Development & AI Foundation", "أساسيات تطوير البرمجيات والذكاء الاصطناعي"),
    description: b(
      "A combined foundation path: software development fundamentals plus practical AI skills in one program.",
      "مسار تأسيسي مدمج: أساسيات تطوير البرمجيات مع مهارات ذكاء اصطناعي عملية في برنامج واحد."
    ),
    level: LEVEL.beginnerAdvanced,
    price: 13000,
    technologies: ["Programming Fundamentals (Python)", "OOP", "Data Structures & Algorithms", "Web Basics (HTML / CSS / JavaScript)", "Databases & SQL", "Git & GitHub", "AI Fundamentals", "Machine Learning Basics", "Prompt Engineering", "Building AI-Powered Apps"],
    projects: [
      p("Personal Portfolio Website", "موقع ملف أعمال شخصي"),
      p("AI Chatbot Assistant", "مساعد محادثة ذكي"),
      p("Data Analysis Mini-Project", "مشروع تحليل بيانات مصغر"),
      p("Smart Web Application", "تطبيق ويب ذكي"),
    ],
  },
  /* ---------------- 02 · Mobile Development ---------------- */
  {
    slug: "flutter-development",
    major: "mobile-development",
    name: b("Mobile App Development (Flutter)", "تطوير تطبيقات الموبايل (Flutter)"),
    description: b(
      "Build cross-platform mobile apps for Android and iOS from one codebase with Flutter and Dart.",
      "ابنِ تطبيقات موبايل لأندرويد وiOS من كود واحد باستخدام Flutter وDart."
    ),
    level: LEVEL.beginnerAdvanced,
    price: 10000,
    technologies: ["Dart", "Flutter", "Widgets", "Responsive Mobile UI", "State Management", "REST APIs", "Firebase", "Local Storage", "App Deployment"],
    projects: [
      p("E-commerce App", "تطبيق تجارة إلكترونية"),
      p("Restaurant App", "تطبيق مطعم"),
      p("Delivery App", "تطبيق توصيل"),
      p("Educational App", "تطبيق تعليمي"),
    ],
  },
  {
    slug: "android-development",
    major: "mobile-development",
    name: b("Android Development (Kotlin)", "تطوير أندرويد (Kotlin)"),
    description: b(
      "Build native Android applications with Kotlin, Android Studio and Jetpack Compose, and publish them on Google Play.",
      "ابنِ تطبيقات أندرويد أصلية باستخدام Kotlin وAndroid Studio وJetpack Compose وانشرها على Google Play."
    ),
    level: LEVEL.beginnerAdvanced,
    price: 9000,
    technologies: ["Kotlin", "Java Fundamentals", "Android Studio", "XML / Jetpack Compose", "Activities & Navigation", "REST APIs", "Firebase", "SQLite / Room Database", "Notifications", "Google Play Deployment"],
    projects: [
      p("To-Do Application", "تطبيق مهام"),
      p("Food Delivery Application", "تطبيق توصيل طعام"),
      p("E-commerce Application", "تطبيق تجارة إلكترونية"),
      p("Chat Application", "تطبيق محادثة"),
    ],
  },
  {
    slug: "ios-development",
    major: "mobile-development",
    name: b("iOS Development (Swift)", "تطوير iOS (Swift)"),
    description: b(
      "Create polished native iOS applications with Swift, SwiftUI and Xcode, from interface to App Store deployment.",
      "أنشئ تطبيقات iOS أصلية أنيقة باستخدام Swift وSwiftUI وXcode، من الواجهة إلى النشر على App Store."
    ),
    level: LEVEL.beginnerAdvanced,
    price: 12000,
    technologies: ["Swift", "SwiftUI", "Xcode", "UI Development", "APIs", "Core Data", "Authentication", "Push Notifications", "App Store Deployment"],
    projects: [
      p("Expense Management App", "تطبيق إدارة المصروفات"),
      p("Booking Application", "تطبيق حجوزات"),
      p("E-commerce App", "تطبيق تجارة إلكترونية"),
      p("Service Application", "تطبيق خدمات"),
    ],
  },
  /* ---------------- 03 · AI & Data ---------------- */
  {
    slug: "artificial-intelligence",
    major: "ai-data",
    name: b("Artificial Intelligence (AI)", "الذكاء الاصطناعي"),
    description: b(
      "A complete AI path: Python, machine learning, deep learning and real intelligent applications.",
      "مسار ذكاء اصطناعي متكامل: بايثون وتعلم الآلة والتعلم العميق وتطبيقات ذكية حقيقية."
    ),
    level: LEVEL.beginnerAdvanced,
    price: 18000,
    technologies: ["Python", "NumPy & Pandas", "Machine Learning", "Deep Learning Basics", "Neural Networks", "NLP Basics", "Computer Vision Basics", "AI APIs", "Model Deployment"],
    projects: [
      p("AI Chatbot", "روبوت محادثة ذكي"),
      p("Image Recognition App", "تطبيق التعرف على الصور"),
      p("Recommendation System", "نظام توصيات"),
      p("Smart Assistant", "مساعد ذكي"),
    ],
  },
  {
    slug: "machine-learning",
    major: "ai-data",
    name: b("Machine Learning", "تعلم الآلة"),
    description: b(
      "Train and evaluate predictive models with supervised and unsupervised learning using Scikit-learn.",
      "درّب نماذج تنبؤ وقيّمها بالتعلم الموجه وغير الموجه باستخدام Scikit-learn."
    ),
    level: LEVEL.intermediate,
    price: 12000,
    technologies: ["Supervised Learning", "Unsupervised Learning", "Regression", "Classification", "Clustering", "Scikit-learn", "Model Evaluation", "Feature Engineering"],
    projects: [
      p("House Price Prediction", "التنبؤ بأسعار المنازل"),
      p("Customer Churn Prediction", "التنبؤ بتسرب العملاء"),
      p("Loan Risk Prediction", "التنبؤ بمخاطر القروض"),
      p("Product Recommendation System", "نظام توصية بالمنتجات"),
    ],
  },
  {
    slug: "deep-learning",
    major: "ai-data",
    name: b("Deep Learning", "التعلم العميق"),
    description: b(
      "Build and optimize neural networks with TensorFlow and PyTorch for vision, sequences and patterns.",
      "ابنِ شبكات عصبية وحسّنها باستخدام TensorFlow وPyTorch للرؤية والتسلسلات والأنماط."
    ),
    level: LEVEL.advanced,
    price: 15000,
    technologies: ["Neural Networks", "TensorFlow", "PyTorch", "CNN", "RNN", "Transformers Fundamentals", "Model Training", "Model Optimization"],
    projects: [
      p("Image Classification", "تصنيف الصور"),
      p("Object Recognition", "التعرف على الأجسام"),
      p("Image Analysis", "تحليل الصور"),
      p("Pattern Recognition", "التعرف على الأنماط"),
    ],
  },
  {
    slug: "computer-vision",
    major: "ai-data",
    name: b("Computer Vision", "الرؤية الحاسوبية"),
    description: b(
      "Teach machines to see: image processing, object detection, OCR and face recognition with OpenCV and CNNs.",
      "علّم الآلات أن ترى: معالجة الصور واكتشاف الأجسام والتعرف الضوئي والتعرف على الوجوه باستخدام OpenCV والشبكات الالتفافية."
    ),
    level: LEVEL.advanced,
    price: 13000,
    technologies: ["Image Processing", "OpenCV", "Object Detection", "Image Classification", "OCR", "CNN", "Face Recognition", "Video Analysis"],
    projects: [
      p("Object Detection System", "نظام اكتشاف الأجسام"),
      p("Image Text Recognition (OCR)", "التعرف على النصوص في الصور"),
      p("Product Image Classification", "تصنيف صور المنتجات"),
      p("Smart Surveillance Prototype", "نموذج مراقبة ذكية"),
    ],
  },
  {
    slug: "generative-ai-llm",
    major: "ai-data",
    name: b("Generative AI & LLM Engineering", "هندسة الذكاء التوليدي والنماذج اللغوية"),
    description: b(
      "Build LLM-powered products with prompt engineering, RAG, vector databases, agents and LangChain.",
      "ابنِ منتجات تعتمد على النماذج اللغوية بهندسة الأوامر وRAG وقواعد البيانات المتجهة والوكلاء وLangChain."
    ),
    level: LEVEL.intermediate,
    price: 15000,
    technologies: ["Large Language Models", "Prompt Engineering", "OpenAI APIs", "Embeddings", "Vector Databases", "RAG", "AI Agents", "LangChain", "AI Evaluation & Guardrails"],
    projects: [
      p("Customer Service AI Chatbot", "روبوت محادثة لخدمة العملاء"),
      p("AI Educational Assistant", "مساعد تعليمي ذكي"),
      p("PDF AI Assistant", "مساعد PDF ذكي"),
      p("Intelligent Document Search System", "نظام بحث ذكي في المستندات"),
    ],
  },
  {
    slug: "data-science",
    major: "ai-data",
    name: b("Data Science", "علم البيانات"),
    description: b(
      "Use Python, statistics and machine learning to forecast, segment and predict business outcomes.",
      "استخدم بايثون والإحصاء وتعلم الآلة للتنبؤ بالمبيعات وتجزئة العملاء وتوقع نتائج الأعمال."
    ),
    level: LEVEL.intermediate,
    price: 10000,
    technologies: ["Python", "Pandas", "NumPy", "Statistics", "Probability", "Machine Learning", "Data Visualization", "Predictive Analytics"],
    projects: [
      p("Sales Forecasting", "التنبؤ بالمبيعات"),
      p("Customer Behavior Analysis", "تحليل سلوك العملاء"),
      p("Demand Prediction", "التنبؤ بالطلب"),
      p("Customer Segmentation", "تجزئة العملاء"),
    ],
  },
  {
    slug: "data-analysis",
    major: "ai-data",
    name: b("Data Analysis", "تحليل البيانات"),
    description: b(
      "Clean, analyze and visualize business data professionally with Excel, SQL, Power BI and statistics.",
      "نظّف بيانات الأعمال وحلّلها واعرضها بصريًا بشكل احترافي باستخدام Excel وSQL وPower BI والإحصاء."
    ),
    level: LEVEL.beginner,
    price: 7000,
    technologies: ["Microsoft Excel", "Advanced Excel", "Data Cleaning", "SQL Basics", "Power BI", "Data Visualization", "Basic Statistics"],
    projects: [
      p("Company Sales Analysis", "تحليل مبيعات الشركة"),
      p("Sales Dashboard", "لوحة معلومات المبيعات"),
      p("Financial Analysis", "التحليل المالي"),
      p("Employee Performance Analysis", "تحليل أداء الموظفين"),
    ],
  },
  {
    slug: "data-engineering",
    major: "ai-data",
    name: b("Data Engineering", "هندسة البيانات"),
    description: b(
      "Build the pipelines and warehouses that collect, move and organize data at scale.",
      "ابنِ خطوط ومستودعات البيانات التي تجمع البيانات وتنقلها وتنظمها على نطاق واسع."
    ),
    level: LEVEL.intermediate,
    price: 12000,
    technologies: ["Python", "SQL", "ETL Pipelines", "Data Warehousing", "Apache Spark Basics", "Airflow Basics", "Cloud Data Services", "Data Modeling"],
    projects: [
      p("ETL Data Pipeline", "خط بيانات ETL"),
      p("Data Warehouse Design", "تصميم مستودع بيانات"),
      p("Automated Reporting System", "نظام تقارير آلي"),
      p("Real-Time Data Processing Prototype", "نموذج معالجة بيانات لحظية"),
    ],
  },
  /* ---------------- 04 · Cybersecurity & Cloud ---------------- */
  {
    slug: "cybersecurity",
    major: "cybersecurity-cloud",
    name: b("Cybersecurity", "الأمن السيبراني"),
    description: b(
      "Protect systems and networks: security fundamentals, ethical hacking, SOC monitoring and incident response.",
      "احمِ الأنظمة والشبكات: أساسيات الأمن والاختراق الأخلاقي ومراقبة SOC والاستجابة للحوادث."
    ),
    level: LEVEL.beginnerAdvanced,
    price: 15000,
    technologies: ["Networking Fundamentals", "Linux & Windows Security", "Ethical Hacking", "OWASP Top 10", "SIEM & SOC Basics", "Digital Forensics Fundamentals", "Incident Response", "Security Reports"],
    projects: [
      p("Company Network Design", "تصميم شبكة شركة"),
      p("Web Security Testing in a Lab", "اختبار أمان الويب في بيئة معملية"),
      p("Security Log Analysis", "تحليل سجلات الأمان"),
      p("Penetration Testing Report", "تقرير اختبار اختراق"),
    ],
  },
  {
    slug: "cloud-computing",
    major: "cybersecurity-cloud",
    name: b("Cloud Computing", "الحوسبة السحابية"),
    description: b(
      "Design and operate cloud infrastructure on AWS, Azure or Google Cloud with security and cost control.",
      "صمّم البنية التحتية السحابية وشغّلها على AWS أو Azure أو Google Cloud مع الأمان والتحكم في التكلفة."
    ),
    level: LEVEL.intermediate,
    price: 12000,
    technologies: ["AWS / Microsoft Azure / Google Cloud", "Virtual Machines", "Cloud Storage", "Cloud Networking", "IAM", "Cloud Security", "Backup & Recovery", "Cost Management"],
    projects: [
      p("Website Hosting on AWS", "استضافة موقع على AWS"),
      p("Cloud Infrastructure Setup", "إعداد البنية التحتية السحابية"),
      p("Cloud Backup System", "نظام نسخ احتياطي سحابي"),
    ],
  },
  {
    slug: "devops-engineering",
    major: "cybersecurity-cloud",
    name: b("DevOps Engineering", "هندسة DevOps"),
    description: b(
      "Automate delivery with Docker, Kubernetes, CI/CD, Terraform, Prometheus and Grafana.",
      "أتمتة التسليم باستخدام Docker وKubernetes وCI/CD وTerraform وPrometheus وGrafana."
    ),
    level: LEVEL.advanced,
    price: 15000,
    technologies: ["Git", "Linux", "Docker", "Kubernetes", "CI/CD", "Jenkins / GitHub Actions", "Terraform", "Monitoring", "Prometheus", "Grafana"],
    projects: [
      p("Automated Application Deployment", "نشر آلي للتطبيقات"),
      p("CI/CD Pipeline", "خط أنابيب CI/CD"),
      p("Dockerized Application", "تطبيق داخل حاويات Docker"),
      p("Kubernetes Environment", "بيئة Kubernetes"),
    ],
  },
  /* ---------------- 05 · Game Development ---------------- */
  {
    slug: "game-development-unity-unreal",
    major: "game-development",
    name: b("Game Development (Unity / Unreal)", "تطوير الألعاب (Unity / Unreal)"),
    description: b(
      "Create 2D and 3D games with Unity and Unreal Engine — gameplay, physics, animation, levels and optimization.",
      "أنشئ ألعابًا ثنائية وثلاثية الأبعاد باستخدام Unity وUnreal Engine — أسلوب اللعب والفيزياء والرسوم المتحركة والمراحل والتحسين."
    ),
    level: LEVEL.beginnerAdvanced,
    price: 12000,
    technologies: ["Unity Engine", "Unreal Engine", "C# / Blueprints", "Game Objects & Physics", "Animation", "Level Design", "UI Development", "Game Optimization"],
    projects: [
      p("2D Platformer", "لعبة منصات ثنائية الأبعاد"),
      p("3D Adventure Game", "لعبة مغامرات ثلاثية الأبعاد"),
      p("Mobile Puzzle Game", "لعبة ألغاز للموبايل"),
      p("Racing Game", "لعبة سباقات"),
    ],
  },
  /* ---------------- 06 · IoT & Automation ---------------- */
  {
    slug: "internet-of-things",
    major: "iot-automation",
    name: b("Internet of Things (IoT)", "إنترنت الأشياء"),
    description: b(
      "Connect sensors and devices to the cloud with ESP32, MQTT and IoT security fundamentals.",
      "اربط الحساسات والأجهزة بالسحابة باستخدام ESP32 وMQTT وأساسيات أمان إنترنت الأشياء."
    ),
    level: LEVEL.intermediate,
    price: 10000,
    technologies: ["Arduino / ESP32", "Sensors", "MQTT", "Wi-Fi & Connectivity", "Cloud Integration", "APIs", "IoT Security", "C/C++ Basics"],
    projects: [
      p("Smart Home System", "نظام منزل ذكي"),
      p("Remote Temperature Monitoring", "مراقبة الحرارة عن بُعد"),
      p("Smart Irrigation System", "نظام ري ذكي"),
      p("Alarm System", "نظام إنذار"),
    ],
  },
  {
    slug: "automation",
    major: "iot-automation",
    name: b("Automation", "الأتمتة"),
    description: b(
      "Automate repetitive work with Python scripts, web scraping, integrations and smart workflows.",
      "أتمت المهام المتكررة باستخدام سكربتات بايثون وكشط الويب والتكاملات وسير عمل ذكي."
    ),
    level: LEVEL.beginnerIntermediate,
    price: 10000,
    technologies: ["Python Scripting", "Web Scraping", "Excel & Office Automation", "APIs & Integrations", "Task Scheduling", "RPA Basics", "Browser Automation (Selenium)"],
    projects: [
      p("Excel Automation Tool", "أداة أتمتة Excel"),
      p("Web Data Collector", "أداة تجميع بيانات من الويب"),
      p("Automated Reports System", "نظام تقارير آلي"),
      p("Social Media Scheduler", "مجدول وسائل تواصل اجتماعي"),
    ],
  },
];

export const courses: Course[] = raw.map((course, i) => ({
  ...course,
  index: String(i + 1).padStart(2, "0"),
  icon: getMajor(course.major).icon,
  weeklyProjects: 3,
}));

export const getCourse = (slug: string): Course | undefined =>
  courses.find((course) => course.slug === slug);

export const coursesByMajor = (majorSlug: string): Course[] =>
  courses.filter((course) => course.major === majorSlug);

export const formatEGP = (value: number): string =>
  new Intl.NumberFormat("en-US").format(value);

export const priceLabel = (course: Course): string => `${formatEGP(course.price)} EGP`;
