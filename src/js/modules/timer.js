
function timer () {

    const endDate = new Date('Feb 25, 2024, 23:59:59');

    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement= document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    
     function updateTimer () {
         const now = new Date();
         const timeDifference = endDate - now;
    
         const day = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
         const hour = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
         const minute = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
         const second = Math.floor((timeDifference % (1000 * 60)) / 1000 );
         
         daysElement.innerText= day;
         hoursElement.innerText = hour;
         minutesElement.innerText = minute;
         secondsElement.innerText = second;
     }
    
     updateTimer ();   //Запуск счетчика при загрузке страницы
     setInterval(updateTimer, 1000)     //объявляем таймер каждую секунду

}

export default timer

