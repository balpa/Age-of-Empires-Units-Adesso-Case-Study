import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useState} from 'react'
import AOEDATA from '../aoe-data/age-of-empires-units.json'

function Units() {

    let navigate = useNavigate()

    const [checkwood, setcheckwood] = useState(false)
    const [checkfood, setcheckfood] = useState(false)
    const [checkgold, setcheckgold] = useState(false)
    const [woodslider, setwoodslider] = useState(0)
    const [foodslider, setfoodslider] = useState(0)
    const [goldslider, setgoldslider] = useState(0)
    const [costs, setcosts] = useState(200)
    const [filterage, setfilterage] = useState("All")
    const [filtertype, setfiltertype] = useState("All")
    const [id, setid] = useState(1)


    const displaydata = AOEDATA.units.map((unit) => {

        let unitcost = unit.cost ? unit.cost : ""

        let wood = unitcost.Wood ? unitcost.Wood : 0
        let gold = unitcost.Gold ? unitcost.Gold : 0
        let food = unitcost.Food ? unitcost.Food : 0

        if (unit.age === filterage || filterage === "All") {
        if (wood>=woodslider && food>=foodslider && gold>=goldslider) {
            
        return (

            <tr onClick={()=> {setid(unit.id); navigate(`${unit.id}`)}} style={{cursor:'pointer'}}>
                <td>{unit.id}</td>
                <td>{unit.name}</td>
                <td>{unit.age}</td>
                <td>{JSON.stringify(unitcost).replace(/{|"|\}/gi,'')}</td>

            </tr>
        )
        }}
    })

    useEffect(() => {
        let currentcost = parseInt(costs)-(parseInt(woodslider)+parseInt(foodslider)+parseInt(goldslider))
        if (currentcost<0) {
            alert("You don't have enough resources to build this unit")
            setwoodslider(0)
            setfoodslider(0)
            setgoldslider(0)
        }
    }, [woodslider,foodslider,goldslider])


  return (
    <>
    <div className='main-container'>
        <div className='top'>
            <h1 style={{flex:'4', textAlign:'center'}}>Units</h1>
            <div style={{flex:'1'}}>
                <Link to='/' style={{marginRight:'10px'}}>Home</Link>
                <Link to='/units'>Units</Link>
            </div>
        </div>
        <div className='bottom'>
            <div style={{ paddingBottom:'10px' }}>Ages</div>
            <div className='ages-menu'>
                <div id={filtertype == 'All' ? 'filterbuttonselected' : "filterbutton"}
                onClick={()=> {      
                        setfilterage("All");
                        setfiltertype('All')
                        }}>All</div>
                <div id={filtertype == 'Dark' ? 'filterbuttonselected' : "filterbutton"}
                    onClick={()=> {
                        setfilterage('Dark');
                        setfiltertype('Dark')
                        }}>Dark</div>
                <div id={filtertype == 'Feudal' ? 'filterbuttonselected' : "filterbutton"}
                    onClick={()=> {
                        setfilterage("Feudal");
                        setfiltertype('Feudal')
                        }}>Feudal</div>
                <div id={filtertype == 'Castle' ? 'filterbuttonselected' : "filterbutton"}
                    onClick={()=> {
                        setfilterage("Castle");
                        setfiltertype('Castle')
                        }}>Castle</div>
                <div id={filtertype == 'Imperial' ? 'filterbuttonselected' : "filterbutton"}
                    onClick={()=> {
                        setfilterage("Imperial");
                        setfiltertype('Imperial')
                        }}>Imperial</div>
            </div>
            <div style={{ padding:'10px 0px 10px 0px' }}>Costs</div>
            <div>
                <input type="checkbox" onClick={()=> setcheckwood(!checkwood)} />
                <span>Wood</span>
                <input type="range" min="0" max="100"  class="slider" disabled={!checkwood ? "disabled" : ""} onChange={(e)=> setwoodslider(e.target.value)} />
                <span>0-100</span>
                <span> current val: {woodslider}</span>
            </div>
            <div>
            <input type="checkbox" onClick={()=> setcheckfood(!checkfood)} />
                <span>Food</span>
                <input type="range" min="0" max="100"  class="slider" disabled={!checkfood ? "disabled" : ""} onChange={(e)=> setfoodslider(e.target.value)}/>
                <span>0-100</span>
                <span> current val: {foodslider}</span>
            </div>
            <div>
            <input type="checkbox" onClick={()=> setcheckgold(!checkgold)} />
                <span>Gold</span>
                <input type="range" min="0" max="100"  class="slider" disabled={!checkgold ? "disabled" : ""} onChange={(e)=> setgoldslider(e.target.value)}/>
                <span>0-100</span>
                <span> current val: {goldslider}</span>
            </div>
              
            <div style={{height:'30px'}}></div>
            <table>
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Costs</th>
                    </tr>
                </thead>
                <tbody>
                    {displaydata}
                </tbody>
            </table>


        </div>
    </div>
    <div id='footer'>berke altıparmak</div>
</>
  )
}

export default Units