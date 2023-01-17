import React from "react"

const AddAdmin = () => {

  const [email, setEmail] = React.useState('')

  const handleSubmit = () => {
    // add role = "admin" for the current email
  }

  return (
    <div className='container'>
      <div className="col-sm-4">
        <label className="form-label">Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="name@example.com"
          onChange={(e) => setEmail(e.target.value)} />
      </div>
      <br />
      <div className='col-sm-4'>
        <button
          type="button"
          className="btn btn-success"
          onClick={handleSubmit}
        >Add new Admin
        </button>
      </div>
    </div>
  )
}

export default AddAdmin