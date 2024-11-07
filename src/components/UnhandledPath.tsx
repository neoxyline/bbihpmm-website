import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function UnhandledPath() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/')
  });

  return (
    <>
      Redirecting..
    </>
  )
}
