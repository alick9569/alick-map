import { useSelector } from "react-redux"

const useMap = () => {
    const map = useSelector(state => state.map)
    return map
}

export default useMap