import React, { useContext, useState } from 'react'
import MyContext from '../context/MyContext'

const Setting = () => {
    const stateData = useContext(MyContext)

    return (
        <div className='contaniner-box'>
            <p className='text'>Text Color : </p>
            <input type='text' className='input-box' placeholder='Change Text color....'
                onChange={stateData?.InputChangeColor} />

            <p className='button-bg-1'>Hiar Button Color :  </p>
            <input type='text' className='input-button' placeholder='Change bg color....'
                onChange={stateData?.ChangeButtonColor} />

            <p className='button-bg-2'>Hiar Button bg-Color :  </p>
            <input type='text' className='input-button' placeholder='Change button color....'
                onChange={stateData?.changeBgColor} />


            <p className='button-bg-1'>Thanks Button Color :  </p>
            <input type='text' className='input-button' placeholder='Change bg color....'
                onChange={stateData?.ChangeButtonColor1} />

            <p className='button-bg-2'>Thanks Button bg-Color :  </p>
            <input type='text' className='input-button' placeholder='Change button color....'
                onChange={stateData?.changeBgColor1} />

            <p className='button-bg-1'>Anyway Button Color :  </p>
            <input type='text' className='input-button' placeholder='Change bg color....'
                onChange={stateData?.ChangeButtonColor2} />

            <p className='button-bg-2'>Anyway Button bg-Color :  </p>
            <input type='text' className='input-button' placeholder='Change button color....'
                onChange={stateData?.changeBgColor2} />



            <p className='button-bg-3'>box-1 :  </p>
            <input type='text' className='input-background' placeholder='Change Bg color....'
                onChange={stateData?.boxBgColor} />

            <p className='box-color-2'>Box-2 :  </p>
            <input type='text' className='input-b' placeholder='Change Bg color....'
                onChange={stateData?.backgroundColor} />

            <p className='box-color-3'>Box-3 :  </p>
            <input type='text' className='input-text' placeholder='Change BG color....'
                onChange={stateData?.boxColor} /><br />

            <p className='details'>Details</p>
            <input type='text' className='details-input' placeholder='Change Color'
                onChange={stateData?.handleChange} />
            <p className='details-box'>Details</p>
            <input type='text' className='details-input-box' placeholder='Change Bg-Color'
                onChange={stateData?.backgroundDetails} />

            <p className='button-classes'>

                <button className='body-button' type="button" onClick={stateData?.handleButtonClick}> change Body Color</button>
            </p>

            <p className='image-button'>
                <button className='img-button' onClick={stateData?.changeImage}>Change image</button>
            </p>

        </div>
    )
}

export default Setting