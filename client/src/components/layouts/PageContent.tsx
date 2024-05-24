import styles from '../../styles/page_content.module.scss'

export default function PageContent({
    header,
    children,
    footer,
}: {
    header?: React.ReactNode,
    children?: React.ReactNode,
    footer?: React.ReactNode,
}) {
    return (
        <div className={styles.page_content}>
            <div className={styles.page_content__inner}>
                <div className={styles.content__header}>
                    {header}
                </div>
                <div className={styles.page_content__main}>
                    {children}
                </div>
                <div className={styles.page_content__footer}>
                    {footer}
                </div>
            </div>
        </div>
    )
}