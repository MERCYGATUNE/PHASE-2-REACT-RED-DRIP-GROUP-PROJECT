import {useState} from 'react'
import './Searchbar.css'

function Searchbar({data}) {

      const [searchQuery, setSearchQuery] = useState('');
      const [searchResults, setSearchResults] = useState([]);

      const handleSearch = (e) => {
        const query = e.target.value;
        setSearchQuery(query);

        const filteredData = data.filter(item =>
          item.toLowerCase().includes(query.toLowerCase())
        );
        setSearchResults(filteredData);
      };
    
      return (
        <div>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearch}
          />
          <ul>
            {searchResults.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
        </div>
      );
    }
    
   

export default Searchbar