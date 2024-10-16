import { Button } from "@material-tailwind/react";
import { useState } from "react";

import { post } from "../../services/api-call.service";

const ExpungementFormSubmit = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [apiResponse, setApiResponse] = useState(null);
    const requestData = {
        "DefPhone": "123-456-7890",
        "Arrest1Loc": "New York City",
        "Arrest1Offense": "Theft",
        "Arrest1IndNum": "00123A",
        "Arrest1ChrgDt": "2024-01-15",
        "Arrest1ChrgOffense": "Shoplifting",
        "Arrest1DismissCrt": "Manhattan District Court",
        "ExpungeCntyName": "Kings County",
        "DefName": "Hannan Desai",
        "DefAddrStr": "123 Main Street",
        "DefAddr2": "Apt 4B",
        "FormReset": "Reset",
        "FormPrint": "Print",
        "Arrest1GuiltyDt": "2024-03-05",
        "Arrest1GuiltyOffense": "Misdemeanor Theft",
        "Arrest1GuiltyStatute": "PL 155.25",
        "Arrest1Sent": "Community Service",
        "Arrest1TimeEndDt": "2024-06-10",
        "Arrest1ProbEndDt": "2024-12-10",
        "Arrest1FinePaidDt": "2024-04-01",
        "Arrest2Loc": "Brooklyn",
        "Arrest2Offense": "Vandalism",
        "Arrest2IndNum": "00234B",
        "Arrest2ChrgDt": "2023-10-25",
        "Arrest2ChrgOffense": "Property Damage",
        "Arrest2DismissCrt": "Brooklyn District Court",
        "Arrest2GuiltyDt": "2024-01-20",
        "Arrest2GuiltyOffense": "Felony Vandalism",
        "Arrest2GuiltyStatute": "PL 145.10",
        "Arrest2Sent": "Probation",
        "Arrest2TimeEndDt": "2024-12-15",
        "Arrest2ProbEndDt": "2025-01-01",
        "Arrest2FinePaidDt": "2024-02-28",
        "Arrest3Loc": "Queens",
        "Arrest3Offense": "DUI",
        "Arrest3IndNum": "00345C",
        "Arrest3ChrgDt": "2022-08-14",
        "Arrest3ChrgOffense": "Driving Under Influence",
        "Arrest3DismissCrt": "Queens District Court",
        "Arrest3GuiltyDt": "2022-10-30",
        "Arrest3GuiltyOffense": "Misdemeanor DUI",
        "Arrest3GuiltyStatute": "VTL 1192.3",
        "Arrest3Sent": "6 months license suspension",
        "Arrest3TimeEndDt": "2023-05-01",
        "Arrest3ProbEndDt": "2023-11-01",
        "Arrest3FinePaidDt": "2023-01-10",
        "NotaryDtDay": "15",
        "NotaryDtYr": "2024",
        "NotaryDtMnth": "April",
        "ExpungeDocketNum": "2024EXP4567",
        "DefBirthDt": "1990-07-12",
        "DefSsn": "123-45-6789",
        "OrderExpungeDtDay": "10",
        "OrderExpungeDtMth": "August",
        "OrderExpungeDtYr": "2024",
        "Arrest1Dt": "2023-02-18",
        "Arrest1Statute": "PL 120.00",
        "Arrest2Dt": "2022-07-10",
        "Arrest2Statute": "PL 145.12"
    };
    // Function to submit the form
    const submitForm = () => {
        setIsLoading(true);
        post("/expungementform/print", requestData).then((response) => {
            const url = window.URL.createObjectURL(response);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'ExpungementForm.pdf';
            document.body.appendChild(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);
            setApiResponse("success");
            setIsLoading(false);
        }).catch((error) => {
            console.log(error);
            setApiResponse("error");
            setIsLoading(false);
        });
    };

    return (
        <div className="w-full">
            <Button color="teal" size="lg" onClick={submitForm} disabled={isLoading} className="w-auto">
                Submit
            </Button>
            {apiResponse === "error" && <p className="text-red-700 mt-3 font-bold">Something went wrong!</p>}
            {apiResponse === "success" && <p className="text-green-700 mt-3 font-bold">Form downloaded successfully!</p>}
        </div>
    );
}

export default ExpungementFormSubmit;