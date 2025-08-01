import { useParams } from "react-router-dom"
import { AjioImage } from "../Component/Ajio"
import Header from "../Component/Header"
import { AmazonImage } from "../Component/Amazon"
import { flipCartImage } from "../Component/Flipcart"
import { MyntraImage } from "../Component/Myntra" 
import { MCaffeineImage } from "../Component/MCaffeine"
// import Footer from "../Component/Footer";

function ImageDeatils() {
  const { category, id } = useParams();

  const allData = {
    Amazon: AmazonImage,
    Ajio: AjioImage,
    Flipcart : flipCartImage,
    Myntra: MyntraImage,
    Mcaffeine : MCaffeineImage,
  }

  const selectedImage = allData[category] || []


  const picture = selectedImage.find((image) => image.id === parseInt(id));

  if (!picture) return <p>Image not found</p>;


  return (
    <>
      <Header />

        <div className="mt-25 mx-5 inline-block">
        <strong>{picture.title} </strong>
        </div>

      <div className="flex justify-center mt-10 relative mb-5">

        <img src={picture.img} alt={picture.title} height={30} width={450} />
        {/* <p>{picture.descripition}</p> */}

      </div>

      <div className="flex justify-center mb-7">
        <button className="bg-orange-500 px-41 py-4 rounded-lg text-white text-lg font-medium cursor-pointer">Grab Deal</button>

      </div>


      {/* <Footer /> */}
    </>
  )
}

export default ImageDeatils