import { useNavigate } from "react-router-dom"
import {useState,useEffect} from 'react'
import AdsSubmitted from "../adssubmited/AdsSubmited";
const TextAdsFill = () =>{
    const navigate = useNavigate();
    const [dialogOpen, setDialogOpen] = useState(false);

    const handleBackPage=()=>{
        navigate('/create-ads')
    }
    const handleOpenDialog = () => {
        setDialogOpen(true);
      };
    useEffect(() => {
        if (dialogOpen) {
          const timeoutId = setTimeout(() => {
            setDialogOpen(false); // Close the dialog
            navigate('/create-ads'); // Navigate to another page
          }, 600); 
          return () => {
            clearTimeout(timeoutId);
          };
        }
      }, [dialogOpen]);

    return (
        <div>
            <div className="m-4 p-2 border-2 h-[82vh] rounded-lg shadow-md">
                <h1 className="ml-5 text-xl">Create Text & Media</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 m-2 p-3 ">
                    <div>
                        <label>Heading1</label><br/>
                        <input type="text" className="w-full lg:w-[35rem] border rounded-md mt-2 p-1" placeholder="add a heading1"/>
                    </div>
                    <div className="row-span-2">
                        <label>Description1</label><br/>
                        <textarea name="message" rows="5" cols="80" className="w-full lg:w-[35rem] border rounded-md mt-2 p-1" placeholder="The cat was playing in the garden.">
                        
                        </textarea>
                    </div>
                    <div>
                        <label>Heading2</label><br/>
                        <input type="text" className="w-full lg:w-[35rem] border rounded-md mt-2 p-1" placeholder="add a heading1"/>
                    </div>
                    <div>
                        <label>Bussiness Name</label><br/>
                        <input type="text" className="w-full lg:w-[35rem] border rounded-md mt-2 p-1" placeholder="add a heading1"/>
                    </div>
                    <div>
                        <label>Button Label</label><br/>
                        {/* <input type="text" className="w-[35rem] border rounded-md mt-2 p-1" placeholder="add a heading1"/> */}
                        <select  className="w-full lg:w-[35rem] border rounded-md mt-2 p-1">
                            <option>clicks</option>
                            <option>impressions</option>
                            <option>overviews</option>
                        </select>
                    </div>
                    <div>
                        <label>Website URL</label><br/>
                        <input type="text" className="w-full lg:w-[74.7rem] border rounded-md mt-2 p-1" placeholder="add a heading1"/>
                    </div>
                </div>
                <div className="float-right m-5">
                <button className='bg-blue-400 px-12 py-2 hover:bg-blue-600 text-white font-sans float-right mr-4 mb-3 rounded transition duration-300 ease-in-out transform hover:scale-105'
            onClick={handleOpenDialog}>
                Submit</button>
                {dialogOpen && <AdsSubmitted onClose={() => setDialogOpen(false)} />}
                <button className='bg-gray-400 px-12 py-2 hover:bg-gray-600 text-white font-sans float-right mr-4 mb-3 rounded transition duration-300 ease-in-out transform hover:scale-105'
            onClick={handleBackPage}>
                Back</button>
                </div>
            </div>
        </div>
    )
}
export default TextAdsFill