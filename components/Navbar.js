import styles from '@/styles/Home.module.css'

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <a href="./">Home</a> | 
            <a href="./Chapter2_1"> CH2_1</a> | 
            <a href="./Chapter2_2"> CH2_2</a> | 
            <a href="./Chapter02_3">CH02_3</a>
        </div>
    )    
}