import React from 'react'
import { Link } from 'react-router-dom'
import aoeimage from '../assets/aoeimage.png'

function Home() {
  return (
    <>
        <div className='main-container'>
            <div className='top'>
                <h1 style={{flex:'4', textAlign:'center'}}>Home Page</h1>
                <div style={{flex:'1'}}>
                    <Link to='/' style={{marginRight:'10px'}}>Home</Link>
                    <Link to='/units'>Units</Link>
                </div>
            </div>
            <div className='bottom-home'>
                <img src={aoeimage} style={{height:'100%'}} alt='AOF' />
            </div>
        </div>
        <div id='footer'>berke altıparmak</div>
    </>
  )
}

export default Home