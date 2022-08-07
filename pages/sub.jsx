import React from 'react'

export default function Sub() {
  return (
    <div>
            <p>Subscribe to my newsletter, I won't spam you 😇</p>
            <form action="" method="post">
                <input type="text" name="sub" id="sub" placeholder='yourmail@domain.com' className='rounded' />
            </form>
            <button  className='sub' >Subscribe</button>
    </div>
  )
}
