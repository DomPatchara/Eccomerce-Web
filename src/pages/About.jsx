import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div className='text-2xl text-center pt-8 border-t'>
      <div>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img  className='w-full md:max-w-[450px]' src={assets.about_img} />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste harum sapiente, tempore, fuga iure repellendus cumque officiis quis nobis molestiae itaque aliquam id quia nostrum sed illo eveniet. Vo</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore aperiam repellat, esse eum ipsum, natus officia aliquid eaque, magnam debitis placeat at cupiditate fugit illum corpori</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis quidem dignissimos maiores consequuntur itaque incidunt id obcaecati aut ullam est quam, tenetur labore? Doloremqu</p>
        </div>
      </div>

      <div className='text-4xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance: </b>
          <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In earum aliquid beatae deleniti vel perferendis, porro magni tempora? Earum laboriosam ducimus pariatur reprehenderit dolorum sequi doloremque, beatae doloribus vitae a.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience: </b>
          <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In earum aliquid beatae deleniti vel perferendis, porro magni tempora? Earum laboriosam ducimus pariatur reprehenderit dolorum sequi doloremque, beatae doloribus vitae a.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service: </b>
          <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In earum aliquid beatae deleniti vel perferendis, porro magni tempora? Earum laboriosam ducimus pariatur reprehenderit dolorum sequi doloremque, beatae doloribus vitae a.</p>
        </div>
      </div>

      <NewsletterBox/>
    </div>
  )
}

export default About