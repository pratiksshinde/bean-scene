'use client'
import { useState } from 'react'
import Image from 'next/image'
import Button from '@/app/componants/Button'
import Footer from '@/app/componants/common/Footer'
import Navbar from '@/app/componants/common/Navbar'
import MenuCard from '@/app/componants/home/MenuCard'

const menuItems = [
  { name: 'Cappuccino',  desc: 'Coffee 50% | Milk 50%', price: '$8.50', img: '/assets/images/1.jpg' },
  { name: 'Chai Latte',  desc: 'Coffee 50% | Milk 50%', price: '$8.50', img: '/assets/images/2.jpg' },
  { name: 'Macchiato',   desc: 'Coffee 50% | Milk 50%', price: '$8.50', img: '/assets/images/3.jpg' },
  { name: 'Expresso',    desc: 'Coffee 50% | Milk 50%', price: '$8.50', img: '/assets/images/4.jpg' },
]

const features = [
  { icon: '/assets/images/a.png', title: 'Supreme Beans',    desc: 'Beans that provides great taste' },
  { icon: '/assets/images/b.png', title: 'High Quality',     desc: 'We provide the highest quality' },
  { icon: '/assets/images/c.png', title: 'Extraordinary',    desc: 'Coffee like you have never tasted' },
  { icon: '/assets/images/d.png', title: 'Affordable Price', desc: 'Our Coffee prices are easy to afford' },
]

const testimonials = [
  {
    quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.....",
    name: 'Jonny Thomas',   role: 'Project Manager',    img: '/assets/images/avatar.jpg',
  },
  {
    quote: 'Bean Scene has completely transformed my mornings. The quality of their coffee is unmatched and the flavours are extraordinary. I would recommend this to anyone who loves a great cup of coffee to start their day right.',
    name: 'Sarah Mitchell', role: 'Marketing Director', img: '/assets/images/avatar2.avif',
  },
  {
    quote: 'I have tried coffee from all around the world and nothing compares to what Bean Scene offers. The supreme beans they use create a taste that is truly unforgettable. My team orders from them every single morning.',
    name: 'David Chen',     role: 'Software Engineer',  img: '/assets/images/avatar3.jpg',
  },
]

