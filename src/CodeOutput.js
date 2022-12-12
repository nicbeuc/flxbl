import { useState, useRef, useContext } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark, a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Toast from './Toast';
import { ThemeContext } from './ThemeProvider';
import { SettingsContext } from './SettingsProvider';

function CodeOutput(props) {
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('');
  const themeContext = useContext(ThemeContext);
  const settingsContext = useContext(SettingsContext);
  const toastRef = useRef(null);

  const mobileToTablet = {
    columnGap: settingsContext.settings.tablet.columnGap !== settingsContext.settings.mobile.columnGap,
    rowGap: settingsContext.settings.tablet.rowGap !== settingsContext.settings.mobile.rowGap,
    columns: settingsContext.settings.tablet.columns !== settingsContext.settings.mobile.columns,
    fillAvailable: settingsContext.settings.tablet.fillAvailable !== settingsContext.settings.mobile.fillAvailable
  };

  const tabletToDesktop = {
    columnGap: settingsContext.settings.desktop.columnGap !== settingsContext.settings.tablet.columnGap,
    rowGap: settingsContext.settings.desktop.rowGap !== settingsContext.settings.tablet.rowGap,
    columns: settingsContext.settings.desktop.columns !== settingsContext.settings.tablet.columns,
    fillAvailable: settingsContext.settings.desktop.fillAvailable !== settingsContext.settings.tablet.fillAvailable
  }

  const code = (
`.parent-element {
  --columnGap: ${settingsContext.settings.mobile.columnGap}${settingsContext.settings.mobile.columnGap === 0 ? '' : 'rem'};
  --rowGap: ${settingsContext.settings.mobile.rowGap}${settingsContext.settings.mobile.rowGap === 0 ? '' : 'rem'};
  --columns: ${settingsContext.settings.mobile.columns};
  --fillAvailable: ${settingsContext.settings.mobile.fillAvailable ? 1 : 0};
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
`
/* Tablet and up */
@media screen and (min-width: ${settingsContext.settings.mobile.maxWidth + 0.01}rem) {
  .parent-element {` +
  `${mobileToTablet.columnGap ? `
    --columnGap: ${settingsContext.settings.tablet.columnGap}${settingsContext.settings.tablet.columnGap === 0 ? '' : 'rem'};` : ''}` +
  `${mobileToTablet.rowGap ? `
    --rowGap: ${settingsContext.settings.tablet.rowGap}${settingsContext.settings.tablet.rowGap === 0 ? '' : 'rem'};` : ''}` +
  `${mobileToTablet.columns ? `
    --columns: ${settingsContext.settings.tablet.columns};` : ''}` +
  `${mobileToTablet.fillAvailable ? `
    --fillAvailable: ${settingsContext.settings.tablet.fillAvailable ? 1 : 0};` : ''}` +
  `
  }
}
` : ''
}`
+
`${ Object.values(tabletToDesktop).includes(true) ?
`
/* Desktop and up */
@media screen and (min-width: ${settingsContext.settings.tablet.maxWidth + 0.01}rem) {
  .parent-element {` +
  `${tabletToDesktop.columnGap ? `
    --columnGap: ${settingsContext.settings.desktop.columnGap}${settingsContext.settings.desktop.columnGap === 0 ? '' : 'rem'};` : ''}` +
  `${tabletToDesktop.rowGap ? `
    --rowGap: ${settingsContext.settings.desktop.rowGap}${settingsContext.settings.tablet.rowGap === 0 ? '' : 'rem'};` : ''}` +
  `${tabletToDesktop.columns ? `
    --columns: ${settingsContext.settings.desktop.columns};` : ''}` +
  `${tabletToDesktop.fillAvailable ? `
    --fillAvailable: ${settingsContext.settings.desktop.fillAvailable ? 1 : 0};` : ''}` +
  `
  }
}` : ''
}`
);

  function showToast() {
    toastRef.current.classList.add('show');
    setTimeout(() => {
      if (toastRef.current) {
        toastRef.current.classList.remove('show');
      }
    }, 3000);
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
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          viewBox='0 0 24 24'
        >
          <rect width='13' height='13' x='9' y='9' rx='2' ry='2'/>
          <path d='M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1'/>
        </svg>
      </button>
      <SyntaxHighlighter language='css' style={themeContext.darkMode ? a11yDark : a11yLight}>
        {code}
      </SyntaxHighlighter>
      <Toast ref={toastRef} type={toastType} text={toastMessage} />
    </div>
  )
}

export default CodeOutput;