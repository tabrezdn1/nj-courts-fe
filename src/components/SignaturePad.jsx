import { Tabs, TabsHeader, Tab, TabsBody, TabPanel, Input } from '@material-tailwind/react';
import DrawSignature from './DrawSignature';
import { useState, useEffect } from 'react';

const SignaturePad = ({ field, onOptionChange, selectedOptions }) => {
    const [selectedTab, setSelectedTab] = useState('draw');

    useEffect(() => {
        // Check if signatureType is already selected
        if (selectedOptions["signatureType"]?.["value"]) {
            setSelectedTab(selectedOptions["signatureType"]?.["value"]);
        } else {
            // Set default signatureType to draw
            signatureTypeChange('draw');
        }
    }, []);

    const signatureValueChange = (value) => {
        onOptionChange(field.id, value);
    };

    // Change signature type
    const signatureTypeChange = (type) => {
        setSelectedTab(type);
        // Update signatureType in selectedOptions
        onOptionChange("signatureType", type);
        // Clear signature value
        onOptionChange(field.id, "");
    }

    return (
        <>
            <Tabs value={selectedTab}>
                <TabsHeader>
                    <Tab key="draw" value="draw" onClick={() => signatureTypeChange("draw")}>
                        Draw Signature
                    </Tab>
                    <Tab key="type" value="type" onClick={() => signatureTypeChange("type")}>
                        Type Signature
                    </Tab>
                </TabsHeader>
                <TabsBody>
                    <TabPanel key="draw" value="draw">
                        <DrawSignature onChange={signatureValueChange} />
                    </TabPanel>
                    <TabPanel key="type" value="type">
                        <Input
                            size="lg"
                            placeholder="Type your name here"
                            className="!border-t-blue-gray-200 focus:!border-t-gray-900 md:w-full text-sm"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                            onChange={(e) => signatureValueChange(e.target.value)}
                            value={selectedOptions[field.id]?.["value"] || ""}
                        />
                    </TabPanel>
                </TabsBody>
            </Tabs>
        </>
    )
}

export default SignaturePad;