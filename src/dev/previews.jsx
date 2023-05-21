import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import Contact from "../components/Contact.jsx";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Contact">
                <Contact/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews