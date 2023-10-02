import { useEffect } from "react";

export async function requestNotificationPermission() {
  try {
    if ('Notification' in window) {
      const permission = await Notification.requestPermission();
      console.log("requestNotificationPermission: " + permission);
      return permission;
    }
    else {

      throw new Error('Notification not supported');
    }
   
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function sendNotification(title : string, options : NotificationOptions) {
  const permission = await requestNotificationPermission();

  if (permission === 'granted') {
    try {
      const registration = await navigator.serviceWorker.getRegistration();
      console.log('registration', registration)

      if (registration === undefined) {
        throw new Error("registration is undefined");

      }
      registration?.showNotification(title, options);
    } catch (error) {
    
      console.error(error);
    }
  }
  else if (permission === 'denied') {
    console.error('Notifcation Permission denied');
    const permission  = await requestNotificationPermission();
    
    if (permission === 'granted') {
      try {
        const registration = await navigator.serviceWorker.getRegistration();
        if (registration !== undefined) {
          if (registration.active) {
            registration?.showNotification(title, options);
          } else {
            throw new Error("registration.active is undefined, service worker is not active?");
          }
        } else {    
          throw new Error("registration is undefined");    
        }

      } catch (error) {

        console.error(error);
      }
    
    } else {
      console.error('Notifcation Permission denied');
    }

  }
}

export function useNotificationPermissionEffect() {
  useEffect(() => {
    requestNotificationPermission();
  }, []);
}

