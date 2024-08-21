import axiosInstance from './axiosInstanse';

export const fetchRecallsApi = async(path: string,from_ts: string | null, to_ts: string | null) => {
    try{
        const res = await axiosInstance.get(path,{params: {
            from_ts,
            to_ts}
        });
        return res.data
    }catch (error){
        console.error('Error:', error);
    }
}

