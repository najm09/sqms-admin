import React from 'react';
import axios from 'axios';

const link = process.env.REACT_APP_LINK;

const Patients = () => {
  const [patients, setPatients] = React.useState([]);

  const accessToken = localStorage.getItem('access-token');

  const headers = {
    'Content-type': 'application/json',
    'access-token': accessToken
  };

  React.useEffect(() => {
    const getPatients = async () => {
      try {
        const data = await axios.get(`${link}/patients`, { headers: headers });
        setPatients(data.data);
      } catch (error) {
        console.error(error.message);
      }
      console.log('data fetched is over.');
    };

    getPatients();
  });

  console.log('patients: ', patients);

  return (
    <div >
      <h4>Patients Lists</h4>
      <table className="table">
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
          {patients && patients.length > 0
            ? patients.map((patient) => {
                return (
                  <tr key={patient._id}>
                    <td>{patient.name}</td>
                    <td>{patient.age}</td>
                    <td>{patient.weight}</td>
                    <td>{patient.typeOfCase}</td>
                    <td>{patient.doctor}</td>
                    <td>{patient.contactNumber}</td>
                  </tr>
                );
              })
            : 'Loading...'}
        </tbody>
      </table>
    </div>
  );
};

export default Patients;
