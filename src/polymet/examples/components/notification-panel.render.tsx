import { BrowserRouter } from "react-router-dom"
import { NotificationPanel } from "@/polymet/components/notification-panel"
import { useState } from "react"

export default function NotificationPanelRender() {
  const [notifications, setNotifications] = useState([
    {
      id: '1',
      type: 'warning' as const,
      title: '7ème AF — Aucune note saisie',
      subtitle: '2ème Étape en cours',
      timestamp: 'il y a 2h',
      isRead: false
    },
    {
      id: '2',
      type: 'warning' as const,
      title: '3 élèves sans photo',
      subtitle: 'Classe 9ème AF',
      timestamp: 'il y a 5h',
      isRead: false
    },
    {
      id: '3',
      type: 'success' as const,
      title: 'Étape 1 clôturée — 6ème AF',
      subtitle: 'Bulletins disponibles',
      timestamp: 'hier 14h32',
      isRead: true
    },
    {
      id: '4',
      type: 'success' as const,
      title: 'Bulletin généré — Martine Simon',
      subtitle: '6ème AF · Étape 1',
      timestamp: 'hier 11h15',
      isRead: true
    }
  ])

  return (
    <BrowserRouter>
      <div className="p-8 bg-background min-h-screen">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-foreground mb-2">Notification Panel</h1>
          <p className="text-muted-foreground">Panneau de notifications avec groupement par date</p>
        </div>

        <div className="relative inline-block">
          <NotificationPanel
            notifications={notifications}
            onMarkAllRead={() => {
              setNotifications(notifications.map(n => ({ ...n, isRead: true })))
              console.log('Mark all as read')
            }}
            onNotificationClick={(id) => console.log('Clicked notification:', id)}
          />
        </div>
      </div>
    </BrowserRouter>
  )
}
