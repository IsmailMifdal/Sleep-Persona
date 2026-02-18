import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Configure notification behavior
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

class NotificationService {
  async requestPermissions(): Promise<boolean> {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    
    return finalStatus === 'granted';
  }

  async scheduleBedtimeReminder(bedtime: Date, offsetMinutes: number = 30): Promise<string> {
    const trigger = new Date(bedtime);
    trigger.setMinutes(trigger.getMinutes() - offsetMinutes);

    const notificationId = await Notifications.scheduleNotificationAsync({
      content: {
        title: '🌙 Il est temps de préparer votre sommeil',
        body: `Votre routine commence dans ${offsetMinutes} minutes`,
        data: { type: 'bedtime_reminder' },
      },
      trigger: {
        hour: trigger.getHours(),
        minute: trigger.getMinutes(),
        repeats: true,
      },
    });

    return notificationId;
  }

  async scheduleMorningCheckin(wakeTime: Date): Promise<string> {
    const notificationId = await Notifications.scheduleNotificationAsync({
      content: {
        title: '☀️ Bonjour! Comment avez-vous dormi?',
        body: 'Complétez votre check-in matinal',
        data: { type: 'morning_checkin' },
      },
      trigger: {
        hour: wakeTime.getHours(),
        minute: wakeTime.getMinutes(),
        repeats: true,
      },
    });

    return notificationId;
  }

  async scheduleRoutineStart(startTime: Date): Promise<string> {
    const notificationId = await Notifications.scheduleNotificationAsync({
      content: {
        title: '🧘 Temps de routine',
        body: 'Démarrez votre routine du soir',
        data: { type: 'routine_start' },
      },
      trigger: {
        hour: startTime.getHours(),
        minute: startTime.getMinutes(),
        repeats: true,
      },
    });

    return notificationId;
  }

  async cancelNotification(notificationId: string): Promise<void> {
    await Notifications.cancelScheduledNotificationAsync(notificationId);
  }

  async cancelAllNotifications(): Promise<void> {
    await Notifications.cancelAllScheduledNotificationsAsync();
  }

  async sendLocalNotification(title: string, body: string, data?: any): Promise<void> {
    await Notifications.scheduleNotificationAsync({
      content: {
        title,
        body,
        data: data || {},
      },
      trigger: null, // Send immediately
    });
  }
}

export default new NotificationService();
