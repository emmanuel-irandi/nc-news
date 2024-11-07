function Title ({topic}){
    return (
      <>
      <h1>
         {topic ? topic : `Emmanuel's Propaganda. 
          (all fact checked btw)`}
      </h1>

      <h2>
        {new Date().toDateString()}
      </h2>

      </>
    )
  }

export default Title