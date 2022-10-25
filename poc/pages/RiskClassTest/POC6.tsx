import React, { Suspense, useState } from 'react';


const POC2 = React.lazy(() => new Promise(resolve => {

    resolve(`
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
    `);
    
    /*
    const test = fetch(`https://API_END_POINT`, {
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
            resolve(`
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
                `);

        });

        */

        // console.log(test);
        // test.then(res => {
        //     console.log(res);
        //     resolve(res);
        // })

}))
    ;

const POC6: React.FC = () => {
    const [showComponent, setShowComponent] = useState<boolean>(false);

    return (
        <div>
            {
                showComponent && (
                    <Suspense fallback={<div>Loading...</div>}>
                        <section>
                            <POC2 />
                        </section>
                    </Suspense>
                )
            }
            <button className="primary" onClick={() => setShowComponent(true)} type="submit">Load Component</button>
        </div>
    )
}

export default POC6;