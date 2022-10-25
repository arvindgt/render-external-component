import React, { useEffect, useCallback, useState, useRef } from 'react';
import Parser from 'html-react-parser';


const POC1: React.FC = () => {
    const [html, setHtml] = useState('');
    const f1 = useRef(null);
    const f2 = useRef(null);
    const f3 = useRef(null);

    useEffect(() => {
        getHTMLData();
    }, []);

    const getHTMLData = (): void => {
        /*
        Assuming below string, value of 'data' variable is coming through  API response
        */
        const data = `
        <div class="form-input">
        <label for="name">Field 1<span class="text-copy-0">&nbsp;&nbsp;</span></label>
        <input type="text" class="form-control" id="f1" name="f1">
   </div>
   <div class="form-input pt16">
        <label for="ic">Field 2<span class="text-copy-0">&nbsp;&nbsp;</span></label>
        <input type="text" class="form-control" id="f2" name="f2">
   </div>
   <div class="form-input pt16">
        <label for="ix">Field 3<span class="text-copy-0">&nbsp;&nbsp;</span></label>
        <input type="text" class="form-control" id="f3" name="f3">
   </div>
        `;
        setHtml(data);
        const ss1 = { "F1": "FF1", "F2": "FF2", "Data": "eyJBMSI6IkExIiwiQTIiOiJBQTIiLCJBMyI6NjcuOTksIkE0Ijo1Ni44OX0=" };
        const formJson = JSON.parse(atob(ss1.Data));
        mapDataToHtml(formJson);

    }

    const mapDataToHtml = (dta) => {
        const data = `
        doc.getElementById("f1").value=dta.A1;
        doc.getElementById("f2").value=dta.A2;
        doc.getElementById("f3").value="ghghghgghg";
        `;
        setTimeout(() => {
            const jsResponse = data;
            const testFun = Function('doc', 'dta', jsResponse);
            testFun(document, dta);
        }, 2000)
    }

    const submitForm = () => {
        console.log(f3?.current?.value);
        // @ts-ignore
        console.log(document.getElementById("f3").value);
    }

    return (
        <div>
            <div className='sm-12' style={{ width: '100%' }}>
                <div className="row">
                    <div className="col-6">
                        {Parser(html)}
                        <input type="text" className="form-control" ref={f3} />
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

        </div>
    )
}

export default POC1;