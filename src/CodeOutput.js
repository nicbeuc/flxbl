import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './CodeOutput.css';

function CodeOutput({
  deviceSettings
}) {

  const code = (
`.parent-element {
  --columnGap: ${deviceSettings.mobile.columnGap}rem;
  --rowGap: ${deviceSettings.mobile.rowGap}rem;
  --columns: ${deviceSettings.mobile.columns};
  display: flex;
  flex-wrap: wrap;
  column-gap: var(--columnGap);
  row-gap: var(--rowGap);
}
.child-element {
  flex: ${deviceSettings.mobile.fillAvailable ? 1 : 0} 0 calc((100% - (var(--columnGap) * (var(--columns) - 1))) / var(--columns));
}
/* Tablet and up */
@media screen and (min-width: ${deviceSettings.mobile.maxWidth + 0.01}rem) {
  .parent-element {
    --columnGap: ${deviceSettings.tablet.columnGap}rem;
    --rowGap: ${deviceSettings.tablet.rowGap}rem;
    --columns: ${deviceSettings.tablet.columns};
  }
}
/* Desktop and up */
@media screen and (min-width: ${deviceSettings.tablet.maxWidth + 0.01}rem) {
  .parent-element {
    --columnGap: ${deviceSettings.desktop.columnGap}rem;
    --rowGap: ${deviceSettings.desktop.rowGap}rem;
    --columns: ${deviceSettings.desktop.columns};
  }
}`);

  return (
    <div className='CodeOutput'>
      <SyntaxHighlighter language="css" style={a11yDark}>
        {code}
      </SyntaxHighlighter>
    </div>
  )
}

export default CodeOutput;