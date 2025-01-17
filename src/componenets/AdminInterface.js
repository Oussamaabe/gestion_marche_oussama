import React from 'react'
import CarteMarche from './CarteMarche'
import { useNavigate } from 'react-router-dom'
import UseData from '../hooks/UserHook'
import userlogo from '../imgs/person.png'
import more from '../imgs/more.png'

export default function AdminInterface() {

  const navigate = useNavigate()

  const dt = UseData()

  let generateKey = Math.random(Math.floor(1000000 , 9999999))



  return (
    dt!==undefined && dt.filter(dt=>dt.id !== 'Admin').map(dt=>
        <fieldset key={dt.id} className='carteField'>
          <legend id={dt.id}>
            <h1 style={{textTransform : 'capitalize'}}>
              <img style={{width : '30px' , height : '30px', paddingRight : '10px'}} src={userlogo} alt='user logo'/>
              {dt.username}
              <p id='plusInfos' onClick={()=>navigate(`/WorkerInfo/${dt.id}/${generateKey}`)}>Plus d'information
              <img src={more} alt='show more'/>
              </p>
            </h1>
          </legend>
          <hr style={{width : '100%'}}/>
          <CarteMarche users={dt} id={dt.id} marche={dt.marches} />
        </fieldset>
    )
  )
}
