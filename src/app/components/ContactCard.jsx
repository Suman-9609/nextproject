import styles from '@/app/contact/contact.module.css';
import { MdEmail, MdVoiceChat, MdFormatListBulleted } from "react-icons/md";
import Link from 'next/link';

const ContactCard = () => {
    return (
        <div className={styles.section}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.grid_card}>
                        <i> <MdEmail /> </i>
                        <h2>Email</h2>
                        <p>Monday to Friday Expeced</p>
                        <p>response time: 72 hours</p>
                        <Link href="/">Send Email <span>&gt;</span></Link>
                    </div>
                    <div className={styles.grid_card}>
                        <i> <MdVoiceChat /> </i>
                        <h2>Live Chat</h2>
                        <p>Monday to Friday Expeced</p>
                        <p>response time: 72 hours</p>
                        <Link href="/">Send Email <span>&gt;</span></Link>
                    </div>
                    <div className={styles.grid_card}>
                        <i> <MdFormatListBulleted /> </i>
                        <h2>Community Forum</h2>
                        <p>Monday to Friday Expeced</p>
                        <p>response time: 72 hours</p>
                        <Link href="/">Send Email <span>&gt;</span></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactCard