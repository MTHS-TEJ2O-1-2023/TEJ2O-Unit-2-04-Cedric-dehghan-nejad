/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mr. Coxall
 * Created on: Sep 2020
 * This program ...

/// This program runs a 6 sided dice  
*/
  
//  our variable for a random number
let randomNumber: number
  
basic.clearScreen()
basic.showIcon(IconNames.Happy)
  
input.onButtonPressed(Button.A, function () {
  
randomNumber = randint(1, 6)
basic.showNumber(randomNumber)
})
  