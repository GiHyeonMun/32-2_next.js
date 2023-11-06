import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { useContext } from 'react'
import ThemeContext from './themeContext';

export default function Navbar() {
    const { toggleTheme, theme } = useContext(ThemeContext);
    const newThemeName = theme === 'dark' ? 'light' : 'dark'

    return (
        /*
        <div className={styles.navbar}>
            <a href="./">Home</a> | 
            <a href="./Chapter2_1"> CH2_1</a> | 
            <a href="./Chapter2_2"> CH2_2</a> | 
            <a href="./Chapter02_3">CH02_3</a> |
            <a href="./Chapter02_5">CH02_5</a> |
            <a href="./Chapter02_6">CH02_6</a> |
        </div>*/
        <div>
            <div>My Website</div>
            <Link href='/'>| Home</Link> |
            <Link href='/about'> About</Link> |
            <Link href='/contact'> Contact</Link> |
            <button onClick={toggleTheme}>
                Set {newThemeName} theme
            </button> |
            <Link href={{
                pathname: '[date]/[contents]',
                query: {
                    date: '20210101',
                    contents: 'href-content',
                    foo: 'bar',
                    woo: 'gie',
                    foobar: 'true',
                },
            }}> Read Post#4 | </Link>
        </div>
    );
}