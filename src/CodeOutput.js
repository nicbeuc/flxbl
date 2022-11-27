import { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Toast from './Toast';
import './CodeOutput.css';

function CodeOutput({
  deviceSettings
}) {
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('');

  const mobileToTablet = {
    columnGap: deviceSettings.tablet.columnGap !== deviceSettings.mobile.columnGap,
    rowGap: deviceSettings.tablet.rowGap !== deviceSettings.mobile.rowGap,
    columns: deviceSettings.tablet.columns !== deviceSettings.mobile.columns,
    fillAvailable: deviceSettings.tablet.fillAvailable !== deviceSettings.mobile.fillAvailable
  };

  const tabletToDesktop = {
    columnGap: deviceSettings.desktop.columnGap !== deviceSettings.tablet.columnGap,
    rowGap: deviceSettings.desktop.rowGap !== deviceSettings.tablet.rowGap,
    columns: deviceSettings.desktop.columns !== deviceSettings.tablet.columns,
    fillAvailable: deviceSettings.desktop.fillAvailable !== deviceSettings.tablet.fillAvailable
  }

  const code = (
`.parent-element {
  --columnGap: ${deviceSettings.mobile.columnGap}rem;
  --rowGap: ${deviceSettings.mobile.rowGap}rem;
  --columns: ${deviceSettings.mobile.columns};
  --fillAvailable: ${deviceSettings.mobile.fillAvailable ? 1 : 0};
  display: flex;
  flex-wrap: wrap;
  column-gap: var(--columnGap);
  row-gap: var(--rowGap);
}
.child-element {
  flex: var(--fillAvailable) 0 calc((100% - (var(--columnGap) * (var(--columns) - 1))) / var(--columns));
}
`
+
`${ Object.values(mobileToTablet).includes(true) ?
`/* Tablet and up */
@media screen and (min-width: ${deviceSettings.mobile.maxWidth + 0.01}rem) {
  .parent-element {` +
  `${mobileToTablet.columnGap ? `
    --columnGap: ${deviceSettings.tablet.columnGap}rem;` : ''}` +
  `${mobileToTablet.rowGap ? `
    --rowGap: ${deviceSettings.tablet.rowGap}rem;` : ''}` +
  `${mobileToTablet.columns ? `
    --columns: ${deviceSettings.tablet.columns};` : ''}` +
  `${mobileToTablet.fillAvailable ? `
    --fillAvailable: ${deviceSettings.tablet.fillAvailable ? 1 : 0};` : ''}` +
  `
  }
}
` : ''
}`
+
`${ Object.values(tabletToDesktop).includes(true) ?
`/* Desktop and up */
@media screen and (min-width: ${deviceSettings.tablet.maxWidth + 0.01}rem) {
  .parent-element {` +
  `${tabletToDesktop.columnGap ? `
    --columnGap: ${deviceSettings.desktop.columnGap}rem;` : ''}` +
  `${tabletToDesktop.rowGap ? `
    --rowGap: ${deviceSettings.desktop.rowGap}rem;` : ''}` +
  `${tabletToDesktop.columns ? `
    --columns: ${deviceSettings.desktop.columns};` : ''}` +
  `${tabletToDesktop.fillAvailable ? `
    --fillAvailable: ${deviceSettings.desktop.fillAvailable ? 1 : 0};` : ''}` +
  `
  }
}` : ''
}`
);

  function showToast() {
    document.querySelector('.Toast').classList.add('show');
    setTimeout(() => {
      document.querySelector('.Toast').classList.remove('show');
    }, 3000)
  }

  function handleCopyButtonClick() {
    try {
      navigator.clipboard.writeText(code);
      setToastMessage('Code copied successfully.');
      setToastType('success');
    } catch(error) {
      console.error(error);
      setToastMessage('An error occured.');
      setToastType('error');
    } finally {
      showToast();
    }
  }

  return (
    <div className='CodeOutput'>
      <button className='CodeOutput__copy' aria-label='Copy to clipboard' onClick={handleCopyButtonClick}>
        <svg
          className='icon icon__copy'
          aria-hidden='true'
          fill='none'
          stroke='currentColor'
          stroke-linecap='round'
          stroke-linejoin='round'
          stroke-width='2'
          viewBox='0 0 24 24'
        >
          <rect width='13' height='13' x='9' y='9' rx='2' ry='2'/>
          <path d='M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1'/>
        </svg>
      </button>
      <SyntaxHighlighter language='css' style={a11yDark}>
        {code}
      </SyntaxHighlighter>
      <Toast type={toastType} text={toastMessage} />
    </div>
  )
}

export default CodeOutput;