const Card = ({
  bgColor,
  no,
  textNoStyle = 'text-black ',
  title,
  description,
  underlineStyle = 'bg-violet-800',
  textColor = '',
  style = 'desktop:pl-[min(50%,1008px)] desktop:pr-[min(195px,10vw)] w-full tablet:pl-[max(38vw,291px)] tablet:pr-[30px]',
  isActive = false,
}) => (
  <div
    className={`${bgColor} max-tablet:bg-gray-100 max-tablet:-mt-[45px] ${isActive ? 'max-tablet:block' : 'max-tablet:hidden'}`}
  >
    <div
      className={`flex desktop:py-[60px] tablet:py-[30px] pt-[60px] pb-[25px] px-5 tablet:gap-5 gap-2.5  flex-col ${style}`}
    >
      <div className="flex gap-2.5 items-center">
        <div className="text-black text-center">
          <div
            className={`tablet:text-lg text-sm font-normal tracking-wider ${textNoStyle} max-tablet:text-black`}
          >
            {no}
          </div>
          <div
            className={`tablet:w-[22px] tablet:h-[5px] w-[18px] h-[4px] max-tablet:bg-violet-800 rounded-sm ${underlineStyle}`}
          ></div>
        </div>
        <div className="tablet:text-4xl text-[28px] font-normal text-stone-300">
          {title}
        </div>
      </div>
      <div className="flex flex-col gap-5  tablet:mb-0 mb-[30px]">
        <div
          className={`desktop:text-xl tablet:text-lg tablet:leading-7 text-[15px] ${textColor} max-tablet:text-black`}
        >
          {description}
        </div>
      </div>
    </div>
  </div>
)
export default Card
