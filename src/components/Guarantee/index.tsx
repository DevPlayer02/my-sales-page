import styles from '@/components/Guarantee/styles.module.scss';

export const Guarantee = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <div className={styles.top}>
                    <div className={styles.leftSide}>
                        <div className={styles.leftSideContent}>
                            <h3> Guarantee </h3>
                            <h3> Days </h3>
                            <div className={styles.stars}>
                                <img src="/star.svg" alt="star" />
                                <img src="/star.svg" alt="star" />
                                <img src="/star.svg" alt="star" />
                                <img src="/star.svg" alt="star" />
                                <img src="/star.svg" alt="star" />
                            </div>
                        </div>
                    </div>
                    <div className={styles.rightSide}>
                        <h3><span> 7-day </span> free trial </h3>
                        <p> When you secure your spot now, there's absolutely no risk. </p>
                        <p> You’ll have full access to the entire protocol, and if you
                            realize it’s not right for you at this moment, just send me
                            an email — I’ll refund 100% of your investment,
                            no questions asked.
                        </p>
                        <p> You have nothing to lose — the risk is on me. </p>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.info}>
                        <div className={styles.icon}>
                            <img src="/safePayment.svg" alt="safePayment" />
                        </div>
                        <div className={styles.text}>
                            <h3> Safe Payment </h3>
                            <p> Various payment options, all with security certification. </p>
                        </div>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.icon}>
                            <img src="/lock.svg" alt="lock" />
                        </div>
                        <div className={styles.text}>
                            <h3> Instant access </h3>
                            <p> Receive your login credentials instantly upon purchase. </p>
                        </div>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.icon}>
                            <img src="/infinite.svg" alt="infinite" />
                        </div>
                        <div className={styles.text}>
                            <h3> Unlimited access forever </h3>
                            <p> Access will be granted indefinitely as long as your plan is valid. </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
