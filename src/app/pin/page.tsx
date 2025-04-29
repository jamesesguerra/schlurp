import styles from '@/app/pin/pin.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Pin"
}

export default function Home() {

    return (
        <div className={styles.box_container}>
        </div>
    );
}
