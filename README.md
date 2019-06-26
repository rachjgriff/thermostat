# THERMOSTAT
---------
## SPECIFICATION
---------
* Thermostat starts at 20 degrees
* You can increase the temperature with an up function
* You can decrease the temperature with a down function
* The minimum temperature is 10 degrees
* If power saving mode is on, the maximum temperature is 25 degrees
* If power saving mode is off, the maximum temperature is 32 degrees
* Power saving mode is on by default
* You can reset the temperature to 20 with a reset function
* You can ask about the thermostat's current energy usage: < 18 is `low-usage`, < 25 is `medium-usage`, anything else is `high-usage`.
* (In the challenges where we add an interface, low-usage will be indicated with green, medium-usage indicated with black, high-usage indicated with red.)

## USER STORIES
--------
### USER STORY 1: STARTING TEMPERATURE
As a user
So I am the right temperature
The thermostat is set at 20 degrees

Object | Message
------ | -------
thermostat | temperature

### USER STORY 2: INCREASING TEMPERATURE
As a user
So I can get warmer
I want to increase the temperature

Object | Message
-------| -------
thermostat | temperature
   -   | increase


