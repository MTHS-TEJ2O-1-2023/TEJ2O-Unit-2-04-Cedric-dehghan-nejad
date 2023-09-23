"""
Created by: Mr. Coxall
Created on: Sep 2020
This module is a Micro:bit MicroPython program
"""

from microbit import *

temperature = 0

display.clear()
display.show(Image.HAPPY)

while True:
    if button_a.is_pressed():
        input.temperature = input.temperature()
        display.show(str(input.temperature))
