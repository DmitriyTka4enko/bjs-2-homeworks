class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	}

	addClock(time, callback) {
		if (!time || !callback) {
			throw new Error('Отсутствуют обязательные аргументы');
		} else if (this.alarmCollection.some(element => element.time === time)) {
			console.warn('Уже присутствует звонок на это же время');
		}

		this.alarmCollection.push({
			callback,
			time,
			canCall: true
		})
	}

	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter((element) => element.time !== time);
	}

	getCurrentFormattedTime() {
		let currentDate = new Date();

		return currentDate.toLocaleTimeString('ru-Ru', {
			hour: '2-digit',
			minute: '2-digit'
		});
	}

	start() {
		if (this.intervalId) {
			return;
		}

		function callStart() {
			this.alarmCollection.forEach(element => {
				if (element.time === this.getCurrentFormattedTime() && element.canCall === true) {
					element.canCall = false;
					element.callback();
				}
			});
		}

		this.intervalId = setInterval(callStart.call(this), 1000);
	}

	stop() {
		clearInterval(this.intervalId);
		this.intervalId = null;
	}

	resetAllCalls() {
		this.alarmCollection.forEach(element => element.canCall = true);
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}