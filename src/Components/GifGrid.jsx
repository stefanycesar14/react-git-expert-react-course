
import { useFetchGif } from "../Hooks/useFetchGif";
import { GifItem } from "./GifItem";

function GifGrid( {category}) {
const {images, isLoading} = useFetchGif(category)

  return (
    <>
      <h3>{category}</h3>
      {
        isLoading && <h2>LOADING</h2>
      }
      <div className="card-grid">
        {images.map((image)=>(
        <GifItem 
        key={image.id}
        {...image}
        />
      ))}</div>
     
    </>
  );
}

export default GifGrid;
