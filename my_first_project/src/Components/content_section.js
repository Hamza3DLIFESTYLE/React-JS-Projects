import React,{useState} from 'react'

function Content_section() {
    const [headingChange, setHeadingChange] = useState("Hello Word");
    const upHeading = () => {
        setHeadingChange("Pakistan");
    }
    return (
        <>
        <div class="d-grid gap-2 col-2 mx-auto">
        <h1 className='text-center'>{headingChange}</h1>
        <button type="button" class="btn btn-primary" onClick={upHeading}>Text Change</button>
        </div>
        </>
    )
}

export default Content_section
