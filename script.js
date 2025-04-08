// انتظار تحميل المستند بالكامل
document.addEventListener('DOMContentLoaded', function() {
    // تنفيذ تأثير التمرير السلس للروابط الداخلية
    setupSmoothScrolling();
    
    // إضافة تأثيرات للمهارات
    setupSkillsAnimation();
    
    // إعداد التحقق من نموذج الاتصال
    setupContactForm();
    
    // إضافة تأثير للمشاريع
    setupProjectsHover();
    
    // إضافة زر العودة للأعلى
    setupScrollToTopButton();
    
    // إضافة عداد لسنوات الخبرة
    setupExperienceCounter();
});

// تنفيذ التمرير السلس للروابط الداخلية
function setupSmoothScrolling() {
    const links = document.querySelectorAll('nav a[href^="#"]');
    
    for (const link of links) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // تحديد الرابط النشط
                document.querySelectorAll('nav a').forEach(navLink => {
                    navLink.classList.remove('active-link');
                });
                this.classList.add('active-link');
                
                // تمرير إلى القسم المطلوب بتأثير سلس
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
    
    // إضافة تأثير تحديد الرابط النشط أثناء التمرير
    window.addEventListener('scroll', highlightActiveSection);
}

// تحديد الرابط النشط أثناء التمرير
function highlightActiveSection() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active-link');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active-link');
        }
    });
}

// إضافة تأثيرات للمهارات
function setupSkillsAnimation() {
    const skillsSection = document.getElementById('skills');
    
    if (skillsSection) {
        const skillItems = skillsSection.querySelectorAll('li');
        
        // إضافة فئة CSS للتأثير عند التمرير
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    let delay = 0;
                    skillItems.forEach(item => {
                        setTimeout(() => {
                            item.classList.add('skill-visible');
                        }, delay);
                        delay += 100; // زيادة التأخير لكل عنصر
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        
        observer.observe(skillsSection);
    }
}

// إعداد التحقق من نموذج الاتصال
function setupContactForm() {
    const contactForm = document.querySelector('#contact form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // التحقق من صحة البيانات
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            let isValid = true;
            
            // إعادة تعيين رسائل الخطأ
            document.querySelectorAll('.error-message').forEach(el => el.remove());
            
            // التحقق من الاسم
            if (!nameInput.value.trim()) {
                showError(nameInput, 'الرجاء إدخال الاسم');
                isValid = false;
            }
            
            // التحقق من البريد الإلكتروني
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailInput.value.trim() || !emailRegex.test(emailInput.value)) {
                showError(emailInput, 'الرجاء إدخال بريد إلكتروني صحيح');
                isValid = false;
            }
            
            // التحقق من الرسالة
            if (!messageInput.value.trim()) {
                showError(messageInput, 'الرجاء إدخال نص الرسالة');
                isValid = false;
            }
            
            // إرسال النموذج إذا كانت البيانات صحيحة
            if (isValid) {
                // هنا يمكن إضافة كود لإرسال النموذج إلى الخادم
                // في هذا المثال سنظهر رسالة نجاح فقط
                const successMessage = document.createElement('div');
                successMessage.className = 'success-message';
                successMessage.textContent = 'تم إرسال رسالتك بنجاح! سنتواصل معك قريبًا.';
                contactForm.appendChild(successMessage);
                
                // مسح حقول النموذج
                contactForm.reset();
                
                // إخفاء رسالة النجاح بعد 5 ثوانٍ
                setTimeout(() => {
                    successMessage.remove();
                }, 5000);
            }
        });
    }
}

// إظهار رسالة خطأ أسفل حقل الإدخال
function showError(inputElement, errorMessage) {
    const errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.textContent = errorMessage;
    inputElement.parentElement.appendChild(errorElement);
    inputElement.classList.add('invalid-input');
    
    // إزالة تنسيق الخطأ عند الكتابة
    inputElement.addEventListener('input', function() {
        errorElement.remove();
        inputElement.classList.remove('invalid-input');
    }, { once: true });
}

// إضافة تأثير للمشاريع
function setupProjectsHover() {
    const projectItems = document.querySelectorAll('#projects article');
    
    projectItems.forEach(project => {
        project.addEventListener('mouseenter', function() {
            this.classList.add('project-hover');
        });
        
        project.addEventListener('mouseleave', function() {
            this.classList.remove('project-hover');
        });
    });
}

