__all__ = ('alarmConfig', 'AlarmConfig')

class AlarmConfig:
    def __init__(self):
        self._alarms = {'BTC': {'currency': 'BTC', 'value': 30000, 'isRising': True, 'isActive': True},
            'ETH': {'currency': 'ETH', 'value': 2000, 'isRising': True, 'isActive': True}
            }

    @property
    def alarms(self):
        alarms_list = []
        for currency, settings in self._alarms.items():
            alarms_list.append({
                'currency': currency,
                'value': settings['value'],
                'isRising': settings['isRising'],
                'isActive': settings['isActive']
            })
        return alarms_list

    def updateAlarm(self, currency, value, isRising=False, isActive=True):
        self._alarms[currency] = {
            'value': value,
            'isRising': isRising,
            'isActive': isActive
        }

    def inactivateAlarm(self, currency):
        alarm = self._alarms.get(currency)
        if alarm:
            alarm['isActive'] = False

    def deleteAlarm(self, currency):
        if currency in self._alarms:
            del self._alarms[currency]

    def reloadConfig(self):
        pass  # No-op for in-memory version

    def save_config(self):
        pass  # No-op for in-memory version


# we want to import the config across the files
alarmConfig = AlarmConfig()
