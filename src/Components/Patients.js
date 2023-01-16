import React from 'react'
import axios from 'axios';

const link = process.env.REACT_APP_LINK

const Patients = () => {

  const [patients, setPatients] = React.useState();

  var id = 0;

  React.useEffect(() => {

    const getPatients = async () => {
      await axios.get(`${link}/patients`)
        .then(res => setPatients(res.data))
        .catdh(err => console.error(err));
    }

    getPatients();

  }, [])

  return (
    <div style={{margin : '3em'}}>
      <h1>Patients Lists</h1>
      <table className='table'>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Weight</th>
            <th scope="col">Type of Case</th>
            <th scope="col">Doctor</th>
            <th scope="col">Contact Number</th>
          </tr>
        </thead>
        <tbody>
          {
            patients ? patients.map(patient => {
              return (
                <tr>
                  <td>{patient.name}</td>
                  <td>{patient.age}</td>
                  <td>{patient.weight}</td>
                  <td>{patient.typeOfCase}</td>
                  <td>{patient.doctor}</td>
                  <td>{patient.contactNumber}</td>
                </tr>
              )
            }) : "Loading..."
          }
        </tbody>
      </table>
    </div>
  )
}

export default Patients