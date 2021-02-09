import React,{useState} from 'react'

const  GuestList: React.FC = () => {
    interface data {
        name: string,
        contact: number | string
    }
    const [find, setFind] = useState<Boolean>(false)
    const [textToFind, setTextToFind] = useState<string>('')
    const [name, setName] = useState<string>('')
    const [contact, setContact] = useState<number | string>('')
    const [guests, setGuests] = useState<data[]>([])
    
    const handleOnClick = () =>{
        if(name !== '' && contact !== ''){
            const payload = {name, contact}
            setGuests([...guests, payload])
            setName('')
            setContact('')
        }else{
            alert("Please fill this out")
        }
    }
    const findText = () =>{
        setGuests(guests.filter(guest => guest.name.includes(textToFind)))
    }
    return (
        <>
            <h3>Guest List</h3>
            <button className='btn' onClick={() => setFind(!find)}>Switch to {find ? ('Find User Mode'): ('Guest Mode') } 
            </button>
            {find ? (<>
            <input 
                className='ip' 
                placeholder='Name' 
                onChange={e => setName(e.target.value)} type="text" 
                value={name}/>
            <input 
            type="number"  
            value={contact} 
            className='ip' 
            placeholder='Contact' 
            onChange={e => setContact(e.target.value )} />
            <button 
            className='btn' 
            onClick={handleOnClick}>
                Add Guest
            </button>
            </>) : (
            <>
                <input 
                className='ip' 
                placeholder='Find' 
                type="text" 
                value={textToFind} 
                onChange={e => setTextToFind(e.target.value)}/>
                <button 
                className='find-btn' 
                onClick={findText}>find text</button>
            </>)}
            <div>
            </div>
            <ul>
                {guests.map(guest => (
                <div key={Math.random()*10000/234}>
                    <span>Name: {guest.name}</span> <br/>
                    <span>Contact: {guest.contact}</span>
                    <hr/>
                </div>))}
            </ul>
        </>
    )
}
export default GuestList
