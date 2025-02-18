import HomeLayout from '@layout/HomeLayout'
import Principal from '../../views/principal/Principal'
import Habilities from '../../views/habilities/Habilities'
import Experience from '../../views/experience/Experience'

const Home = () => {
    return (
        <HomeLayout>
            <Principal />
            <Habilities />
            <Experience />
        </HomeLayout>
    )
}

export default Home