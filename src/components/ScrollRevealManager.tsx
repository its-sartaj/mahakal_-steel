import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Universal Scroll Reveal Manager:
 * Automatically watches all elements across the entire website as you scroll.
 * When elements enter the viewport, they smoothly glide up from bottom to top
 * ("upar se niche scroll karo sab animation hona chahiye word aur image sab").
 */
export function ScrollRevealManager() {
  const location = useLocation();

  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    const setupObserver = () => {
      // 1. Automatically find all headings, content cards, images, and feature blocks across the page
      const autoTargets = document.querySelectorAll<HTMLElement>(
        'main section h1, main section h2, main section h3, ' +
        'main h1, main h2, main h3, ' +
        'main .grid > div, main article, ' +
        'main section .space-y-4 > div, main section .space-y-5 > div, ' +
        'main section img:not(.no-reveal), ' +
        'footer .grid > div, ' +
        '.scroll-reveal'
      );

      autoTargets.forEach((el, index) => {
        // Skip elements inside horizontal swipe carousels or specifically excluded elements
        if (
          el.closest('.no-reveal') ||
          el.closest('.overflow-x-auto') ||
          el.hasAttribute('data-no-reveal')
        ) {
          return;
        }

        // Add scroll-reveal class if not already having a directional reveal class
        if (
          !el.classList.contains('scroll-reveal') &&
          !el.classList.contains('scroll-reveal-left') &&
          !el.classList.contains('scroll-reveal-right')
        ) {
          el.classList.add('scroll-reveal');
        }

        // Add progressive stagger delay for cards inside grids
        if (el.parentElement?.classList.contains('grid')) {
          const colIndex = index % 4;
          if (colIndex === 1 && !el.classList.contains('scroll-delay-100')) el.classList.add('scroll-delay-100');
          else if (colIndex === 2 && !el.classList.contains('scroll-delay-200')) el.classList.add('scroll-delay-200');
          else if (colIndex === 3 && !el.classList.contains('scroll-delay-300')) el.classList.add('scroll-delay-300');
        }
      });

      // 2. Select all unrevealed elements
      const elementsToObserve = document.querySelectorAll<HTMLElement>(
        '.scroll-reveal:not(.is-visible), .scroll-reveal-left:not(.is-visible), .scroll-reveal-right:not(.is-visible), [data-reveal]:not(.is-visible)'
      );

      if (!elementsToObserve.length) return;

      observer?.disconnect();

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer?.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.08,
          rootMargin: '0px 0px -30px 0px'
        }
      );

      elementsToObserve.forEach((el) => {
        // If element is already in the viewport on initial page load, trigger immediately
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 40 && rect.bottom > 0) {
          requestAnimationFrame(() => {
            el.classList.add('is-visible');
          });
        } else {
          observer?.observe(el);
        }
      });
    };

    // Run immediately, then run after a short layout stabilization tick
    setupObserver();
    const timer1 = setTimeout(setupObserver, 120);
    const timer2 = setTimeout(setupObserver, 350);

    // Watch for DOM mutations (e.g., dynamic page content tabs or filter updates)
    const mutationObserver = new MutationObserver(() => {
      setupObserver();
    });

    const mainEl = document.querySelector('main');
    if (mainEl) {
      mutationObserver.observe(mainEl, { childList: true, subtree: true });
    }

    return () => {
      observer?.disconnect();
      mutationObserver.disconnect();
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [location.pathname]);

  return null;
}

/**
 * Reusable component for manual fine-grained scroll reveal control in JSX
 */
export function Reveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  as: Component = 'div',
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right';
  as?: any;
  [key: string]: any;
}) {
  const dirClass =
    direction === 'left'
      ? 'scroll-reveal-left'
      : direction === 'right'
      ? 'scroll-reveal-right'
      : 'scroll-reveal';

  const delayClass =
    delay === 100
      ? 'scroll-delay-100'
      : delay === 200
      ? 'scroll-delay-200'
      : delay === 300
      ? 'scroll-delay-300'
      : delay === 400
      ? 'scroll-delay-400'
      : delay === 500
      ? 'scroll-delay-500'
      : '';

  return (
    <Component className={`${dirClass} ${delayClass} ${className}`} {...props}>
      {children}
    </Component>
  );
}
