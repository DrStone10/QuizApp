export default function Card() {

  return (
    <>
      <div className="container">
        <div className="quiz-app">
            <h1>Simple Quiz</h1>
            <div className="quiz">
                <h2>my question</h2>
                <div>
                    <button className="btn">answer 1</button>
                    <button className="btn">answer 2</button>
                    <button className="btn">answer 3</button>
                    <button className="btn">answer 4</button>
                </div>
                <button className="next-btn">Next</button>
            </div>  
        </div>
      </div>
    </>
  )
}