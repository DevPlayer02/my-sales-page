import styles from '@/components/Banner/styles.module.scss';

export const Banner = () => { 
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <div className={styles.leftSide}>
                    <img className={styles.logo} src="/logo2.svg" alt="Logo"/>
                    <h1> Everything you need to know to change your life and
                        <span> earn over a thousand dollars per week </span>
                        building websites at home.
                    </h1>
                    <h5>
                        Learn from someone who lives what they teach, and turn your
                        home into what will change your life! You can start today by
                        building websites from home and earn over $5,000 per month
                        starting in the next 30 days.
                    </h5>
                    <button> I want to change my life</button>
                    <div className={styles.discount}>
                        <img src="/discountTag.svg" alt="Discount Tag" />
                        <p> Only $4.99! </p>
                    </div>
                </div>
                <div className={styles.rightSide}>
                    <div className={styles.backgroundImages}>
                        <img src="/pix1.svg" alt="Background Image 1" />
                        <img src="/pix2.svg" alt="Background Image 1" />
                        <img src="/pix3.svg" alt="Background Image 1" />
                        <img src="/pix4.svg" alt="Background Image 1" />
                    </div>
                    <img className={styles.herbert} src="/herbertOnly.svg" alt="Herbert Only" />
                </div>
            </div>
        </section>
    );
}