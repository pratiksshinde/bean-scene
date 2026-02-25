import Image from 'next/image'
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const aboutLinks = ['Menu', 'Features', 'News & Blogs', 'Help & Supports']
const companyLinks = ['How we work', 'Terms of service', 'Pricing', 'FAQ']

export default function Footer() {
  return (
    <footer className="overflow-x-hidden">
      <div className="relative">


        <div className="relative py-16 md:py-20 text-center px-6">
          <Image src="/assets/images/bean-bg.jpg" alt="Coffee beans background" fill className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-[#603809] opacity-75" />

          <div className="relative z-20">
            <h2 className="text-white font-bold text-3xl md:text-[54px] mb-4 leading-tight">
              Subscribe to get the Latest News
            </h2>
            <p className="text-white text-base md:text-[20px] mb-8 md:mb-10">
              Don&apos;t miss out on our latest news, updates, tips and special offers
            </p>
            <div className="flex items-stretch max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="Enter your mail"
                className="flex-1 bg-[#FFF9F1] text-[#603809] placeholder-[#b09070] text-base md:text-lg px-5 md:px-8 py-3 md:py-4 outline-none min-w-0"
              />
              <button  className="bg-[#F9C06A] cursor-pointer hover:bg-[#F9C06A]/80 transition-colors text-stone-900 font-bold text-base md:text-lg px-6 md:px-10 py-3 md:py-4 whitespace-nowrap">
                Suscribe
              </button>
            </div>
          </div>
        </div>

        {/* ── FOOTER LINKS ── */}
        <div className="relative bg-[#4a2800] pt-16 md:pt-28 lg:pt-44 pb-12 md:pb-14">
          <Image src="/assets/images/wing.png" alt="" fill className="object-cover object-center opacity-30" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-13
                          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 md:gap-12">

            {/* Brand */}
            <div>
              <span className="text-white text-4xl md:text-5xl script-font italic tracking-wide block mb-4 md:mb-6">
                Bean Scene
              </span>
              <p className="text-white text-sm leading-relaxed mb-6 md:mb-8 max-w-xs">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
              <div className="flex items-center gap-4">
                {[
                  { icon: <FaFacebookF className="w-4 h-4" />, href: '#' },
                  { icon: <FaInstagram className="w-4 h-4" />, href: '#' },
                  { icon: <FaYoutube className="w-4 h-4" />, href: '#' },
                  { icon: <FaXTwitter className="w-4 h-4" />, href: '#' },
                ].map((s, i) => (
                  <a key={i} href={s.href} className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center text-white">
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* About */}
            <div>
              <h3 className="text-white font-bold text-xl md:text-2xl mb-4 md:mb-6">About</h3>
              <ul className="space-y-3 md:space-y-4">
                {aboutLinks.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-white/80 hover:text-white text-sm md:text-base transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white font-bold text-xl md:text-2xl mb-4 md:mb-6">Company</h3>
              <ul className="space-y-3 md:space-y-4">
                {companyLinks.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-white/80 hover:text-white text-sm md:text-base transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-bold text-xl md:text-2xl mb-4 md:mb-6">Contact Us</h3>
              <ul className="space-y-3 md:space-y-4">
                <li className="text-white/80 text-sm md:text-base leading-relaxed">
                  Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016
                </li>
                <li>
                  <a href="tel:+12029182132" className="text-white/80 hover:text-white text-sm md:text-base transition-colors">
                    +1 202-918-2132
                  </a>
                </li>
                <li>
                  <a href="mailto:beanscene@mail.com" className="text-white/80 hover:text-white text-sm md:text-base transition-colors">
                    beanscene@mail.com
                  </a>
                </li>
                <li>
                  <a href="https://www.beanscene.com" className="text-white/80 hover:text-white text-sm md:text-base transition-colors">
                    www.beanscene.com
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>


        <div className="hidden lg:block absolute -left-14 bottom-[calc(100%-540px)] pointer-events-none z-30">
          <Image src="/assets/images/coffee-cup1.png" alt="" width={310} height={380} className="object-contain" />
        </div>
        <div className="hidden lg:block absolute -right-14 bottom-[calc(100%-540px)] pointer-events-none z-30 scale-x-[-1]">
          <Image src="/assets/images/coffee-cup1.png" alt="" width={310} height={380} className="object-contain" />
        </div>

      </div>
    </footer>
  )
}