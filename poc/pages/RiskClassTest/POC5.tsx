import React, { Suspense, useState } from 'react';


const POC2 = React.lazy(() => import('./POC2'));

const POC5: React.FC = () => {
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

export default POC5;