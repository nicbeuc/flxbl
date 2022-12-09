import DeviceSettings from './DeviceSettings';
import GeneralSettings from './GeneralSettings';

function ControlForm(props) {
  return (
    <section className='Controls'>
      <form id='controlForm' className='ControlForm'>
        <GeneralSettings />
        <DeviceSettings device='desktop' />
        <DeviceSettings device='tablet' />
        <DeviceSettings device='mobile' />
      </form>
    </section>
  )
}

export default ControlForm;