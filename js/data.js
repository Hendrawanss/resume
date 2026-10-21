// Semua konten portofolio diatur di sini, per bahasa (id / en). Tidak perlu menyentuh index.html.
// Sumber: profil LinkedIn (Profile.pdf) dan GitHub Hendrawanss.

const HERO_CODE = [
  'Route::post("/onboarding", function (Request $r) {',
  '    $merchant = DB::transaction(',
  '        fn () => Merchant::register($r->validated())',
  '    );',
  '',
  '    VerifyMerchant::dispatch($merchant);',
  '',
  '    return Inertia::render("Onboarding/Success", [',
  '        "merchant" => $merchant,',
  '    ]);',
  '});'
];

const SOCIALS = [
  { label: "GitHub", url: "https://github.com/Hendrawanss", icon: "github" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/hendrawan-sulistyanto/", icon: "linkedin" },
  { label: "Email", url: "mailto:hendrawanss123@gmail.com", icon: "mail" }
];

// Isi dengan endpoint form (mis. Formspree) agar form kontak benar-benar mengirim. Kosong = fallback ke mailto.
const FORM_ENDPOINT = "";

const PORTFOLIO = {
  /* =========================== BAHASA INDONESIA =========================== */
  id: {
    ui: {
      portfolio: "Portofolio",
      nav: { about: "Tentang", skills: "Keahlian", projects: "Proyek", experience: "Pengalaman", education: "Pendidikan", contact: "Kontak" },
      hero: { greeting: "Halo, saya", ctaProjects: "Lihat Proyek", ctaContact: "Hubungi Saya" },
      sections: { about: "Tentang Saya", skills: "Keahlian", projects: "Proyek Pilihan", experience: "Pengalaman", education: "Pendidikan", contact: "Kontak" },
      filterAll: "Semua",
      repo: "Repositori",
      demo: "Demo",
      contact: {
        title: "Mari bekerja sama.",
        lead: "Punya proyek atau ingin berdiskusi? Kirim pesan, saya akan membalas secepatnya.",
        name: "Nama", namePh: "Nama Anda",
        email: "Email", emailPh: "nama@email.com",
        message: "Pesan", messagePh: "Ceritakan kebutuhan Anda...",
        send: "Kirim Pesan",
        invalid: "Mohon lengkapi semua kolom dengan benar.",
        openingMail: "Membuka aplikasi email Anda...",
        subject: "Pesan dari",
        sent: "Pesan terkirim. Terima kasih!",
        failed: "Gagal mengirim pesan. Coba lagi nanti."
      },
      footer: { backTop: "Ke atas" }
    },
    profile: {
      name: "Hendrawan Sulistyanto",
      shortName: "Hendrawan",
      role: "Full Stack Developer",
      tagline: "8+ tahun membangun aplikasi web yang skalabel untuk fintech, pembayaran digital, dan sistem enterprise.",
      status: "Full Stack Developer di YUKK Indonesia",
      photo: "img/profile.jpg",
      about: [
        "Saya Full Stack Developer dengan pengalaman lebih dari 8 tahun di rekayasa perangkat lunak. Fokus saya membangun aplikasi web yang menyelesaikan masalah bisnis nyata dengan Laravel, PHP, Vue.js, Inertia.js, MySQL, dan Docker.",
        "Sepanjang karier saya berkontribusi di platform fintech, solusi pembayaran, sistem onboarding digital, dan aplikasi enterprise yang menuntut keandalan, keamanan, dan performa tinggi.",
        "Di luar menulis kode, saya senang merancang arsitektur yang mudah dirawat, menyederhanakan alur kerja yang rumit, dan terus memperbaiki proses pengembangan. Saya memakai AI-assisted engineering (Claude Code dan ChatGPT) sehari-hari untuk mempercepat implementasi, menyusun dokumentasi teknis, mendukung keputusan arsitektur, dan mereview kode tanpa menurunkan standar engineering."
      ],
      stats: [
        { value: "8+", label: "Tahun pengalaman" },
        { value: "4+", label: "Tahun di fintech" },
        { value: "5", label: "Perusahaan" },
        { value: "S1", label: "Teknik Informatika" }
      ],
      socials: SOCIALS,
      contacts: [
        { label: "Email", value: "hendrawanss123@gmail.com", href: "mailto:hendrawanss123@gmail.com" },
        { label: "LinkedIn", value: "linkedin.com/in/hendrawan-sulistyanto", href: "https://www.linkedin.com/in/hendrawan-sulistyanto/" },
        { label: "Lokasi", value: "Klaten, Jawa Tengah" }
      ],
      formEndpoint: FORM_ENDPOINT
    },
    heroCode: HERO_CODE,
    skills: [
      { group: "Backend", items: ["PHP", "Laravel", "REST API", "Payment Integration", "Queue & Scheduled Job", "Authentication & Authorization"] },
      { group: "Frontend", items: ["Vue.js", "Inertia.js", "JavaScript", "HTML & CSS", "WordPress Development"] },
      { group: "Database & Infrastruktur", items: ["MySQL", "MariaDB", "Query Optimization", "Docker", "Git"] },
      { group: "Arsitektur & AI-Assisted Engineering", items: ["System Design", "Software Architecture", "Clean Architecture", "Claude Code", "ChatGPT", "Prompt Engineering"] }
    ],
    projects: [
      { title: "Digital Onboarding Merchant", category: "Fintech", featured: true,
        description: "Modul onboarding digital end-to-end untuk mendaftarkan dan memverifikasi mitra bisnis. Dibangun dengan Laravel, Vue.js, dan Inertia.js, dilengkapi validasi bisnis berlapis dan proses verifikasi asinkron lewat queue.",
        tech: ["Laravel", "Vue.js", "Inertia.js", "MySQL", "Queue"], demo: "", repo: "" },
      { title: "Payment Workflow & Beneficiary Account", category: "Fintech",
        description: "Alur pembayaran dan pengelolaan rekening penerima yang terhubung ke penyedia pembayaran eksternal lewat REST API yang aman dan terdokumentasi.",
        tech: ["Laravel", "REST API", "MySQL"], demo: "", repo: "" },
      { title: "Partner Management Platform", category: "Fintech",
        description: "Pengelolaan partner dengan kontrol akses, validasi bisnis, notifikasi, dan scheduled job untuk operasional layanan pembayaran digital.",
        tech: ["Laravel", "Vue.js", "Docker"], demo: "", repo: "" },
      { title: "Tools Otomasi Operasional", category: "Enterprise",
        description: "Alat otomasi, reporting, dan monitoring yang memangkas pekerjaan manual dan meningkatkan visibilitas performa sistem di lingkungan telko enterprise. Sebagian script otomasi ditulis dalam Python dengan bantuan AI (Claude Code).",
        tech: ["PHP", "Python", "MySQL", "Automation", "Claude Code"], demo: "", repo: "" },
      { title: "Website Company Profile + CMS", category: "Website",
        description: "Website company profile dinamis dengan panel CMS untuk mengelola halaman, artikel, banner, dan pengaturan situs tanpa menyentuh kode. Mendukung dua bahasa dan dibangun di atas Laravel dengan Inertia, Vue.js, dan Livewire.",
        tech: ["Laravel", "Vue.js", "Inertia.js", "Livewire", "Tailwind CSS", "Multi-bahasa"], demo: "", repo: "" }
    ],
    experience: [
      { period: "Jan 2025 - Sekarang", role: "Full Stack Developer", company: "YUKK Indonesia", location: "Tangerang Selatan",
        points: [
          "Membangun aplikasi web skalabel end-to-end dengan Laravel, Vue.js, Inertia.js, dan MySQL.",
          "Merancang RESTful API yang menghubungkan platform internal dengan layanan pembayaran eksternal.",
          "Mengirim modul kritikal bisnis: onboarding digital, beneficiary account, alur pembayaran, dan partner management.",
          "Memperkuat keamanan platform lewat autentikasi, otorisasi, dan validasi bisnis yang ketat.",
          "Menstandarkan lingkungan development dan deployment dengan Docker.",
          "Memanfaatkan Claude Code dan ChatGPT untuk mempercepat delivery, dokumentasi teknis, debugging, dan code review."
        ] },
      { period: "Jul 2022 - Des 2024", role: "Back End Developer", company: "YUKK Indonesia", location: "Tangerang Selatan",
        points: [
          "Membangun backend service yang aman dan skalabel untuk aplikasi fintech.",
          "Mengintegrasikan penyedia pembayaran dan platform pihak ketiga lewat REST API yang terdokumentasi.",
          "Merancang skema database dan mengoptimalkan query SQL untuk responsivitas aplikasi.",
          "Menerapkan queue processing, scheduled job, notifikasi, dan access control.",
          "Mendiagnosis dan menyelesaikan isu produksi untuk menjaga stabilitas sistem."
        ] },
      { period: "Apr 2022 - Jun 2022", role: "Back End Developer", company: "PT Milenial Sukses Berdikari", location: "Jakarta Selatan",
        points: [
          "Membangun RESTful API penghubung aplikasi frontend dan backend.",
          "Menyusun database relasional dengan fokus pada skalabilitas dan kemudahan perawatan.",
          "Menambah fungsi baru pada aplikasi berjalan tanpa mengganggu stabilitas sistem."
        ] },
      { period: "Jan 2021 - Jun 2022", role: "NFO Technical Support Programmer", company: "Telkomsel", location: "Jakarta Selatan",
        points: [
          "Mendukung operasional enterprise lewat pengembangan software, otomasi, dan pemecahan masalah teknis.",
          "Melakukan root cause analysis pada isu sistem yang kompleks untuk meminimalkan gangguan operasional."
        ] },
      { period: "Agu 2019 - Des 2020", role: "ITSB Technical Support Programmer", company: "Telkomsel", location: "Banten",
        points: [
          "Mengotomasi proses operasional sehingga pekerjaan manual berkurang dan efisiensi harian meningkat.",
          "Membangun tools reporting dan monitoring yang meningkatkan visibilitas performa sistem.",
          "Mendukung beberapa unit bisnis dengan enhancement sesuai kebutuhan operasional."
        ] },
      { period: "Agu 2018", role: "Web Programmer (Magang)", company: "PT Digital Techno Solusindo", location: "Semarang",
        points: ["Magang pengembangan web."] }
    ],
    education: [
      { period: "2020 - 2022", degree: "Sarjana (S1) Teknik Informatika", school: "BINUS University Online Learning" },
      { period: "2016 - 2019", degree: "Diploma (D3) Teknik Informatika", school: "Politeknik Negeri Semarang" }
    ]
  },

  /* ================================ ENGLISH ================================ */
  en: {
    ui: {
      portfolio: "Portfolio",
      nav: { about: "About", skills: "Skills", projects: "Projects", experience: "Experience", education: "Education", contact: "Contact" },
      hero: { greeting: "Hi, I'm", ctaProjects: "View Projects", ctaContact: "Get in Touch" },
      sections: { about: "About Me", skills: "Skills", projects: "Selected Projects", experience: "Experience", education: "Education", contact: "Contact" },
      filterAll: "All",
      repo: "Repository",
      demo: "Live demo",
      contact: {
        title: "Let's work together.",
        lead: "Have a project in mind or want to talk shop? Send a message and I'll get back to you soon.",
        name: "Name", namePh: "Your name",
        email: "Email", emailPh: "name@email.com",
        message: "Message", messagePh: "Tell me what you need...",
        send: "Send Message",
        invalid: "Please fill in every field correctly.",
        openingMail: "Opening your email app...",
        subject: "Message from",
        sent: "Message sent. Thank you!",
        failed: "Failed to send. Please try again later."
      },
      footer: { backTop: "Back to top" }
    },
    profile: {
      name: "Hendrawan Sulistyanto",
      shortName: "Hendrawan",
      role: "Full Stack Developer",
      tagline: "8+ years building scalable web applications for fintech, digital payments, and enterprise systems.",
      status: "Full Stack Developer at YUKK Indonesia",
      photo: "img/profile.jpg",
      about: [
        "I'm a Full Stack Developer with over 8 years of experience in software engineering. I build web applications that solve real business problems using Laravel, PHP, Vue.js, Inertia.js, MySQL, and Docker.",
        "Throughout my career I've contributed to fintech platforms, payment solutions, digital onboarding systems, and enterprise applications where reliability, security, and performance are essential.",
        "Beyond writing code, I enjoy designing maintainable architectures, simplifying complex workflows, and continuously improving development processes. I use AI-assisted engineering (Claude Code and ChatGPT) daily to accelerate implementation, produce technical documentation, support architectural decisions, and review code while keeping engineering standards high."
      ],
      stats: [
        { value: "8+", label: "Years of experience" },
        { value: "4+", label: "Years in fintech" },
        { value: "5", label: "Companies" },
        { value: "BSc", label: "Computer Science" }
      ],
      socials: SOCIALS,
      contacts: [
        { label: "Email", value: "hendrawanss123@gmail.com", href: "mailto:hendrawanss123@gmail.com" },
        { label: "LinkedIn", value: "linkedin.com/in/hendrawan-sulistyanto", href: "https://www.linkedin.com/in/hendrawan-sulistyanto/" },
        { label: "Location", value: "Klaten, Central Java" }
      ],
      formEndpoint: FORM_ENDPOINT
    },
    heroCode: HERO_CODE,
    skills: [
      { group: "Backend", items: ["PHP", "Laravel", "REST API", "Payment Integration", "Queues & Scheduled Jobs", "Authentication & Authorization"] },
      { group: "Frontend", items: ["Vue.js", "Inertia.js", "JavaScript", "HTML & CSS", "WordPress Development"] },
      { group: "Database & Infrastructure", items: ["MySQL", "MariaDB", "Query Optimization", "Docker", "Git"] },
      { group: "Architecture & AI-Assisted Engineering", items: ["System Design", "Software Architecture", "Clean Architecture", "Claude Code", "ChatGPT", "Prompt Engineering"] }
    ],
    projects: [
      { title: "Merchant Digital Onboarding", category: "Fintech", featured: true,
        description: "End-to-end digital onboarding module for registering and verifying business partners. Built with Laravel, Vue.js, and Inertia.js, with layered business validation and asynchronous verification through queues.",
        tech: ["Laravel", "Vue.js", "Inertia.js", "MySQL", "Queue"], demo: "", repo: "" },
      { title: "Payment Workflow & Beneficiary Accounts", category: "Fintech",
        description: "Payment flows and beneficiary account management connected to external payment providers through secure, well-documented REST APIs.",
        tech: ["Laravel", "REST API", "MySQL"], demo: "", repo: "" },
      { title: "Partner Management Platform", category: "Fintech",
        description: "Partner management with access control, business validation, notifications, and scheduled jobs for digital payment operations.",
        tech: ["Laravel", "Vue.js", "Docker"], demo: "", repo: "" },
      { title: "Operational Automation Tools", category: "Enterprise",
        description: "Automation, reporting, and monitoring tools that cut manual work and increased visibility into system performance in an enterprise telco environment. Several automation scripts were written in Python with AI assistance (Claude Code).",
        tech: ["PHP", "Python", "MySQL", "Automation", "Claude Code"], demo: "", repo: "" },
      { title: "Company Profile Website + CMS", category: "Website",
        description: "A dynamic company profile website with a CMS panel for managing pages, articles, banners, and site settings without touching code. Bilingual, built on Laravel with Inertia, Vue.js, and Livewire.",
        tech: ["Laravel", "Vue.js", "Inertia.js", "Livewire", "Tailwind CSS", "Multilingual"], demo: "", repo: "" }
    ],
    experience: [
      { period: "Jan 2025 - Present", role: "Full Stack Developer", company: "YUKK Indonesia", location: "South Tangerang",
        points: [
          "Engineered scalable end-to-end web applications with Laravel, Vue.js, Inertia.js, and MySQL.",
          "Architected RESTful APIs connecting internal platforms with external payment services.",
          "Delivered business-critical modules: digital onboarding, beneficiary accounts, payment workflows, and partner management.",
          "Strengthened platform security with robust authentication, authorization, and business validation.",
          "Streamlined development and deployment through containerized Docker environments.",
          "Leveraged Claude Code and ChatGPT to accelerate delivery, technical documentation, debugging, and code review."
        ] },
      { period: "Jul 2022 - Dec 2024", role: "Back End Developer", company: "YUKK Indonesia", location: "South Tangerang",
        points: [
          "Built secure, scalable backend services powering fintech applications.",
          "Integrated payment providers and third-party platforms through documented REST APIs.",
          "Designed database schemas and optimized SQL queries for application responsiveness.",
          "Introduced queue processing, scheduled jobs, notifications, and access control.",
          "Diagnosed and resolved production issues to keep the system stable."
        ] },
      { period: "Apr 2022 - Jun 2022", role: "Back End Developer", company: "PT Milenial Sukses Berdikari", location: "South Jakarta",
        points: [
          "Built RESTful APIs connecting frontend applications and backend services.",
          "Structured relational databases with an emphasis on scalability and maintainability.",
          "Added new functionality to existing applications while preserving system stability."
        ] },
      { period: "Jan 2021 - Jun 2022", role: "NFO Technical Support Programmer", company: "Telkomsel", location: "South Jakarta",
        points: [
          "Supported enterprise operations through software development, automation, and technical problem solving.",
          "Performed root cause analysis on complex system issues to minimize operational disruptions."
        ] },
      { period: "Aug 2019 - Dec 2020", role: "ITSB Technical Support Programmer", company: "Telkomsel", location: "Banten",
        points: [
          "Automated operational processes, reducing manual effort and improving day-to-day efficiency.",
          "Produced reporting and monitoring tools that increased visibility into system performance.",
          "Supported multiple business units with enhancements aligned to operational needs."
        ] },
      { period: "Aug 2018", role: "Web Programmer (Internship)", company: "PT Digital Techno Solusindo", location: "Semarang",
        points: ["Web development internship."] }
    ],
    education: [
      { period: "2020 - 2022", degree: "Bachelor's degree, Computer Science", school: "BINUS University Online Learning" },
      { period: "2016 - 2019", degree: "Associate's degree, Computer Science", school: "Politeknik Negeri Semarang" }
    ]
  }
};
