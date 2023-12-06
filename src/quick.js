import logo from './assets/pexels-disha-sheta-3521353.jpg'
export default function Quick({oncClicked,userInput}){
    return(
        <div className='head'>
            <div className='logo'>
            <img src={logo} alt='This is the logo' height='100px' width='100px'/>
            </div>
           
<div className='medium'>
<div className='one'>
<label >Initial_Investment</label>
<input type='number'
required
value={userInput.Initial_Investment} onChange={(event)=>oncClicked ('Initial_Investment',event.target.value)}/>
</div>
<div className='two'>
<label>Annual_Investment</label>
<input type='number'
required
value={userInput.annual_investment} onChange={(event)=>oncClicked('annual_investment',event.target.value)} />
</div>
 <div className='three'>
<label>ExpectedReturn</label>
<input type='number' 
required
value={userInput.expectedReturn} onChange={(event) =>oncClicked('expectedReturn',event.target.value)} />
</div>
 <div className='four'>
<label>Duration</label>
<input type='number'
required
value={userInput.duration} onChange={(event) =>oncClicked('duration',event.target.value)}/>
</div>   
</div>
        </div>
    )
}