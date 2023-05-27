import './LandingPage.css'
import Logo from '../Logo/Logo'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/autoplay'
import { BsSearch } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const books = [
  { title: 'El Principito', src: '/images/saint-exupery_el-principito.png' },
  { title: 'Romeo and Juliet', src: '/images/shakespeare_romeo-and-juliet.jpg' },
  { title: 'Cumbres Borrascosas', src: '/images/bronte_cumbres-borrascosas.jpg' },
  { title: 'Alicia en el País de las Maravillas', src: '/images/carroll_alicia-pais-maravillas.jpg' },
  { title: 'Phantom of the Opera', src: '/images/leroux_phantom-of-the-opera.jpg' },
  { title: 'El Cuervo', src: '/images/poe_el-cuervo.jpg' },
  { title: 'Orgullo y Prejuicio', src: '/images/austen_pride-and-prejudice.jpg' },
]

const LandingPage = () => {
  return (
    <section className='landing bg-neutral'>
      <div>
        <div className='bg-base-100 max-w-[1080px] mx-auto grid justify-center rounded-2xl relative z-10 shadow-md'>
          <div>
            <Logo />
          </div>
        </div>
        <div className='shadow-custom max-w-[900px] mx-auto mt-[-1rem] rounded-2xl'>
          <div className='booksBackground py-10 rounded-2xl'>
            <div className='z-10 relative'>
              <h2 className='font-heading text-3xl py-1'>¿Qué libro quieres leer hoy?</h2>
              <div className='flex justify-between border rounded-2xl px-4 py-2 mx-20 mt-6'>
                <p className='font-light'>Buscar por autor, título, género</p>
                <BsSearch size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container mx-auto px-4'>
        <h2 className='text-4xl font-heading text-secondary my-14'>
          Inspírate y disfruta nuestras increíble historias
        </h2>
        <h3 className='max-w-[900px] mx-auto text-3xl font-heading text-secondary text-left mb-8'>
          Los más vendidos
        </h3>
        <div className=''>
          <Swiper
            className='max-w-[900px] bg-neutral'
            modules={[Autoplay]}
            slidesPerView={1.5}
            spaceBetween={15}
            loop={true}
            loopedSlides={1.5}
            centeredSlides={false}
            autoplay={{
              delay: 2000,
              reverseDirection: false,
              disableOnInteraction: false,
            }}
            speed={600}
            breakpoints={{
              450: {
                slidesPerView: 2,
                loopedSlides: 2,
              },
              650: {
                slidesPerView: 2.5,
                loopedSlides: 2,
              },

              1050: {
                slidesPerView: 3.5,
                loopedSlides: 3,
              },
            }}
          >
            {books.map(book => (
              <SwiperSlide key={book.title}>
                <img
                  src={book.src}
                  alt={book.title}
                  className='rounded-box mx-auto max-h-64 md:max-h-72 lg:max-h-80'
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <Link
          to='/books'
          className='btn btn-secondary btn-outline w-fit normal-case mt-8 grid ml-auto transition duration-500'
        >
          Ver toda la colección
        </Link>
      </div>
    </section>
  )
}

export default LandingPage
