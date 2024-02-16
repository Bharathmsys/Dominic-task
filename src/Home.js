import React, { useState,useEffect } from 'react'
import Highlighter from 'react-highlight-words'
const Home = () => {
    const [search,setSearch] = useState("")
    const [finaldata,setFinal] = useState(null)
    const data = [
        {name:"DNACP-10550",details:"dnac-search:6.3.3"},
        {name:"DNACP-10776",details:"dnac-search:6.3.3"},
        {name:"",details:"dnac-search:6.3.8"},
        {name:"",details:"dnac-search:6.3.7"}
    ];
//     useEffect(()=>{
//       if(search.length>=3){
//         const searchdata = data.filter((val)=>
//       val.name.toLowerCase()||val.details.toLowerCase().includes(search.toLowerCase()))
//    setFinal(searchdata)
// }else{
//         setFinal(null)
//       }
//     },[data])
const searchdata = data.filter((val)=>
       val.name.toLowerCase()||val.details.toLowerCase().includes(search.toLowerCase()))
  return (
    <center>
        <div className='container'>
      <input value={search}  onChange={e=>{setSearch(e.target.value)}} type='text'/>
      <div className='con'>
        {searchdata.map((val,key)=>{
            return(
                <div className='sub-con' key={key}>
                {/* <h4>{val.name}</h4> */}
              {val.name?<> <Highlighter
                    highlightClassName="Highlightserach"
                    searchWords={[search]}
                    autoEscape={true}
                    textToHighlight={val.name}/><p>{val.details}</p> </>:
                <p> <Highlighter
                    highlightClassName="Highlightserach"
                    searchWords={[search]}
                    autoEscape={true}
                    textToHighlight={val.details}/> </p>}
                </div>
            )
        })}
      </div>
      <div>
        </div>
        </div>
    </center>
  )
}

export default Home
