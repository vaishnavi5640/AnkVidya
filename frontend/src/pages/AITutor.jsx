import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/AITutor.css";

function AITutor() {

  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "👋 Hello! I am AnkVidya AI Tutor. Ask me about Indian Mathematics."
    }
  ]);


  const replies = {
    "who invented zero":
      "Zero was mathematically explained by Brahmagupta in the 7th century.",

    "what is lakh":
      "1 Lakh = 100,000.",

    "what is crore":
      "1 Crore = 10,000,000.",

    "who was aryabhata":
      "Aryabhata was a famous Indian mathematician and astronomer. He wrote Aryabhatiya.",

    "who was brahmagupta":
      "Brahmagupta explained rules for zero and negative numbers.",

    "what is indian number system":
      "The Indian Number System uses Ones, Tens, Hundreds, Thousands, Lakhs and Crores."
  };


  const askQuestion = () => {

    if(question.trim()==="") return;


    const userMessage = {
      type:"user",
      text:question
    };


    const key = question.toLowerCase().trim();


    const botMessage = {
      type:"bot",
      text:
      replies[key] ||
      "Sorry! I don't know this yet. Try asking about Zero, Lakh, Crore, Aryabhata or Brahmagupta."
    };


    setMessages([
      ...messages,
      userMessage,
      botMessage
    ]);


    setQuestion("");

  };


  const quickAsk = (text)=>{

    setQuestion(text);

  };


  return (
    <>
      <Navbar />

      <div className="ai-page">

        <h1>🤖 AI Tutor</h1>

        <p>
          Learn Indian Mathematics with your personal AI guide.
        </p>


        <div className="chat-box">


          <div className="messages">

            {messages.map((msg,index)=>(

              <div
                key={index}
                className={
                  msg.type==="user"
                  ? "user-message"
                  : "bot-message"
                }
              >

                {msg.text}

              </div>

            ))}


          </div>
                    <div className="quick-buttons">

            <button onClick={()=>quickAsk("who invented zero")}>
              Who invented Zero?
            </button>

            <button onClick={()=>quickAsk("what is lakh")}>
              What is Lakh?
            </button>

            <button onClick={()=>quickAsk("what is crore")}>
              What is Crore?
            </button>

            <button onClick={()=>quickAsk("who was aryabhata")}>
              Aryabhata
            </button>

            <button onClick={()=>quickAsk("who was brahmagupta")}>
              Brahmagupta
            </button>

          </div>


          <div className="input-area">

            <input
              type="text"
              placeholder="Ask about Indian Mathematics..."
              value={question}
              onChange={(e)=>setQuestion(e.target.value)}
              onKeyDown={(e)=>{
                if(e.key==="Enter"){
                  askQuestion();
                }
              }}
            />


            <button onClick={askQuestion}>
              Ask
            </button>

          </div>


        </div>


      </div>


      <Footer />

    </>
  );
}


export default AITutor;