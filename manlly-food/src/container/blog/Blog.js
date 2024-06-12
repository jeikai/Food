import React from 'react'
import { Blog as BlogComponent, SlideShow } from '../../component'
function Blog() {
  const showHeading = false
  return (
    <section className=''>
      <SlideShow />
      <BlogComponent showHeading = {showHeading} />
    </section>
  )
}

export default Blog