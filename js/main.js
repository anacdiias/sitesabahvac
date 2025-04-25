document.addEventListener("DOMContentLoaded", () => {
  // Set current year in footer
  const yearElement = document.getElementById("current-year")
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear()
  }

  // Mobile Menu Toggle
  const menuToggle = document.querySelector(".mobile-menu-toggle")
  const mobileMenu = document.querySelector(".mobile-menu")

  menuToggle.addEventListener("click", function () {
    this.classList.toggle("active")
    mobileMenu.classList.toggle("active")
  })

  // Close mobile menu when clicking on a link
  const mobileLinks = document.querySelectorAll(".mobile-nav-list a")
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.classList.remove("active")
      mobileMenu.classList.remove("active")
    })
  })

  // Header scroll effect
  function handleHeaderScroll() {
    const header = document.getElementById("header")
    const scrollThreshold = 50

    function updateHeaderClass() {
      if (window.scrollY > scrollThreshold) {
        header.classList.add("scrolled")
      } else {
        header.classList.remove("scrolled")
      }
    }

    // Initial check
    updateHeaderClass()

    // Add scroll event listener
    window.addEventListener("scroll", updateHeaderClass)
  }

  // Call header scroll function
  handleHeaderScroll()

  // Testimonials Slider
  const testimonialsWrapper = document.querySelector(".testimonials-wrapper")
  const testimonialCards = document.querySelectorAll(".testimonial-card")
  const dots = document.querySelectorAll(".dot")
  const prevBtn = document.querySelector(".slider-arrow.prev")
  const nextBtn = document.querySelector(".slider-arrow.next")

  let currentIndex = 0
  let slideWidth = 100 // Percentage

  // Set initial position
  updateSlider()

  // Update slider position and active dot
  function updateSlider() {
    testimonialsWrapper.style.transform = `translateX(-${currentIndex * slideWidth}%)`

    // Update active dot
    if (dots) {
      dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentIndex)
      })
    }
  }

  // Next slide
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      if (currentIndex < testimonialCards.length - 1) {
        currentIndex++
      } else {
        currentIndex = 0
      }
      updateSlider()
    })
  }

  // Previous slide
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--
      } else {
        currentIndex = testimonialCards.length - 1
      }
      updateSlider()
    })
  }

  // Dot navigation
  if (dots) {
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        currentIndex = index
        updateSlider()
      })
    })
  }

  // Auto slide (optional)
  let slideInterval = setInterval(() => {
    if (currentIndex < testimonialCards.length - 1) {
      currentIndex++
    } else {
      currentIndex = 0
    }
    updateSlider()
  }, 5000)

  // Pause auto slide on hover
  if (testimonialsWrapper) {
    testimonialsWrapper.addEventListener("mouseenter", () => {
      clearInterval(slideInterval)
    })

    testimonialsWrapper.addEventListener("mouseleave", () => {
      slideInterval = setInterval(() => {
        if (currentIndex < testimonialCards.length - 1) {
          currentIndex++
        } else {
          currentIndex = 0
        }
        updateSlider()
      }, 5000)
    })
  }

  // Responsive slider
  function updateSlideWidth() {
    if (testimonialsWrapper) {
      if (window.innerWidth < 768) {
        slideWidth = 100 // 1 slide visible
      } else if (window.innerWidth < 992) {
        slideWidth = 50 // 2 slides visible
      } else {
        slideWidth = 33.333 // 3 slides visible
      }
      updateSlider()
    }
  }

  if (testimonialsWrapper) {
    window.addEventListener("resize", updateSlideWidth)
    updateSlideWidth() // Initial call
  }

  // Contact Form Submission
  const contactForm = document.getElementById("contact-form")
  const formMessage = document.getElementById("form-message")

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault()

    // Simulate form submission
    const submitBtn = this.querySelector('button[type="submit"]')
    const originalBtnText = submitBtn.textContent

    submitBtn.disabled = true
    submitBtn.textContent = "Submitting..."

    setTimeout(() => {
      formMessage.textContent = "Thank you! Your message has been sent. We will contact you shortly."
      formMessage.classList.add("success")
      formMessage.style.display = "block"

      // Reset form
      contactForm.reset()

      // Reset button
      submitBtn.disabled = false
      submitBtn.textContent = originalBtnText

      // Hide message after 5 seconds
      setTimeout(() => {
        formMessage.style.display = "none"
      }, 5000)
    }, 1500)
  })

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      if (targetId === "#") return

      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        const headerHeight = document.querySelector(".header").offsetHeight
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })
      }
    })
  })

  // Animação de fade-in para elementos
  const fadeElements = document.querySelectorAll('.fade-in')
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  }, {
    threshold: 0.1
  })

  fadeElements.forEach(element => {
    observer.observe(element)
  })

  // Navegação ativa
  function setActiveNavLink() {
    const currentPath = window.location.pathname
    const navLinks = document.querySelectorAll('.nav-list a, .mobile-nav-list a')
    
    navLinks.forEach(link => {
      const linkPath = link.getAttribute('href')
      if (currentPath.endsWith(linkPath)) {
        link.classList.add('active')
      } else {
        link.classList.remove('active')
      }
    })
  }

  // Chamar a função quando a página carregar
  document.addEventListener('DOMContentLoaded', setActiveNavLink)

  // Slider de depoimentos
  const testimonialSlider = document.querySelector('.testimonials-slider')
  if (testimonialSlider) {
    let currentSlide = 0
    const slides = testimonialSlider.querySelectorAll('.testimonial-card')
    const totalSlides = slides.length
    
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none'
      })
    }
    
    function nextSlide() {
      currentSlide = (currentSlide + 1) % totalSlides
      showSlide(currentSlide)
    }
    
    function prevSlide() {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides
      showSlide(currentSlide)
    }
    
    // Mostrar primeiro slide
    showSlide(0)
    
    // Adicionar controles de navegação
    const sliderControls = document.createElement('div')
    sliderControls.className = 'slider-controls'
    
    const prevButton = document.createElement('button')
    prevButton.className = 'slider-arrow prev'
    prevButton.innerHTML = '<i class="fas fa-chevron-left"></i>'
    prevButton.addEventListener('click', prevSlide)
    
    const nextButton = document.createElement('button')
    nextButton.className = 'slider-arrow next'
    nextButton.innerHTML = '<i class="fas fa-chevron-right"></i>'
    nextButton.addEventListener('click', nextSlide)
    
    sliderControls.appendChild(prevButton)
    sliderControls.appendChild(nextButton)
    testimonialSlider.appendChild(sliderControls)
    
    // Auto-play
    setInterval(nextSlide, 5000)
  }
})
