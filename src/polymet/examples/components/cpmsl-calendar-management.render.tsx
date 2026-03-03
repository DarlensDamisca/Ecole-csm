import { BrowserRouter } from "react-router-dom"
import { CPMSLCalendarManagement } from "@/polymet/components/cpmsl-calendar-management"
import { holidays, schoolEvents } from "@/polymet/data/school-data"

export default function CPMSLCalendarManagementRender() {
  return (
    <BrowserRouter>
      <div className="p-8" style={{ backgroundColor: "#FAFAF8" }}>
        <CPMSLCalendarManagement
          holidays={holidays}
          events={schoolEvents}
          onAddHoliday={(data) => console.log('Add holiday:', data)}
          onEditHoliday={(id, data) => console.log('Edit holiday:', id, data)}
          onDeleteHoliday={(id) => console.log('Delete holiday:', id)}
          onAddEvent={(data) => console.log('Add event:', data)}
          onEditEvent={(id, data) => console.log('Edit event:', id, data)}
          onDeleteEvent={(id) => console.log('Delete event:', id)}
        />
      </div>
    </BrowserRouter>
  )
}