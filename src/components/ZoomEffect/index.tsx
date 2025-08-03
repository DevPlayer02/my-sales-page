import styles from '@/components/ZoomEffect/styles.module.scss'
import React, { useEffect } from 'react'

export const ZoomEffect = () => {
    useEffect(() => {
        let gsapModule: any;
        let ScrollTriggerModule: any;

        const loadGSAP = async () => {
            gsapModule = await import('gsap');
            ScrollTriggerModule = await import('gsap/ScrollTrigger');
            const ScrollTrigger = ScrollTriggerModule.ScrollTrigger;

            if (ScrollTrigger) {
                gsapModule.default.registerPlugin(ScrollTrigger);
            }

            const isMobile = window.innerWidth <= 768;
            const isSmallMobile = window.innerWidth <= 413;

            let scale, xPercent, yPercent;

            if (isSmallMobile) {
                scale = 170;
                xPercent = 50;
                yPercent = -4000;
            } else if (isMobile) {
                scale = 170;
                xPercent = -500;
                yPercent = -4500;
            } else {
                scale = 460;
                xPercent = 2000;
                yPercent = 50;
            }

            if (ScrollTrigger && typeof ScrollTrigger.getAll === 'function') {
                ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
            }

            gsapModule.default.to('#zoom-text', {
                scale,
                duration: 1,
                xPercent,
                yPercent,
                transformOrigin: 'center center',
                scrollTrigger: {
                    trigger: '#zoom-in',
                    pin: true,
                    end: `+=${innerHeight / 2}`,
                    scrub: 0.5,
                }
            })

            gsapModule.default.fromTo('#next-text', {
                y: '1300%', opacity: 0
            },
            {
                y: '0%',
                opacity: 1,
                scrollTrigger: {
                    trigger: '#zoom-in',
                    start: 'top 25%',
                    end: 'top 0%',
                    scrub: true,
                },
                ease: 'power3.out',
            })
            
            gsapModule.default.fromTo('#next-text span', {
                opacity: 0.3, y: 200
            },
            {
                opacity: 1,
                y: 0,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: '#zoom-in',
                    start: 'top 0%',
                    end: 'bottom 25%',
                    scrub: true,
                },
                ease: 'power3.out',
            })
        };

        loadGSAP();

        return () => {
            import('gsap/ScrollTrigger').then((ScrollTriggerModule) => {
                const ScrollTrigger = ScrollTriggerModule.ScrollTrigger;
                if (ScrollTrigger && typeof ScrollTrigger.getAll === 'function') {
                    ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
                }
            });
        }

    }, [])

    const splitText = (text: string) => {
        return text.split(' ').map((word, i) => { 
            if (word.includes('<br/>')) {
                return (
                    <React.Fragment key={i}>
                        <br />
                        <span style={{ opacity: 0.3 }}>
                            {word.replace('<br/>', '')}&nbsp;{''}
                        </span>
                    </React.Fragment>
                )
            } else { 
                return (
                    <span key={i} style={{ opacity: 0.3 }}>
                        {' '}
                        {word}&nbsp;
                    </span>
                )
            }
        })
    }

    return (
        <section id='zoom-in' className={styles.zoomSection}>
            <h2 id='zoom-text'className={styles.zoomText}>
                What will <span> you </span> learn?
            </h2>
            <div className={styles.textWrap}>
                <p id='next-text' className={styles.nextText}>
                    {splitText(
                        'Boost your career <br/>with our complete course! <br/>Learn Figma and WordPress.'
                    )}
                </p>
                <p id='next-text' className={styles.nextText}>
                    {splitText(
                        'HTML, CSS, JavaScript, <br/>and sales techniques. <br/>Each module ensures real learning.'
                    )}
                </p>
                <p id='next-text' className={styles.nextText}>
                    {splitText(
                        'Practical and efficient. <br/>Master valuable skills <br/>and achieve success in the digital world.'
                    )}
                </p>
            </div>
        </section>
    )
}