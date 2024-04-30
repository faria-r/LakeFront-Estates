import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosPublic/useAxiosSecure";


const useFindHome = () => {
    const axiosSecure = useAxiosSecure();
    const {refetch,data : homes =[]}= useQuery({
        queryKey:['homes'],
        queryFn:async ()=>{
const res = await axiosSecure.get('/homeList');
return res.data;
        }
    })
//    use refetch when posting any data or delete done(refetch())
    return [homes,refetch];
    
};

export default useFindHome;