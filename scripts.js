document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.nav-links a, .mobile-menu ul li a');
    const sections = document.querySelectorAll('section');
    let activeLink = null;

    // Função para ativar o link clicado
    function activateLink(link) {
        if (activeLink) {
            activeLink.classList.remove('active');
        }
        link.classList.add('active');
        activeLink = link;
    }

   
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            activateLink(this);

            
            const targetID = this.getAttribute('href');
            const targetSection = document.querySelector(targetID);

            window.scrollTo({
                top: targetSection.offsetTop - document.querySelector('header').offsetHeight,
                behavior: 'smooth'
            });
        });
    });

    
    window.addEventListener('scroll', function() {
        let selectedSection = null;

        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= window.innerHeight / 3) {
                selectedSection = section;
            }
        });

        if (selectedSection) {
            const id = `#${selectedSection.id}`;
            const newActiveLink = document.querySelector(`.nav-links a[href="${id}"], .mobile-menu ul li a[href="${id}"]`);
            if (newActiveLink && newActiveLink !== activeLink) {
                activateLink(newActiveLink);
            }
        }
    });

   
    window.addEventListener('resize', function() {
        const mobileMenu = document.getElementById('mobileMenu');
        if (window.innerWidth > 768) {
            mobileMenu.style.display = 'none';
        }
    });


    
});
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.getElementById('mobileMenu');

    // Função para alternar o menu mobile
    hamburger.addEventListener('click', function() {
        mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
    });

    // Fecha o menu mobile se a tela for redimensionada para além de 768px
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            mobileMenu.style.display = 'none';
        }
    });
});