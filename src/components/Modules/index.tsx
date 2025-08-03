import styles from '@/components/Modules/styles.module.scss';
import { motion, useViewportScroll } from 'framer-motion';
import { Square } from '@/components/Modules/Square';
import { useState } from 'react';

export const Modules = () => { 

    const [isSpecificPointReached, setIsSpecificPointReached] = useState(false);

    const backgroundColor = isSpecificPointReached ? '#010425' : '#ffffff';
    const textColor = isSpecificPointReached ? '#ffffff' : '#000000';
    const borderColor = isSpecificPointReached ? '#ffffff' : '#000000';
    const containerColor = isSpecificPointReached ? '#0a0730' : '#F0F0F0';
    return (
        <motion.div className={styles.container} style={{backgroundColor}}>
            <section className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.title}>
                        <h2><span> Exclusive modules </span></h2>
                    </div>
                    <div className={styles.row}>
                        <Square
                            color={textColor}
                            bodyText='Discover how to create amazing designs using
                            the powerful Figma. Learn design techniques that will
                            turn your projects into true works of art.'
                            borderColor={borderColor}
                            containerColor={containerColor}
                            moduleTitle='Module 1'
                            title='Design with Figma'
                            price='99.99'
                        />
                        <Square
                            color={textColor}
                            bodyText='WordPress is an incredible platform for creating 
                            websites, offering creative freedom with ease of use. It 
                            provides a vast array of plugins to extend functionality, 
                            and it is also optimized for SEO.'
                            borderColor={borderColor}
                            containerColor={containerColor}
                            moduleTitle='Module 2'
                            title='WordPress'
                            price='99.99'
                        />
                    </div>
                    <div className={styles.row}>
                        <Square
                            color={textColor}
                            bodyText='Boost your sales! Learn how to connect with customers, 
                            create attractive offers, and close deals efficiently. Turn
                            possibilities into profit with us and stand out in the world of
                            sales!'
                            borderColor={borderColor}
                            containerColor={containerColor}
                            moduleTitle='Module 3'
                            title='Sales strategy'
                            price='99.99'
                        />
                        <Square
                            color={textColor}
                            bodyText='Learn fundamental and advanced programming concepts with 
                            practical techniques to build solid projects. With our course, you’ll
                            gain the skills you need to stand out in the world of technology!'
                            borderColor={borderColor}
                            containerColor={containerColor}
                            moduleTitle='Module 4'
                            title='Programming from zero to pro'
                            price='99.99'
                        />
                    </div>
                    <div className={styles.row}>
                        <Square
                            color={textColor}
                            bodyText='Learn it all! With the knowledge of these languages, you 
                            can build not only websites but also amazing software with features 
                            that will surprise you. Once you master these, the rest becomes easy!'
                            borderColor={borderColor}
                            containerColor={containerColor}
                            moduleTitle='Module 5'
                            title='Html, Css and JavaScript'
                            price='99.99'
                        />
                        <Square
                            color={textColor}
                            bodyText='Master GitHub! Learn to manage your projects, version your 
                            code, and collaborate with your team effortlessly. With these skills, 
                            you’ll be ready to face any challenge in development!'
                            borderColor={borderColor}
                            containerColor={containerColor}
                            moduleTitle='Module 6'
                            title='GitHub'
                            price='99.99'
                        />
                        <Square
                            color={textColor}
                            bodyText='Create amazing interfaces! With React, you’ll learn to 
                            build modern, dynamic, and efficient interfaces. After mastering 
                            this library, creating web applications will be much easier!'
                            borderColor={borderColor}
                            containerColor={containerColor}
                            moduleTitle='Module 7'
                            title='React'
                            price='99.99'
                        />
                    </div>
                </div>
            </section>
        </motion.div>
    )
} 