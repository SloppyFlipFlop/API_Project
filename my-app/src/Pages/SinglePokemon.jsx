import React, { useState, useEffect } from 'react'

import { useParams } from "react-router-dom";
import { useAppContext } from '../utils/context';

const SinglePokemon = () => {
  const {fetchPokemon} = useAppContext()
  const { id } = useParams();
  const { name } = fetchPokemon(`i=${id}&`);
  return (
    
    <h1>{name}</h1>
  )
  {console.log(`the id is : ${id}`);}
}

export default SinglePokemon
