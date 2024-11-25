import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp } from './animation';

export default function Index() {
    const quotes = [
        "Don’t write about him, don’t try to describe him, just watch him. - Pep Guardiola",
        "Although he may not be human, it’s good that Messi still thinks he is.- Javier Mascherano",
        "He is an alien that dedicates himself to playing with humans. - Gianluigi Buffon",
    ];

    const description = useRef(null);
    const isInView = useInView(description);

    return (
        <div ref={description} className={styles.description}>
            <div className={styles.body}>
                {quotes.map((phrase, quoteIndex) => (
                    <div key={quoteIndex} className={styles.quote}>
                        <p>
                            {phrase.split(" ").map((word, wordIndex) => (
                                <span key={`${quoteIndex}-${wordIndex}`} className={styles.mask}>
                                    <motion.span
                                        variants={slideUp}
                                        custom={wordIndex}
                                        animate={isInView ? "open" : "closed"}
                                    >
                                        {word}
                                    </motion.span>
                                </span>
                            ))}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
