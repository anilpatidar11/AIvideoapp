import React, { useEffect, useState } from 'react'
import content from './ContentData';
import "../css/content.css";

const Content = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    
    setData(content)
  },[])

console.log(data)

  return (
    <div className='card-container'>
      
      {data.map((item, index) => (
    
        <div className='custom-card' key={index}>
          
          <div className='image-container'>
            
        <img src={item.image} alt={item.title} />
      </div>
      <div className='card-content'>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    </div>
  ))}
</div>

  )
}

export default Content