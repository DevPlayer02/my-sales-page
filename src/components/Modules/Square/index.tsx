import styles from '@/components/Modules/Square/styles.module.scss';
import { motion, useViewportScroll } from 'framer-motion';

interface SquareProps { 
    color?: string;
    borderColor?: string;
    containerColor?: string;
    moduleTitle?: string;
    title?: string;
    bodyText?: string;
    price?: string;
}


export const Square = ({
        color,
        borderColor,
        containerColor,
        moduleTitle,
        title,
        bodyText,
        price
    }: SquareProps) => { 
    return (
        <motion.div className={styles.container} style={{ borderColor, color, backgroundColor: containerColor}}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.texts}>
                        <div className={styles.top}>
                            <h3>{moduleTitle}</h3>
                        </div>
                        <div className={styles.title}>
                            <h2>{title}</h2>
                        </div>
                        <div className={styles.body}>
                            <p>{bodyText}</p>
                        </div>
                    </div>
                    <hr className={styles.divider} style={{backgroundColor: borderColor}}/>
                    <div className={styles.bottom}>
                        <h3 style={{ color }}> Price: <span>US${price}</span> </h3>
                    </div>
                </div>
            </div>
        </motion.div>
    )
} 