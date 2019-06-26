describe('Thermostat', function() {

  var thermostat;

  beforeEach(function(){
     thermostat = new Thermostat();
  });

  describe('default thermostat settings', function() {
    it('thermostat starts at 20 degrees', function () {
      expect(thermostat.getCurrentTemperature()).toEqual(20);
    });

    it('has minimum temperature of 10 degrees', function () {
      for (var i = 0; i < 15; i++) {
        thermostat.down();
      };
      expect(thermostat.getCurrentTemperature()).toEqual(10);
    });
  });

  describe('adjust temperature', function() {
    it('increases the temperature', function () {
      thermostat.up();
      expect(thermostat.getCurrentTemperature()).toEqual(21);
    });

    it('decreases the temperature', function () {
      thermostat.down();
      expect(thermostat.getCurrentTemperature()).toEqual(19);
    });
  });

  describe('power saving mode', function() {
    it('power saving mode is on by default', function () {
      expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });

    it('power saving mode can be switched off', function () {
      thermostat.switchPowerSavingModeOff();
      expect(thermostat.isPowerSavingModeOn()).toBe(false);
    });

    it('power saving mode can be switched on', function () {
      thermostat.switchPowerSavingModeOff();
      expect(thermostat.isPowerSavingModeOn()).toBe(false);

      thermostat.switchPowerSavingModeOn();
      expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });
  });

});
