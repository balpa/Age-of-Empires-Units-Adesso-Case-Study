import React from 'react'
import { useParams, Link } from 'react-router-dom'
import unitsdata from '../aoe-data/age-of-empires-units.json'

function UnitDetails() {
    let params = useParams()
    let currentUnitId = params.id
    let unit = unitsdata.units[currentUnitId-1]
    let unitcost = unit.cost ? unit.cost : ""
    let wood = unitcost.Wood ? unitcost.Wood : 0
    let gold = unitcost.Gold ? unitcost.Gold : 0
    let food = unitcost.Food ? unitcost.Food : 0

    return (
    <>
    <div className='main-container'>
        <div className='top'>
                <Link to='/units' style={{marginLeft:'100px'}}>Back</Link>
            <h1 style={{flex:'4', textAlign:'center'}}>{unit.name}</h1>
            <div style={{flex:'1'}}>
                <Link to='/' style={{marginRight:'10px'}}>Home</Link>
                <Link to='/units'>Units</Link>
            </div>
            

        </div>
        <div className='bottom-home'>
        <table style={{width:'60%'}}>
        <tr>
            <th>Id</th>
            <td>{currentUnitId}</td>
        </tr>
        <tr>
            <th>Name</th>
            <td>{unit.name}</td>
        </tr>
        <tr>
            <th>Description</th>
            <td>{unit.description}</td>
        </tr>
        <tr>
            <th>Min. Req. Age</th>
            <td>{unit.age}</td>
        </tr>
        <tr>
            <th>Wood Cost</th>
            <td>{wood}</td>
        </tr>
        <tr>
            <th>Food Cost</th>
            <td>{food}</td>
        </tr>
        <tr>
            <th>Gold Cost</th>
            <td>{gold}</td>
        </tr>
        <tr>
            <th>Build Time</th>
            <td>{unit.build_time}</td>
        </tr>
        <tr>
            <th>Reload Time</th>
            <td>{unit.reload_time}</td>
        </tr>
        <tr>
            <th>Hit Points</th>
            <td>{unit.hit_points}</td>
        </tr>
        <tr>
            <th>Attack</th>
            <td>{unit.attack}</td>
        </tr>
        <tr>
            <th>Accuracy</th>
            <td>{unit.accuracy}</td>
        </tr>
        </table>
        </div>
    </div>
    <div id='footer'>berke altıparmak</div>
    </>
  )
}

export default UnitDetails