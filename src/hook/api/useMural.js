import useAsync from "../useAsync";
import * as muralApi from "../../services/server";

export default function useMural() {
    const {
        data: requests,
        loading: requestsLoading,
        error: requestError,
    } = useAsync(() => muralApi.getAllRequests())

    return {
        requests,
        requestsLoading,
        requestError
    }
}