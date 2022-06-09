import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'

function Navbar(){
    return(

        <ul className={styles.list}>
        <li>
          <Link to='/' className={styles.item}  >Home</Link>
        </li>
        <li>
          <Link to='/empresa' className={styles.item}  >Empresa</Link>
        </li>
        <li>
          <Link to='/contato' className={styles.item}  >Contato</Link>
        </li>
      </ul>
    )
}

export default Navbar