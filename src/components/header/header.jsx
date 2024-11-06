import Image from "next/image";
import separator from '../../../public/separator.svg'

export function Header() { 
  return <div className='bg-white w-full h-[79px] flex justify-center items-center'>
    <p className="font-ptRootUi font-bold text-2xl text-gray-400 mr-[15px]">Скидка действует:</p>
    <div className="w-[140px]">
      <div className="flex justify-between">
        <p className="font-bebasNeue text-4xl leading-4xl text-turquoise-100">00</p>
        <Image src={separator} alt='separator' />
        <p className="font-bebasNeue text-4xl leading-4xl text-turquoise-100">00</p>
      </div>
      <div className="flex justify-between font-ptRootUi font-bold text-gray-300">
        <p>минут</p>
        <p>секунд</p>
      </div>
    </div>
  </div>
}