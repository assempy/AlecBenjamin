import './style.css';
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './header.jsx';
import Main from './main.jsx';
import Footer from './footer.jsx';


import Twelve_notes_albom from './twelve_notes_albom.jsx';
import These_Two_Windows from './these_two_windows_albom.jsx';


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
import Love_the_ones_who_leave_song from './love_the_ones_who_leave_song.jsx';


import Mind_is_a_prison_song from './mind_is_a_prison_song.jsx';
import Demons_song from './demons_song.jsx';
import Oh_my_god_song from './oh_my_god_song.jsx';
import The_book_of_you_and_i_song from './the_book_of_you_&_i_song.jsx';
import Match_in_the_rain_song from './match_in_the_rain_song.jsx';
import Jesus_in_la_song from './jesus_in_la_song.jsx';
import I_am_not_a_cynic_song from './i’m_not_a_cynic_song.jsx';
import Alamo_song from './alamo_song.jsx';
import Must_have_been_the_wind_song from './must_have_been_the_wind_song.jsx';
import Just_like_you_song from './just_like_you_song.jsx';




function App() {
  return (
    <>
        <BrowserRouter>
          <Header/>
          <Routes>
              <Route path='/' element={<Main/ >}/>






              <Route path='/twelve_notes_albom' element={<Twelve_notes_albom/>}/>
              <Route path='/SONG/:id' element={<Twelve_notes_albom/>}/>

              <Route path='/tw_notes_song' element={<Tw_notes_song/>} />
              <Route path='/ways_to_go_song' element={<Ways_to_go_song/>} />
              <Route path='/in_a_little_song' element={<In_a_little_song/>} />
              <Route path='/different_kind_of_beautiful_song' element={<Different_kind_of_beautiful_song/>} />
              <Route path='/pick_me_song' element={<Pick_me_song/>} />
              <Route path='/sacrifice_tomorrow_song' element={<Sacrifice_tomorrow_song/>} />
              <Route path='/i_sent_my_therapist_to_therapy_song' element={<I_sent_my_therapist_to_therapy_song/>} />
              <Route path='/the_arsonist_song' element={<The_arsonist_song/>} />
              <Route path='/lead_me_to_water_song' element={<Lead_me_to_water_song/>} />
              <Route path='/by_now_song' element={<By_now_song/>} />
              <Route path='/king_size_bed_song' element={<King_size_bed_song/>} />
              <Route path='/love_the_ones_who_leave_song' element={<Love_the_ones_who_leave_song/>} />

              <Route path='/these_two_windows_albom' element={<These_Two_Windows/>}/>
              <Route path='/SONG/:id' element={<These_Two_Windows/>}/>

              <Route path='/mind_is_a_prison_song' element={<Mind_is_a_prison_song/>} />
              <Route path='/demons_song' element={<Demons_song/>} />
              <Route path='/oh_my_god_song' element={<Oh_my_god_song/>} />
              <Route path='/the_book_of_you_&_i_song' element={<The_book_of_you_and_i_song />} />
              <Route path='/match_in_the_rain_song' element={<Match_in_the_rain_song/>} />
              <Route path='/jesus_in_la_song' element={<Jesus_in_la_song/>} />
              <Route path='/i’m_not_a_cynic_song' element={<I_am_not_a_cynic_song/>} />
              <Route path='/alamo_song' element={<Alamo_song/>} />
              <Route path='/must_have_been_the_wind_song' element={<Must_have_been_the_wind_song/>} />
              <Route path='/just_like_you_song' element={<Just_like_you_song/>} />


              </Routes>
          <Footer/>
        </BrowserRouter>    
    </>
  );
}

export default App;
