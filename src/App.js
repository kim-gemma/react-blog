// /*eslint-disable */ -lint 끄는기능임
import './App.css';
import { useState } from 'react';


function App() {
  
  let [title, setTitle]= useState(['TITLE : 리액트 공부', 'TITLE : 자바스크립트 공부' ,'TITLE : 뷰 공부' ]);
  let [like, setClick] = useState([0,0,0]);
  //click 은 state 변경용 함수임
  //리액트에서는 array/object state를 수정하고 싶으면 독립적인 카피본을 만들어서 수정하는게 좋음 [...title]
  let [modal, setModal] = useState(false);
  let [ModalTitle, setModalTitle] = useState(0);

  return (
    <div className="App">
      <div className="nav">
        <h4>Gemma's Blog</h4>
      </div>

      <button onClick={() => {
        let copy2 = [...title]
        copy2.sort();
        setTitle(copy2); 
      }}>가나다순 정렬</button>
      <button onClick={() => {
        let copy = [...title];
        copy[0] = 'TITLE : 리엑트 화이팅!!!'
        setTitle(copy);
      }}>제목 수정</button>
      {/* <div className="list">
        <h4>{title[0]}<span onClick={() => {setClick(like+1)}}>👍</span>{like}</h4>
        <p>2/17일 발행</p>
      </div>
      <div className="list">
        <h4>{title[1]}<span onClick={() => {setClick(like+1)}}>👍</span>{like}</h4>
        <p>2/17일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={() => {
          setModal(!modal)}}>{title[2]}<span onClick={() => {setClick(like+1)}}>👍</span>{like}</h4>
        <p>2/17일 발행</p>
      </div> */}

      {
        title.map(function(a, i){
          return (
            <div className="list" key={i}>
              <h4 onClick={() => {setModal(true); setModalTitle(i)}}>{title[i]}
                <span className="likeBtn" onClick={() => {
                  let copy = [...like];
                  copy[i] = copy[i] + 1;
                  setClick(copy)
                }}>👍</span>{like[i]}
              </h4>
              <p>2/17일 발행</p>
            </div>
          )
        })
      }


      {
        modal == true ? <Modal ModalTitle={ModalTitle} setTitle={setTitle} title={title}/> : null
      }
    </div>
  );
}

function Modal(props){
  return(
    <div className='modal'>
        <h4>{props.title[props.ModalTitle]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button>글수정</button>
    </div>
  )
}

export default App;
