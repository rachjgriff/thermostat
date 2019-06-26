describe('Thermostat', function() {

  var thermostat;

  beforeEach(function(){
     thermostat = new Thermostat();
  });

  it('thermostat starts at 20 degrees', function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('increases the temperature', function() {
    thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it('decreases the temperature', function() {
    thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  it('has minimum temperature of 10 degrees', function() {
    for(var i = 0; i < 15; i++) {
      thermostat.down();
    };
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });
});
