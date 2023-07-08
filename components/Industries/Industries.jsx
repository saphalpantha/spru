import React from 'react'
import Card from './Card'


const data = [
  {id:'i1', img:'https://www.spruproducts.in/images/our-work/s1.jpg', title:'Domestic'},
  {id:'i1', img:'https://www.spruproducts.in/images/our-work/s2.jpg', title:'Commercial'},
  {id:'i1', img:'https://www.spruproducts.in/images/our-work/s3.jpg', title:'Industrial'},
  {id:'i1', img:'https://www.spruproducts.in/images/our-work/s4.jpg', title:'House Keeping'},
  {id:'i1', img:'https://www.spruproducts.in/images/our-work/s5.jpg', title:'Goverment & Corporate'},
  {id:'i1', img:'https://www.spruproducts.in/images/our-work/s6.jpg', title:'Railway & Automobile'},
]


const Industries = () => {
  return (
    <div className='min-h-screen flex flex-col items-center text-white py-[3rem] gap-6 bg-green-500'>
      <h1 className='text-3xl md:text-4xl font-semibold'>INDUSTRIES WE SERVE</h1>
      <p className='text-center w-[75%]'>We are happy to announce to you that we are providing services to a different kind of sectors from government to non-government, NGO’S, corporate company’s & central government also...</p>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {data.map(i => (
          <Card img={i.img} title={i.title} id={i.id} />
        ))}
      </div>
    </div>

  )
}

export default Industries