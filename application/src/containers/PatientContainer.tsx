import React, { useState, useEffect } from "react";
import ApiRequest from "../helpers/request";
import { ContactDetailsProps, AddressProps, GpProps, PracticeProps, MedicationProps, PatientProps } from "../interfaces/patient-interfaces";

const PatientContainer = () => {

    const [patients, setPatients] = useState([]);

    useEffect(() => {
        const request = new ApiRequest();
        const patientPromise = request.get('/patients')
    })
}