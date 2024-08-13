import React from 'react'

const Box = (props) => {
    let result;
    if ( 
      // 1. 카드가 computer 카드인가?
      // 2. 결과가 비긴 건 아닌가?
      // 3. props.result에 값이 있는가? 
      props.title === "Computer" && 
      props.result !== "tie" && 
      props.result !== "" ) {
      result = props.result === "win" ? "lose" : "win";
    }else {
      // 위의 경우가 아님 -> props에 전달된 결과를 그대로 씀 
      result = props.result;
    }

  return (
    <div className={`box ${result}`}>
        <h1>{props.title}</h1>
        <h2>{props.item && props.item.name}</h2>
        <img className="item-img" src={props.item && props.item.img} />
        <h2>{result}</h2>
    </div>
  );
};

export default Box;
