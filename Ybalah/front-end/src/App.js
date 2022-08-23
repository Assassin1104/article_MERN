import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Sign from './scene/sign/Sign';


export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sign />}>
          <Route index element={<Sign />} />
          <Route path="blogs" element={<Sign />} />
          <Route path="*" element={<div>no page!</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);