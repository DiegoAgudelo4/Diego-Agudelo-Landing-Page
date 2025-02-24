import Principal from '@views/principal/Principal'
import Habilities from '@views/habilities/Habilities'
import Experience from '@views/experience/Experience'
import { useEffect } from 'react'
import { scrollToTop } from '@utils/ScrollTo'

const Home = () => {
    useEffect(() => {
        scrollToTop()
    }, [])

    return (
        <>
            <Principal />
            <Habilities />
            <Experience />
        </>
    )
}

export default Home