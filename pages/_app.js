import Navbar from '../components/Navbar';
import '../styles/globals.css';
import {motion} from 'framer-motion'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      type: "tween",
      duration: 0.5,
    }}
  >
    <Navbar />
  </motion.div>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
