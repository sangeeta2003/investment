import logo from './assets/pexels-disha-sheta-3521353.jpg'
export default function Quick(){
    return(
        <div className='head'>
            <div className='logo'>
            <img src={logo} alt='This is the logo' height='100px' width='100px'/>
            </div>
           
<div className='medium'>
<div className='one'>
<label>Initial_Investment</label>
<input type='number' value={10000} />
</div>
<div className='two'>
<label>Annual_Investment</label>
<input type='number' value={1200} />
</div>
 <div className='three'>
<label>ExpectedReturn</label>
<input type='number' value={6} />
</div>
 <div className='four'>
<label>Duration</label>
<input type='number' value={10} />
</div>   
</div>
        </div>
    )
}