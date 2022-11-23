import useSWR from 'swr';
import { HookData } from '../interfaces';
import fetcher from '../lib/fetcher';

const useUser = (): HookData => {
    const {data, error} = useSWR('https://fakestoreapi.com/products/1', fetcher);

    return {
        data: data,
        isLoading: !data && !error,
        isError: error
    }
}

export default useUser;