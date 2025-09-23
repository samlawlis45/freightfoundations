// freightfoundations.ai Framer Motion Animations
// Professional freight-themed animations for the platform

// Wait for Framer Motion to load
document.addEventListener('DOMContentLoaded', function() {
    // Check if Framer Motion is loaded
    if (typeof motion === 'undefined') {
        console.log('Framer Motion not loaded, using fallback animations');
        return;
    }

    const { motion, useAnimation, useInView } = motion;

    // Hero Section Animations
    const heroElements = {
        label: document.querySelector('.hero-label'),
        title: document.querySelector('.hero h1'),
        description: document.querySelector('.hero-description'),
        actions: document.querySelector('.hero-actions')
    };

    // Animate hero elements on load
    if (heroElements.label) {
        motion(heroElements.label, {
            opacity: [0, 1],
            y: [30, 0],
            transition: { duration: 0.8, delay: 0.2 }
        });
    }

    if (heroElements.title) {
        motion(heroElements.title, {
            opacity: [0, 1],
            y: [50, 0],
            transition: { duration: 1, delay: 0.4 }
        });
    }

    if (heroElements.description) {
        motion(heroElements.description, {
            opacity: [0, 1],
            y: [30, 0],
            transition: { duration: 0.8, delay: 0.6 }
        });
    }

    if (heroElements.actions) {
        motion(heroElements.actions, {
            opacity: [0, 1],
            y: [30, 0],
            transition: { duration: 0.8, delay: 0.8 }
        });
    }

    // Stats Bar Animation with Counter Effect
    const stats = document.querySelectorAll('.stat');
    stats.forEach((stat, index) => {
        motion(stat, {
            opacity: [0, 1],
            y: [30, 0],
            scale: [0.9, 1],
            transition: { 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
            }
        });

        // Animate counter numbers
        const statValue = stat.querySelector('.stat-value');
        if (statValue) {
            const finalValue = statValue.textContent;
            const isNumber = !isNaN(parseInt(finalValue));
            
            if (isNumber) {
                const targetNumber = parseInt(finalValue);
                let currentNumber = 0;
                const increment = targetNumber / 60; // 60 frames for smooth animation
                
                const counterInterval = setInterval(() => {
                    currentNumber += increment;
                    if (currentNumber >= targetNumber) {
                        currentNumber = targetNumber;
                        clearInterval(counterInterval);
                    }
                    statValue.textContent = Math.floor(currentNumber) + (finalValue.includes('+') ? '+' : '');
                }, 30);
            }
        }
    });

    // Feature Cards Animation
    const features = document.querySelectorAll('.feature');
    features.forEach((feature, index) => {
        motion(feature, {
            opacity: [0, 1],
            x: [-50, 0],
            transition: { 
                duration: 0.8, 
                delay: index * 0.2,
                ease: "easeOut"
            }
        });
    });

    // Domain Items Staggered Animation
    const domainItems = document.querySelectorAll('.domain-item');
    domainItems.forEach((item, index) => {
        motion(item, {
            opacity: [0, 1],
            y: [20, 0],
            transition: { 
                duration: 0.5, 
                delay: index * 0.05,
                ease: "easeOut"
            }
        });
    });

    // Supply Chain Network Animation
    const supplyChainNodes = document.querySelectorAll('.supply-chain-node');
    const supplyChainLine = document.querySelector('.supply-chain-line');

    if (supplyChainLine) {
        motion(supplyChainLine, {
            scaleX: [0, 1],
            transition: { duration: 1.5, delay: 0.5, ease: "easeInOut" }
        });
    }

    supplyChainNodes.forEach((node, index) => {
        motion(node, {
            opacity: [0, 1],
            scale: [0.5, 1],
            y: [50, 0],
            transition: { 
                duration: 0.8, 
                delay: 1 + (index * 0.3),
                ease: "easeOut"
            }
        });
    });

    // Portfolio Categories Animation
    const portfolioCategories = document.querySelectorAll('.portfolio-category');
    portfolioCategories.forEach((category, index) => {
        motion(category, {
            opacity: [0, 1],
            y: [30, 0],
            transition: { 
                duration: 0.8, 
                delay: index * 0.1,
                ease: "easeOut"
            }
        });
    });

    // Freight Icon Hover Animations
    const freightIcons = document.querySelectorAll('.freight-icon');
    freightIcons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            motion(icon, {
                scale: 1.2,
                rotate: [0, -10, 10, 0],
                transition: { duration: 0.3, ease: "easeInOut" }
            });
        });

        icon.addEventListener('mouseleave', () => {
            motion(icon, {
                scale: 1,
                rotate: 0,
                transition: { duration: 0.3, ease: "easeInOut" }
            });
        });
    });

    // Domain Item Hover Animations
    domainItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            motion(item, {
                scale: 1.02,
                x: 10,
                transition: { duration: 0.2, ease: "easeOut" }
            });
        });

        item.addEventListener('mouseleave', () => {
            motion(item, {
                scale: 1,
                x: 0,
                transition: { duration: 0.2, ease: "easeOut" }
            });
        });
    });

    // Supply Chain Node Hover Animations
    supplyChainNodes.forEach(node => {
        node.addEventListener('mouseenter', () => {
            motion(node, {
                scale: 1.3,
                y: -10,
                boxShadow: "0 0 30px rgba(255, 75, 31, 0.6)",
                transition: { duration: 0.3, ease: "easeOut" }
            });
        });

        node.addEventListener('mouseleave', () => {
            motion(node, {
                scale: 1,
                y: 0,
                boxShadow: "0 0 20px rgba(255, 75, 31, 0.2)",
                transition: { duration: 0.3, ease: "easeOut" }
            });
        });
    });

    // Button Hover Animations
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            motion(button, {
                scale: 1.05,
                y: -2,
                transition: { duration: 0.2, ease: "easeOut" }
            });
        });

        button.addEventListener('mouseleave', () => {
            motion(button, {
                scale: 1,
                y: 0,
                transition: { duration: 0.2, ease: "easeOut" }
            });
        });
    });

    // Scroll-triggered animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                motion(entry.target, {
                    opacity: [0, 1],
                    y: [30, 0],
                    transition: { duration: 0.8, ease: "easeOut" }
                });
            }
        });
    }, observerOptions);

    // Observe sections for scroll animations
    const sections = document.querySelectorAll('.section, .freight-network, .cta-section');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Freight-themed loading animation
    const loadingAnimation = () => {
        const loadingBar = document.createElement('div');
        loadingBar.className = 'loading-bar';
        document.body.appendChild(loadingBar);
        
        motion(loadingBar, {
            width: ['0%', '100%'],
            transition: { duration: 2, ease: "easeInOut" }
        });

        setTimeout(() => {
            motion(loadingBar, {
                opacity: [1, 0],
                transition: { duration: 0.5 }
            });
            setTimeout(() => loadingBar.remove(), 500);
        }, 2000);
    };

    // Run loading animation on page load
    loadingAnimation();

    // Continuous floating animation for hero elements
    const floatingElements = document.querySelectorAll('.hero::after');
    floatingElements.forEach(element => {
        motion(element, {
            y: [0, -20, 0],
            transition: { 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
            }
        });
    });


    console.log('freightfoundations.ai animations loaded successfully!');
});
