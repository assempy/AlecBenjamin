import './style.css';
import Header from './header.jsx';
import Main from './main.jsx';
import Footer from './footer.jsx';

import Twelve_notes from './twelve_notes.jsx';

import Tw_notes_song from './tw_notes_song.jsx';
import Ways_to_go_song from './ways_to_go_song.jsx';
import In_a_little_song from './in_a_little_song.jsx';
import Different_kind_of_beautiful_song from './different_kind_of_beautiful_song.jsx';
import Pick_me_song from './pick_me_song.jsx';
import Sacrifice_tomorrow_song from './sacrifice_tomorrow_song.jsx';
import I_sent_my_therapist_to_therapy_song from './i_sent_my_therapist_to_therapy_song.jsx';
import The_arsonist_song from './the_arsonist_song.jsx';
import Lead_me_to_water_song from './lead_me_to_water_song.jsx';
import By_now_song from './by_now_song.jsx';
import King_size_bed_song from './king_size_bed_song.jsx';
import Love_the_ones_who_leave_song from './loves_the_ones_who_leave_song.jsx';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <>
        <BrowserRouter>
          <Header/>
            <Routes>
              <Route path='/main' element={<Main/>}/>

              <Route path='/twelve_notes' element={<Twelve_notes/>}/>

              <Route path='/tw_notes' element={<Tw_notes_song/>}/>
              <Route path='/ways_to_go' element={<Ways_to_go_song/>}/>
              <Route path='/in_a_little' element={<In_a_little_song/>}/>
              <Route path='/different_kind_of_beautiful' element={<Different_kind_of_beautiful_song/>}/>
              <Route path='/pick_me' element={<Pick_me_song/>}/>
              <Route path='/sacrifice_tomorrow' element={<Sacrifice_tomorrow_song/>}/>
              <Route path='/i_sent_my_therapist_to_therapy' element={<I_sent_my_therapist_to_therapy_song/>}/>
              <Route path='/the_arsonist' element={<The_arsonist_song/>}/>
              <Route path='/lead_me_to_water' element={<Lead_me_to_water_song/>}/>
              <Route path='/by_now' element={<By_now_song/>}/>
              <Route path='/king_size_bed' element={<King_size_bed_song/>}/>
              <Route path='/love_the_ones_who_leave' element={<Love_the_ones_who_leave_song/>}/>
        
            </Routes>
          <Footer/>
        </BrowserRouter>    
    </>
  );
}

export default App;
