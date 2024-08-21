import { useCallback, useState } from 'react';
import './App.css';
import { fetchRecallsApi } from './api/apiAction';
import Search from './components/Search/Search';
import { RecallData } from './types/types';
import { CircularProgress } from '@mui/material';
import Graph from './components/Graph/Graph';



function App() {
  const [recalls, setRecalls] = useState<RecallData[]>();
  const [progress,setProgress] = useState(false);



  const getRecalls = useCallback(async(from_ts:string | null,to_ts:string | null) => {
    setProgress(true);
    const result = await fetchRecallsApi('recall',from_ts,to_ts);
    if(result){
      setProgress(false);
      setRecalls(result);
    }
  },[]);

  return (
    <div className="App">
      <Search getRecalls={getRecalls}/>
      { progress && 
        <CircularProgress style={{marginTop:50}}/>
      }
      { recalls && 
        <Graph recalls={recalls}/>
      }
      
    </div>
  );
}

export default App;
