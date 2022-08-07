import React from 'react'
const subs = require('../public/subs.json')

export default function Sub() {
    function handleFormSubmit(event){
        event.preventDefault()
        subs.subs.addresses.push("duh")
    }



  return (
    <div>
            <p>Subscribe to my newsletter, I won't spam you 😇</p>
            <form action="" onSubmit={handleFormSubmit} method="post">
                <input type="text" name="sub" id="sub" placeholder='yourmail@domain.com' className='rounded' />
            </form>
            <button type='submit'  className='sub' >Subscribe</button>
    </div>
  )
}
