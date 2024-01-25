import { useSwipeable } from 'react-swipeable'
import Card from '../component/Card'

const CardSwiperContainer = ({
  items,
  onChange,
  onSwipedLeft,
  onSwipedRight,
  itemIndex,
}) => {
  const handlers = useSwipeable({
    onSwipedLeft,
    onSwipedRight,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  })
  return (
    <div {...handlers} className="block tablet:hidden">
      {items.map((card, index) => {
        return <Card {...card} isActive={index === itemIndex} />
      })}

      <div className="tablet:hidden flex justify-center gap-5 bg-gray-100 pb-[25px]" draggable>
        {items.map((_, index) => {
          return (
            <div
              onClick={() => onChange(index)}
              className={`w-2.5 h-2.5  ${index === itemIndex ? 'bg-violet-800' : 'bg-zinc-300'} rounded-full`}
            />
          )
        })}
      </div>
    </div>
  )
}
export default CardSwiperContainer
