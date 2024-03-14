import React from 'react'
import {footer} from '../../common/data/index'
import FooterWidget from '../components/FooterWidget'
import FooterContact from '../components/FooterContact'

const Footer = () => {
  return (
    <div className='w-full mt-24 p-2'>
      <div className='w-11/12 border-t-[rgba(255,255,255,0.2)] border-t-[1px] mx-auto flex gap-2 sm:gap-6 flex-col sm:flex-row sm:justify-evenly flex-wrap'>
        {
          footer.widgets.map((widget) => {
            return (
              <FooterWidget title={widget.title} key={widget.id}>
                {
                  widget.list.map((item) => {
                    return (
                      <p className='text-gray-300 cursor-pointer hover:text-white transition-colors ease-linear text-sm' key={item.id}>{item.title}</p>
                    )
                  })
                }
              </FooterWidget>
            )
          })
        }
        <FooterContact contactInfo={footer.contactInfo} />
      </div>
    </div>
  )
}

export default Footer