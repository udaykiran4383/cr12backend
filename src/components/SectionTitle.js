import React from 'react'

function SectionTitle(props) {
  return (
    <h1 className="sec-title font-chelsea" data-aos="fade-up" data-aos-duration="1500">{props.title}</h1>
  )
}

export default SectionTitle