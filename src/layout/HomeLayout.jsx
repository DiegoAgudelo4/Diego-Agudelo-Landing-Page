import Footer from "../views/footer/Footer"
import Navigate from "../views/navigate/Navigate"
import { motion } from "framer-motion"
const HomeLayout = ({ children }) => {
    return (
        <>
            <Navigate />
            <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                {children}
            </motion.main>
            <Footer />
        </>
    )
}

export default HomeLayout