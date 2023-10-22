
// import { useLoaderData } from 'react-router-dom';
import Section3 from '../Home/Section3';
import EachData from './EachData';
import { useLoaderData} from 'react-router-dom';


const DetailsData = () => {

 
    const data=useLoaderData()
    console.log(data);
    return (
        <div>
        
        <div>
          <Section3></Section3>
        </div>
        <div className='mt-24 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-16 lg:ml-44 md:ml-44  '>
        {
            data.map(da=><EachData key={da.Id} data={da}></EachData>)
          }
        </div>
        </div>
    );
};

export default DetailsData;