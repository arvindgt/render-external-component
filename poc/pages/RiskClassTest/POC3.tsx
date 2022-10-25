import React, { useEffect, useState } from 'react';
import Parser from 'html-react-parser';


const POC1: React.FC = () => {

    const [externalComponent, setExternalComponent] = useState('');

    useEffect(() => {
        getCompnentData();
    }, []);

    const getCompnentData = (): void => {

        const data = `
                    import React, { useState } from 'react';

                    import { CardContainer, Button } from 'common/style';
                    
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
                                <CardContainer className='sm-12' style={{ width: '100%' }}>
                                    <div className="row">
                                        <div className="col-6">
                                            <input type="text" name='firstName' className="form-control" value={formData.firstName} onChange={handleUpdate} />
                                            <input type="text" name='lastName' className="form-control" value={formData.lastName} onChange={handleUpdate}/>
                                            <input type="text" name='Email' className="form-control" value={formData.Email} onChange={handleUpdate}/>
                    
                                            <div className='mt-2'>
                                                <Button
                                                    className="primary"
                                                    htmlType="submit"
                                                    loading={false}
                                                    onClick={submitForm}>
                                                    Submit
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </CardContainer>
                        )
                    }
                    
                    export default POC4;
                    `;

        setExternalComponent(data);

        /*

        try {
            fetch(`https://API_END_POINT`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                }
            })
                .then((response: any) => {
                    const statusCode = response.status;
                    const data = response.text();
                    return Promise.all([statusCode, data]);
                })
                .then(([statusCode, data]) => {
                    data = `
                    import React, { useState } from 'react';

                    import { CardContainer, Button } from 'common/style';
                    
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
                                <CardContainer className='sm-12' style={{ width: '100%' }}>
                                    <div className="row">
                                        <div className="col-6">
                                            <input type="text" name='firstName' className="form-control" value={formData.firstName} onChange={handleUpdate} />
                                            <input type="text" name='lastName' className="form-control" value={formData.lastName} onChange={handleUpdate}/>
                                            <input type="text" name='Email' className="form-control" value={formData.Email} onChange={handleUpdate}/>
                    
                                            <div className='mt-2'>
                                                <Button
                                                    className="primary"
                                                    htmlType="submit"
                                                    loading={false}
                                                    onClick={submitForm}>
                                                    Submit
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </CardContainer>
                        )
                    }
                    
                    export default POC4;
                    `;

                    setExternalComponent(data);           
                });
        } catch (exception) {
            console.log(exception);
        }
         */
    }

    return (
        <div>
            {Parser(externalComponent)}
        </div>
    )
}

export default POC1;