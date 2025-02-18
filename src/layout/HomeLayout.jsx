import Footer from "../views/footer/Footer"
import Navigate from "../views/navigate/Navigate"

const HomeLayout = ({ children }) => {
    return (
        <>
            <Navigate />
            {children}
            <Footer />
        </>
    )
}

export default HomeLayout