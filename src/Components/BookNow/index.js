import './index.css'

const BookNow=()=>{
    return(
        <div className='book_container'>
            <div>
                <img className='BookNow_image1' src='https://snz04pap002files.storage.live.com/y4mIZ9mFGrS4wzbtXw9GfZypfuFY9hdxKvMJQZBuHkx_OHokV6XNu3Gy5tYoNMte2s4FX4HKjveW7XVdQa_lgztgQNiDFI1plKe-z-9qVWZdB-RUt_rb7B19w-KdiOq4Lz-o9OM5GxXAwguhnrkRPExpJypkIzX8QdYkMKWub1tLbhGOaX-D_hqVbODhK8QWN4HFUBdWXQe4eYK_VwVPze6lg?encodeFailures=1&width=572&height=825' alt='image124' />
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="113" height="113" viewBox="0 0 113 113" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M56.5 113C87.7041 113 113 87.7041 113 56.5C113 25.2959 87.7041 0 56.5 0C25.2959 0 0 25.2959 0 56.5C0 87.7041 25.2959 113 56.5 113ZM56.5 87.4405C73.588 87.4405 87.4405 73.588 87.4405 56.5C87.4405 39.412 73.588 25.5595 56.5 25.5595C39.412 25.5595 25.5595 39.412 25.5595 56.5C25.5595 73.588 39.412 87.4405 56.5 87.4405Z" fill="#F8E27E" fill-opacity="0.2"/>
</svg>

<div>
<h1 className='b_para1'>Book now</h1>
<h1 className='b_para2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
<form>
    <div className='input_container'>
    <label className='b_para3' >City</label>
    <input className='input_a' type='type' placeholder='Placeholder'/>
    </div>

    <div className='input_main_container'>
        <div className='input_container'>
            <label className='arrival'>
            Arrival
            </label>
            <input className='input_a' placeholder='10 October'/>
        </div>

        <div className='input_container'>
            <label>Departure</label>
            <input className='input_a' type='text' placeholder='11 October'/>
        </div>

    </div>

    <div className='minus_container'>

<div >
    <h1 className='star'>Star</h1>
    <div className='minus'>
        <h1 className='ss'>-</h1>
    <h1 className='ss'>4</h1>
    <h1 className='ss'>+</h1>
    </div>
</div>

<div>
    <h1 className='star'>Room</h1>
    <div className='minus'>
        <h1 className='ss'>-</h1>
    <h1 className='ss'>1</h1>
    <h1 className='ss'>+</h1>
    </div>
</div>
</div>

<button className='book_button' type='button'>Book Now</button>
</form>
</div>
        </div>

      
    )
}

export default BookNow