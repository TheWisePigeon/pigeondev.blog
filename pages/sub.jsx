import React from 'react'
import axios from 'axios'
import { useState } from 'react'

export default function Sub() {

    const [loading, setLoading] = useState(false)
    async function handleFormSubmit(event) {
        setLoading(true)
        event.preventDefault()
        const result = axios.post(
            'https://serverless-pigeon.vercel.app/api/store_sub',
            {
                "newSub":event.target.sub.value
            }
        ).then(
            (res)=>{
                setLoading(false)
                console.log(res);
            }
        ).catch(
            err=>{
                console.log(err);
            }
        )
    }


    return (
        <div>
            <p>Subscribe to my newsletter, I won't spam you 😇</p>
            <form action="" onSubmit={handleFormSubmit} method="post">
                <input type="text" name="sub" required id="sub" placeholder='yourmail@domain.com' className='rounded' /><br />
                <button type="submit" className='sub'>
                    {loading?"...":"Subscribe"}
                </button>
            </form>

        </div>
    )
}
