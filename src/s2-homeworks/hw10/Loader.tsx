import s from './Loader.module.css'
import loader from './Spinner-1s-200px (1).gif'

export const Loader = () => <div className={s.loader}><img src={loader} alt=""/></div>
