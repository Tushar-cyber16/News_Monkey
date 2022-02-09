import "./App.css";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {

 const [progress, setprogress] = useState(0);
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
        color='#f11946'
        height={4}
        progress={setprogress}
      />
          <Routes>
            <Route
              exact
              path="/News_Monkey"
              element={
                <News  setProgress= {setprogress}    
                  key="General"
                  pageSize={6}
                  country="in"
                  category="General"
              
                />
              }
            >
              {" "}
            </Route>
            <Route
              exact
              path="/Business"
              element={
                <News  setProgress= {setprogress}    
                  key="Business"
                  pageSize={6}
                  country="in"
                  category="Business"
          
                />
              }
            >
              {" "}
            </Route>
            <Route
              exact
              path="/Entertainment"
              element={
                <News  setProgress= {setprogress}    
                  key="Entertainment"
                  pageSize={6}
                  country="in"
                  category="Entertainment"
             
                />
              }
            >
              {" "}
            </Route>
            <Route
              exact
              path="/General"
              element={
                <News  setProgress= {setprogress}    
                  key="General"
                  pageSize={6}
                  country="in"
                  category="General"
              
                />
              }
            >
              {" "}
            </Route>
            <Route
              exact
              path="/Health"
              element={
                <News  setProgress= {setprogress}    
                  key="Health"
                  pageSize={6}
                  country="in"
                  category="Health"
          
                />
              }
            >
              {" "}
            </Route>
            <Route
              exact
              path="/Science"
              element={
                <News  setProgress= {setprogress}    
                  key="Science"
                  pageSize={6}
                  country="in"
                  category="Science"
             
                />
              }
            >
              {" "}
            </Route>
            <Route
              exact
              path="/Sports"
              element={
                <News  setProgress= {setprogress}    
                  key="Sports"
                  pageSize={6}
                  country="in"
                  category="Sports"
           
                />
              }
            >
              {" "}
            </Route>
            <Route
              exact
              path="/Technology"
              element={
                <News  setProgress= {setprogress}    
                  key="Technology"
                  pageSize={6}
                  country="in"
                  category="Technology"
               
                />
              }
            >
              {" "}
            </Route>
          </Routes>
        </Router>
      </div>
    );
  
}
export default App;