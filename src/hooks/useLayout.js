import { useSelector } from "react-redux"

const useLayout = () => {
    const layout = useSelector(state => state.layout)
    return layout
}

export default useLayout