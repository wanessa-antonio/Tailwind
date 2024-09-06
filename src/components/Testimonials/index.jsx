import { Button } from '../Button'
import { Heading } from '../Heading'

import laranja from '../../assets/images/perfume/laranja.png'
export const Testimonials = () => {
  return (
    <section className='bg-white'>
      <div className='w-full max-w-[360px] md:max-w-[800px] mx-auto flex flex-col items-center justify-center gap-[80px] md:px-5 xl:px-0'>
        <Heading type='h3' className='w-fit'>
          Novidade do momento
        </Heading>

        <div className='flex flex-col py-4 items-center justify-center gap-11 md:gap-12'>
          <img src={laranja} alt="laranja" />

          <p className='text-center text-sm text-secondary-text font-bold w-full max-w-[280px] md:max-w-none md:text-2xl md:font-normal'>
            Perfume de flores
          </p>

          <div className='flex gap-3 justify-center items-center'>

            <div>
            <p className='text-center text-sm text-secondary-text font-bold w-full max-w-[380px] md:max-w-none md:text-2xl md:font-normal'>
            Conheça nosso perfume de fragrância de flor que é feito 
                com essências naturais de flores puras, reunidas para criar um
                aroma delicado.  
              </p><br></br>
              <p className='text-sm text-black'>Frete Grátis</p>
            </div>

          </div>
          <Button className='w-full max-w-[280px]'>Comprar</Button>
        </div>      
      </div>
    </section>
  )
}
