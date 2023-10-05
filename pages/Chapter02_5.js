// Highlight 컴포넌트를 dynamic import로 호출
import dynamic from 'next/dynamic';

const Highlight = dynamic(() => import('../components/Highlight'), { ssr: false });
import styles from '../styles/Home.module.css';

export default function DynamicPage() {
  return (
    <div className={styles.main}>
      <Highlight code={`console.log('Hello, world!')`} language="js" />
    </div>
  );
}