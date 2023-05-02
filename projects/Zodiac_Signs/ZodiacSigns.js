document.addEventListener("DOMContentLoaded", () => {
  const horoscopes = {
    aries: {
      today:
        "Вам нужно обратить внимание на финансы. Ожидается неожиданный всплеск затрат.",
      tomorrow:
        "Ваш трудовой успех улучшится. Сегодня отличный день для получения вознаграждения.",
      afterTomorrow:
        "Будьте осторожны, чтобы не стать жертвой мошенников. Не давайте им доступ к вашим личным данным.",
    },
    taurus: {
      today:
        "Ваше настроение может быть немного низким. Обратите внимание на свое здоровье.",
      tomorrow:
        "Время сделать то, что вы давно откладывали. Сегодня у вас есть все необходимое для успеха.",
      afterTomorrow:
        "Отдохните от работы и проведите время со своими близкими. Это поможет вам расслабиться и зарядиться энергией.",
    },
    gemini: {
      today:
        "Найдите время для общения с друзьями и близкими. Это поможет вам избавиться от стресса и расслабиться.",
      tomorrow:
        "Сегодняшний день будет успешным. Вы можете получить новые возможности в карьере.",
      afterTomorrow:
        "Настало время для новых начинаний. Используйте свою творческую энергию, чтобы достичь большего успеха.",
    },
    cancer: {
      today:
        "Сегодняшний день может быть трудным. Попытайтесь сохранять спокойствие и не переживайте из-за мелочей.",
      tomorrow:
        "Будьте готовы к неожиданным событиям. Возможно, вам придется быстро принимать решения.",
      afterTomorrow:
        "Обратите внимание на свое здоровье и не забывайте о регулярных медицинских осмотрах.",
    },
    leo: {
      today:
        "Ваш трудовой успех будет на подъеме. Сегодня отличный день для новых начинаний и планирования.",
      tomorrow:
        "Настало время для изменений. Будьте открыты новым возможностям и не бойтесь рисковать.",
      afterTomorrow:
        "Поделитесь своими идеями с другими и будьте готовы к конструктивной критике.",
    },
    virgo: {
      today:
        "Сегодня день будет протекать медленно и спокойно, лучше всего заняться рутинной работой.",
      tomorrow:
        "Завтра важно научиться делегировать задачи, чтобы избежать перегрузки и необходимости работать вечером.",
      afterTomorrow:
        "Послезавтра будет хорошее время, чтобы наладить новые контакты и начать новые деловые отношения.",
    },
    libra: {
      today:
        "Будьте внимательны к мелочам и не упускайте возможности находить красоту и гармонию вокруг вас.",
      tomorrow:
        "Настало время для общения и установления контактов. Вы можете обрести новых друзей и деловых партнеров.",
      afterTomorrow:
        "Сегодня важно слушать свое внутреннее голос, доверять своим интуитивным ощущениям и не отказываться от своих принципов.",
    },
    scorpio: {
      today:
        "Сегодня важно сохранять спокойствие и уверенность в своих силах, чтобы не поддаться эмоциям и стрессу.",
      tomorrow:
        "Завтра вас ожидает хорошая возможность для продвижения в карьере. Будьте готовы к новым вызовам и испытаниям.",
      afterTomorrow:
        "Послезавтра важно не забывать о здоровье и правильном питании. Обратите внимание на свой рацион и не переедайте.",
    },
    sagittarius: {
      today:
        "Сегодня хороший день для обучения и получения новых знаний. Используйте свое любопытство и желание узнать больше.",
      tomorrow:
        "Завтра важно проявлять терпение и не спешить с принятием важных решений. Обдумайте все тщательно.",
      afterTomorrow:
        "Настало время для проявления инициативы и реализации своих идей. Будьте готовы к трудностям и препятствиям.",
    },
    capricorn: {
      today:
        "Сегодня важно сохранять баланс между работой и личной жизнью. Не забывайте о своих близких и друзьях.",
      tomorrow:
        "Завтра настало время для налаживания деловых контактов и установления новых связей. Будьте открыты новым возможностям.",
      afterTomorrow:
        "Послезавтра важно научиться доверять своим силам и не бояться рисковать. Используйте свой талант и творческий потенциал.",
    },
    aquarius: {
        today: "Сегодня у вас много дел, успейте все.",
        tomorrow: "Возможны неожиданные приятности.",
        afterTomorrow: "Нужно отложить дела и отдохнуть.",
    },
    pisces: {
        today: "Сегодня не лучший день для важных решений.",
        tomorrow: "Хорошее время для общения с близкими.",
        afterTomorrow: "Будьте готовы к неожиданностям.",
    },
  };
  const inputDate = document.querySelector("input");
  const horoscopesFull = document.querySelector(".horoscopes");
  const todayInput = document.querySelector("#today");
  const today = document.querySelector(".today");
  const tomorrow = document.querySelector(".tomorrow");
  const afterTomorrow = document.querySelector(".aftertomorrow");
  const radioToday = document.querySelector("#today");
  const radioTomorrow = document.querySelector("#tomorrow");
  const radioAftertomorrow = document.querySelector("#aftertomorrow");
  horoscopesFull.addEventListener("click", (event) => {
    if(event.target.id === "today"){
        today.classList.remove("hide");
        today.classList.add("show");
        tomorrow.classList.add("hide");
        afterTomorrow.classList.add("hide");
        tomorrow.classList.remove("show");
        afterTomorrow.classList.remove("show");
        radioTomorrow.checked = false;
        radioAftertomorrow.checked = false;
    }
    if(event.target.id === "tomorrow"){
        tomorrow.classList.remove("hide");
        today.classList.add("hide");
        tomorrow.classList.add("show");
        afterTomorrow.classList.add("hide");
        today.classList.remove("show");
        afterTomorrow.classList.remove("show");
        radioToday.checked = false;
        radioAftertomorrow.checked = false;
    }
    if(event.target.id === "aftertomorrow"){
        afterTomorrow.classList.remove("hide");
        today.classList.add("hide");
        tomorrow.classList.add("hide");
        afterTomorrow.classList.add("show");
        today.classList.remove("show");
        tomorrow.classList.remove("show");
        radioToday.checked = false;
        radioTomorrow.checked = false;
    }
  });
  today.classList.add("show");
  inputDate.addEventListener("change", (event) => {
    const dateNeed = event.target.value.slice(5, 10);
    if(dateNeed > "03-21" && dateNeed < "04-19"){
        today.innerHTML = `${horoscopes.aries.today}`;
        tomorrow.innerHTML = `${horoscopes.aries.tomorrow}`;
        afterTomorrow.innerHTML = `${horoscopes.aries.afterTomorrow}`;
    }
    else if(dateNeed > "04-20" && dateNeed < "05-20"){
        today.innerHTML = `${horoscopes.taurus.today}`;
        tomorrow.innerHTML = `${horoscopes.taurus.tomorrow}`;
        afterTomorrow.innerHTML = `${horoscopes.taurus.afterTomorrow}`;
    }
    else if(dateNeed > "05-21" && dateNeed < "06-20"){
        today.innerHTML = `${horoscopes.gemini.today}`;
        tomorrow.innerHTML = `${horoscopes.gemini.tomorrow}`;
        afterTomorrow.innerHTML = `${horoscopes.gemini.afterTomorrow}`;
    }
    else if(dateNeed > "06-21" && dateNeed < "07-22"){
        today.innerHTML = `${horoscopes.cancer.today}`;
        tomorrow.innerHTML = `${horoscopes.cancer.tomorrow}`;
        afterTomorrow.innerHTML = `${horoscopes.cancer.afterTomorrow}`;
    }
    else if(dateNeed > "07-23" && dateNeed < "08-22"){
        today.innerHTML = `${horoscopes.leo.today}`;
        tomorrow.innerHTML = `${horoscopes.leo.tomorrow}`;
        afterTomorrow.innerHTML = `${horoscopes.leo.afterTomorrow}`;
    }
    else if(dateNeed > "08-23" && dateNeed < "09-22"){
        today.innerHTML = `${horoscopes.virgo.today}`;
        tomorrow.innerHTML = `${horoscopes.virgo.tomorrow}`;
        afterTomorrow.innerHTML = `${horoscopes.virgo.afterTomorrow}`;
    }
    else if(dateNeed > "09-23" && dateNeed < "10-22"){
        today.innerHTML = `${horoscopes.libra.today}`;
        tomorrow.innerHTML = `${horoscopes.libra.tomorrow}`;
        afterTomorrow.innerHTML = `${horoscopes.libra.afterTomorrow}`;
    }
    else if(dateNeed > "10-23" && dateNeed < "11-21"){
        today.innerHTML = `${horoscopes.scorpio.today}`;
        tomorrow.innerHTML = `${horoscopes.scorpio.tomorrow}`;
        afterTomorrow.innerHTML = `${horoscopes.scorpio.afterTomorrow}`;
    }
    else if(dateNeed > "11-22" && dateNeed < "12-21"){
        today.innerHTML = `${horoscopes.sagittarius.today}`;
        tomorrow.innerHTML = `${horoscopes.sagittarius.tomorrow}`;
        afterTomorrow.innerHTML = `${horoscopes.sagittarius.afterTomorrow}`;
    }
    else if((dateNeed > "12-22" && dateNeed < "12-31") || (dateNeed > "01-01" && dateNeed < "01-19")){
        today.innerHTML = `${horoscopes.capricorn.today}`;
        tomorrow.innerHTML = `${horoscopes.capricorn.tomorrow}`;
        afterTomorrow.innerHTML = `${horoscopes.capricorn.afterTomorrow}`;
    }
    else if(dateNeed > "01-20" && dateNeed < "02-18"){
        today.innerHTML = `${horoscopes.aquarius.today}`;
        tomorrow.innerHTML = `${horoscopes.aquarius.tomorrow}`;
        afterTomorrow.innerHTML = `${horoscopes.aquarius.afterTomorrow}`;
    }
    else if(dateNeed > "02-19" && dateNeed < "03-20"){
        today.innerHTML = `${horoscopes.pisces.today}`;
        tomorrow.innerHTML = `${horoscopes.pisces.tomorrow}`;
        afterTomorrow.innerHTML = `${horoscopes.pisces.afterTomorrow}`;
    }
  })
});
