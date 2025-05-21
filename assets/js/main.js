/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/*SCROLL HOME*/
sr.reveal('.home__title', {})
sr.reveal('.home__scroll', {delay: 200})
sr.reveal('.home__img', {origin:'right', delay: 400})

/*SCROLL ABOUT*/
sr.reveal('.about__img', {delay: 500})
sr.reveal('.about__subtitle', {delay: 300})
sr.reveal('.about__profession', {delay: 400})
sr.reveal('.about__text', {delay: 500})
sr.reveal('.about__social-icon', {delay: 600, interval: 200})

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle', {})
sr.reveal('.skills__name', {distance: '20px', delay: 50, interval: 100})
sr.reveal('.skills__img', {delay: 400})

/*SCROLL PORTFOLIO*/
sr.reveal('.portfolio__img', {interval: 200})

/*SCROLL CONTACT*/
sr.reveal('.contact__subtitle', {})
sr.reveal('.contact__text', {interval: 200})
sr.reveal('.contact__input', {delay: 400})
sr.reveal('.contact__button', {delay: 600})

        // بيانات تقنيات البرمجة
        const techData = [
            {
                name: "HTML5",
                class: "html",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
                description: "لغة ترميز النص التشعبي المستخدمة لإنشاء وتنظيم محتوى صفحات الويب."
            },
            {
                name: "CSS3",
                class: "css",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
                description: "لغة التنسيق المستخدمة لتصميم وتنسيق صفحات الويب وواجهات المستخدم."
            },
            {
                name: "JavaScript",
                class: "js",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
                description: "لغة برمجة عالية المستوى تضيف التفاعل والحركة إلى صفحات الويب."
            },
            {
                name: "Python",
                class: "python",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
                description: "لغة برمجة متعددة الاستخدامات تتميز بقراءتها السهلة ومكتباتها المتنوعة."
            },
            // {
            //     name: "React",
            //     class: "react",
            //     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            //     description: "مكتبة JavaScript مفتوحة المصدر لبناء واجهات مستخدم تفاعلية."
            // },
            // {
            //     name: "Node.js",
            //     class: "node",
            //     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
            //     description: "بيئة تشغيل JavaScript على الخادم لبناء تطبيقات الويب سريعة وقابلة للتطوير."
            // },
            {
                name: "Flutter",
                class: "flutter",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
                description: "إطار عمل مفتوح المصدر لإنشاء تطبيقات جوال وويب من مصدر برمجي واحد."
            },
            {
                name: "Dart",
                class: "dart",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
                description: "لغة برمجة مفتوحة المصدر مطورة من قبل Google لبناء تطبيقات متعددة المنصات."
            },
            {
                name: "C",
                class: "c",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
                description: "لغة برمجة قوية منخفضة المستوى تُستخدم في تطوير الأنظمة والبرامج عالية الأداء."
            },
            // {
            //     name: "C++",
            //     class: "cpp",
            //     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
            //     description: "امتداد للغة C يدعم البرمجة الكائنية، تُستخدم لتطوير الألعاب والبرمجيات المعقدة."
            // },
            // {
            //     name: "Java",
            //     class: "java",
            //     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
            //     description: "لغة برمجة كائنية التوجه تُستخدم في تطوير التطبيقات المحمولة وسطح المكتب والخوادم."
            // },
            {
                name: "Kotlin",
                class: "kotlin",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
                description: "لغة حديثة مدعومة من Google لتطوير تطبيقات Android بشكل أكثر مرونة وأماناً."
            },
            // {
            //     name: "C#",
            //     class: "csharp",
            //     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
            //     description: "لغة برمجة كائنية مطورة من قبل Microsoft لتطوير تطبيقات ويندوز والألعاب."
            // },
            {
                name: "Go",
                class: "go",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
                description: "لغة برمجة مفتوحة المصدر من تطوير Google، تركز على البساطة والأداء العالي."
            },
            {
                name: "Canva",
                class: "canva",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
                description: "أداة تصميم رسومي سهلة الاستخدام تُستخدم لإنشاء تصاميم احترافية بسرعة."
            },
            {
                name: "Figma",
                class: "figma",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
                description: "أداة تصميم واجهات المستخدم والعمل التعاوني في الوقت الحقيقي على التصاميم."
            }
        ];

        // إنشاء كروت التقنيات
        const ticker = document.getElementById('tech-ticker');
        
        // دالة لإنشاء كرت
        function createCard(tech) {
            const card = document.createElement('div');
            card.className = `tech-card ${tech.class}`;
            card.onclick = playClick;
            
            const logo = document.createElement('img');
            logo.className = 'logo';
            logo.src = tech.logo;
            logo.alt = `${tech.name} Logo`;
            
            const title = document.createElement('h3');
            title.textContent = tech.name;
            
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = tech.description;
            
            card.appendChild(logo);
            card.appendChild(title);
            // card.appendChild(tooltip);
            
            return card;
        }
        
        // إضافة البطاقات الأصلية
        techData.forEach(tech => {
            ticker.appendChild(createCard(tech));
        });
        
        // إضافة نسخة ثانية من البطاقات (للحركة الدائرية)
        techData.forEach(tech => {
            ticker.appendChild(createCard(tech));
        });
        
        // دالة تشغيل الصوت عند النقر
        function playClick() {
            document.getElementById("click-sound").play();
        }
        
        // تعديل سرعة الحركة حسب عرض الشاشة
        function updateAnimationSpeed() {
            const tickerElement = document.querySelector('.ticker');
            const screenWidth = window.innerWidth;
            
            let duration;
            if (screenWidth < 768) {
                duration = 40; // أسرع على الشاشات الصغيرة
            } else if (screenWidth < 1200) {
                duration = 50; // متوسط على الشاشات المتوسطة
            } else {
                duration = 60; // أبطأ على الشاشات الكبيرة
            }
            
            tickerElement.style.animationDuration = `${duration}s`;
        }
        
        // تطبيق سرعة الحركة الأولية
        updateAnimationSpeed();
        
        // تحديث السرعة عند تغيير حجم النافذة
        window.addEventListener('resize', updateAnimationSpeed);



