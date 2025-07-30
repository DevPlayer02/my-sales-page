import styles from "@/components/Header/styles.module.scss";

export const Header = () => { 
    return (
        <header>
            <div className={styles.container}>
                <div className={styles.content}>
                    <p> See how regular folks are pulling in over <strong> US $1.8K a month. </strong> </p>
                </div>
            </div>
        </header>
    );
}