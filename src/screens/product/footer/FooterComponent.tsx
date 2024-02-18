import { Img } from '../../../assets/icons';

export const FooterComponent = () => {
    return (
        <div className="p-2 items-center justify-start gap-4 flex ">
          <div>
            <img className='h-auto w-[100px]' src={Img.dress} />
          </div>
          <div className="flex flex-col gap-[10px]">
            <h3 className="text-text-color-light-primary-text font-lato text-lg font-medium leading-20">SHORT PRINTED DRESS</h3>
            <div className="flex justify-between items-center">
              <h4 className="text-[red] text-lg font-medium leading-20">$69.99</h4>
              <h4 className="text-[#686767] font-lato text-12 font-normal leading-20 line-through">$129.99</h4>
              <h4 className=" bg-[red] text-xs font-medium  text-white rounded-[5px] px-2 flex py-[3px]">-40%</h4>
            </div>
            <div className="border-[2px] border-[#8a8888] h-[50px] flex justify-center gap-[10px] items-center rounded">
              <p className="text-[#444444] font-lato text-base font-medium leading-20">$39</p>
              <p className="text-right text-[sm] font-medium leading-20">Add to cart</p>
            </div>
          </div>
        </div>
      );
    }

