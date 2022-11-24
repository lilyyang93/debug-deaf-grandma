function deafGrandma() {
    let userInput = prompt('HEY KID!')
    let goodbyes = 0
    let cont = true
        while (cont == true) {
            if (userInput = "") {
                prompt("WHAT!?")
            }
            else if (userInput == userInput.toLowerCase()) {
                prompt("SPEAK UP, KID!")
            }
            else if (userInput == userInput.toUpperCase()) {
                prompt('NO, NOT SINCE 1946!')
            }
            else if (userInput == "GOODBYE!" && goodbyes < 1) {
                goodbyes += 1
                prompt('LEAVING SO SOON?')
            }    
            else if (userInput == 'GOODBYE!' && goodbyes == 1) {
                    alert("LATER, SKATER!")
                    !cont
            }
        }
    }
    deafGrandma()