export default function Home() {
  const [current, setCurrent] = useState(0)
  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))
  const t = testimonials[current]

  return (
    <div className="bg-white">

      {/* ── HERO ── */}
      <div className="relative min-h-screen px-2 lg:px-11 bg-black overflow-hidden">
        <Image src="/assets/images/coffie-bg.jpg" alt="Coffee background" fill className="object-cover object-center opacity-50" priority />
        <div className="absolute inset-0 z-10" />

        <Navbar />

        <div className="relative z-20 px-6 md:px-12 lg:px-24 pt-16 md:pt-24 max-w-4xl">
          <p className="text-white text-lg md:text-xl font-light tracking-wide mb-2">
            We&apos;ve got your morning covered with
          </p>
          <h1 className="text-[120px] md:text-[180px] lg:text-[221px] py-5 leading-none script-font italic text-white mb-6">
            Coffee
          </h1>
          <p className="text-white text-base font-light leading-loose tracking-wide max-w-md mb-10">
            It is best to start your day with a cup of coffee. Discover the best flavours coffee you will ever have. We provide the best for our customers.
          </p>
          <Button size="md">Order Now</Button>
        </div>
      </div>

      {/* ── DISCOVER ── */}
      <section className="flex flex-col md:flex-row items-center gap-10 lg:gap-16 py-16 md:py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex-1">
          <h2 className="text-4xl md:text-[54px] font-bold text-[#603809] mb-6 leading-tight">
            Discover the best coffee
          </h2>
          <p className="text-stone-500 text-lg md:text-[20px] leading-loose mb-8">
            Bean Scene is a coffee shop that provides you with quality coffee that helps boost your productivity and helps build your mood.
            Having a cup of coffee is good, but having a cup of real coffee is greater. There is no doubt that you will enjoy this coffee more than others you have ever tasted.
          </p>
          <Button size="md">Learn More</Button>
        </div>
        <div className="flex-1 flex justify-center">
          <Image src="/assets/images/bean-cup.png" alt="Coffee beans in cup shape" width={480} height={300} className="object-contain w-full max-w-sm md:max-w-full" />
        </div>
      </section>

      {/* ── MENU ── */}
      <section className="pb-20">
        <div className="relative h-24 overflow-visible">
          <Image src="/assets/images/coffee-splash.png" alt="" width={540} height={120} className="absolute -left-25 -top-36 object-contain scale-x-[-1] rotate-180" />
        </div>
        <div className="text-center mb-12 px-4">
          <h2 className="text-4xl md:text-[54px] font-bold text-[#603809] mb-3">
            Enjoy a new blend of coffee style
          </h2>
          <p className="text-lg md:text-[20px] leading-loose max-w-3xl mx-auto text-[#707070]">
            Explore all flavours of coffee with us. There is always a new cup worth experiencing
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-13 max-w-7xl mx-auto">
          {menuItems.map((item) => (
            <MenuCard key={item.name} {...item} />
          ))}
        </div>
      </section>

      {/* ── WHY DIFFERENT ── */}
      <section className="relative py-10 overflow-hidden">
        <div className="absolute -top-16 -right-26 opacity-0 lg:opacity-100 pointer-events-none">
          <Image src="/assets/images/coffee-splash.png" alt="" width={480} height={300} className="object-contain rotate-180" />
        </div>
        <div className="text-center mb-14 px-4 relative z-110">
          <h2 className="text-4xl md:text-[54px] font-bold text-[#603809] mb-3">Why are we different?</h2>
          <p className="text-[#707070] text-lg md:text-[20px]">We don&apos;t just make your coffee, we make your day!</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-13 max-w-7xl mx-auto relative z-10">
          {features.map((f) => (
            <div key={f.title} className="bg-[#FAF5EC] hover:bg-[#FDEFD9] cursor-pointer border border-[#e8d5b7] p-8 flex flex-col items-center text-center transition-colors">
              <Image src={f.icon} alt={f.title} width={80} height={80} className="mx-auto object-contain mb-6" />
              <h3 className="text-[#603809] font-bold text-xl mb-3">{f.title}</h3>
              <p className="text-[#707070] text-base leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-16 relative z-10">
          <p className="text-[#707070] text-lg md:text-[20px] mb-1">Great ideas start with great coffee, Lets help you achieve that</p>
          <p className="text-[#603809] font-bold text-2xl mb-6">Get started today.</p>
          <Button size="md">Join Us</Button>
        </div>
      </section>

      {/* ── PROMO BANNER ── */}
      <div className="relative bg-black overflow-hidden min-h-[60vh]">
        <Image src="/assets/images/bean-bg.jpg" alt="Coffee background" fill className="object-cover object-center opacity-50" priority />
        <div className="absolute inset-0 z-10 bg-[#603809] opacity-50" />
        <div className="relative z-20 flex flex-col md:flex-row justify-between items-center px-6 md:px-32 py-20 md:py-28 gap-10">
          <div className="max-w-lg">
            <h2 className="text-4xl md:text-[54px] leading-tight text-white font-bold mb-6">
              Get a chance to have an Amazing morning
            </h2>
            <p className="text-white text-lg md:text-[20px] font-light leading-loose mb-10">
              We are giving you a one time opportunity to experience a better life with coffee.
            </p>
            <Button size="md">Order Now</Button>
          </div>
          <div className="relative w-72 md:w-96 h-72 md:h-96 flex-shrink-0">
            <Image src="/assets/images/mug.png" alt="Coffee mug" fill className="object-contain" priority />
          </div>
        </div>
        <div className="absolute z-10 -right-24 bottom-0 pointer-events-none">
          <Image src="/assets/images/bean-wing.png" alt="" width={640} height={450} className="object-contain" />
        </div>
      </div>

      {/* ── TESTIMONIALS ── */}
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="absolute top-27 -right-20 opacity-0 lg:opacity-100 pointer-events-none z-110">
          <Image src="/assets/images/coffee-splash.png" alt="" width={620} height={260} className="object-contain rotate-180" />
        </div>
        <div className="absolute bottom-40 -left-1 opacity-0 lg:opacity-100 pointer-events-none z-110">
          <Image src="/assets/images/coffee-splash.png" alt="" width={420} height={260} className="object-contain" />
        </div>

        <div className="text-center mb-12 relative z-130">
          <h2 className="text-4xl md:text-[54px] font-bold text-[#603809] mb-3">Our coffee perfection feedback</h2>
          <p className="text-[#707070] text-lg md:text-[20px]">Our customers has amazing things to say about us</p>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-16">
          <div className="bg-[#FFF9F1] border border-[#e8d5b7] px-8 md:px-16 py-12 text-center relative">
            <div className="absolute top-6 left-8 text-[#603809] text-[180px] md:text-[254px] leading-none font-serif opacity-80">&ldquo;</div>
            <p className="text-[#707070] text-base md:text-[18px] font-semibold leading-loose mt-16 md:mt-28 mb-8 relative z-10">
              {t.quote}
            </p>
            <h3 className="text-[#603809] font-bold text-2xl md:text-[32px] mb-1">{t.name}</h3>
            <p className="text-[#707070] text-lg md:text-[20px] mb-8">{t.role}</p>
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-lg overflow-hidden mx-auto -mb-16 md:-mb-20 border-2 border-[#e8d5b7]">
              <Image src={t.img} alt={t.name} width={112} height={112} className="object-cover w-full h-full" />
            </div>
          </div>

          <button onClick={prev} className="absolute left-0 md:left-5 top-1/2 -translate-y-1/2 w-14 h-14 md:w-20 md:h-20 bg-[#F9C06A] hover:bg-amber-200 transition-colors flex items-center justify-center rounded-lg text-[#603809] text-xl md:text-2xl font-bold">
            ←
          </button>
          <button onClick={next} className="absolute right-0 md:right-5 top-1/2 -translate-y-1/2 w-14 h-14 md:w-20 md:h-20 bg-[#F9C06A] hover:bg-amber-200 transition-colors flex items-center justify-center rounded-lg text-[#603809] text-xl md:text-2xl font-bold">
            →
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-24 md:mt-28 relative z-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${i === current ? 'bg-amber-400 w-6' : 'bg-[#e8d5b7] w-2.5'}`}
            />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
  
}