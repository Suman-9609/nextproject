import ContactCard from '../components/ContactCard'
import styles from '@/app/contact/contact.module.css';
import ContactForm from '../components/ContactForm';
const Contact = () => {
    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.conactHead}>Contact us page</h1>
                <ContactCard />

                <section className={styles.contact_section}>
                    <h2>We'd love to hear <span>from you</span></h2>

                    <ContactForm />
                </section>

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3570.693726324403!2d89.52457767537062!3d26.49780447689695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e2573973bd608d%3A0x75abc68b7e109e27!2sISCOOL-%20Computer%20Training%20Center!5e0!3m2!1sen!2sin!4v1693555485725!5m2!1sen!2sin" width={600} height={450} style={{ border: 0 }} allowfullscreen="" loading="lazy" className={styles.mapping} referrerpolicy="no-referrer-when-downgrade"></iframe>

            </div>


        </>
    )
}

export default Contact