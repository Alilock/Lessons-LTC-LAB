import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Contacts = () => {

    const [name, setName] = useState()
    const [phoneNumber, setPhoneNumber] = useState()

    const [contacts, setContacts] = useState([])

    const [loading, setLoading] = useState()


    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = () => {
        setLoading(true)
        fetch('https://6705597f031fd46a830fa27b.mockapi.io/api/contacts').then(res => res.json())
            .then(res => {
                setContacts(res.reverse())
                setLoading(false)
            })
    }

    const postData = async () => {
        const body = {
            name: name,
            phoneNumber: phoneNumber
        }
        setLoading(true)
        try {
            const res = await axios.post('https://6705597f031fd46a830fa27b.mockapipi.io/api/contacts', body)
            const newContact = [res.data, ...contacts]
            setContacts(newContact)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            alert("Sistemdə xəta baş")
            console.log('ERROR!!!!!', error);

        }


    }



    return (
        <div style={{
            backgroundColor: "gray",
            display: "flex",
            justifyContent: "center",
        }}>

            <div style={{
                gap: "16px"
            }} >
                <h3>Contacts</h3>

                <div style={{

                }}>
                    <p>Add Contact Seciton </p>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px"
                    }}>
                        <input type="text" placeholder='Type Name' value={name} onChange={(e) => { setName(e.target.value) }} />
                        <input type='tel' placeholder='Type Phone Number' value={phoneNumber} onChange={(e) => { setPhoneNumber(e.target.value) }} />
                        <button onClick={postData}>submit</button>
                    </div>
                </div>

                {
                    loading ? <div style={{
                        fontSize: "40px",
                        textAlign: "center",
                        backgroundColor: "red"
                    }}>Loading Data.....</div> : contacts.map(contact => {
                        return <div key={contact.id} style={{
                            display: "flex",
                            alignItems: "center",
                            borderRadius: "20px",
                            borderWidth: 1,
                            borderStyle: "dotted",
                            marginBottom: "8px"
                        }}>
                            <div style={{
                                width: '50px',
                                height: "50px",
                                borderRadius: "50%"
                            }}>
                                <img src={contact.avatar} style={{
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: "50%"
                                }} alt="avatar" />
                            </div>

                            <div>
                                <p>{contact.name}</p>
                                <p>{contact.phoneNumber}</p>
                            </div>
                        </div>
                    })
                }



            </div>



        </div>
    )
}

export default Contacts
