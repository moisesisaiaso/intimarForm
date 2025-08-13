import { useForm } from 'react-hook-form'
import styles from '../styles/IntiMar.module.css'
import Registro from '../components/intiMar/Registro'
import Footer from '../components/Footer'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import stylesCarta from '../styles/Carta.module.css'
import { useMediaQuery } from 'react-responsive';


const IntiMar = () => {

const isMobile = useMediaQuery({ maxWidth: 768 });

  

  return (
    <div className={styles.container}>
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        style={{
          position: 'fixed',
          top: '80px',
          right: '20px',
          zIndex: 9999
        }}
      />
      
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <div className={styles.logoText}>
              <h1>
                <span className={styles.logoTextIn}>In</span>
                <span className={styles.logoTextti}>ti</span>
                <span className={styles.logoTextMar}>-MAR</span>
              </h1>
              <p>PARACAS BAY</p>
            </div>
          </div>
         
           <div className={stylesCarta.whatsappContainer}>
                 <a 
                    href="https://wa.me/51981318866?text=Hola,%20me%20interesa%20hacer%20una%20reserva%20en%20Inti-MAR" 
                    className={stylesCarta.whatsappButton}
                    target="_blank"
                    rel="noopener noreferrer"
                 >
                 <span className={stylesCarta.whatsappIcon}>📱</span>
                 {
                  !isMobile &&  <span>Contactanos</span>
                 }
                 <span className={stylesCarta.whatsappNumber}>+51 981 318 866</span>
                 </a>
           </div>
        </div>
      </header>

     {/*Secciones*/}
    

      {/* Formulario de Registro */}
      <Registro />

      
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default IntiMar
