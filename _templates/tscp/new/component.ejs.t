---
to: "<%= locals.route ? `${route}/${name}/${name}.tsx` : `src/components/${name}/${name}.tsx` %>"
---
import { FunctionComponent } from 'react'

import styles from './<%=Name%>.module.scss'

type <%=Name%>Props = {}

const <%=Name%>: FunctionComponent<<%=Name%>Props> = function ({}) {
  return <div>hi!</div>
}

export default <%=Name%>