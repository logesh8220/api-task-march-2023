import axios from 'axios'

import React, { useEffect, useState } from 'react'

function Dasboard() {
    const [data, setdata] = useState([])
    const [input, setinput] = useState("")
    useEffect(() => {
        Loaddata()
    }, [])

    let Loaddata = async () => {
        let getdata = await axios.get("https://dog.ceo/api/breeds/list/all")
        setdata(getdata.data.message)
    }
    let handlechange = (event) => {
        setinput(event.target.value)
    }
    return (
        <div>
            <input className='mt-5' onChange={handlechange}></input>
            <table className='table '>
                <tr>
                    <th>Key</th>
                    <th>Value</th>

                </tr>
                {
                    Object.keys(data).map((key, index) => {
                        if (key.split("")[0] === input || input === "")
                            return (
                                <tr>
                                    <td>{key}</td>
                                    <td>{data[key]}</td>
                                </tr>
                            )
                    })
                }
            </table>
        </div>
    )
}

export default Dasboard