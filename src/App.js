import './App.css';
import gptLogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';
import sendBtn from './assets/send.svg';

function App() {
  return (
    <div className="App">
      <div className="sideBar">
      <div className="upperSide">
      <div className="upperSideTop"><img src={gptLogo} alt="Logo" className="logo"/><span className="brand">ChatGPT</span></div>
        <button className="midBtn"><img src={addBtn} alt="new chat" className="addBtn"/>New Chat</button>
        <div className="upperSideBottom">
          <button className="query"><img src={msgIcon} alt="Query" />What is Programming ?</button>
        <button className="query"><img src={msgIcon} alt="Query" />How to use an API ?</button>
        </div>
      </div>
      <div className="lowerside">
      <div className="listItems"><img src={home} alt="" className="listItemsImg"/>Home</div>
      <div className="listItems"><img src={saved} alt="" className="listItemsImg"/>Saved</div>
      <div className="listItems"><img src={rocket} alt="" className="listItemsImg"/>Upgrade to pro</div>
      </div>
      
      </div>
      <div className="main">
      <div className="chats">
      <div className="chat">
          <img src="" alt=""/> <p className="txt">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        </div>
      </div>
      <div className="chatFooter">
      <div className="inp">
        <input type="text" placeholder='Send a Message' /><button className="send"><img src={sendBtn} alt="send"/></button>
      </div>
      </div>
      </div>
      
    </div>
  );
}

export default App;