// إضافة زر العودة للأعلى
function setupScrollToTopButton() {
    // إنشاء زر العودة للأعلى
    const scrollButton = document.createElement('button');
    scrollButton.id = 'scroll-to-top';
    scrollButton.innerHTML = '&#8679;'; // رمز سهم للأعلى
    scrollButton.title = 'العودة للأعلى';
    document.body.appendChild(scrollButton);
    
    // إظهار أو إخفاء الزر حسب موضع التمرير
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollButton.classList.add('show-scroll-button');
        } else {
            scrollButton.classList.remove('show-scroll-button');
        }
    });
    
    // التمرير للأعلى عند النقر على الزر
    scrollButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// إضافة عداد لسنوات الخبرة
function setupExperienceCounter() {
    const aboutSection = document.getElementById('about');
    
    if (aboutSection) {
        // الحصول على تاريخ اليوم
        const currentDate = new Date();
        const startYear = 2018; // سنة بدء العمل كمطور
        const yearsOfExperience = currentDate.getFullYear() - startYear;
        
        // البحث عن الفقرة التي تحتوي على معلومات الخبرة
        const experienceParagraph = aboutSection.querySelector('p');
        
        if (experienceParagraph && experienceParagraph.textContent.includes('5 سنوات')) {
            // تحديث النص بعدد السنوات الفعلي
            experienceParagraph.textContent = experienceParagraph.textContent.replace('5 سنوات', `${yearsOfExperience} سنوات`);
        }
    }
}

// إضافة وضع الليل/النهار (مميزة إضافية)
function setupDarkModeToggle() {
    const header = document.querySelector('header');
    
    if (header) {
        // إنشاء زر تبديل الوضع
        const darkModeToggle = document.createElement('button');
        darkModeToggle.id = 'dark-mode-toggle';
        darkModeToggle.innerHTML = '🌙'; // رمز القمر للوضع الليلي
        darkModeToggle.title = 'تبديل وضع الليل/النهار';
        header.appendChild(darkModeToggle);
        
        // التحقق من الوضع المحفوظ
        if (localStorage.getItem('darkMode') === 'enabled') {
            document.body.classList.add('dark-mode');
            darkModeToggle.innerHTML = '☀️'; // رمز الشمس للوضع النهاري
        }
        
        // معالجة النقر على زر التبديل
        darkModeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            
            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('darkMode', 'enabled');
                this.innerHTML = '☀️'; // رمز الشمس للوضع النهاري
            } else {
                localStorage.setItem('darkMode', 'disabled');
                this.innerHTML = '🌙'; // رمز القمر للوضع الليلي
            }
        });
    }
}

// استدعاء وظيفة وضع الليل/النهار (اختياري)
// setupDarkModeToggle();

// فلترة المشاريع حسب التقنية (مميزة إضافية)
function setupProjectsFilter() {
    const projectsSection = document.getElementById('projects');
    
    if (projectsSection) {
        const projects = projectsSection.querySelectorAll('article');
        
        // جمع جميع التقنيات المستخدمة في المشاريع
        const technologies = new Set();
        projects.forEach(project => {
            const techText = project.querySelector('p:first-of-type').textContent;
            const techList = techText.replace('التقنيات:', '').split(',');
            techList.forEach(tech => technologies.add(tech.trim()));
        });
        
        // إنشاء أزرار الفلترة
        const filterContainer = document.createElement('div');
        filterContainer.className = 'projects-filter';
        
        const allButton = document.createElement('button');
        allButton.textContent = 'الكل';
        allButton.className = 'filter-button active';
        allButton.dataset.filter = 'all';
        filterContainer.appendChild(allButton);
        
        technologies.forEach(tech => {
            const button = document.createElement('button');
            button.textContent = tech;
            button.className = 'filter-button';
            button.dataset.filter = tech;
            filterContainer.appendChild(button);
        });
        
        // إضافة أزرار الفلترة قبل المشاريع
        projectsSection.insertBefore(filterContainer, projectsSection.querySelector('article:first-of-type'));
        
        // إضافة وظيفة الفلترة
        const filterButtons = filterContainer.querySelectorAll('.filter-button');
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                const filter = this.dataset.filter;
                
                // تحديث الزر النشط
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                // فلترة المشاريع
                projects.forEach(project => {
                    if (filter === 'all') {
                        project.style.display = 'block';
                    } else {
                        const techText = project.querySelector('p:first-of-type').textContent;
                        if (techText.includes(filter)) {
                            project.style.display = 'block';
                        } else {
                            project.style.display = 'none';
                        }
                    }
                });
            });
        });
    }
}

// استدعاء وظيفة فلترة المشاريع (اختياري)
// setupProjectsFilter();
