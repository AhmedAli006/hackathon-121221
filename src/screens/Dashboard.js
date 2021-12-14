import React, { useEffect, useState } from 'react'
import { ref, remove, set, onValue } from "firebase/database";
import Input from '../components/Input';
import Button from '../components/Button';
import { database, auth } from '../config/firebase';
import ResponsiveAppBar from '../components/Appbar';


export default function Dashboard() {


  // 

  const [Hotelname, setHotelname] = useState("");
  const [Hoteladdress, setHoteladdress] = useState("");
  const [City, setCity] = useState("");
  const [Price, setPrice] = useState("");
  const [noofrooms, setnoofrooms] = useState("");
  const [code, setCode] = useState("");
  const [data, setdata] = useState("");




  // const delHotel = () => {
  //   const refrence = ref(database, "hotels/" + code);
  //   remove(refrence);

  // }


  useEffect(() => {

    const getData = () => {

      return onValue(ref(database, '/hotels/'), (dt) => {
        const hdata = (dt.val()) || 'Anonymous';
        setdata(hdata)
        console.log(hdata);
      }, {
        onlyOnce: true
      });
    };
    getData()

  }, [])



  const SendData = () => {


    let objhotel = [{
      Hotelname,
      Hoteladdress,
      City,
      Price,
      noofrooms,
      code

    }];

    const refrence = ref(database, `/hotels/`);
    set(refrence, objhotel).then(() => {



    });



  }
  return (
    <div className='dashbod'>
      <ResponsiveAppBar />
      <form onSubmit={(e) => SendData(e)}>
        <div>
          <Input
            onChange={(e) => setHotelname(e.target.value)}
            placeholder="hotel name"
            type="text"
          />
        </div>
        <div>
          <Input
            onChange={(e) => setCode((e.target.value).toUpperCase())}
            placeholder="hotel Code"
            type="text"
          />
        </div>
        <div>
          <Input
            onChange={(e) => setHoteladdress(e.target.value)}
            placeholder="hotel Adress"
            type="text"
          />
        </div>
        <div>
          <Input
            onChange={(e) => setCity(e.target.value)}
            placeholder="City"
            type="text"
          />
        </div>
        <div>
          <Input
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price"
            type="text"
          />
        </div>
        <div>
          <Input
            onChange={(e) => setnoofrooms(e.target.value)}
            placeholder="number of Rooms"
            type="text"
          />
        </div>
        <Button>send</Button>

      </form>
      <section className='tab'>
        <table>
          <tr>
            <th>Hotel Name</th>
            <th>Address</th>
            <th>City</th>
            <th>Rooms</th>

          </tr>
          <tr>
            <td>{data.Hotelname}</td>
            <td>{data.Hoteladdress}</td>
            <td>{data.City}</td>
            <td>{data.noofrooms}</td>

          </tr>

        </table>
      </section>
    </div>
  )
}
