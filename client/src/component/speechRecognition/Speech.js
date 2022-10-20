import React from 'react'
import './speech.css'

function Speech() {
  return (
    <div>
        <div class="audio">
        <div class="audio-input text-center mt-5">
            
                <h1>Audio File</h1>
                <hr/>
                <p>Upload the Audio File</p>
              
                <form action="./index.html">
                    <input type="file" id="file" accept="audio/*" required/>
                    <label for="file" class="btn btn-primary">Upload</label>
                    <br/>
                    <button type="submit" class="btn btn-primary">Get the Transcript</button>
                </form>
                <p class="trascript mt-5">
                    The Transcript appears here!
                </p>
                
                
            
        </div>
    </div>
    </div>
  )
}

export default Speech