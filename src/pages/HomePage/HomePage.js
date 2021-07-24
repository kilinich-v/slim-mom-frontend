import BasicTextFields from '../../components/CalcForm/CalcForm'
import ContentImagesHomePage from '../../components/ContentImagesHomePage/ContentImagesHomePage'
export default function HomeContent(params) {
  return (
    <div style={{ position: 'relative' }}>
      <BasicTextFields />
      <ContentImagesHomePage />
    </div>
  )
}
