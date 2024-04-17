import React from 'react'
import { Heading, useToast } from "@chakra-ui/react";

import "./user.css"
import {
    Button,
    FormControl,
    FormLabel,
    Input,
    Select,
} from "@chakra-ui/react";

import FormComponent from './Form';

const Humeninfo = () => {
    return (
        <>
            <div className='huminfo_div'>
                <FormComponent/>


            </div>

        </>
    )
}

export default Humeninfo
