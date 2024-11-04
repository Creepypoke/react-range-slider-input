import React, { useState } from 'react'
import RangeSlider from './lib/index.js'
import './lib/style.css'
import './Example.css'

export default () => {
  const [toggleSecond, setToggleSecond] = useState(false)

  const [classes, setClasses] = useState()
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(100)
  const [step, setStep] = useState('any')
  const [value, setValue] = useState()
  const [disabled, setDisabled] = useState(false)
  const [thumbsDisabled, setThumbsDisabled] = useState([false, false])
  const [rangeSlideDisabled, setRangeSlideDisabled] = useState(false)
  const [isRTL, setIsRTL] = useState(false)

  return (
    <div className='container'>
      <button type='button' onClick={() => { setToggleSecond(!toggleSecond) }}>Toggle Second Range Slider</button>
      <br /><br />
      <button
        type='button'
        onClick={() => {
          setMin(30)
          setMax(90)
        }}
      >
        min = 30, max = 90
      </button>
      <button
        type='button'
        onClick={() => {
          setMin(0)
          setMax(100)
        }}
      >
        min = 0, max = 100
      </button>
      <button type='button' onClick={() => { setStep(2) }}>step = 2</button>
      <button type='button' onClick={() => { setStep('any') }}>step = 'any'</button>
      <button type='button' onClick={() => { setValue() }}>no value</button>
      <button type='button' onClick={() => { setValue([30, 60]) }}>value = [30, 60]</button>
      <button type='button' onClick={() => { setValue([25, 75]) }}>value = [25, 75]</button>
      <button type='button' onClick={() => { setDisabled(!disabled) }}>toggle disabled</button>
      <button type='button' onClick={() => { setThumbsDisabled(!thumbsDisabled) }}>toggle thumbsDisabled</button>
      <button type='button' onClick={() => { setThumbsDisabled([false, true]) }}>thumbsDisabled = [false, true]</button>
      <button type='button' onClick={() => { setThumbsDisabled([true, false]) }}>thumbsDisabled = [true, false]</button>
      <button type='button' onClick={() => { setRangeSlideDisabled(!rangeSlideDisabled) }}>toggle rangeSlideDisabled
      </button>
      <button type='button' onClick={() => { setClasses(classes === 'styled' ? '' : 'styled') }}>toggle class</button>
      <button type='button' onClick={() => { setIsRTL(!isRTL) }}>change direction</button>
      <div dir={isRTL ? 'rtl' : 'ltr'}>
        <h1 className='header'>{'Direction -->'}</h1>
        <div>{JSON.stringify(value ?? [0, 100], null, 4)}</div>
        <RangeSlider
          id='range-slider'
          className={classes}
          min={min}
          max={max}
          step={step}
          value={value}
          defaultValue={[15, 90]}
          disabled={disabled}
          thumbsDisabled={thumbsDisabled}
          rangeSlideDisabled={rangeSlideDisabled}
          onInput={(value) => {
            // console.log(value)
            setValue(value)
          }}
          reversed={isRTL}
        />
        {toggleSecond && <RangeSlider />}
      </div>
    </div>
  )
}
