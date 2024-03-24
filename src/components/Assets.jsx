import { useProvider } from "../Componentsdom.jsx"

export const Asset = () => {
  const { assets } = useProvider()
  return (
    <div style={{ height: "20rem" }}>   {

      assets.map((value, index) => (
        <h1 key={index}>{value}</h1>
      ))
    }

    </div>
  )
}