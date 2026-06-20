import { ChevronRight, CircleAlert} from "lucide-react"

function Trackorder() {
  return (
    <div className="max-w-[1320px] mx-[100px] mt-[48px] mx-auto">
    <main>
      <section>
      <div>
        <h2 className="font-semibold text-[32px]">Track Order</h2>
        <p className="text-[5F6C72] mt-[16px]">To track your order please enter your order ID in the input field below and press the “Track Order” <br /> button. this was given to you on your receipt and in the confirmation email you should have received.</p>
      </div>
      <div >
        
       <div className="flex mt-[24px] gap-[24px]">
         <div className="input">
          <p>Order ID</p>
        <form>
          <input type="number" placeholder="ID..." className="w-[424px] h-[44px] pl-[16px] border mt-[8px]"/>
        </form>
        </div>

      <div className="input">
          <p>Billing Email</p>
        <form>
          <input type="number" placeholder="Email adress" className="w-[424px] h-[44px] pl-[16px] border mt-[8px]"/>
        </form>
        </div>
       </div>

        <div className="flex mt-[16px] gap-[6px]">
          <CircleAlert size={20} />
          <p>Order ID that we sended to your in your email address.</p>
        </div>
        <button className="flex mb-[124px] mt-[32px] items-center gap-[12px] w-[217px] h-[56px] bg-amber-500 px-[38px] font-semibbold  py-[7px] text-white uppercase">
          Track Order
          <ChevronRight size={20} className="text-white"/>
        </button>
      </div>
      </section>
    </main>
    </div>
  )
}

export default Trackorder