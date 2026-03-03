import { BrowserRouter } from "react-router-dom"
import { CPMSLSchoolInfoForm } from "@/polymet/components/cpmsl-school-info-form"
import { schoolInfo } from "@/polymet/data/school-data"

export default function CPMSLSchoolInfoFormRender() {
  return (
    <BrowserRouter>
      <div className="p-8" style={{ backgroundColor: "#FAFAF8" }}>
        <CPMSLSchoolInfoForm
          schoolInfo={schoolInfo}
          onSave={(info) => console.log('Saved:', info)}
        />
      </div>
    </BrowserRouter>
  )
}