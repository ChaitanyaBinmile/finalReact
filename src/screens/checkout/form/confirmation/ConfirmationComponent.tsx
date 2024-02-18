import { useAppSelector } from "../../../../app/hooks";
import { Img } from "../../../../assets/icons";
import { CartComponent } from "../cart/CartComponent";

export const ConfirmationComponent = () => {

    const customer = useAppSelector((state=>state.customer))

  return (
    <div>
        <div className="w-[100%] m-auto bg-gray-200 flex flex-col border gap-[20px] p-3 rounded-md" >
      <h3 className="font-lato text-base font-bold leading-5">
        Shopping Items
      </h3>
      
         <CartComponent />
    
     <div className='w-full h-[1px] bg-[#c0c0c0]'/>
      <div className="customInfo flex flex-col gap-[10px]  p-6 w-[100%]">
        <div className="name w-[100%] flex justify-between">
          <p className=" text-base font-normal font-lato leading-5">Name</p>
          <p className=" text-base font-normal font-lato leading-5">
            {customer.name}
          </p>
        </div>
        <div className="email w-[100%] flex justify-between">
          <p className="text-base font-normal font-lato leading-5">Email</p>
          <p className="text-light-primary-text text-base font-normal font-lato leading-5">
           {customer.email}
          </p>
        </div>
        <div className="phoneNumber w-[100%] flex justify-between">
          <p className="text-base font-normal font-lato leading-5">Address</p>
          <p className=" text-base font-normal font-lato leading-5">
            {customer.address}
          </p>
        </div>
        <div className="address w-[100%] flex justify-between">
          <p className=" text-base font-normal font-lato leading-5">Phone</p>
          <p className=" text-base font-normal font-lato leading-5">
            91+{customer.phone}
          </p>
        </div>
      </div>
     <div className='w-full h-[1px] bg-[#c0c0c0]'/>
      <h3 className="font-lato text-base font-bold leading-5">
        Payment Method
      </h3>
      <div className="payment flex justify-between p-6 w-[100%] items-center">
        <h3 className="font-lato text-base font-normal leading-5">{customer.paymentname} </h3>
        <div className="image bg-white flex justify-center items-center w-[100px] h-[50px]">
          <img src={customer.paymentimage} alt="" />
        </div>
      </div>
   <div className='w-full h-[1px] bg-[#c0c0c0]'/>
      <h3 className="font-lato text-base font-bold leading-5">
         Shipping Company
      </h3>
      <div className="shipment flex justify-between p-6 w-[100%] items-center">
        <h3 className="font-lato text-base font-normal leading-5">
          {customer.shipmentname}
        </h3>
        <div className="image bg-white flex justify-center items-center w-[100px] h-[50px]">
          <img src={Img.ship1} alt="" />
        </div>
      </div>
    </div>
    </div>
  )
}
