import React from 'react'
import styles from "./Error404.module.css"

function Error404() {
    return (
        <div className={styles.wrapper404}>
            <div className={styles.description}>
                <h1 className={styles.descriptionTitle}>404</h1>
                <div className={styles.descriptionText}>Page not found!</div>
                <div>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
            </div>
        </div>
    )
}

export default Error404
