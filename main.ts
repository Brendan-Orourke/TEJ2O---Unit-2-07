/* Copyright (c) 2025 MTHS All rights reserved
 *
 * Created by: Brendan O'Rourke
 * Created on: Sep 2025
 * This program simulates Cookie Clicker
*/

let numberOfCookies = 0

// setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)

//shows the amount of cookies 
input.onButtonPressed(Button.A, function () {
     numberOfCookies = numberOfCookies + 1
basic.clearScreen()
     basic.showNumber(numberOfCookies)
})
