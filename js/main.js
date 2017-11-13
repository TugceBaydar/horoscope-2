
var objHoroscope = [
   {
   	name : "Aries",
    image:"img/aries.png",
    secretwish: "to be number one",
    keywords:"willpower, Initiative, Determination, Passion, Beginnings, Self-Belief, Innocence"
   },
   {
   	name : "Taurus",
    image:"img/taurus.png",
    secretwish: "to own the best of everything",
    keywords:"stability, security, elegance, sensuality, stubbornness, persistence"

   },
   {
   	name : "Gemini",
    image:"img/gemini.png",
    secretwish: "to have all the answers",
    keywords:"communication, Collaboration, Synergy, Cleverness, Wittiness,  Inventiveness,  Ingenuity"
   },
   {
   	name : "Cancer",
    image:"img/cancer.png",
    secretwish: "to take care of friends and family",
    keywords:"nurturing, Sensitivity, Emotions, Moodiness, Home, Family, Children, Femininity"
   },
   {
   	name : "Leo",
    image:"img/leo.png",
    secretwish: "to rule the world",
    keywords:"passion, Romance, Expression, Drama, Playfulness, Courageous, Loyal"
   },
   {
   	name : "Virgo",
    image:"img/virgo2.png",
    secretwish: "to be a hero",
    keywords:"health, Helpfulness, Order, Organization, Innocence, Purity"
   },
   {
   	name : "Libra",
    image:"img/libra.png",
    secretwish: "to love and be loved in return",
    keywords:"commitment, Partnership, Equality, Balance, Mutuality, Fairness"
   },
   {
   	name : "Scorpio",
    image:"img/scorpio.png",
    secretwish: "to have complete and total control",
    keywords:"intimacy, Sex, Secrecy, Power, Intensity, Obsession"
   },
   {
   	name : "Sagittarius",
    image:"img/sagittarius.png",
    secretwish: "to make the rules",
    keywords:"adventure, Travel, Expansion, Honesty, Outspokenness, Wisdom"
   },
   {
   	name : "Capricorn",
    image:"img/capricorn.png",
    secretwish: "to have every need taken care of",
    keywords:"ambition, Structure, Goals, Long-Term Plans, Prestige, Public Image/Acclaim"
   },
   {
   	name : "Aquarius",
    image:"img/aquarius.png",
    secretwish: "to experience total freedom",
    keywords:"friendliness, Eccentricity, Teamwork, Humanitarianism, Technology, Futuristic, Groups"
   },
   {
   	name : "Pisces",
    image:"img/pisces.png",
    secretwish: "to find unconditional love",
    keywords:"dreams, Fantasy, Healing, Compassion, Karma, Mystery"
   }

]


  function displayInfo() {

    var x = document.getElementById("Ultra")
    var i = x.selectedIndex

      var isSuccess = false

    for(var i=0; i<objHoroscope.length; i++) {

        console.log( x.options[i].text )
        console.log("horoscope name is: " + objHoroscope[i].name)


          if ( x.options[document.getElementById('Ultra').selectedIndex].text == objHoroscope[i].name ) {

                    isSuccess = true
                    break
          } else {

              isSuccess = false
              // no matches found confirm it
            }

          }


          if (isSuccess==true) {
            console.log("if statement works!!!")



            document.getElementById('sign').textContent = x.options[i].text
            document.getElementById('picture').src = objHoroscope[i].image
            picture.width = '300'
            picture.height = '150'
            document.getElementById('secretwish').textContent = "Your secret wish is " + objHoroscope[i].secretwish
            document.getElementById('keywords').textContent = "Your keywords are " + objHoroscope[i].keywords

          }
          else {

            console.log("no matches found!")

            // if no matches found, do this ;

            document.getElementById('sign').textContent = "no matches try again!"
            document.getElementById('secretwish').textContent = ""
            document.getElementById('keywords').textContent = ""
            document.getElementById('picture').src = ""
            picture.width = ''
            picture.height = ''
          }

      }
