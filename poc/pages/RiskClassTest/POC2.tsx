import React, { useEffect, useState } from 'react';

interface FormProps {
    firstName: string;
    lastName: string;
    Email: string;
    [key: string]: string
}

const initialStateForm: FormProps = {
    firstName: 'Jack',
    lastName: 'Li',
    Email: 'test.name@test.com'
}

const POC2: React.FC= () => {
    const [formData, setFormData] = useState<FormProps>(initialStateForm);

    useEffect(() => {
        console.log("this is useeffect");
    }, []);

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

export default POC2;