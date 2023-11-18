import styles from './sectionTitle.module.scss'

interface SectionTitle{
    title: string;
}

const SectionTitle = ({ title }: SectionTitle) => {
  return (
    <h5 className={styles.sectionTitle}>{title}</h5>
  )
}

export default SectionTitle