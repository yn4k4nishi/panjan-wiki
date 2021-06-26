import { useState } from 'react'
import useSWR from 'swr'
import Button from '../button'
import { mutate } from 'swr'

function fetcher(url: string) {
  return window.fetch(url).then((res) => res.json())
}

function MemberList({className=''}){
    const member = useSWR(`/api/member/get-list`, fetcher)
    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [adding , setAdding] = useState(false)
    const [deleting , setDeleting] = useState(false)

    const handleChangeName = (e) => {
        setName(() => e.target.value)
    } 

    const handleChangeMail = (e) => {
        setMail(() => e.target.value)
    } 

    async function AddMember({ name , mail }){
        if({name} != undefined && {mail} != undefined){
            setAdding(true)
            // throw Error(`${name}, ${mail}`)
            let res = await fetch(`/api/member/add-member?name=${name}&mail=${mail}`)
            let json = await res.json()
            if (!res.ok) throw Error(json.message)
            setName('')
            setMail('')
            mutate('/api/member/get-list')
            setAdding(false)
        }
    }

    // async function DeleteMember( e ) {
        // setDeleting(true)
        // let res = await fetch(`/api/member/delete-member?mail=${e}`)
        // let json = await res.json()
        // if (!res.ok) throw Error(json.message)
        // mutate('/api/member/get-list')
        // setDeleting(false)
    // }

    if(member.data){
        return(
            <div className={className}>
                <table className="table-auto">
                    <thead><tr>
                        <th className="px-4 py-2"> Name </th>
                        <th className="px-4 py-2"> Gmail </th>    
                    </tr></thead>
                    <tbody>
                        {member.data.map((e)=>(
                            <tr>
                                <td className="border px-4 py-2">{e.name}</td>
                                <td className="border px-4 py-2">{e.mail}</td>
                                {/* <td className="px-4 py-2">
                                    <Button onClick={() => DeleteMember({e.mail})}>Delete</Button>
                                </td> */}
                            </tr>
                        ))}
                        <tr>
                            <td>{name}</td>
                            <td>{mail}</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">
                                <input value={name} type="text" onChange={handleChangeName} className="focus:outline-none"></input>
                            </td>
                            <td className="border px-4 py-2">
                                <input value={mail} type="text" onChange={handleChangeMail} className="focus:outline-none"></input>
                            </td>
                            <td className="px-4 py-2">
                                <Button onClick={AddMember} className="px-7">Add</Button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    } else {
        return(<></>)
    }
}

export default MemberList