import React from 'react';
import { Link} from 'react-router-dom';

const Category = (props) => {
    
    let match = props.match ;
 return( <div>
<ul>
     <li><Link to={`${match.url}/shoes`}>Shoes</Link></li>
    <li><Link to={`${match.url}/boots`}>Boots</Link></li>
     <li><Link to={`${match.url}/footwear`}>Footwear</Link></li>

   </ul>

  

  </div>)
}
export default Category;