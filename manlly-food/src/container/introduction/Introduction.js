import React from 'react'
import './introduction.css'
import {logo} from '../../assets/index'
const Introduction = () => {
  return (
    <section className='intro margin'>
      <div className='intro-box'>
        <div className='container'>
          <h1>Giới thiệu chung</h1>
          <p> Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
            dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
            Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
            sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.</p>
        </div>
      </div>
      <div className='intro-box'>
        <div className='container'>
          <h1>Kampong Chicken House</h1>
          <img src={logo} alt='logo' />
          <p> Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
            dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
            Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
            sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.</p>
        </div>
      </div>
      <div className='intro-box'>
        <div className='container'>
          <h1>COCA Restaurant</h1>
          <img src={logo} alt='logo' />
          <p> Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
            dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
            Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
            sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.</p>
        </div>
      </div>
    </section>
  )
}

export default Introduction