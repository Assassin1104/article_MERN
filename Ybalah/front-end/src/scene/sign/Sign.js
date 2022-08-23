import * as React from 'react';



import Signup from '../../components/sign/Signup'
import Header from '../../components/header/Header';

import '../../assets/css/Sign.css'

export default function Sign() {
  return (
    <div className='sign_main'>
      <Header />
      <Signup />
    </div>
  )
}
