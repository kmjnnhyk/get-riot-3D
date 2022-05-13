---
to: "<%= locals.route ? `${route}/${name}/${name}.tsx` : `src/pages/${name}/${name}.tsx` %>"
---
import { FunctionComponent } from 'react'

import styles from './<%=Name%>.module.scss'

const <%=Name%>: FunctionComponent = function () {
  return <div>hi!</div>
}

export default <%=Name%>