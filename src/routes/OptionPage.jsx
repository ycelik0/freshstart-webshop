import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function optionPage() {
  let { option } = useParams();
  return (
    <h1>Option: {capitalizeFirstLetter(option)}</h1>
  )
}

export default optionPage
