import React from 'react'
import './summary.css'
export default function Summary() {
  return (
    <div>
        <div class="text">
        <div class="atext-input text-center mt-5">
            
                <h1>Nepali Transcript File</h1>
                <hr/>
                <p>Upload the txt File</p>
              
                <form action="./index.html">
                    <input type="file" id="file" accept="txt/*" required/>
                    <label for="file" class="btn btn-primary">Upload</label>
                    <br/>
                    <button type="submit" class="btn btn-primary">Get the Summary</button>
                </form>
                <p class="trascript mt-5">
                    The Summary appears here!
                </p>
                
                
            
        </div>
    </div>
    </div>
  )
}
