import React, { useState } from 'react';
import axios from 'axios';
import logoR from "./logoRiot.png";
import logoF from "./fb.png";
import logoG from "./gmail.png";
import logoA from "./apple.png";
import bgLol from "./bglol.jpg";
import bg1 from "./bg1.jpg";
import bg2 from "./bg2.jpg";
import bg3 from "./bg2.jpg";


import './App.css';

function App() {
  const [searchText, setSearchText] = useState("");
  const [playerData, setPlayerData] = useState({});
  const API_KEY = "";
  
  function searchForPlayer(event) {
    // Set up the correct API call
    var APICallString = "https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + searchText + "?api_key=" + API_KEY;
    // Handle the API call
    axios.get(APICallString).then(function (response) {
      // Sucess
    
      setPlayerData(response.data);
    }).catch(function (error) {
      //Error
      console.log(error);
    });
  }

      console.log(playerData);

  return (
    
    //   <div className='container'>
    //     <h5>League of Legends Player Searcher</h5>
    //   <div className='btninput'>
    //     <input type="text" onChange={e => setSearchText(e.target.value)}></input>
    //     <button className='btn' onClick={e => searchForPlayer(e)}>Search for player</button>
    //   </div>
    //     {JSON.stringify(playerData) != '{}' ? 
    //   <>
    //     <p>{playerData.name}</p>
    //     <img width="100" height="100" src={"http://ddragon.leagueoflegends.com/cdn/13.4.1/img/profileicon/" + playerData.profileIconId +".png"}></img>
    //     <p>Summoner level {playerData.summonerLevel}</p>
    //   </>
    // :
    //     <><p>No player data</p></>
    // }
    // </div>
    <div className='container'>
      
    <main>
      <section className='login'>

        <div className='wrapper'>
        <img src={logoR} className="login-logo"></img>

          <h1 className='login-title'>Connexion</h1>

          <label className='login-label'>
            <span className='span-active' >Nom d'invocateur</span>
            <input className='input' name='username' type="text" onfocus="this.value=''" onChange={e => setSearchText(e.target.value)}></input>
          </label>

          <div className='login-icons'>
            <button type='button' className='icons-button'>
              <img src={logoF}></img>
            </button>

            <button type='button' className='icons-button'>
              <img src={logoG}></img>
            </button>

            <button type='button' className='icons-button'>
              <img src={logoA}></img>
            </button>
          </div>

          <label className='login-label-checkbox'>
              <input type="checkbox" className='input-checkbox'></input>
              Rester connecté
          </label>
        </div>

        <div className='wrapper'>
          <button className='login-button' type='button' onClick={e => searchForPlayer(e)}>
          <svg xmlns="http://www.w3.org/2000/svg" className='ionicon s-ion-icon'
              viewBox='0 0 512 512'><title>Arrow Forward Circle</title>
              <path d="M464 256c0-114.87-93.13-208-208-208S48 141.13 48 256s93.13
              208 208 208s208-93.13 208-208Zm-212.65 91.36a16 16 0 0 1-.09-22.63L303.58
              272H170a16 16 0 0 1 0-32h133.58l-52.32-52.73A16 16 0 1 1 274 164.73l79.39
              80a16 16 0 0 1 0 22.54l-79.39 80a16 16 0 0 1-22.65.09Z"></path>
              </svg>
          </button>
        </div>
      </section>

          <div className='containerData'>
          {JSON.stringify(playerData) != '{}' ? 
            <>
              <p>Nom d'invocateur : {playerData.name}</p>
              <img width="200" height="200" src={"http://ddragon.leagueoflegends.com/cdn/13.4.1/img/profileicon/" + playerData.profileIconId +".png"}></img>
              <p>Niveau d'invocateur : {playerData.summonerLevel}</p>
            </>
          :
              <><p>No player data</p></>
          }
          </div>

     

    </main>
    </div>
  );
}

export default App;
