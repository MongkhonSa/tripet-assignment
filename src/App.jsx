import Plus from './assets/plus.svg'
import PlusLight from './assets/plus-light.svg'
import Line from './assets/line.svg'
import Footballer from './assets/footballer.svg'
import FootballerMobile from './assets/footballer-mobile.svg'
import BasketBallMobile from './assets/basketball-mobile.svg'
import Basketball from './assets/basketball.svg'

import Underline from './assets/underline.svg'
import UnderlineWhite from './assets/underline-white.svg'
import { useController } from './controllers/controller'
import Card from './component/Card'
import CardSwiperContainer from './container/card-swipper'

const FootballCardProps = [
  {
    bgColor: '',
    no: '01',
    title: 'CONNECTION',
    description:
      'Connect with coaches directly, you can ping coaches to view profile.',
  },
  {
    bgColor: 'bg-gray-100',
    no: '02',
    title: 'COLLABORATION',
    description:
      'Work with other student athletes to  increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.',
  },
  {
    bgColor: 'bg-[#5E3DB3]',
    no: '03',
    title: 'GROWTH',
    description:
      'Resources and tools for you to get better as a student Athelte. Access to training classes, tutor sessions, etc ',
    underlineStyle: 'bg-white',
    textColor: 'text-white',
  },
]
const BasketBallCardProps = [
  {
    bgColor: '',
    no: '01',
    title: 'CONNECTION',
    description:
      'Connect with talented athlete directly, you can watch their skills through video show reels directly from Surface 1.',
  },
  {
    bgColor: 'bg-gray-100',
    no: '02',
    title: 'COLLABORATION',
    description:
      'Work with recruiter to increase your chances of finding talented athlete.',
  },
  {
    bgColor: 'bg-[#090C35]',
    no: '03',
    title: 'GROWTH',
    description: 'Save your time, recruit proper athlets for your team. ',
    underlineStyle: 'bg-white',
    textColor: 'text-white',
    textNoStyle: 'text-violet-500',
  },
]

function App() {
  const {
    pageIndex: footballerPageIndex,
    onChangePage: onChangeFootballer,
    onSwipedLeft: onSwipedLeftFootballer,
    onSwipedRight: onSwipedRightFootballer,
  } = useController({ items: FootballCardProps })
  const {
    pageIndex: basketBallPageIndex,
    onChangePage: onChangeBasketBaller,
    onSwipedLeft: onSwipedLeftBasketBaller,
    onSwipedRight: onSwipedRightBasketBaller,
  } = useController({ items: BasketBallCardProps })

  return (
    <div>
      <div className="w-full tablet:absolute tablet:overflow-hidden">
        <div className="tablet:absolute desktop:pl-[min(11vw,175px)] desktop:pr-[min(1067px,50vw)] desktop:w-full desktop:right-0 desktop:mr-0 desktop:mt-[50px] tablet:w-[518px]  tablet:right-[86vw] tablet:-mr-[250px]  tablet:mt-[71px] tablet:block hidden">
          <div className="relative">
            <img src={PlusLight} className="min-[1310px]:hidden pl-[197px]" />
            <img src={Plus} className="min-[1310px]:hidden pl-[220px]" />
            <img
              src={Line}
              className="min-[1310px]:hidden absolute -z-10 pl-[197px] pt-[19px]"
            />
            <img src={Footballer} />
          </div>
        </div>

        <div className="flex  desktop:pl-[min(1008px,50%)]  tablet:pl-[38vw] pl-5">
          <div className="text-neutral-200 tablet:text-[90px] text-[50px] font-normal desktop:mt-[100px] tablet:mt-[50px] mt-5">
            ATHLETES
          </div>
        </div>
        <div>
          <div className="tablet:hidden flex justify-center mt-15[px]">
            <img src={FootballerMobile} />
          </div>
          <div className="hidden tablet:block">
            {FootballCardProps.map((card) => {
              return <Card {...card} />
            })}
          </div>
          <CardSwiperContainer
            items={FootballCardProps}
            onChange={onChangeFootballer}
            itemIndex={footballerPageIndex}
            onSwipedLeft={onSwipedLeftFootballer}
            onSwipedRight={onSwipedRightFootballer}
          />
        </div>
        <div className="tablet:absolute desktop:pl-[min(804px,51%)]  desktop:pr-[min(125px,6vw)] desktop:w-full desktop:left-0  desktop:ml-0 desktop:mt-[10px]  tablet:w-[691px]  tablet:left-[86vw] tablet:-ml-[320px] tablet:mt-[31px] tablet:block hidden">
          <div className="relative ">
            <img src={Basketball} />
          </div>
        </div>
        <div className="flex desktop:w-1/2 desktop:pr-[50%]  tablet:pr-[min(38vw,364px)] max-desktop:pl-[30px] max-tablet:pl-5">
          <div className="text-neutral-200 tablet:text-[90px] text-[50px] font-normal desktop:mt-[100px] tablet:mt-[50px] desktop:pl-[min(322px,16vw)] mt-5 ">
            PLAYERS
          </div>
        </div>
        <div>
          <div className="tablet:hidden flex justify-center mt-[15px]">
            <img src={BasketBallMobile} />
          </div>
          <div className="hidden tablet:block">
            {BasketBallCardProps.map((card, index) => {
              return (
                <Card
                  style="desktop:pr-[50%] desktop:pl-[min(322px,16vw)] w-full tablet:pr-[38vw] tablet:pl-[30px]"
                  {...card}
                  isActive={basketBallPageIndex === index}
                />
              )
            })}
          </div>
          <CardSwiperContainer
            items={BasketBallCardProps}
            onChange={onChangeBasketBaller}
            itemIndex={basketBallPageIndex}
            onSwipedLeft={onSwipedLeftBasketBaller}
            onSwipedRight={onSwipedRightBasketBaller}
          />
        </div>
      </div>
    </div>
  )
}
export default App
