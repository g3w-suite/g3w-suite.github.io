document.addEventListener('DOMContentLoaded', () => {
  // ==========================================================================
  // STICKY HEADER & SCROLL EFFECTS
  // ==========================================================================
  const header = document.querySelector('.header-wrapper');
  
  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.style.boxShadow = 'var(--shadow-md)';
      header.style.padding = '0.25rem 0';
    } else {
      header.style.boxShadow = 'none';
      header.style.padding = '0';
    }
  };
  
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Run once on load

  // ==========================================================================
  // MOBILE NAVIGATION MENU
  // ==========================================================================
  const mobileToggle = document.querySelector('.mobile-nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    const navLinks = document.querySelectorAll('.nav-link, .dropdown-item');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }

  // ==========================================================================
  // DARK MODE / LIGHT MODE SWITCHER
  // ==========================================================================
  const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
  
  // Function to set theme
  const setTheme = (isDark) => {
    if (isDark) {
      document.body.classList.add('dark-theme');
      localStorage.setItem('g3w-theme', 'dark');
    } else {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('g3w-theme', 'light');
    }
  };

  // Initialize Theme
  const savedTheme = localStorage.getItem('g3w-theme');
  if (savedTheme === 'dark') {
    setTheme(true);
  } else if (savedTheme === 'light') {
    setTheme(false);
  } else {
    // Check system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark);
  }

  // Add click listener to all theme buttons
  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const isDark = document.body.classList.contains('dark-theme');
      setTheme(!isDark);
    });
  });

  // ==========================================================================
  // INTERACTIVE TABS (Features Page)
  // ==========================================================================
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  if (tabBtns.length > 0 && tabPanes.length > 0) {
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetTab = btn.getAttribute('data-tab');

        // Remove active state from all buttons
        tabBtns.forEach(b => b.classList.remove('active'));
        // Add active state to clicked button
        btn.classList.add('active');

        // Toggle active state on panes
        tabPanes.forEach(pane => {
          if (pane.getAttribute('data-tab') === targetTab) {
            pane.classList.add('active');
          } else {
            pane.classList.remove('active');
          }
        });
      });
    });
  }

  // ==========================================================================
  // FAQ ACCORDION (Contact Page)
  // ==========================================================================
  const faqHeaders = document.querySelectorAll('.faq-header');

  if (faqHeaders.length > 0) {
    faqHeaders.forEach(header => {
      header.addEventListener('click', () => {
        const item = header.parentElement;
        const isActive = item.classList.contains('active');

        // Close all FAQ items
        document.querySelectorAll('.faq-item').forEach(i => {
          i.classList.remove('active');
          const body = i.querySelector('.faq-body');
          if (body) body.style.maxHeight = null;
        });

        // Toggle clicked item
        if (!isActive) {
          item.classList.add('active');
          const body = item.querySelector('.faq-body');
          const bodyContent = item.querySelector('.faq-body-content');
          if (body && bodyContent) {
            body.style.maxHeight = (bodyContent.scrollHeight + 32) + 'px'; // add padding space
          }
        }
      });
    });
  }

  // ==========================================================================
  // INFINITE SPONSOR SCROLL (Duplicate Track Items dynamically for seamlessness)
  // ==========================================================================
  const logoTrack = document.querySelector('.logo-track');
  if (logoTrack) {
    const logoItems = Array.from(logoTrack.children);
    // Clone logo items to ensure there is enough content to scroll seamlessly
    // We clone them twice to make it bulletproof
    for (let i = 0; i < 2; i++) {
      logoItems.forEach(item => {
        const clone = item.cloneNode(true);
        logoTrack.appendChild(clone);
      });
    }
  }

  // ==========================================================================
  // FORM HANDLERS (Contact and Request Demo Forms)
  // ==========================================================================
  const contactForm = document.getElementById('contactForm');
  const demoForm = document.getElementById('demoForm');

  const handleFormSubmit = (form, successMsg, errorMsg) => {
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const alertContainer = form.querySelector('.form-alert');
      if (!alertContainer) return;

      // Simple front-end validation
      const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
      let isValid = true;

      inputs.forEach(input => {
        if (!input.value.trim()) {
          isValid = false;
          input.style.borderColor = 'var(--color-orange)';
        } else {
          input.style.borderColor = 'var(--border-color)';
        }
        
        // Email pattern check
        if (input.type === 'email' && input.value.trim()) {
          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailPattern.test(input.value.trim())) {
            isValid = false;
            input.style.borderColor = 'var(--color-orange)';
          }
        }
      });

      if (!isValid) {
        alertContainer.className = 'form-alert error';
        alertContainer.textContent = form.getAttribute('data-lang') === 'en' 
          ? 'Please fill out all required fields correctly.' 
          : 'Per favore, compila tutti i campi obbligatori correttamente.';
        alertContainer.style.display = 'block';
        return;
      }

      // Simulate API submission
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = form.getAttribute('data-lang') === 'en' 
        ? 'Sending...' 
        : 'Invio in corso...';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
        
        alertContainer.className = 'form-alert success';
        alertContainer.textContent = successMsg;
        alertContainer.style.display = 'block';
        
        form.reset();
      }, 1500);
    });
  };

  if (contactForm) {
    const isEn = contactForm.getAttribute('data-lang') === 'en';
    const contactSuccess = isEn 
      ? 'Thank you! Your message has been sent successfully. We will get back to you soon.'
      : 'Grazie! Il tuo messaggio è stato inviato con successo. Ti ricontatteremo presto.';
    handleFormSubmit(contactForm, contactSuccess);
  }

  if (demoForm) {
    const isEn = demoForm.getAttribute('data-lang') === 'en';
    const demoSuccess = isEn
      ? 'Demo request received! We have sent the credentials to your email address.'
      : 'Richiesta demo ricevuta! Abbiamo inviato le credenziali di accesso al tuo indirizzo e-mail.';
    handleFormSubmit(demoForm, demoSuccess);
  }
});
