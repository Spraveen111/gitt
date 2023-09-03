import NavBar from "../NavBar"

import PageOne from '../PageOne'
import PageTwo from "../PageTwo"
import PageThreeOurDestinations from '../PageThreeOurDestinations'
import PageFourStudentsDiscounts from "../PageFourStudentsDiscounts"
import BookNow from '../BookNow'
import Testimonials from "../Testinominals"

const MainPage=()=>{
    return(
        <div>
            
            <NavBar/>
            <PageOne/>
            <PageTwo/>
            <PageThreeOurDestinations/>
            <PageFourStudentsDiscounts/>
            <BookNow/>
            <Testimonials/>

        </div>
    )
}

export default MainPage

