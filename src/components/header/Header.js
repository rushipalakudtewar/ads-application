const Header = () =>{
    return (
    <>
       <nav className="flex justify-between items-center bg-gray-50 pl-4 pr-4 shadow-md w-full h-20">
          <div className="font-bold font-sarif text-2xl">
            REACT TASK
          </div>
          <div className="font-sarif text-lg">
              <a href="/" className="p-2">DASHBOARD</a>
              <a href="/create-ads" className="p-2">CREATE ADS</a>
          </div>
        </nav>
    </>
    )
}
export default Header