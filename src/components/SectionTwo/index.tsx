import styles from "@/components/SectionTwo/styles.module.scss"

export const SectionTwo = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <div className={styles.title}>
                    <h2>
                        The outrageous difference between what you're
                        <span> about to </span>
                        <span> gain with the King </span>
                        and what you're running away from...
                    </h2>
                </div>
                <div className={styles.cards}>
                    <div className={styles.leftCard}>
                        <div className={styles.titleCard}>
                            <h3> Lame course </h3>
                        </div>
                        <div className={styles.topics}>
                            <div className={styles.topic}>
                                <img src="/redX.svg" alt="x" />
                                <p> Inconsistent earnings </p>
                            </div>
                            <div className={styles.topic}>
                                <img src="/redX.svg" alt="x" />
                                <p> The teacher who doesn't practice what they preach </p>
                            </div>
                            <div className={styles.topic}>
                                <img src="/redX.svg" alt="x" />
                                <p> Lack of organization </p>
                            </div>
                            <div className={styles.topic}>
                                <img src="/redX.svg" alt="x" />
                                <p> basic course </p>
                            </div>
                            <div className={styles.topic}>
                                <img src="/redX.svg" alt="x" />
                                <p> Doesn’t reflect how the real market works </p>
                            </div>
                            <div className={styles.topic}>
                                <img src="/redX.svg" alt="x" />
                                <p> Lacks support </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.rightCard}>
                        <div className={styles.titleCard}>
                            <h3> Curso do <span> REI </span> </h3>
                        </div>
                        <div className={styles.topics}>
                            <div className={styles.topic}>
                                <img src="/correct.svg" alt="correct" />
                                <p> High earnings </p>
                            </div>
                            <div className={styles.topic}>
                                <img src="/correct.svg" alt="correct" />
                                <p> The teacher practices what they preach </p>
                            </div>
                            <div className={styles.topic}>
                                <img src="/correct.svg" alt="correct" />
                                <p> Comprehensive course </p>
                            </div>
                            <div className={styles.topic}>
                                <img src="/correct.svg" alt="correct" />
                                <p> Bonus on the employment market </p>
                            </div>
                            <div className={styles.topic}>
                                <img src="/correct.svg" alt="correct" />
                                <p> Exclusive tips </p>
                            </div>
                            <div className={styles.topic}>
                                <img src="/correct.svg" alt="correct" />
                                <p> Exclusive support from the King </p>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className={styles.button}>
                    <button> I want to learn from the King </button>
                </div>
            </div>
        </section>
    );
}