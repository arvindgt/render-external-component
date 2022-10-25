import React, { useState } from 'react';


const POC4 = () => {
    const [formData, setFormData] = useState({
        firstName: 'Jack',
        lastName: 'Li',
        Email: 'test.name@test.com'
    })

    const handleUpdate = (e) => {
        const { name, value } = e.target;
        const tempFormData = {...formData};
        tempFormData[name] = value;
        setFormData(tempFormData);
    }

    const submitForm = () => {
        console.log(formData)
    }

    return (
            <div className='sm-12' style={{ width: '100%' }}>
                <div className="row">
                    <div className="col-6">
                        <input type="text" name='firstName' className="form-control" value={formData.firstName} onChange={handleUpdate} />
                        <input type="text" name='lastName' className="form-control" value={formData.lastName} onChange={handleUpdate}/>
                        <input type="text" name='Email' className="form-control" value={formData.Email} onChange={handleUpdate}/>

                        <div className='mt-2'>
                            <button
                                className="primary"
                                type="submit"
                                onClick={submitForm}>
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default POC4;