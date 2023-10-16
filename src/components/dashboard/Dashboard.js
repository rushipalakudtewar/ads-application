import AdsInsights from "./AdsInsights";
import DataTable from "./DataTable"

const Dashboard = ()=>{
    const tablesData = [
        { Campaigns: 'Cosmetics', Clicks: 712, Cost: 'USD 4,272' , Conversions:8, Revenue: 'USD 16,568' },
        { Campaigns: 'Serums', Clicks: 5951, Cost: 'USD 27,331', Conversions:115, Revenue: 'USD 362,526' },
        { Campaigns: 'Facewash', Clicks: 9462, Cost: 'USD 76,831', Conversions:123, Revenue: 'USD 266,800' },
        { Campaigns: 'Shampoos', Clicks: 439, Cost: 'USD 2,151', Conversions:5, Revenue: 'USD 11,029' },
        { Campaigns: 'Conditioners', Clicks: 1680, Cost: 'USD 3,864', Conversions:49, Revenue: 'USD 175,245' },
        
      ];
    return (
        <div className="flex flex-col lg:flex-row space-between items-center w-full">
        <div className="w-full lg:w-1/2 m-5 shadow-xl border-0 "> 
          <DataTable data={tablesData}/>
        </div>
        <div className="w-full lg:w-1/2 m-5 shadow-xl border-0">
            <AdsInsights/>
        </div>
        </div>
    )
}
export default Dashboard