import Image from 'next/image'
import Button from '@/app/componants/Button'

export default function MenuCard({ name, desc, price, img }) {
  return (
    <div className="relative pb-7">
      <div className="relative w-full h-52 md:h-64">
        <Image src={img} alt={name} fill className="object-cover" />
      </div>
      <div className="border border-[#F9C06A6B] bg-[#FFF9F1] pt-4 pb-8 px-4 text-center">
        <h3 className="text-[#603809] font-bold text-lg md:text-xl mb-1">{name}</h3>
        <p className="text-[#1E1E1E] text-sm mb-1">{desc}</p>
        <p className="text-[#603809] font-bold text-base md:text-lg">{price}</p>
      </div>
      <div className="absolute bottom-0 w-full flex justify-center">
        <Button size="sm">Order Now</Button>
      </div>
    </div>
  )
}