import TextAds from '../../images/textads.png'
import MediaAds from '../../images/mediaads.png'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const CreateAds = () =>{
    const [selectedCard,setSelectedCard] = useState(null);
    const navigate = useNavigate()
    const handleTheCheckbox=(cardId) =>{
        setSelectedCard(cardId)
    }

    const handleNextPage =() =>{
        if(selectedCard===1)
        {
            navigate('/text-ads-fill-data')
        }
        else if(selectedCard===2)
        {
            navigate('/media-ads-fill-data')
        }
        else if(selectedCard===1 && selectedCard===2)
        {
            navigate('/media-ads-fill-data')
        }
        else
        {
            alert('Please, select any one')
        }
    }

    return(
        <div className="h-[84vh] shadow-xl border-2 m-5 p-2 rounded-lg">
            <h1 className="text-lg">Create Ads</h1>
            <div className="flex flex-col md:flex-row justify-evenly items-center m-5">
                <div className="w-[250px] h-[430px] border-2 rounded-lg bg-gray-50 shadow-lg">
                       <input type="checkbox" id="card1" className='mt-2 ml-5 w-5 h-5' onChange={()=>handleTheCheckbox(1)}/>
                        <img src={TextAds} alt='text'/>
                            <p className='text-gray-400 text-center'>create</p>
                            <h1 className='text-center'>Text Ads</h1>
                </div>
                <div className="w-[250px] h-[430px] border-2 rounded-lg bg-gray-50 shadow-lg mt-2">
                       <input type="checkbox" id="card1" className='mt-2 ml-5 w-5 h-5' onChange={()=>handleTheCheckbox(2)}/>
                        <img src={MediaAds} alt='text'/>
                            <p className='text-gray-400 text-center'>create</p>
                            <h1 className='text-center'>Media Ads</h1>
                </div>
            </div>
            <button className='bg-blue-400 px-12 py-2 hover:bg-blue-600 text-white font-sans float-right mr-4 mb-3 rounded transition duration-300 ease-in-out transform hover:scale-105'
            onClick={handleNextPage}>
                Next</button>
        </div>
    )
}
export default CreateAds;