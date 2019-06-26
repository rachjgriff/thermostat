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
   -   | up

### USER STORY 3: DECREASING TEMPERATURE
As a user
So I can get cooler
I want to decrease the temperature

Object | Message
-------| -------
thermostat | temperature
   -   | down

### USER STORY 4: MINIMUM TEMPERATURE
As a user
So I don't get too cold
I want the minimum temperature to be 10 degrees

Object | Message
-------| -------
thermostat | temperature
   -   | minimumTemp

### USER STORY 5: POWER SAVING MODE - ON BY DEFAULT
As a user
So I can save power
I want Power Saving Mode to be set as default

Object | Message
-------| -------
thermostat | powerSaverModeOn

### USER STORY 6: POWER SAVING MODE - OFF
As a user
So I can waste power
I want to be able to turn Power Saving Mode off

Object | Message
-------| -------
thermostat | switchPowerSavingModeOff

### USER STORY 7: POWER SAVING MODE - ON
As a user
So I can save power
I want to turn Power Saving Mode back on

Object | Message
-------| -------
thermostat | switchPowerSavingModeOn

### USER STORY 8: POWER SAVING MODE - ON (MAX TEMP)
As a user
So I don't waste energy on heating
I want to have a max temperature of 25 degrees when power saving mode is on

Object | Message
-------| -------
thermostat | switchPowerSavingModeOn
 -  | MAX_TEMP_PSM_ON

### USER STORY 9: POWER SAVING MODE - OFF (MAX TEMP)
As a user
So I waste energy on heating
I want to have a max temperature of 32 degrees when power saving mode is off

Object | Message
-------| -------
thermostat | switchPowerSavingModeOff
 -  | MAX_TEMP_PSM_OFF
