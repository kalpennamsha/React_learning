function Random(){

   let num = Math.random() * 1000;
   return <h3 style={{'background-color':'#457896'}}>Random number is {Math.round(num)}</h3>
}

export default Random;