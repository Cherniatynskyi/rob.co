import { useNavigate } from "react-router-dom"

export const ShowButton = () => {
  const navigate = useNavigate()
  return (
    <button onClick={() => navigate('/browse')}>View All</button>
  )
}
