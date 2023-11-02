import { useEffect, useState } from "react";
import DogList from "../Components/DogList/DogList";
import Form from "../Components/Form/Form";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // You will need to put a state here to save all the dogs data into
  const [dogs, setDogs] = useState([]);
  const [numberOfDogs, setNumberofDogs] = useState(0);
  // And you will fetch the data with useEffect

  useEffect(() => {
    fetch(`https://dog.ceo/api/breeds/image/random/1`)
      .then((resp) => resp.json())
      .then((data) => {
        setDogs([...data.message]);
      });
  }, []);

  useEffect(() => {
    fetch(`https://dog.ceo/api/breeds/image/random/${numberOfDogs}`)
      .then((resp) => resp.json())
      .then((data) => {
        setDogs([...data.message]);
      });
  }, [numberOfDogs]);

  return (
    <div className="card">
      {/* When the button is clicked in the form, it should fetch the information. 
          How can we do that by utilizing useState?
          
      */}
      {/* <Form /> Uncomment <Form /> if you are going after the bonus */}
      <Form setNumberofDogs={setNumberofDogs} />

      <DogList dogsList={dogs} />
    </div>
  );
}
