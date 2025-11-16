export const languages = {
  ar: 'ar',
  en: 'en'
}

export const messages = {
  ar: {
    dir: 'rtl',
    name: 'واد القحطاني',
    fullName: 'Waad Alqahtani',
    title: 'محللة بيانات | مهندسة ذكاء اصطناعي | مختصة NLP',
    nav: { home: 'الرئيسية', about: 'من أنا', skills: 'المهارات', projects: 'المشاريع', contact: 'تواصل' },
    hero: {
      heading1: 'محللة بيانات ومهندسة ذكاء اصطناعي',
      heading2: 'متخصصة في النماذج التوليدية ومعالجة اللغة الطبيعية.',
      heading3: 'أُحوّل البيانات إلى حلول ذكية تفهم اللغة العربية وتخدم الواقع.',
      aboutBtn: 'عنّي',
      projectsBtn: 'مشاريعي',
    },
    about: {
      title: 'من أنا',
      p1: 'خريجة ماجستير نظم معلومات – علم بيانات من جامعة الملك خالد، وحاصلة على دبلوم الذكاء الاصطناعي من أكاديمية طويق بشراكة مع Meta.',
      p2: 'أمتلك خبرة في تحليل البيانات وتصميم النماذج اللغوية والنماذج التوليدية.',
      p3: 'شغفي هو تطوير حلول عربية في الذكاء الاصطناعي تسهّل الفهم والتفاعل بين الإنسان والآلة.'
    },
    skills: {
      title: 'المهارات',
      data: { title: 'تحليل البيانات', items: 'Power BI, Excel, EDA, التحليل الإحصائي, سرد البيانات' },
      ai: { title: 'الذكاء الاصطناعي والتعلم الآلي', items: 'Python, Pandas, NumPy, TensorFlow, Scikit-learn, NLP, LLMs, GAN, AutoEncoder, RAG, LangChain' },
      tools: { title: 'الأدوات والتصميم', items: 'Flask, Gradio, Canva, Gamma, التصوير الثلاثي الأبعاد, GitHub' }
    },
    projects: {
      title: 'المشاريع',
      categories: ['الذكاء الاصطناعي', 'معالجة اللغة الطبيعية', 'لوحات البيانات'],
      data: {
        'الذكاء الاصطناعي': [
          {
            title: 'TikiData — منصة الذكاء الاصطناعي للرياضة',
            description: 'منصة تحليل رياضية مدعومة بالذكاء الاصطناعي تستخدم GPT-4o للتنبؤ بالمباريات وتحليل الخصوم وتقديم توصيات تكتيكية.',
            repo: 'https://github.com/waad-alqahtani/tiki-data'
          },
          {
            title: 'AutoEncoder — تمثيل بصري ذكي للبيانات',
            description: 'مشروع تعلم عميق لضغط السمات والتمثيل البصري.',
            repo: 'https://github.com/waad-alqahtani/autoencoder-visualization'
          },
          {
            title: 'GAN — توليد صور الأرقام والوجوه',
            description: 'تطبيق شبكات الخصومة التوليدية (GAN) باستخدام TensorFlow.',
            repo: 'https://github.com/waad-alqahtani/gan-generator'
          },
          {
            title: 'Athar — نموذج ثلاثي الأبعاد + وكيل صوتي',
            description: 'نموذج تفاعلي للدرعية يجمع بين 3D وRAG ووكلاء صوتية عربية.',
            repo: 'https://github.com/waad-alqahtani/athar-3d-ai-voice'
          }
        ],
        'معالجة اللغة الطبيعية': [
          {
            title: 'NLP بلاغات — تصنيف + تلخيص + توجيه',
            description: 'نظام متعدد المهام لتصنيف البلاغات وتلخيصها وتوجيهها.',
            repo: 'https://github.com/waad-alqahtani/nlp-text2action'
          },
          {
            title: 'تحليل مشاعر التغريدات العربية',
            description: 'تحليل مشاعر التغريدات بدقة 89٪ باستخدام نماذج لغوية عربية.',
            repo: 'https://github.com/waad-alqahtani/arabic-sentiment-analysis'
          },
          {
            title: 'LLM Agent — Text Retrieval & Summarization',
            description: 'وكيل LLM يستخدم RAG لاستخراج وتلخيص النصوص تلقائيًا.',
            repo: 'https://github.com/waad-alqahtani/llm-agent-rag'
          }
        ],
        'لوحات البيانات': [
          {
            title: 'TikiData — منصة تحليل الأداء الرياضي',
            description: 'لوحة Power BI لتحليل أداء نادي الهلال باستخدام الذكاء التنبؤي.',
            repo: 'https://github.com/waad-alqahtani/tikidata-dashboard'
          },
          {
            title: 'لوحة تحليل الحوادث',
            description: 'تحليل بيانات المرور والخرائط لتحديد النقاط الحرجة والمناطق عالية الخطورة.',
            repo: 'https://github.com/waad-alqahtani/accident-bi-dashboard'
          },
          {
            title: 'Dashboard العقارات والمزادات',
            description: 'لوحة Power BI تحليلية للمزادات والعقارات السعودية.',
            repo: 'https://github.com/waad-alqahtani/real-estate-dashboard'
          }
        ]
      }
    },
    contact: { title: 'تواصل', desc: 'يسعدني تواصلكم عبر البريد أو لينكدإن.', ctas: { email: 'البريد', linkedin: 'لينكدإن' } },
    toggleLabel: 'English'
  },
  en: {
    dir: 'ltr',
    name: 'Waad Alqahtani',
    fullName: 'Waad Alqahtani',
    title: 'Data Analyst | AI Engineer | NLP Specialist',
    nav: { home: 'Home', about: 'About Me', skills: 'Skills', projects: 'Projects', contact: 'Contact' },
    hero: {
      heading1: 'Data Analyst & AI Engineer',
      heading2: 'Specialized in Generative AI and Natural Language Processing.',
      heading3: 'I transform data into intelligent solutions that understand Arabic and serve real-world needs.',
      aboutBtn: 'About Me',
      projectsBtn: 'Projects',
    },
    about: {
      title: 'About Me',
      p1: 'Holds a Master’s in Information Systems – Data Science and an AI Diploma from Tuwaiq Academy in partnership with Meta.',
      p2: 'Experienced in Data Analysis, LLMs, and Generative AI.',
      p3: 'Passionate about building Arabic AI solutions that enhance understanding and human–machine interaction.'
    },
    skills: {
      title: 'Skills',
      data: { title: 'Data Analysis', items: 'Power BI, Excel, EDA, Statistical Analysis, Storytelling' },
      ai: { title: 'AI & ML', items: 'Python, Pandas, NumPy, TensorFlow, Scikit-learn, NLP, LLMs, GAN, AutoEncoder, RAG, LangChain' },
      tools: { title: 'Design & Tools', items: 'Flask, Gradio, Canva, Gamma, 3D Visualization, GitHub' }
    },
    projects: {
      title: 'Projects',
      categories: ['Artificial Intelligence', 'Natural Language Processing', 'Data Dashboards'],
      data: {
        'Artificial Intelligence': [
          {
            title: 'TikiData — AI-Powered Sports Analytics Platform',
            description: 'Comprehensive AI-powered sports analytics platform using GPT-4o for match predictions, opponent analysis, and tactical recommendations.',
            repo: 'https://github.com/waad-alqahtani/tiki-data'
          },
          {
            title: 'AutoEncoder — Smart Visual Representation',
            description: 'Deep learning project for feature compression and visualization.',
            repo: 'https://github.com/waad-alqahtani/autoencoder-visualization'
          },
          {
            title: 'GAN — Digit & Face Image Generation',
            description: 'Generative Adversarial Network (GAN) application using TensorFlow.',
            repo: 'https://github.com/waad-alqahtani/gan-generator'
          },
          {
            title: 'Athar — 3D Model + Voice Agent',
            description: 'Interactive Diriyah model combining 3D, RAG, and Arabic voice agents.',
            repo: 'https://github.com/waad-alqahtani/athar-3d-ai-voice'
          }
        ],
        'Natural Language Processing': [
          {
            title: 'NLP Reports — Classify + Summarize + Route',
            description: 'Multi-task system for report classification, summarization, and routing.',
            repo: 'https://github.com/waad-alqahtani/nlp-text2action'
          },
          {
            title: 'Arabic Tweet Sentiment Analysis',
            description: 'Arabic tweet sentiment analysis achieving 89% accuracy using Arabic language models.',
            repo: 'https://github.com/waad-alqahtani/arabic-sentiment-analysis'
          },
          {
            title: 'LLM Agent — Text Retrieval & Summarization',
            description: 'LLM agent using RAG for automatic text extraction and summarization.',
            repo: 'https://github.com/waad-alqahtani/llm-agent-rag'
          }
        ],
        'Data Dashboards': [
          {
            title: 'TikiData — Sports Performance Analytics',
            description: 'Power BI dashboard analyzing Al-Hilal club performance using predictive intelligence.',
            repo: 'https://github.com/waad-alqahtani/tikidata-dashboard'
          },
          {
            title: 'Accident Analysis Dashboard',
            description: 'Traffic and map data analysis to identify critical points and high-risk areas.',
            repo: 'https://github.com/waad-alqahtani/accident-bi-dashboard'
          },
          {
            title: 'Real Estate & Auctions Dashboard',
            description: 'Analytical Power BI dashboard for Saudi auctions and real estate.',
            repo: 'https://github.com/waad-alqahtani/real-estate-dashboard'
          }
        ]
      }
    },
    contact: { title: 'Contact', desc: 'Reach out via email or LinkedIn.', ctas: { email: 'Email', linkedin: 'LinkedIn' } },
    toggleLabel: 'العربية'
  }
}


