function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;      
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  function createCalendary(){
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    for (let i = 0; i < dezDaysList.length; i += 1) {
        let days = document.createElement('li');
        days.innerText = dezDaysList[i];
        days.className = 'day';
        if(dezDaysList[i] == 24 ||dezDaysList[i] == 25 || dezDaysList[i] == 31){
            days.className += ' holiday';
        }
        if(dezDaysList[i] == 4 ||dezDaysList[i] == 11 || dezDaysList[i] == 18 || dezDaysList[i] == 25){
            days.className += ' friday';
        }
        const daysId = document.querySelector('#days');
        daysId.appendChild(days);
    }
    
  }
  createCalendary();

  function holidays(stringFeriado) {
      let btnHoliday = document.createElement('button');
      btnHoliday.id = 'btn-holiday';
      btnHoliday.innerText = 'Feriados';
      let container = document.querySelector('.buttons-container');
      container.appendChild(btnHoliday);
  }
  holidays();  

  function btnHolidaysClick(){
    let btnHoliday = document.querySelector('#btn-holiday');
    let holidays = document.querySelectorAll('.holiday');
    
    btnHoliday.addEventListener('click', function(){
        for (let i = 0; i < holidays.length; i += 1) {
            if(holidays[i].style.backgroundColor == 'red'){
                holidays[i].style.backgroundColor = 'rgb(238,238,238)' ;
            } 
            else{
                holidays[i].style.backgroundColor = 'red';
            }        
        }
    })
    
  }
  btnHolidaysClick();