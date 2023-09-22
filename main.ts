/* Copyright (c) 2020 MTHS All rights reserved
*
* Created by: Mr. Coxall
* Created on: Sep 2020
* This program ...

/// This program runs a 6 sided dice
*/

// our variable for a random number
let temperature: number

basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
    temperature = input.temperature()
    basic.showNumber(temperature)
}