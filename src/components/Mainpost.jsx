import React from 'react'
import { useParams } from 'react-router-dom'

export default function Mainpost() {

    let params = useParams()
    console.log('param:' , params);
  return (
    <div>Mainpost</div>
  )
}
