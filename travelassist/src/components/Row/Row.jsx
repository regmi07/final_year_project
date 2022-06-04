import React, {useState, useEffect} from 'react'

// import Button from '@mui/material/Button'

import './Row.css'

import axios from '../../helpers/axios'

import Card from '../Card/Card'

function Row({title, fetchFrom, dest}) {
  const [datas, setDatas] = useState([])

  useEffect(() => {
      const fetchData = async() => {
          const res = await axios.get(`${fetchFrom}`)
          if(res.status === 200){
              setDatas(res.data)
          }
      }
      fetchData()
  },[fetchFrom])

  return (
    <div style={{marginTop: '2.5em'}}>
        <div>
            <h2 className="row-title">{
                dest ? `${title}${dest}` : title
            }</h2>
        </div>
        <div className="row-container">
            <div className="row">
                    {
                        datas.length > 0 && datas.map((data) => {
                            let url = fetchFrom
                            if(fetchFrom.match(/^\/owners/))
                                url = '/hotels'
                            else if(fetchFrom.match(/^\/thingstodo/))
                                url = '/thingstodo'
                        
                            return <Card data={data} url={url} isDest={fetchFrom === '/destinations'} key={data.id} />
                        })
                    }
            </div>
        </div>
    </div>
  )
}

export default Row