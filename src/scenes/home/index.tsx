// tsrafce
import useMediaQuery from '@/hooks/useMediaQuery';
import { SelectedPage } from '@/shared/types';
import ActionButton from '@/shared/actionButton';
import HomePageGraphic from '@/assets/HomePageGraphic.png'
import HomePageText from '@/assets/HomePageText.png'
import SpnsorRedBull from '@/assets/SponsorRedBull.png'
import SponsorForbes from '@/assets/SponsorForbes.png'
import SponsorFortune from '@/assets/SponsorFortune.png'

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Home = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  

  return 
  <section
  id = 'home'
  className='gap-16 bg-gray-20 py-10 md:h-full md:pd-0'
  >
    {/* Image And Main Header */}
    <div>
    {/* Main Header */}
        <div>
    {/* Headings */}
            <div>
                <div>
                    <div>
                        <img alt='home-page-text' src={HomePageText}/>
                    </div>
                </div>
            </div>
        </div>
    {/* Image */}
    <div></div>
    </div>
  </section>
}

export default Home