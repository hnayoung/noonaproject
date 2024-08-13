import {useState} from 'react';
import './App.css';
import Box from "./component/Box"


//1. 박스 2개 (타이틀, 사진정보, 결과)
//2. 가위 바위 보 버튼이 있음 
//3. 버튼을 클릭 -> 클릭한 값이 박스에 보임 
//4. 컴퓨터 : 랜덤하게 아이템 선택이 됨 
//5. 3,4의 결과를 가지고 누가 이겼는지 승패를 따짐 
//6. 승패 결과에 따라 테두리 색이 바뀜 (이김: 초록, 짐: 빨감, 비김: 검정)
//숙제 
//1. 컴퓨터 결과 보이게 하기 (반대로)
//2. 승패 결과에 따라 테두리색 반대로 나오게 하는거 

const choice = {
  rock:{
    name:"Rock",
    img:"https://t3.ftcdn.net/jpg/02/93/71/22/360_F_293712283_EGPqlm1bxpH0ZnrngyjRBol9GnJm2ST7.jpg"
  },
  scissors:{
    name:"Scissors",
    img:"https://m.media-amazon.com/images/I/61M-ByG5XoL._AC_UF894,1000_QL80_.jpg"
  },
  paper:{
    name:"Paper",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQVTP3dHJXp9MeXJzdSTg0A1jM6ljyaDvgEw&s"
  }

}

function App() {

  const [userSelect, setUserSelect] = useState(null)
  const [computerSelect, setComputerSelect] = useState(null)
  const [result, setResult] = useState("");

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice],computerChoice));
  };

  const judgement = (user,computer) => {
      console.log("user", user,"computer",computer);

      //승 : user != computer 1. 가위, 보 (가위) 2. 보, 주먹 (보) 3. 주먹, 가위 (주먹)
      //패 : user != computer 1. 가위, 보 (보) 2. 보, 주먹 (주먹) 3. 주먹, 가위 (가위) 
      //비김 : user == computer

      if(user.name === computer.name){
        return "tie"
      }else if(user.name === "Rock")return computer.name === "Scissors"?"win":"lose" 
      else if(user.name === "Scissors")return computer.name === "Paper"?"win":"lose"
      else if(user.name === "Paper")return computer.name === "Rock"?"win":"lose"
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice); //객체에 키값만 뽑아서 array로 만들어주는 함수 
    console.log("item.array", itemArray);
    let randomItem = Math.floor(Math.random()*itemArray.length);
    let final = itemArray[randomItem];
    console.log("final", final);
    return choice[final];
  }

  return (
    <div>
       <div className="main">
          <Box title="You" item={userSelect} result={result}/>
          <Box title="Computer" item={computerSelect} result={result}/> 
       </div>

       <div className="main">
          <button onClick={() => play("scissors")}>가위</button>
          <button onClick={() => play("rock")}>바위</button>
          <button onClick={() => play("paper")}>보</button>
        </div>
    </div>
   
   
  );
}

export default App;
