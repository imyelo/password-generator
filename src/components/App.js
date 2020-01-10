import React from 'react'
import './App.less'

const App = () => {
  return <div className="main">
    <h1>Password Generator</h1>
    <form className="generator">
      <div className="control-input">
        <label>Length</label>
        <input className="length" />
      </div>
      <div className="checkboxs">
        <div className="control">
          <input type="checkbox" name="uppercase" checked />
          <span className="checkmark"></span>
          <label>Uppercase</label>
        </div>
        <div className="control">
          <input type="checkbox" name="lowercase" checked />
          <span className="checkmark"></span>
          <label>Lowercase</label>
        </div>
        <div className="control">
          <input type="checkbox" name="numbers" />
          <span className="checkmark"></span>
          <label>Numbers</label>
        </div>
        <div className="control">
          <input type="checkbox" name="symbols" />
          <span className="checkmark"></span>
          <label>Symbols</label>
        </div>
      </div>
      <button>Regenerate</button>
    </form>
    <div className="result">
      a#123asdf988a#123asdf988a#123asdf988a#123asdf988
    </div>
  </div>
}

export default App
